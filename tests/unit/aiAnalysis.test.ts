import { describe, it, expect } from 'vitest';
import { runDeterministicLegalAnalysis } from '../../src/services/aiService';
import { SAMPLE_DOCUMENTS } from '../../src/data/sampleDocuments';

describe('Deterministic Legal Intelligence Analysis', () => {
  const leaseSample = SAMPLE_DOCUMENTS.find(s => s.id === 'sample-lease-standard')!;
  const freelanceSample = SAMPLE_DOCUMENTS.find(s => s.id === 'sample-freelance')!;
  const ndaSample = SAMPLE_DOCUMENTS.find(s => s.id === 'sample-nda')!;

  it('accurately identifies Residential Tenancy Agreement and derives practice area', () => {
    const result = runDeterministicLegalAnalysis(leaseSample.content, 'Lease.txt', 1500);

    expect(result.documentType).toBe('Residential Tenancy Agreement');
    expect(result.derivedPracticeArea).toBe('Real Estate & Tenancy');
    expect(result.primaryParties.firstParty).toContain('Landlord');
    expect(result.clauses.length).toBeGreaterThan(0);
    expect(result.obligations.length).toBeGreaterThan(0);
    expect(result.actionChecklist.length).toBeGreaterThan(0);
  });

  it('accurately identifies Freelance Contractor Agreement and non-compete clause', () => {
    const result = runDeterministicLegalAnalysis(freelanceSample.content, 'Contractor.txt', 2500);

    expect(result.documentType).toBe('Freelance & Contractor Agreement');
    expect(result.derivedPracticeArea).toBe('Employment & Labor');
    // Freelance agreement has non-compete risk
    const nonCompeteConcern = result.concerns.find(c => c.title.toLowerCase().includes('compete'));
    expect(nonCompeteConcern).toBeDefined();
    expect(nonCompeteConcern?.severity).toBe('high');
  });

  it('accurately identifies Mutual Non-Disclosure Agreement', () => {
    const result = runDeterministicLegalAnalysis(ndaSample.content, 'NDA.txt', 1200);

    expect(result.documentType).toBe('Mutual Non-Disclosure Agreement (NDA)');
    expect(result.derivedPracticeArea).toBe('Intellectual Property');
  });
});
