import { describe, it, expect } from 'vitest';
import { compareLegalDocuments } from '../../src/services/documentComparison';

describe('Contract Redline & Semantic Diff Engine', () => {
  it('detects neutral risk when comparing identical agreements', () => {
    const text = "Clause 1: Termination upon 30 days notice. Clause 2: Standard rental of $2,000.";
    const result = compareLegalDocuments('Draft A', text, 'Draft B', text);

    expect(result.overallRiskImpact).toBe('similar_risk');
    expect(result.differences.length).toBeGreaterThan(0);
    expect(result.differences[0].riskChange).toBe('neutral');
  });

  it('detects added mandatory lock-in period and marks risk as increased', () => {
    const docA = "Either party may terminate upon 30 days written notice.";
    const docB = "Either party may terminate upon 30 days notice subject to a strict 12-month lock-in period with full deposit forfeiture.";

    const result = compareLegalDocuments('Draft V1', docA, 'Draft V2', docB);
    const lockInDiff = result.differences.find(d => d.clauseTitle.includes('Termination'));

    expect(lockInDiff).toBeDefined();
    expect(lockInDiff?.type).toBe('modified');
    expect(lockInDiff?.riskChange).toBe('increased');
    expect(lockInDiff?.explanation).toContain('lock-in');
    expect(result.overallRiskImpact).toBe('higher_risk');
  });

  it('detects unilateral indemnity addition when baseline had no indemnity', () => {
    const docA = "Tenant agrees to pay monthly rent of $1,500.";
    const docB = "Tenant agrees to pay monthly rent of $1,500. Tenant shall indemnify and hold harmless Landlord from all claims.";

    const result = compareLegalDocuments('Standard', docA, 'Harsh', docB);
    const indemnityDiff = result.differences.find(d => d.clauseTitle.includes('Indemnif'));

    expect(indemnityDiff).toBeDefined();
    expect(indemnityDiff?.type).toBe('added');
    expect(indemnityDiff?.riskChange).toBe('increased');
  });

  it('detects removal of restrictive non-compete covenant and marks risk as decreased', () => {
    const docA = "Employee agrees to a 24-month non-compete restriction after departure.";
    const docB = "Employee agrees to provide standard handover upon departure.";

    const result = compareLegalDocuments('Original Offer', docA, 'Negotiated Agreement', docB);
    const nonCompeteDiff = result.differences.find(d => d.clauseTitle.includes('Non-Compete'));

    expect(nonCompeteDiff).toBeDefined();
    expect(nonCompeteDiff?.type).toBe('removed');
    expect(nonCompeteDiff?.riskChange).toBe('decreased');
    expect(nonCompeteDiff?.explanation).toContain('eliminated');
  });

  it('detects late payment fee penalty escalation', () => {
    const docA = "Late payments shall incur a late charge of 3% per month.";
    const docB = "Late payments shall incur a late charge of 12% per month.";

    const result = compareLegalDocuments('Contract A', docA, 'Contract B', docB);
    const feeDiff = result.differences.find(d => d.clauseTitle.includes('Late Payment'));

    expect(feeDiff).toBeDefined();
    expect(feeDiff?.docAContent).toContain('3%');
    expect(feeDiff?.docBContent).toContain('12%');
    expect(feeDiff?.riskChange).toBe('increased');
  });

  it('detects addition of mandatory binding arbitration', () => {
    const docA = "Governing law: Courts of Delhi.";
    const docB = "Governing law: All disputes shall be settled through mandatory binding arbitration.";

    const result = compareLegalDocuments('Draft 1', docA, 'Draft 2', docB);
    const arbDiff = result.differences.find(d => d.clauseTitle.includes('Arbitration'));

    expect(arbDiff).toBeDefined();
    expect(arbDiff?.type).toBe('added');
    expect(arbDiff?.riskChange).toBe('increased');
  });

  it('provides actionable negotiation counter-recommendations', () => {
    const docA = "Standard lease with mutual terms.";
    const docB = "Lease with 12-month lock-in, tenant shall indemnify landlord, and mandatory binding arbitration.";

    const result = compareLegalDocuments('Doc A', docA, 'Doc B', docB);
    expect(result.keyRecommendations.length).toBeGreaterThanOrEqual(2);
    expect(result.keyRecommendations.some(r => r.includes('indemnity') || r.includes('lock-in'))).toBe(true);
  });
});
