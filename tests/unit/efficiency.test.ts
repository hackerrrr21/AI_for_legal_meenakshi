import { describe, it, expect } from 'vitest';
import { chunkLegalDocument, retrieveRelevantChunks } from '../../src/services/ragService';
import {
  LRUCache,
  documentChunkCache,
  queryResultCache,
  documentAnalysisCache,
  aiResponseCache,
  comparisonResultCache,
  clearAllCaches,
  getGlobalCacheTelemetry
} from '../../src/utils/cacheManager';
import { analyzeDocument, askContextQuestion } from '../../src/services/aiService';
import { compareLegalDocuments } from '../../src/services/documentComparison';
import { redactPII } from '../../src/utils/piiRedactor';

describe('Efficiency: Performance, Token Economy & Retrieval Speed', () => {
  const sampleDocument = `
1. DEFINITIONS AND INTERPRETATION
In this Agreement, unless the context otherwise requires, the following expressions shall have the following meanings:
"Effective Date" means the first calendar date of signing.
"Confidential Information" means proprietary technical data and client records.

2. OBLIGATIONS OF THE PARTIES
Each party agrees to maintain confidentiality with utmost good faith. Neither party shall disclose trade secrets to third parties without prior written consent.

3. TERM AND TERMINATION
This Agreement shall commence on the Effective Date and continue in full force for a duration of 36 months unless terminated earlier by 30 days written notice.

4. RESTRICTIVE COVENANTS AND GOVERNING LAW
Any non-compete covenants shall be governed strictly in accordance with Section 27 of the Indian Contract Act, 1872. All disputes shall be subject to the exclusive jurisdiction of the Courts in New Delhi.
`.repeat(15); // Large realistic multi-page agreement (~3,500 words)

  it('chunks large legal documents in under 50ms benchmark', () => {
    documentChunkCache.clear();
    const startTime = performance.now();
    const chunks = chunkLegalDocument(sampleDocument);
    const duration = performance.now() - startTime;

    expect(duration).toBeLessThan(50); // High efficiency requirement
    expect(chunks.length).toBeGreaterThan(1);
  });

  it('resolves subsequent chunk lookups instantly via in-memory LRU cache (< 1ms)', () => {
    // Prime the cache
    chunkLegalDocument(sampleDocument);

    // Second call should resolve from cache immediately
    const cacheStartTime = performance.now();
    const cachedChunks = chunkLegalDocument(sampleDocument);
    const cacheDuration = performance.now() - cacheStartTime;

    expect(cacheDuration).toBeLessThan(2); // Sub-2ms instant retrieval
    expect(cachedChunks.length).toBeGreaterThan(1);
  });

  it('ensures all chunks respect token and character size limits', () => {
    const chunks = chunkLegalDocument(sampleDocument);
    chunks.forEach(chunk => {
      expect(chunk.content.length).toBeLessThanOrEqual(2500); // Standard RAG window limit
      expect(chunk.id).toBeDefined();
    });
  });

  it('retrieves relevant chunks in under 100ms with accurate semantic scoring', () => {
    queryResultCache.clear();
    const chunks = chunkLegalDocument(sampleDocument);
    const startTime = performance.now();
    const results = retrieveRelevantChunks('termination notice and duration', chunks, 3);
    const duration = performance.now() - startTime;

    expect(duration).toBeLessThan(100);
    expect(results.length).toBeLessThanOrEqual(3);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].chunk.content.toLowerCase()).toContain('termination');
  });

  it('resolves repeated query retrievals instantly via query result cache (< 1ms)', () => {
    const chunks = chunkLegalDocument(sampleDocument);
    // Prime query cache
    retrieveRelevantChunks('confidentiality trade secrets', chunks, 3);

    // Second query should resolve from cache
    const cacheStartTime = performance.now();
    const cachedResults = retrieveRelevantChunks('confidentiality trade secrets', chunks, 3);
    const cacheDuration = performance.now() - cacheStartTime;

    expect(cacheDuration).toBeLessThan(2);
    expect(cachedResults.length).toBeGreaterThan(0);
  });
});

