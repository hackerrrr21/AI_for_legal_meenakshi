import { describe, it, expect } from 'vitest';
import { 
  cleanDocumentText, 
  truncateText, 
  formatFileSize, 
  isValidEmail, 
  isValidPhone, 
  sanitizeUserInput 
} from '../../src/utils/textSanitizer';
import { cleanLegalText } from '../../src/services/aiService';

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
});
