import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle, 
  ExternalLink,
  Scale
} from 'lucide-react';
import { ConcernItem, SeverityLevel } from '../../types/legal';

interface ConcernsRadarProps {
  concerns: ConcernItem[];
  onNavigateToLawyers: () => void;
}

export const ConcernsRadar: React.FC<ConcernsRadarProps> = ({
  concerns,
  onNavigateToLawyers
}) => {
  if (concerns.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No High-Risk Red Flags Detected</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
          This document appears to utilize balanced standard terms without unilateral indemnification or aggressive lock-in forfeiture traps.
        </p>
      </div>
    );
  }

  const getSeverityBadge = (severity: SeverityLevel) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-rose-100 text-rose-800 border-rose-200',
          label: 'Critical Concern'
        };
      case 'high':
        return {
          bg: 'bg-orange-100 text-orange-800 border-orange-200',
          label: 'High Risk'
        };
      default:
        return {
          bg: 'bg-amber-100 text-amber-800 border-amber-200',
          label: 'Advisory'
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            Potential Concerns & Red Flag Analysis
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Unilateral clauses, restrictive covenants, and ambiguous liabilities that could expose you to risk.
          </p>
        </div>

        <button
          onClick={onNavigateToLawyers}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-legal-900 hover:bg-legal-800 text-amber-300 text-xs font-semibold shadow-sm transition self-start sm:self-auto"
        >
          <Scale className="w-3.5 h-3.5" /> Consult a Lawyer About These
        </button>
      </div>

      <div className="space-y-4">
        {concerns.map((concern) => {
          const badge = getSeverityBadge(concern.severity);
          return (
            <div
              key={concern.id}
              className="p-5 rounded-xl border border-rose-200 bg-rose-50/20 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  {concern.title}
                </h4>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border self-start sm:self-auto ${badge.bg}`}>
                  {badge.label}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {concern.description}
              </p>

              {/* Recommendation */}
              <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
                <strong className="text-slate-900 block mb-0.5">💡 How to Fix or Counter-Negotiate:</strong>
                {concern.recommendation}
              </div>

              {/* Question to take to a lawyer */}
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-indigo-900 block mb-0.5">Suggested Question for Your Lawyer:</strong>
                  "{concern.lawyerQuestionSuggestion}"
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
