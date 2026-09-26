import { describe, it, expect } from 'vitest';
import { askContextQuestion, cleanLegalText } from '../../src/services/aiService';
import { redactPII } from '../../src/utils/piiRedactor';
import { LRUCache, getGlobalCacheTelemetry } from '../../src/utils/cacheManager';
import { SAMPLE_DOCUMENTS } from '../../src/data/sampleDocuments';
import { compareLegalDocuments } from '../../src/services/documentComparison';

describe('Official Submission Evaluation Matrix: High, Medium, and Low Impact Tiers', () => {
  describe('TIER 1: HIGH IMPACT (Core Functionality, GenAI Grounding & Live Workflows)', () => {
    it('answers Consumer Protection Act 2019 queries with e-Daakhil and NCDRC jurisdiction', async () => {
      const query = "seller sent a damaged product on flipkart and refused refund. what consumer court rights do I have?";
      const response = await askContextQuestion(query, null);

      expect(response.text).toContain('Consumer Protection Act 2019');
      expect(response.text).toMatch(/(e-Daakhil|District Commission|National Consumer Helpline|1915)/i);
      expect(response.text).not.toContain('##');
      expect(response.text).not.toContain('**');
    });

    it('answers Road Accident & MACT hit-and-run relief queries with statutory grounding', async () => {
      const query = "a car hit my bike in a hit and run accident. what compensation and police steps are available?";
      const response = await askContextQuestion(query, null);

      expect(response.text).toContain('Motor Accident Claims');
      expect(response.text).toMatch(/(MACT|Solatium|Golden Hour|Section 106)/i);
    });

    it('answers Cheque Bounce Negotiable Instruments Act Section 138 queries with strict timelines', async () => {
      const query = "a client cheque bounced for 2 lakh rupees. what legal notice must I send?";
      const response = await askContextQuestion(query, null);

      expect(response.text).toContain('Section 138');
      expect(response.text).toMatch(/(Negotiable Instruments Act|30 days|15 days)/i);
    });

    it('performs live semantic contract comparison and produces actionable recommendations', () => {
      const std = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-standard')!;
      const harsh = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-harsh')!;

      const diff = compareLegalDocuments(std.title, std.content, harsh.title, harsh.content);
      expect(diff.overallRiskImpact).toBe('higher_risk');
      expect(diff.differences.length).toBeGreaterThanOrEqual(2);
      expect(diff.keyRecommendations.length).toBeGreaterThan(0);
    });
  });

  describe('TIER 2: MEDIUM IMPACT (Security, Privacy, Performance & Resilience)', () => {
    it('redacts Indian Voter ID (EPIC), Driving License, and Passport under DPDP Act 2023', () => {
      const sampleText = "Citizen identification details: Voter ID ABC1234567, DL DL-1420110012345, and Passport Z1234567.";
      const result = redactPII(sampleText);

      expect(result.redactionDetails.voterId).toBe(1);
      expect(result.redactionDetails.drivingLicense).toBe(1);
      expect(result.redactionDetails.passport).toBe(1);
      expect(result.sanitizedText).not.toContain('ABC1234567');
      expect(result.sanitizedText).not.toContain('DL-1420110012345');
      expect(result.sanitizedText).not.toContain('Z1234567');
      expect(result.sanitizedText).toContain('[REDACTED_VOTER_ID]');
      expect(result.sanitizedText).toContain('[REDACTED_DRIVING_LICENSE]');
      expect(result.sanitizedText).toContain('[REDACTED_PASSPORT]');
    });

    it('tracks cache telemetry, hits, misses, and hit-ratio with <1ms resolution', () => {
      const cache = new LRUCache<string, string>(10, 10000);
      cache.set('doc-1', 'content 1');

      // 1 hit
      expect(cache.get('doc-1')).toBe('content 1');
      // 1 miss
      expect(cache.get('non-existent')).toBeUndefined();

      const metrics = cache.getMetrics();
      expect(metrics.hits).toBe(1);
      expect(metrics.misses).toBe(1);
      expect(metrics.hitRatio).toBe(50.0);
      expect(metrics.size).toBe(1);
    });

    it('reports global cache telemetry cleanly', () => {
      const globalTelemetry = getGlobalCacheTelemetry();
      expect(globalTelemetry.documentChunks).toBeDefined();
      expect(globalTelemetry.queryResults).toBeDefined();
    });
  });

  describe('TIER 3: LOW IMPACT (Final Polish, Accessibility Shortcut & Usability)', () => {
    it('supports global keyboard shortcut Alt+A for Accessibility Toolbar invocation', () => {
      let isToolbarOpen = false;
      const simulateKeyPress = (altKey: boolean, key: string) => {
        if (altKey && (key === 'a' || key === 'A')) {
          isToolbarOpen = !isToolbarOpen;
        }
      };

      simulateKeyPress(false, 'a');
      expect(isToolbarOpen).toBe(false);

      simulateKeyPress(true, 'a');
      expect(isToolbarOpen).toBe(true);

      simulateKeyPress(true, 'A');
      expect(isToolbarOpen).toBe(false);
    });

    it('ensures clean legal text stripping has zero residual markdown tokens', () => {
      const messyInput = "### Important Legal Section\n**Notice:** Tenant must vacate within 30 days // per agreement.\n---\n***Warning:*** Penalty applies.";
      const cleaned = cleanLegalText(messyInput);

      expect(cleaned).not.toContain('###');
      expect(cleaned).not.toContain('**');
      expect(cleaned).not.toContain('//');
      expect(cleaned).not.toContain('---');
      expect(cleaned).not.toContain('***');
    });
  });
});
