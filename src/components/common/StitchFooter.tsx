import React from 'react';
import { StitchIcon } from './StitchIcon';

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
            <span className="font-serif font-bold text-sm text-[#042217] block">AdvoChat Institutional Legal Intelligence</span>
            <span className="text-[11px] text-[#506358]">Compliant with Model Rule 1.6 & ABA Formal Opinion 477R (Secured Digital Enclave)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <button onClick={() => onNavigate('legal-disclaimer')} className="hover:text-[#042217] transition">
            Privilege Notice
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('terms-covenant')} className="hover:text-[#042217] transition">
            Terms & Covenant
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('settings')} className="hover:text-[#042217] transition">
            Governance & Retention
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('action-center')} className="hover:text-[#042217] transition">
            Action Center
          </button>
        </div>

        <div className="text-[11px] text-[#727974] text-center md:text-right">
          © 2026 AdvoChat Systems Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
