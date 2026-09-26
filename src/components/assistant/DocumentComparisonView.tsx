import React, { useState } from 'react';
import { 
  GitCompare, 
  ShieldAlert, 
  CheckCircle, 
  AlertTriangle, 
  Plus, 
  Minus, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { DocumentComparisonResult } from '../../types/legal';
import { compareLegalDocuments } from '../../services/documentComparison';
import { SAMPLE_DOCUMENTS } from '../../data/sampleDocuments';

interface DocumentComparisonViewProps {
  currentDocTitle: string;
  currentDocText: string;
}

export const DocumentComparisonView: React.FC<DocumentComparisonViewProps> = ({
  currentDocTitle,
  currentDocText
}) => {
  const [selectedCounterpartId, setSelectedCounterpartId] = useState<string>(
    SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-harsh')?.id || SAMPLE_DOCUMENTS[1].id
  );

  const counterpartDoc = SAMPLE_DOCUMENTS.find(d => d.id === selectedCounterpartId) || SAMPLE_DOCUMENTS[1];

  const comparisonResult: DocumentComparisonResult = compareLegalDocuments(
    currentDocTitle,
    currentDocText,
    counterpartDoc.title,
    counterpartDoc.content
  );

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-indigo-600" />
            Contract Version Comparison & Risk Diff
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Compare terms side-by-side to pinpoint what was modified, removed, or snuck into a counteroffer.
          </p>
        </div>

        {/* Counterpart selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">Compare with:</span>
          <select
            value={selectedCounterpartId}
            onChange={(e) => setSelectedCounterpartId(e.target.value)}
            className="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {SAMPLE_DOCUMENTS.map(s => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Banner */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        comparisonResult.overallRiskImpact === 'higher_risk'
          ? 'bg-rose-50 border-rose-200 text-rose-900'
          : 'bg-emerald-50 border-emerald-200 text-emerald-900'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
            {comparisonResult.overallRiskImpact === 'higher_risk' ? (
              <ShieldAlert className="w-5 h-5 text-rose-600" />
            ) : (
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            )}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider">
              {comparisonResult.overallRiskImpact === 'higher_risk' ? 'Elevated Risk in Revision' : 'Balanced Comparison'}
            </div>
            <div className="text-xs mt-0.5 opacity-90 max-w-xl">
              {comparisonResult.summaryOfChanges}
            </div>
          </div>
        </div>
      </div>

      {/* Diff Table / Cards */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
          Detected Clause Deviations ({comparisonResult.differences.length})
        </h4>

        {comparisonResult.differences.map((diff, idx) => {
          const isAdded = diff.type === 'added';
          const isRemoved = diff.type === 'removed';
          const isModified = diff.type === 'modified';
          const isRiskier = diff.riskChange === 'increased';

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border space-y-3 ${
                isRiskier
                  ? 'border-orange-300 bg-orange-50/20'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`p-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                    isAdded ? 'bg-emerald-100 text-emerald-800' :
                    isRemoved ? 'bg-rose-100 text-rose-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {isAdded && <Plus className="w-3 h-3" />}
                    {isRemoved && <Minus className="w-3 h-3" />}
                    {isModified && <RefreshCw className="w-3 h-3" />}
                    {diff.type}
                  </span>
                  <h5 className="font-bold text-slate-800 text-sm">{diff.clauseTitle}</h5>
                </div>

                {isRiskier && (
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1 self-start sm:self-auto">
                    <AlertTriangle className="w-3 h-3" /> Risk Shift: Increased Liability
                  </span>
                )}
              </div>

              {/* Side by Side Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">
                    Doc A ({comparisonResult.docAName.slice(0, 30)}...):
                  </span>
                  <p className="text-slate-700">{diff.docAContent || '(Clause not present)'}</p>
                </div>

                <div className={`p-3 rounded-lg border ${
                  isRiskier ? 'bg-orange-50/80 border-orange-200' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="font-bold text-indigo-900 block mb-1">
                    Doc B ({comparisonResult.docBName.slice(0, 30)}...):
                  </span>
                  <p className="text-slate-800 font-medium">{diff.docBContent || '(Clause removed)'}</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900">Why this difference matters:</strong> {diff.explanation}
              </div>
            </div>
          );
        })}
      </div>

      {/* Negotiation Recommendations */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
        <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          Recommended Counter-Negotiation Strategy
        </h5>
        <ul className="list-disc pl-5 space-y-1">
          {comparisonResult.keyRecommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
