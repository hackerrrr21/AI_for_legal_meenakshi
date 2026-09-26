import { describe, it, expect } from 'vitest';
import { cleanDocumentText, truncateText, formatFileSize } from '../../src/utils/textSanitizer';
import { MAX_FILE_SIZE_BYTES } from '../../src/services/documentParser';

describe('Document Utilities and Sanitizer', () => {
  it('cleans redundant whitespace and carriage returns', () => {
    const dirty = 'Line 1   \r\n\r\n\r\n\r\nLine 2     with   spaces';
    const cleaned = cleanDocumentText(dirty);

    expect(cleaned).toBe('Line 1\n\nLine 2 with spaces');
  });

  it('truncates oversized text gracefully', () => {
    const longText = 'A'.repeat(500);
    const truncated = truncateText(longText, 100);

    expect(truncated.length).toBeLessThan(longText.length);
    expect(truncated).toContain('[...Truncated due to size');
  });

  it('formats file sizes accurately', () => {
    expect(formatFileSize(1024)).toBe('1 KB');
    expect(formatFileSize(1048576 * 2.5)).toBe('2.5 MB');
    expect(formatFileSize(0)).toBe('0 B');
  });

  it('enforces 15MB file size limit constant', () => {
    expect(MAX_FILE_SIZE_BYTES).toBe(15 * 1024 * 1024);
  });
});