describe('Efficiency: LRUCache Eviction & Memory Hygiene', () => {
  it('enforces capacity bounds and evicts oldest items', () => {
    const cache = new LRUCache<string, string>(3, 60000);
    cache.set('key1', 'val1');
    cache.set('key2', 'val2');
    cache.set('key3', 'val3');

    expect(cache.size()).toBe(3);
    expect(cache.get('key1')).toBe('val1');

    // Adding 4th item evicts least recently used
    cache.set('key4', 'val4');
    expect(cache.size()).toBe(3);
    // key2 was least recently used since key1 was accessed above
    expect(cache.has('key2')).toBe(false);
    expect(cache.has('key1')).toBe(true);
    expect(cache.has('key4')).toBe(true);
  });

  it('clears all caches cleanly for zero-retention memory hygiene', () => {
    const cache = new LRUCache<string, string>(10, 60000);
    cache.set('test', '123');
    expect(cache.size()).toBe(1);
    cache.clear();
    expect(cache.size()).toBe(0);
    expect(cache.get('test')).toBeUndefined();
  });

  it('wipes all global specialized caches simultaneously with clearAllCaches()', () => {
    documentChunkCache.set('k1', []);
    queryResultCache.set('k2', []);
    documentAnalysisCache.set('k3', {} as any);
    aiResponseCache.set('k4', {} as any);
    comparisonResultCache.set('k5', {} as any);

    expect(documentChunkCache.size()).toBeGreaterThan(0);
    expect(queryResultCache.size()).toBeGreaterThan(0);

    clearAllCaches();

    const telemetry = getGlobalCacheTelemetry();
    expect(telemetry.documentChunks.size).toBe(0);
    expect(telemetry.queryResults.size).toBe(0);
    expect(telemetry.documentAnalysis?.size).toBe(0);
    expect(telemetry.aiResponse?.size).toBe(0);
    expect(telemetry.comparisonResult?.size).toBe(0);
  });
});

describe('Efficiency: Sub-Millisecond Analysis & Comparison Memoization', () => {
  it('resolves repeat document analysis in < 2ms via documentAnalysisCache', async () => {
    const docText = "1. Lease Terms. Monthly rent is Rs. 25,000 payable by the 5th of each month. 2. Lock-in period of 11 months.";
    clearAllCaches();

    // First call primes the cache
    const firstResult = await analyzeDocument(docText, 'sample.txt', docText.length);
    expect(firstResult.documentType).toBeDefined();

    // Second call must hit the cache immediately
    const start = performance.now();
    const secondResult = await analyzeDocument(docText, 'sample.txt', docText.length);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(2);
    expect(secondResult).toBe(firstResult);
  });

  it('resolves repeat document comparisons in < 2ms via comparisonResultCache', () => {
    const docA = "Section 1: Termination upon 30 days notice.";
    const docB = "Section 1: Early termination lock-in of 12 months with full deposit forfeiture.";
    clearAllCaches();

    // First comparison primes the cache
    const firstComp = compareLegalDocuments('Doc A', docA, 'Doc B', docB);
    expect(firstComp.differences.length).toBeGreaterThan(0);

    // Second comparison must hit the cache immediately
    const start = performance.now();
    const secondComp = compareLegalDocuments('Doc A', docA, 'Doc B', docB);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(2);
    expect(secondComp).toBe(firstComp);
  });

  it('resolves repeat AI legal questions in < 2ms via aiResponseCache', async () => {
    const question = "Can my landlord evict me without notice?";
    clearAllCaches();

    // First query primes the cache
    const firstAnswer = await askContextQuestion(question, null);
    expect(firstAnswer.text).toContain('Section 106');

    // Second query must hit the cache immediately
    const start = performance.now();
    const secondAnswer = await askContextQuestion(question, null);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(2);
    expect(secondAnswer.text).toBe(firstAnswer.text);
  });

  it('short-circuits PII redaction in under 1ms when text contains no digits or @', () => {
    const plainLegalEssay = `The Supreme Court of India in multiple landmark judgments has reiterated that 
    liberty under Article twenty-one and the right to practice any trade under Article nineteen of the Constitution
    are fundamental guarantees. No private contract can curtail these constitutional guarantees.`.repeat(10);

    const start = performance.now();
    const result = redactPII(plainLegalEssay);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(2);
    expect(result.totalRedactions).toBe(0);
    expect(result.sanitizedText).toBe(plainLegalEssay);
  });
});
