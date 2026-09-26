import React, { useState } from 'react';
import { 
  CheckSquare, 
  HelpCircle, 
  Copy, 
  Check, 
  Printer, 
  Share2, 
  ListOrdered 
} from 'lucide-react';

interface ActionChecklistProps {
  checklist: string[];
  suggestedLawyerQuestions: string[];
  docTitle: string;
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({
  checklist,
  suggestedLawyerQuestions,
  docTitle
}) => {
  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({});
  const [copiedQuestions, setCopiedQuestions] = useState(false);

  const toggleCheck = (idx: number) => {
    setCompletedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyQuestions = () => {
    const formatted = `LEGAL CONSULTATION QUESTIONS FOR: ${docTitle}\n\n` +
      suggestedLawyerQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n') +
      `\n\n(Generated via AdvoChat AI Legal Assistant)`;

    navigator.clipboard.writeText(formatted);
    setCopiedQuestions(true);
    setTimeout(() => setCopiedQuestions(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-indigo-600" />
            Actionable Checklist & Lawyer Questions
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Steps to complete before signing, plus tailored questions to bring to your consultation.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handleCopyQuestions}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition"
          >
            {copiedQuestions ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedQuestions ? 'Copied Questions!' : 'Copy Questions'}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Checklist
          </button>
        </div>
      </div>

      {/* Pre-signing checklist */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <ListOrdered className="w-4 h-4 text-indigo-600" /> Pre-Signing Due Diligence Checklist
        </h4>

        <div className="space-y-2">
          {checklist.map((item, idx) => {
            const isDone = Boolean(completedItems[idx]);
            return (
              <label
                key={idx}
                className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer ${
                  isDone 
                    ? 'bg-emerald-50/50 border-emerald-200 text-slate-500 line-through' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggleCheck(idx)}
                  className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Questions for a lawyer */}
      <div className="pt-4 border-t border-slate-200 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-indigo-600" /> Questions to Take to Your Legal Consultation
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {suggestedLawyerQuestions.map((q, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
            >
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                {idx + 1}
              </span>
              <p className="leading-relaxed font-medium">
                "{q}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
