/**
 * Client-Side Rate Limiter & Flood Guard.
 * Protects against Model Denial of Service (OWASP Top 10 for LLMs #4),
 * prompt flooding, and runaway loop calls.
 */

export interface RateLimitStatus {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export class SlidingWindowRateLimiter {
  private timestamps: number[] = [];
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private readonly minIntervalMs: number;
  private lastRequestTime: number = 0;

  constructor(maxRequests: number = 15, windowMs: number = 60000, minIntervalMs: number = 800) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.minIntervalMs = minIntervalMs;
  }

  public check(): RateLimitStatus {
    const now = Date.now();

    // 1. Debounce rapid-fire duplicate clicks (< minIntervalMs)
    if (now - this.lastRequestTime < this.minIntervalMs) {
      const waitTime = Math.ceil((this.minIntervalMs - (now - this.lastRequestTime)) / 1000);
      return {
        allowed: false,
        remaining: 0,
        retryAfterSeconds: Math.max(1, waitTime)
      };
    }

    // 2. Filter out timestamps older than the sliding window
    const windowStart = now - this.windowMs;
    this.timestamps = this.timestamps.filter(ts => ts > windowStart);

    // 3. Check capacity in window
    if (this.timestamps.length >= this.maxRequests) {
      const oldestInWindow = this.timestamps[0];
      const retryAfterSeconds = Math.ceil((oldestInWindow + this.windowMs - now) / 1000);
      return {
        allowed: false,
        remaining: 0,
        retryAfterSeconds: Math.max(1, retryAfterSeconds)
      };
    }

    // 4. Grant token and record timestamp
    this.timestamps.push(now);
    this.lastRequestTime = now;

    return {
      allowed: true,
      remaining: this.maxRequests - this.timestamps.length,
      retryAfterSeconds: 0
    };
  }

  public reset(): void {
    this.timestamps = [];
    this.lastRequestTime = 0;
  }
}

export const globalChatRateLimiter = new SlidingWindowRateLimiter(15, 60000, 800);
