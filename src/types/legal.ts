export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';

export interface ClauseItem {
  id: string;
  title: string;
  sectionNumber?: string;
  originalText: string;
  simplifiedExplanation: string;
  whyItMatters: string;
  category: 'termination' | 'liability' | 'confidentiality' | 'payment' | 'ip' | 'dispute' | 'general';
  severity?: SeverityLevel;
  potentialRisk?: string;
}

export interface ObligationItem {
  id: string;
  party: 'user' | 'counterparty' | 'both';
  partyName: string;
  description: string;
  deadlineOrFrequency?: string;
  consequenceIfBreached?: string;
  severity: SeverityLevel;
}

export interface KeyDateAmountItem {
  id: string;
  type: 'date' | 'amount' | 'period';
  label: string;
  value: string;
  context: string;
  isCritical: boolean;
}

export interface ConcernItem {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  relatedClauseId?: string;
  recommendation: string;
  lawyerQuestionSuggestion: string;
}

export interface DocumentAnalysisResult {
  documentId: string;
  fileName: string;
  fileSize: number;
  documentType: string;
  confidenceScore: number;
  summary: string;
  primaryParties: {
    firstParty: string;
    secondParty: string;
  };
  overallRiskLevel: SeverityLevel;
  clauses: ClauseItem[];
  obligations: ObligationItem[];
  keyDatesAndAmounts: KeyDateAmountItem[];
  concerns: ConcernItem[];
  actionChecklist: string[];
  suggestedLawyerQuestions: string[];
  derivedPracticeArea: string;
  wordCount: number;
  analyzedAt: string;
}

export interface RAGChunk {
  id: string;
  sectionTitle: string;
  content: string;
  startIndex: number;
  endIndex: number;
  tokenCount: number;
}

export interface ComparisonDiff {
  type: 'added' | 'removed' | 'modified' | 'unchanged';
  clauseTitle: string;
  docAContent?: string;
  docBContent?: string;
  riskChange?: 'increased' | 'decreased' | 'neutral';
  explanation: string;
}

export interface DocumentComparisonResult {
  docAName: string;
  docBName: string;
  summaryOfChanges: string;
  overallRiskImpact: 'higher_risk' | 'lower_risk' | 'similar_risk';
  differences: ComparisonDiff[];
  keyRecommendations: string[];
}
