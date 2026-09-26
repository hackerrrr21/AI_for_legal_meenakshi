import { describe, it, expect } from 'vitest';
import { chunkLegalDocument, retrieveRelevantChunks, formatCitations } from '../../src/services/ragService';

describe('RAG Chunking and Retrieval', () => {
  const sampleContract = `
1. PREMISES AND TERM
Landlord leases to Tenant the apartment at 820 Oak Street for twelve months starting March 1.

2. RENT AND PAYMENT
Tenant shall pay monthly rent of $2,200 on or before the 5th of each month. Late fee is 3%.

3. SECURITY DEPOSIT
Tenant shall deposit $2,200 upon signing. The deposit shall be returned within 30 days after move-out less physical damages.

4. TERMINATION AND NOTICE
Either party may terminate after six months by giving 30 days written notice to the other party.
  `.trim();

  it('correctly chunks legal document by clauses', () => {
    const chunks = chunkLegalDocument(sampleContract, 100);
    expect(chunks.length).toBeGreaterThanOrEqual(3);
    expect(chunks[0].content).toContain('820 Oak Street');
  });

  it('retrieves relevant chunk for "security deposit refund" query', () => {
    const chunks = chunkLegalDocument(sampleContract, 100);
    const retrieved = retrieveRelevantChunks('security deposit refund', chunks, 2);

    expect(retrieved.length).toBeGreaterThan(0);
    const topChunk = retrieved[0].chunk;
    expect(topChunk.content.toLowerCase()).toContain('security deposit');
  });

  it('retrieves relevant chunk for "early termination notice" query', () => {
    const chunks = chunkLegalDocument(sampleContract, 100);
    const retrieved = retrieveRelevantChunks('early termination notice period', chunks, 2);

    expect(retrieved.length).toBeGreaterThan(0);
    const topChunk = retrieved[0].chunk;
    expect(topChunk.content.toLowerCase()).toContain('terminate');
  });

  it('formats clean citations with snippet and score', () => {
    const chunks = chunkLegalDocument(sampleContract, 100);
    const retrieved = retrieveRelevantChunks('rent late fee payment', chunks, 1);
    const citations = formatCitations(retrieved);

    expect(citations.length).toBe(1);
    expect(citations[0].sectionTitle).toBeDefined();
    expect(citations[0].snippet).toBeDefined();
    expect(citations[0].relevanceScore).toBeGreaterThan(0);
  });
});
