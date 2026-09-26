import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  CheckSquare, 
  ShieldAlert, 
  GitCompare, 
  Calendar, 
  Sparkles, 
  RefreshCw,
  Layers,
  ArrowRight
} from 'lucide-react';
import { DocumentUploader } from './DocumentUploader';
import { AnalysisOverview } from './AnalysisOverview';
import { ClauseExplorer } from './ClauseExplorer';
import { ObligationsTimeline } from './ObligationsTimeline';
import { ConcernsRadar } from './ConcernsRadar';
import { ActionChecklist } from './ActionChecklist';
import { ContextChat } from './ContextChat';
import { DocumentComparisonView } from './DocumentComparisonView';
import { DocumentAnalysisResult, RAGChunk, ClauseItem } from '../../types/legal';
import { analyzeDocument } from '../../services/aiService';
import { chunkLegalDocument } from '../../services/ragService';

interface AILegalAssistantProps {
  onNavigateToLawyers: (practiceArea: string) => void;
  activeAnalysis: DocumentAnalysisResult | null;
  setActiveAnalysis: (analysis: DocumentAnalysisResult | null) => void;
  activeDocText: string;
  setActiveDocText: (text: string) => void;
  chunks: RAGChunk[];
  setChunks: (chunks: RAGChunk[]) => void;
}

type AssistantSubTab = 'overview' | 'clauses' | 'obligations' | 'concerns' | 'checklist' | 'chat' | 'compare';

export const AILegalAssistant: React.FC<AILegalAssistantProps> = ({
  onNavigateToLawyers,
  activeAnalysis,
  setActiveAnalysis,
  activeDocText,
  setActiveDocText,
  chunks,
  setChunks
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<AssistantSubTab>('overview');
  const [chatInitialQuestion, setChatInitialQuestion] = useState<string | undefined>(undefined);

  const handleDocumentLoaded = async (docData: {
    fileName: string;
    fileSize: number;
    rawText: string;
    wordCount: number;
    sampleId?: string;
  }) => {
    setIsAnalyzing(true);
    setActiveDocText(docData.rawText);

    try {
      // 1. Chunk for RAG
      const docChunks = chunkLegalDocument(docData.rawText);
      setChunks(docChunks);

      // 2. Perform deep legal analysis
      const result = await analyzeDocument(docData.rawText, docData.fileName, docData.fileSize);
      setActiveAnalysis(result);
      setActiveSubTab('overview');
    } catch (err) {
      console.error('Document analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAskAboutClause = (clause: ClauseItem) => {
    setChatInitialQuestion(`What are the legal implications of ${clause.title} (${clause.sectionNumber || 'this clause'}) in simple terms, and how can I negotiate it?`);
    setActiveSubTab('chat');
  };

  if (!activeAnalysis) {
    return (
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
        <DocumentUploader
          onDocumentLoaded={handleDocumentLoaded}
          isAnalyzing={isAnalyzing}
        />
        {isAnalyzing && (
          <div className="mt-8 p-8 bg-white rounded-2xl shadow-trust border border-slate-200 text-center space-y-3">
            <Sparkles className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">
              Analyzing Contract & Chunking Legal Provisions...
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Sanitizing untrusted tokens, building semantic RAG vectors, extracting obligations, and evaluating potential liabilities.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Top Banner / Re-upload button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 text-sm">{activeAnalysis.fileName}</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">
                {activeAnalysis.documentType}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {activeAnalysis.wordCount} words • {chunks.length} RAG Chunks • {activeAnalysis.concerns.length} flagged concerns
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setActiveAnalysis(null);
            setActiveDocText('');
          }}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Upload Another Document
        </button>
      </div>

      {/* Assistant Navigation Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none text-xs sm:text-sm">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'overview'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" /> Overview
        </button>

        <button
          onClick={() => setActiveSubTab('clauses')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'clauses'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" /> Clauses & Plain English
          <span className="bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full text-xs">
            {activeAnalysis.clauses.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('obligations')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'obligations'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Calendar className="w-4 h-4" /> Obligations & Dates
        </button>

        <button
          onClick={() => setActiveSubTab('concerns')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'concerns'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-500" /> Concerns Radar
          {activeAnalysis.concerns.length > 0 && (
            <span className="bg-rose-500 text-white px-1.5 py-0.2 rounded-full text-xs font-bold">
              {activeAnalysis.concerns.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveSubTab('checklist')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'checklist'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <CheckSquare className="w-4 h-4 text-emerald-500" /> Checklist & Questions
        </button>

        <button
          onClick={() => setActiveSubTab('chat')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'chat'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <MessageSquare className="w-4 h-4 text-indigo-400" /> Grounded Q&A Chat
        </button>

        <button
          onClick={() => setActiveSubTab('compare')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition ${
            activeSubTab === 'compare'
              ? 'bg-legal-900 text-amber-300 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <GitCompare className="w-4 h-4 text-cyan-400" /> Compare Contracts
        </button>
      </div>

      {/* Active Tab View */}
      {activeSubTab === 'overview' && (
        <AnalysisOverview
          analysis={activeAnalysis}
          onNavigateToLawyers={onNavigateToLawyers}
          onCompareWithSample={() => setActiveSubTab('compare')}
        />
      )}

      {activeSubTab === 'clauses' && (
        <ClauseExplorer
          clauses={activeAnalysis.clauses}
          onAskAboutClause={handleAskAboutClause}
        />
      )}

      {activeSubTab === 'obligations' && (
        <ObligationsTimeline
          obligations={activeAnalysis.obligations}
          keyDatesAndAmounts={activeAnalysis.keyDatesAndAmounts}
          firstPartyName={activeAnalysis.primaryParties.firstParty}
          secondPartyName={activeAnalysis.primaryParties.secondParty}
        />
      )}

      {activeSubTab === 'concerns' && (
        <ConcernsRadar
          concerns={activeAnalysis.concerns}
          onNavigateToLawyers={() => onNavigateToLawyers(activeAnalysis.derivedPracticeArea)}
        />
      )}

      {activeSubTab === 'checklist' && (
        <ActionChecklist
          checklist={activeAnalysis.actionChecklist}
          suggestedLawyerQuestions={activeAnalysis.suggestedLawyerQuestions}
          docTitle={activeAnalysis.fileName}
        />
      )}

      {activeSubTab === 'chat' && (
        <ContextChat
          analysis={activeAnalysis}
          fullText={activeDocText}
          chunks={chunks}
          initialQuestion={chatInitialQuestion}
          onClearInitialQuestion={() => setChatInitialQuestion(undefined)}
        />
      )}

      {activeSubTab === 'compare' && (
        <DocumentComparisonView
          currentDocTitle={activeAnalysis.fileName}
          currentDocText={activeDocText}
        />
      )}
    </div>
  );
};
