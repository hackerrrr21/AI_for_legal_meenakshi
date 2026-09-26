import { describe, it, expect } from 'vitest';
import { askContextQuestion, cleanLegalText } from '../../src/services/aiService';

describe('AI Legal Assistant - General Q&A (No Documents Uploaded)', () => {
  it('correctly answers landlord eviction question without documents or assuming employment agreement', async () => {
    const query = "my landlord is asking me to immediately leave the house. what should I do";
    const response = await askContextQuestion(query, null);

    expect(response.text).toBeDefined();
    // Must NOT mention Employment or Commercial Agreement
    expect(response.text).not.toContain('Employment & Commercial Agreement');
    expect(response.text).not.toContain('Executive Employment Agreement');

    // Must mention tenancy rights and statutory protections
    expect(response.text.toLowerCase()).toContain('tenan');
    expect(response.text).toMatch(/(Section 106|Transfer of Property Act|Rent Control|Civil Injunction|due process)/i);
    expect(response.suggestedFollowUps.length).toBeGreaterThan(0);
  });

  it('contains no markdown symbols like ##, **, //, ***, or --- in responses', async () => {
    const queries = [
      "my landlord is asking me to immediately leave the house. what should I do",
      "what does article 21 of the constitution guarantee?",
      "can police arrest me without warrant under bns 2023?",
      "I got defrauded of 50000 rupees online, what immediate steps should I take?",
      "Is non-compete enforceable in India after leaving my company?"
    ];

    for (const q of queries) {
      const response = await askContextQuestion(q, null);
      // No raw headers (##)
      expect(response.text).not.toMatch(/^#{1,6}\s/m);
      // No raw bold markers (**) or (***)
      expect(response.text).not.toMatch(/\*{2,}/);
      // No raw horizontal line (---)
      expect(response.text).not.toMatch(/^[-=]{3,}\s*$/m);
      // No raw comment slashes (//)
      expect(response.text).not.toMatch(/\/{2,}/);
    }
  });

  it('correctly answers Constitutional Article 21 questions without documents', async () => {
    const query = "what does article 21 of the constitution guarantee?";
    const response = await askContextQuestion(query, null);

    expect(response.text).toContain('Article 21');
    expect(response.text).toMatch(/(Right to Life|Personal Liberty|Maneka Gandhi|Due Process)/i);
  });

  it('correctly answers BNS 2023 criminal law questions without documents', async () => {
    const query = "can police arrest me without warrant under bns 2023?";
    const response = await askContextQuestion(query, null);

    expect(response.text).toMatch(/(BNS|BNSS|Arrest|Section 35|Warrant|Notice)/i);
    expect(response.text).not.toContain('Employment & Commercial Agreement');
  });

  it('correctly answers online financial cyber fraud questions without documents', async () => {
    const query = "I got defrauded of 50000 rupees online, what immediate steps should I take?";
    const response = await askContextQuestion(query, null);

    expect(response.text).toMatch(/(1930|cybercrime\.gov\.in|freeze|golden hour|Section 318)/i);
  });

  it('correctly answers non-compete questions under Indian Contract Act without documents', async () => {
    const query = "Is non-compete enforceable in India after leaving my company?";
    const response = await askContextQuestion(query, null);

    expect(response.text).toMatch(/(Section 27|void ab initio|restraint of trade|Percept D'Mark|Zaheer Khan)/i);
  });

  it('cleanLegalText helper correctly strips symbols', () => {
    const raw = "### Title\n\n**Bold item** and ***super bold*** with // comment and --- rule";
    const cleaned = cleanLegalText(raw);
    expect(cleaned).toBe("Title\n\nBold item and super bold with  comment and  rule");
    expect(cleaned).not.toContain("###");
    expect(cleaned).not.toContain("**");
    expect(cleaned).not.toContain("//");
    expect(cleaned).not.toContain("---");
  });
});
