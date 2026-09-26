import React, { useState } from 'react';
import { 
  CheckSquare, 
  Copy, 
  Check, 
  Printer, 
  ListOrdered,
  FileText,
  ShieldAlert,
  ArrowRight,
  Briefcase
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
  const [activeTab, setActiveTab] = useState<'checklists' | 'options' | 'dossier'>('checklists');
  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({});
  const [copiedQuestions, setCopiedQuestions] = useState(false);
  const [copiedDossier, setCopiedDossier] = useState(false);
  const [clientNotes, setClientNotes] = useState('');

  const toggleCheck = (idx: number) => {
    setCompletedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyQuestions = () => {
    const formatted = `LEGAL CONSULTATION QUESTIONS FOR: ${docTitle}\n\n` +
      suggestedLawyerQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n') +
      `\n\n(Generated via AdvoChat AI Legal Assistant - Information & Assistance, Not Legal Advice)`;

    navigator.clipboard.writeText(formatted);
    setCopiedQuestions(true);
    setTimeout(() => setCopiedQuestions(false), 2500);
  };

  const handleCopyFullDossier = () => {
    const dossierText = `==========================================================
ADVOCATE CONSULTATION DOSSIER (PREPARED VIA ADVOCHAT)
==========================================================
Document: ${docTitle}
Prepared For: Client Legal Consultation
Statutory Grounding: Indian Contract Act 1872, Transfer of Property Act 1882, BNS 2023, DPDP Act 2023

1. ACTIONABLE PRE-SIGNING CHECKLIST:
${checklist.map((item, idx) => `[${completedItems[idx] ? 'DONE' : 'PENDING'}] ${item}`).join('\n')}

2. CRITICAL QUESTIONS FOR THE ADVOCATE:
${suggestedLawyerQuestions.map((q, idx) => `Q${idx + 1}: ${q}`).join('\n')}

3. CLIENT NOTES & DISPUTE FACTS:
${clientNotes.trim() ? clientNotes : 'No additional client notes provided.'}

==========================================================
NOTE: Prepared for informational and consultation assistance under Section 29, Advocates Act 1961. Does not replace formal legal representation.
==========================================================`;

    navigator.clipboard.writeText(dossierText);
    setCopiedDossier(true);
    setTimeout(() => setCopiedDossier(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      {/* Top Header & Problem Statement Mapping */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-bold">
              Use Cases 5, 6 &amp; 7
            </span>
            <span className="text-xs text-slate-500 font-medium">• Actionable Legal Protocols</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mt-1">
            <CheckSquare className="w-5 h-5 text-indigo-600" />
            Checklists, Next Steps &amp; Lawyer Preparation
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Turn complex legal documents into clear checklists, understand your remedies, and prepare structured questions for your advocate.
          </p>
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <button
            onClick={handleCopyFullDossier}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition"
          >
            {copiedDossier ? <Check className="w-3.5 h-3.5 text-white" /> : <Briefcase className="w-3.5 h-3.5" />}
            {copiedDossier ? 'Dossier Copied!' : 'Copy Lawyer Dossier'}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Dossier
          </button>
        </div>
      </div>

      {/* Segmented Tab Controls */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('checklists')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
            activeTab === 'checklists'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>6. Due Diligence Checklist</span>
        </button>

        <button
          onClick={() => setActiveTab('options')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
            activeTab === 'options'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <ArrowRight className="w-4 h-4" />
          <span>5. Options &amp; Next Steps</span>
        </button>

        <button
          onClick={() => setActiveTab('dossier')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
            activeTab === 'dossier'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>7. Prepare for Lawyer</span>
        </button>
      </div>

      {/* TAB 1: DUE DILIGENCE CHECKLIST (Use Case 6) */}
      {activeTab === 'checklists' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-indigo-600" /> Pre-Signing Due Diligence Checklist ({checklist.length} Steps)
            </h4>
            <span className="text-xs text-slate-500 font-medium">
              {Object.values(completedItems).filter(Boolean).length} of {checklist.length} verified
            </span>
          </div>

          <div className="space-y-2">
            {checklist.map((item, idx) => {
              const isDone = Boolean(completedItems[idx]);
              return (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition cursor-pointer ${
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
      )}

      {/* TAB 2: OPTIONS & POTENTIAL NEXT STEPS (Use Case 5) */}
      {activeTab === 'options' && (
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
            <ArrowRight className="w-4 h-4 text-indigo-600" /> Options &amp; Remedial Pathways Under Indian Law
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Pathway 1: Amicable Negotiation &amp; Written Counter-Notice</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before initiating formal legal proceedings, issue a written communication (via speed post or registered email) citing statutory grounds (e.g. 15 to 30 days mandatory notice under Section 106 Transfer of Property Act).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase">
                <ShieldAlert className="w-4 h-4 text-indigo-600" />
                <span>Pathway 2: Consumer Dispute Filing (e-Daakhil)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For unfair trade practices or deficiency of services by commercial landlords or tech vendors, file an online complaint on the Government of India e-Daakhil portal (edaakhil.nic.in) under Consumer Protection Act 2019 without advocate fees.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>Pathway 3: Pre-Institution Mediation</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under the Commercial Courts Act 2015 and the Mediation Act 2023, parties to service contracts or commercial leases can request pre-litigation mediation at the District Legal Services Authority (DLSA) for rapid dispute settlement.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Pathway 4: Formal Legal Notice via Advocate</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the counterparty refuses to return security deposits or threatens arbitrary termination, engage an advocate to issue a formal 15-day Demand Notice under Section 106 or Section 73 (Damages) before filing a suit in Civil Court.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PREPARE FOR A LEGAL PROFESSIONAL (Use Case 7) */}
      {activeTab === 'dossier' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-600" /> Advocate Consultation Dossier Generator
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Take this structured dossier to your consultation so your advocate has all facts, flagged clauses, and questions upfront.
              </p>
            </div>
            <button
              onClick={handleCopyQuestions}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition self-start sm:self-auto"
            >
              {copiedQuestions ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedQuestions ? 'Copied Questions!' : 'Copy Questions Only'}
            </button>
          </div>

          {/* Dossier Document Card */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="font-bold text-slate-900 text-sm">Consultation File: {docTitle}</span>
              </div>
              <span className="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold">
                READY FOR ADVOCATE
              </span>
            </div>

            {/* Questions to Ask */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tailored Questions to Ask Your Advocate:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {suggestedLawyerQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
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

            {/* Client Personal Notes Textarea */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5">
              <label htmlFor="client-notes" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Your Private Dispute Notes &amp; Facts for the Advocate:
              </label>
              <textarea
                id="client-notes"
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                placeholder="Type any specific facts (e.g. date rent was paid, email conversations, security deposit amount received) to include in the exported consultation brief..."
                rows={3}
                className="w-full p-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
