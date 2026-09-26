import { describe, it, expect } from 'vitest';
import { compareLegalDocuments } from '../../src/services/documentComparison';
import { SAMPLE_DOCUMENTS } from '../../src/data/sampleDocuments';

describe('Document Comparison & Risk Diff', () => {
  const standardLease = SAMPLE_DOCUMENTS.find(s => s.id === 'sample-lease-standard')!;
  const harshLease = SAMPLE_DOCUMENTS.find(s => s.id === 'sample-lease-harsh')!;

  it('detects elevated risk when comparing standard lease with harsh lease', () => {
    const comparison = compareLegalDocuments(
      standardLease.title,
      standardLease.content,
      harshLease.title,
      harshLease.content
    );

    expect(comparison.overallRiskImpact).toBe('higher_risk');
    expect(comparison.differences.length).toBeGreaterThan(0);

    // Verify detection of early termination lock-in or unilateral indemnity
    const riskDiff = comparison.differences.find(d => d.riskChange === 'increased');
    expect(riskDiff).toBeDefined();
    expect(comparison.keyRecommendations.length).toBeGreaterThan(0);
  });
});
