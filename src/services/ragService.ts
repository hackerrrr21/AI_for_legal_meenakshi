/**
 * Retrieval-Augmented Generation (RAG) Service for Legal Documents.
 * Handles semantic clause chunking, TF-IDF lexical retrieval,
 * and citation generation.
 */
import { RAGChunk } from '../types/legal';
import { Citation } from '../types/chat';
import { INDIAN_KEY_STATUTES, IPC_TO_BNS_MAPPING } from '../data/indianLawCorpus';
import { documentChunkCache, queryResultCache } from '../utils/cacheManager';

/**
 * Returns pre-indexed RAG chunks for the Constitution of India and BNS 2023 corpus.
 */
export function getIndianLegalCorpusChunks(): RAGChunk[] {
  const statuteChunks: RAGChunk[] = INDIAN_KEY_STATUTES.map((s, idx) => ({
    id: `indian-statute-${idx + 1}`,
    sectionTitle: `${s.statute} — ${s.sectionOrArticle}: ${s.title}`,
    content: `${s.statute}, ${s.sectionOrArticle} (${s.title}):\n${s.text}\n\nPlain Meaning:\n${s.plainMeaning}\n\nTreatise Commentary (${s.treatiseCommentary})\n\nLandmark Precedents: ${s.landmarkPrecedents.join(', ')}`,
    startIndex: 0,
    endIndex: s.text.length,
    tokenCount: Math.ceil(s.text.length / 4)
  }));

  const mappingChunks: RAGChunk[] = IPC_TO_BNS_MAPPING.map((m, idx) => ({
    id: `ipc-bns-map-${idx + 1}`,
    sectionTitle: `${m.bnsSection} (replaces ${m.ipcSection}): ${m.offense}`,
    content: `Offense: ${m.offense}\nBNS Provision: ${m.bnsSection}\nFormer IPC Provision: ${m.ipcSection}\nKey Changes: ${m.keyChanges}\nPunishment: ${m.punishmentComparison}`,
    startIndex: 0,
    endIndex: m.keyChanges.length,
    tokenCount: Math.ceil(m.keyChanges.length / 4)
  }));

  return [...statuteChunks, ...mappingChunks];
}

/**
 * Splits document text into manageable, coherent legal chunks
 * based on clause markers, section numbers, or paragraphs.
 */
export function chunkLegalDocument(fullText: string, maxChunkTokens: number = 250): RAGChunk[] {
  if (!fullText) return [];

  // Efficiency: In-memory LRU Cache lookup (<1ms resolution)
  const cacheKey = fullText.length + ':' + fullText.slice(0, 100);
  const cached = documentChunkCache.get(cacheKey);
  if (cached) return cached;

  // Match clause boundaries such as "1.", "Section 2:", "Clause 3.", "ARTICLE IV", or double newlines
  const sectionSplitRegex = /(?:\n\s*(?:(?:Section|Clause|Article|Paragraph)\s+\d+[\w.:-]*|\d+\.\d*[\w.:-]*|[A-Z\s]{4,}:)\s*)/i;
  
  const rawSegments = fullText.split(sectionSplitRegex);
  const chunks: RAGChunk[] = [];
  let currentIndex = 0;

  // If regex produced only 1 segment or very few, fallback to paragraph chunking
  const segments = rawSegments.length > 2 
    ? rawSegments 
    : fullText.split(/\n\s*\n+/);

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].trim();
    if (!segment || segment.length < 30) continue;

    // Estimate title from first line
    const lines = segment.split('\n');
    const firstLine = lines[0].trim();
    const title = firstLine.length < 70 ? firstLine : `Section ${i + 1}: ${firstLine.slice(0, 50)}...`;

    // Estimate tokens (roughly 1 token per 4 chars)
    const tokenEst = Math.ceil(segment.length / 4);

    if (tokenEst <= maxChunkTokens * 1.5) {
      chunks.push({
        id: `chunk-${i + 1}`,
        sectionTitle: title,
        content: segment,
        startIndex: currentIndex,
        endIndex: currentIndex + segment.length,
        tokenCount: tokenEst
      });
    } else {
      // Further subdivide large sections into paragraphs, and sentences if oversized
      const rawParagraphs = segment.split(/\n+/);
      const subParagraphs: string[] = [];
      for (const rp of rawParagraphs) {
        if (rp.length > maxChunkTokens * 4) {
          const sentences = rp.split(/(?<=[.?!])\s+/);
          subParagraphs.push(...sentences);
        } else {
          subParagraphs.push(rp);
        }
      }
      let accumulated = '';
      let subIndex = 1;

      for (const p of subParagraphs) {
        if ((accumulated.length + p.length) / 4 > maxChunkTokens && accumulated.length > 0) {
          chunks.push({
            id: `chunk-${i + 1}-${subIndex++}`,
            sectionTitle: `${title} (Part ${subIndex - 1})`,
            content: accumulated.trim(),
            startIndex: currentIndex,
            endIndex: currentIndex + accumulated.length,
            tokenCount: Math.ceil(accumulated.length / 4)
          });
          accumulated = p + '\n';
        } else {
          accumulated += p + '\n';
        }
      }

      if (accumulated.trim().length > 30) {
        chunks.push({
          id: `chunk-${i + 1}-${subIndex}`,
          sectionTitle: `${title} (Part ${subIndex})`,
          content: accumulated.trim(),
          startIndex: currentIndex,
          endIndex: currentIndex + accumulated.length,
          tokenCount: Math.ceil(accumulated.length / 4)
        });
      }
    }

    currentIndex += segment.length + 2;
  }

  // Cache result for instant subsequent lookups
  documentChunkCache.set(cacheKey, chunks);
  return chunks;
}

