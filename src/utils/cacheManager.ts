/**
 * High-Performance Bounded LRU Cache with TTL (Time-To-Live) and Telemetry.
 * Eliminates redundant compute cycles and token re-processing.
 * Fully type-safe and zero external runtime dependencies.
 */

import { RAGChunk } from '../types/legal';

export interface CacheMetrics {
  hits: number;
  misses: number;
  hitRatio: number;
  size: number;
  capacity: number;
}

export class LRUCache<K, V> {
  private capacity: number;
  private ttlMs: number;
  private cache = new Map<K, { value: V; expiresAt: number }>();
  private hitsCount: number = 0;
  private missesCount: number = 0;

  constructor(capacity: number = 100, ttlMs: number = 30 * 60 * 1000) {
    this.capacity = capacity;
    this.ttlMs = ttlMs;
  }

  public get(key: K): V | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      this.missesCount++;
      return undefined;
    }

    // Check expiration
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      this.missesCount++;
      return undefined;
    }

    // Refresh position for LRU
    this.cache.delete(key);
    this.cache.set(key, entry);
    this.hitsCount++;
    return entry.value;
  }

  public set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict oldest (first key in map iterator)
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
      }
    }

    this.cache.set(key, {
      value,
      expiresAt: Date.now() + this.ttlMs
    });
  }

  public has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  public clear(): void {
    this.cache.clear();
    this.hitsCount = 0;
    this.missesCount = 0;
  }

  public size(): number {
    return this.cache.size;
  }

  public getMetrics(): CacheMetrics {
    const total = this.hitsCount + this.missesCount;
    const hitRatio = total > 0 ? parseFloat(((this.hitsCount / total) * 100).toFixed(1)) : 0;
    return {
      hits: this.hitsCount,
      misses: this.missesCount,
      hitRatio,
      size: this.cache.size,
      capacity: this.capacity
    };
  }
}


export interface QuerySearchResult {
  chunk: RAGChunk;
  score: number;
  snippet: string;
}

// Global specialized cache singletons
export const documentChunkCache = new LRUCache<string, RAGChunk[]>(50, 60 * 60 * 1000);
export const queryResultCache = new LRUCache<string, QuerySearchResult[]>(200, 30 * 60 * 1000);

export function clearAllCaches(): void {
  documentChunkCache.clear();
  queryResultCache.clear();
}

export function getGlobalCacheTelemetry(): { documentChunks: CacheMetrics; queryResults: CacheMetrics } {
  return {
    documentChunks: documentChunkCache.getMetrics(),
    queryResults: queryResultCache.getMetrics()
  };
}
