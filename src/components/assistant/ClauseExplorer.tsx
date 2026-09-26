import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  MessageSquare, 
  Filter,
  Eye,
  ShieldAlert
} from 'lucide-react';
import { ClauseItem } from '../../types/legal';

interface ClauseExplorerProps {
  clauses: ClauseItem[];
  onAskAboutClause: (clause: ClauseItem) => void;
}

export const ClauseExplorer: React.FC<ClauseExplorerProps> = ({
  clauses,
  onAskAboutClause
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'simplified' | 'original' | 'both'>('simplified');
  const [expandedClauseId, setExpandedClauseId] = useState<string | null>(clauses[0]?.id || null);

  const categories = [
    { id: 'all', label: 'All Clauses' },
    { id: 'termination', label: 'Termination' },
    { id: 'liability', label: 'Liability & Indemnity' },
    { id: 'payment', label: 'Payment & Fees' },
    { id: 'confidentiality', label: 'Confidentiality & IP' },
    { id: 'dispute', label: 'Disputes & Law' },
  ];

  const filteredClauses = activeCategory === 'all'
    ? clauses
    : clauses.filter(c => {
        if (activeCategory === 'confidentiality') {
          return c.category === 'confidentiality' || c.category === 'ip';
        }
        return c.category === activeCategory;
      });

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Extracted Clauses & Plain-English Explanations
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Toggle between legal jargon and everyday explanations to understand what you're actually agreeing to.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="inline-flex rounded-lg bg-slate-100 p-1 text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setViewMode('simplified')}
            className={`px-3 py-1.5 rounded-md transition ${
              viewMode === 'simplified'
                ? 'bg-white text-indigo-700 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Plain English
          </button>
          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 rounded-md transition ${
              viewMode === 'original'
                ? 'bg-white text-indigo-700 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Original Text
          </button>
          <button
            onClick={() => setViewMode('both')}
            className={`px-3 py-1.5 rounded-md transition ${
              viewMode === 'both'
                ? 'bg-white text-indigo-700 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Side-by-Side
          </button>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 text-xs">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full font-medium transition ${
              activeCategory === cat.id
                ? 'bg-legal-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Clauses list */}
      <div className="space-y-4">
        {filteredClauses.map((clause) => {
          const isExpanded = expandedClauseId === clause.id;
          const hasRisk = clause.severity === 'critical' || clause.severity === 'high';

          return (
            <div
              key={clause.id}
              className={`rounded-xl border transition-all ${
                hasRisk 
                  ? 'border-orange-300 bg-orange-50/20' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              } ${isExpanded ? 'ring-1 ring-indigo-500/30 shadow-sm' : ''}`}
            >
              {/* Header row */}
              <div
                onClick={() => setExpandedClauseId(isExpanded ? null : clause.id)}
                className="p-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {clause.sectionNumber || 'Clause'}
                  </span>
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">
                    {clause.title}
                  </h4>
                  {hasRisk && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 flex-shrink-0">
                      <ShieldAlert className="w-3 h-3" /> Potential Concern
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-indigo-600 font-medium hidden sm:inline">
                    {isExpanded ? 'Collapse' : 'Expand'}
                  </span>
                </div>
              </div>

              {/* Clause Body */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                  {/* Risk Callout if any */}
                  {clause.potentialRisk && (
                    <div className="p-3 rounded-lg bg-orange-100/70 border border-orange-200 text-orange-950 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Watch Out:</strong> {clause.potentialRisk}
                      </div>
                    </div>
                  )}

                  {/* Mode = Simplified */}
                  {(viewMode === 'simplified' || viewMode === 'both') && (
                    <div className="p-3.5 rounded-lg bg-indigo-50/50 border border-indigo-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                        Plain-English Explanation (What This Means For You)
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {clause.simplifiedExplanation}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-indigo-200/60 text-slate-600">
                        <strong className="text-indigo-900 text-xs">Why It Matters:</strong> {clause.whyItMatters}
                      </div>
                    </div>
                  )}

                  {/* Mode = Original */}
                  {(viewMode === 'original' || viewMode === 'both') && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-sans">
                        Original Document Language
                      </div>
                      <p className="whitespace-pre-wrap leading-relaxed">
                        "{clause.originalText}"
                      </p>
                    </div>
                  )}

                  {/* Quick Action Button to ask question in chat */}
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => onAskAboutClause(clause)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-semibold transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                      Ask AI About This Clause
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