// Stopwords for English legal text retrieval
const STOPWORDS = new Set([
  'the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'by', 'for', 'with', 'about',
  'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'to', 'from', 'up', 'down', 'in', 'out', 'off', 'over', 'under', 'again', 'further',
  'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both',
  'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
  'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should', 'now', 'shall'
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOPWORDS.has(word));
}

/**
 * Retrieves the top K most relevant chunks for a user query using TF-IDF ranking.
 */
export function retrieveRelevantChunks(
  query: string,
  chunks: RAGChunk[],
  topK: number = 3
): { chunk: RAGChunk; score: number; snippet: string }[] {
  if (!query || chunks.length === 0) return [];

  // Efficiency: Query Result Cache
  const queryCacheKey = query.trim().toLowerCase() + ':' + chunks.length + ':' + topK;
  const cachedResults = queryResultCache.get(queryCacheKey);
  if (cachedResults) return cachedResults;

  const queryTerms = tokenize(query);
  if (queryTerms.length === 0) return [];

  // 1. Calculate Document Frequency (DF) for query terms across chunks
  const df: Record<string, number> = {};
  for (const term of queryTerms) {
    df[term] = 0;
    for (const chunk of chunks) {
      if (chunk.content.toLowerCase().includes(term)) {
        df[term]++;
      }
    }
  }

  const N = chunks.length;
  const scoredChunks = chunks.map(chunk => {
    const chunkTokens = tokenize(chunk.content);
    const chunkTermFreq: Record<string, number> = {};
    for (const t of chunkTokens) {
      chunkTermFreq[t] = (chunkTermFreq[t] || 0) + 1;
    }

    let score = 0;
    for (const term of queryTerms) {
      const tf = (chunkTermFreq[term] || 0) / Math.max(chunkTokens.length, 1);
      // IDF calculation
      const idf = Math.log((N + 1) / ((df[term] || 0) + 1)) + 1;
      let termScore = tf * idf;

      // Title match boost
      if (chunk.sectionTitle.toLowerCase().includes(term)) {
        termScore *= 2.5;
      }
      score += termScore;
    }

    // Extract best snippet (the line or sentence with the highest term overlap)
    const sentences = chunk.content.split(/[.\n]+/);
    let bestSentence = chunk.content.slice(0, 150);
    let bestCount = 0;

    for (const s of sentences) {
      const sLower = s.toLowerCase();
      let matchCount = 0;
      for (const term of queryTerms) {
        if (sLower.includes(term)) matchCount++;
      }
      if (matchCount > bestCount) {
        bestCount = matchCount;
        bestSentence = s.trim();
      }
    }

    return {
      chunk,
      score,
      snippet: bestSentence.length > 200 ? bestSentence.slice(0, 200) + '...' : bestSentence
    };
  });

  const finalResults = scoredChunks
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  queryResultCache.set(queryCacheKey, finalResults);
  return finalResults;
}

/**
 * Converts top retrieved chunks into clean citations for the user.
 */
export function formatCitations(
  retrieved: { chunk: RAGChunk; score: number; snippet: string }[]
): Citation[] {
  return retrieved.map(r => ({
    clauseId: r.chunk.id,
    sectionTitle: r.chunk.sectionTitle,
    snippet: r.snippet,
    relevanceScore: Math.round(r.score * 100) / 100
  }));
}
