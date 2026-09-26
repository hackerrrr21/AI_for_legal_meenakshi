import { describe, it, expect } from 'vitest';
import { 
  cleanDocumentText, 
  truncateText, 
  formatFileSize, 
  isValidEmail, 
  isValidPhone, 
  sanitizeUserInput,
  escapeHtml,
  isSafeUrl
} from '../../src/utils/textSanitizer';
import { cleanLegalText } from '../../src/services/aiService';
import { LRUCache, documentChunkCache } from '../../src/utils/cacheManager';

describe('Code Quality: Text Processing & Sanitization Utilities', () => {
  it('cleanDocumentText normalizes line endings and removes trailing spaces', () => {
    const rawInput = "First line\r\nSecond line with spaces    \n\n\n\nThird line";
    const cleaned = cleanDocumentText(rawInput);
    expect(cleaned).not.toContain('\r');
    expect(cleaned).not.toContain('    \n');
    expect(cleaned).toContain('First line\nSecond line with spaces\n\nThird line');
  });

  it('truncateText respects max character bounds and appends indicator', () => {
    const longText = 'A'.repeat(500);
    const truncated = truncateText(longText, 100);
    expect(truncated.length).toBeLessThan(500);
    expect(truncated).toContain('[...Truncated due to size (500 chars total)...]');
    expect(truncateText('Short text', 100)).toBe('Short text');
    expect(truncateText('', 100)).toBe('');
  });

  it('formatFileSize correctly outputs B, KB, MB, and GB', () => {
    expect(formatFileSize(0)).toBe('0 B');
    expect(formatFileSize(512)).toBe('512 B');
    expect(formatFileSize(2048)).toBe('2 KB');
    expect(formatFileSize(1048576)).toBe('1 MB');
    expect(formatFileSize(5242880)).toBe('5 MB');
  });

  it('isValidEmail enforces RFC compliant email syntax', () => {
    expect(isValidEmail('john@example.com')).toBe(true);
    expect(isValidEmail('advocate.sharma@delhi-bar.org.in')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('missing-domain@')).toBe(false);
    expect(isValidEmail('@missing-user.com')).toBe(false);
    expect(isValidEmail('spaces in@email.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('isValidPhone validates 10 to 15 digit telephone formats', () => {
    expect(isValidPhone('+91 98765 43210')).toBe(true);
    expect(isValidPhone('9876543210')).toBe(true);
    expect(isValidPhone('+1 (555) 019-2834')).toBe(true);
    expect(isValidPhone('12345')).toBe(false);
    expect(isValidPhone('abc-phone-num')).toBe(false);
    expect(isValidPhone('')).toBe(false);
  });

  it('sanitizeUserInput strips dangerous script tags and HTML entities', () => {
    const dangerous = '<script>evilFunction()</script>Hello <b>World</b><img src=x onerror=alert(1) />';
    const sanitized = sanitizeUserInput(dangerous);
    expect(sanitized).not.toContain('<script>');
    expect(sanitized).not.toContain('evilFunction');
    expect(sanitized).not.toContain('<b>');
    expect(sanitized).not.toContain('<img');
    expect(sanitized).toContain('Hello World');
  });

  it('escapeHtml encodes special characters to prevent cross-site scripting (DOM XSS)', () => {
    const raw = '<div class="alert" onclick="evil(\'attack\')">&warning;</div>';
    const escaped = escapeHtml(raw);
    expect(escaped).toContain('&lt;div');
    expect(escaped).toContain('&gt;');
    expect(escaped).toContain('&quot;alert&quot;');
    expect(escaped).toContain('&#039;attack&#039;');
    expect(escaped).toContain('&amp;warning;');
    expect(escapeHtml('')).toBe('');
  });

  it('isSafeUrl prevents execution of dangerous pseudo-protocols', () => {
    expect(isSafeUrl('https://lawmin.gov.in/acts')).toBe(true);
    expect(isSafeUrl('http://delhihighcourt.nic.in')).toBe(true);
    expect(isSafeUrl('/dashboard')).toBe(true);
    expect(isSafeUrl('javascript:alert(document.cookie)')).toBe(false);
    expect(isSafeUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isSafeUrl('vbscript:msgbox("malicious")')).toBe(false);
    expect(isSafeUrl('file:///etc/passwd')).toBe(false);
    expect(isSafeUrl('')).toBe(false);
  });

  it('cleanLegalText removes raw markdown symbols while preserving readability and clean bullets', () => {
    const rawLegalMarkdown = "### Title Heading\n\n**Important:** You have rights.\n* Point 1\n* Point 2\n// Internal comment\n---";
    const cleaned = cleanLegalText(rawLegalMarkdown);
    expect(cleaned).not.toContain('###');
    expect(cleaned).not.toContain('**');
    expect(cleaned).not.toContain('//');
    expect(cleaned).not.toContain('---');
    expect(cleaned).toContain('Title Heading');
    expect(cleaned).toContain('Important: You have rights.');
    expect(cleaned).toContain('• Point 1');
    expect(cleaned).toContain('• Point 2');
  });

  it('documentChunkCache and LRUCache manage memory safely with bounded size', () => {
    const customCache = new LRUCache<string, string>(10, 60000);
    expect(customCache.size()).toBe(0);

    for (let i = 0; i < 20; i++) {
      customCache.set(`key-${i}`, `value-${i}`);
    }

    expect(customCache.size()).toBe(10);
    expect(customCache.get('key-0')).toBeUndefined();
    expect(customCache.get('key-19')).toBe('value-19');
    expect(documentChunkCache.getMetrics().capacity).toBe(50);
  });
});
