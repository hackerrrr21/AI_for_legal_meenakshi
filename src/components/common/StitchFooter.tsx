import React from 'react';

interface StitchFooterProps {
  onNavigate: (path: string) => void;
}

export const StitchFooter: React.FC<StitchFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#ebefea] border-t border-[#e2ddd5] py-10 px-4 sm:px-6 lg:px-8 text-[#506358] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-[#1b382b] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
            ⚖
          </div>
          <div>
            <span className="font-serif font-bold text-sm text-[#042217] block">AdvoChat • GenAI Legal Document Assistant</span>
            <span className="text-[11px] text-[#506358]">Grounded in Indian Law (Contract Act, BNS 2023, TP Act) • DPDP Act 2023 Privacy Compliant</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <button onClick={() => onNavigate('document-analysis')} className="hover:text-[#042217] transition">
            1. Simplify Docs
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('clause-inspector')} className="hover:text-[#042217] transition">
            2. Highlight Risks
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('doc-comparison')} className="hover:text-[#042217] transition">
            3. Compare Versions
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('ai-assistant')} className="hover:text-[#042217] transition">
            4. Document Q&amp;A
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('action-center')} className="hover:text-[#042217] transition">
            5. Checklists &amp; Lawyer Prep
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('legal-disclaimer')} className="hover:text-[#042217] font-semibold text-[#1b382b] transition">
            Statutory Disclaimer
          </button>
        </div>

        <div className="text-[11px] text-[#727974] text-center md:text-right max-w-sm">
          NOTE: Solutions provide information and assistance, rather than replace professional legal advice (Section 29, Advocates Act, 1961).
        </div>
      </div>
    </footer>
  );
};
