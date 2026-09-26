import React from 'react';
import { 
  FileCheck2, 
  AlertTriangle, 
  ShieldAlert, 
  Users, 
  Calendar, 
  Layers, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { DocumentAnalysisResult, SeverityLevel } from '../../types/legal';

interface AnalysisOverviewProps {
  analysis: DocumentAnalysisResult;
  onNavigateToLawyers: (practiceArea: string) => void;
  onCompareWithSample?: () => void;
}

export const AnalysisOverview: React.FC<AnalysisOverviewProps> = ({
  analysis,
  onNavigateToLawyers,
  onCompareWithSample
}) => {
  const getRiskBadge = (level: SeverityLevel) => {
    switch (level) {
      case 'critical':
        return {
          bg: 'bg-rose-100 text-rose-800 border-rose-300',
          icon: ShieldAlert,
          label: 'Critical Risk Detected',
          desc: 'Contains aggressive unilateral terms or high-liability forfeiture.'
        };
      case 'high':
        return {
          bg: 'bg-orange-100 text-orange-800 border-orange-300',
          icon: AlertTriangle,
          label: 'High Risk Items Present',
          desc: 'Clauses heavily favor counterparty or limit your standard remedies.'
        };
      case 'medium':
        return {
          bg: 'bg-amber-100 text-amber-800 border-amber-300',
          icon: AlertTriangle,
          label: 'Moderate Risk',
          desc: 'Standard commercial contract with a few clauses warranting clarification.'
        };
      case 'low':
      default:
        return {
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          icon: FileCheck2,
          label: 'Low / Standard Risk',
          desc: 'Balanced mutual commitments with reciprocal protections.'
        };
    }
  };

  const risk = getRiskBadge(analysis.overallRiskLevel);
  const RiskIcon = risk.icon;

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
              {analysis.documentType}
            </span>
            <span className="text-xs text-slate-500">
              • Analyzed {new Date(analysis.analyzedAt).toLocaleDateString()}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-6 h-6 text-indigo-600" />
            {analysis.fileName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Word count: <strong>{analysis.wordCount} words</strong> • AI Confidence: <strong>{Math.round(analysis.confidenceScore * 100)}%</strong>
          </p>
        </div>

        {/* Risk Meter */}
        <div className={`p-4 rounded-xl border flex items-center gap-3.5 ${risk.bg} self-start md:self-auto`}>
          <div className="p-2 rounded-lg bg-white/70 shadow-sm">
            <RiskIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider">{risk.label}</div>
            <div className="text-xs opacity-90 max-w-xs">{risk.desc}</div>
          </div>
        </div>
      </div>

      {/* Primary Parties & Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Contracting Parties</div>
            <div className="text-sm font-semibold text-slate-800 mt-0.5">
              {analysis.primaryParties.firstParty} <span className="text-slate-400 font-normal">and</span> {analysis.primaryParties.secondParty}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Derived Practice Area: <strong>{analysis.derivedPracticeArea}</strong>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Effective Timeline</div>
            <div className="text-sm font-semibold text-slate-800 mt-0.5">
              {analysis.keyDatesAndAmounts[0]?.value || 'Date of Execution'}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Termination Notice: <strong>{analysis.keyDatesAndAmounts.find(k => k.type === 'period')?.value || '30 Days'}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Narrative */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Executive Plain-English Summary
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {analysis.summary}
        </p>
      </div>

      {/* Stat Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
          <div className="text-2xl font-bold text-legal-900">{analysis.clauses.length}</div>
          <div className="text-xs text-slate-500 font-medium">Extracted Clauses</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
          <div className="text-2xl font-bold text-indigo-600">{analysis.obligations.length}</div>
          <div className="text-xs text-slate-500 font-medium">Active Obligations</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
          <div className="text-2xl font-bold text-amber-600">{analysis.keyDatesAndAmounts.length}</div>
          <div className="text-xs text-slate-500 font-medium">Dates & Amounts</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
          <div className="text-2xl font-bold text-rose-600">{analysis.concerns.length}</div>
          <div className="text-xs text-slate-500 font-medium">Potential Concerns</div>
        </div>
      </div>

      {/* Smart Contextual Callout */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-indigo-50 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
          <div className="text-xs sm:text-sm text-indigo-950 font-medium">
            <strong>Context Derived:</strong> We matched your document to <strong>{analysis.derivedPracticeArea}</strong> lawyers nearby.
          </div>
        </div>
        <button
          onClick={() => onNavigateToLawyers(analysis.derivedPracticeArea)}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition"
        >
          View Matched Lawyers <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
