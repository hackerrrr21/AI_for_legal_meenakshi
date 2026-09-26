import React from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen08_ClauseInspectorProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen08_ClauseInspector: React.FC<Screen08_ClauseInspectorProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  onQuickLoadSample: _onQuickLoadSample
}) => {

  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen">
      {/* LEFT NAVIGATION DRAWER */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-[#f6fbf5] border-r border-[#e2ddd5] z-40 flex flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold">
              Clause Inspector
            </span>
            <div className="font-serif text-base text-[#042217] font-semibold mt-1">
              Plain English Analysis
            </div>
            <div className="text-xs text-[#506358] mt-0.5">
              Side-by-side translation
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold px-2 mb-1">
              Menu
            </span>
            <nav className="flex flex-col gap-1">
              <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="space_dashboard" className="text-[18px]" />
                <span>Overview Hub</span>
              </button>
              <button onClick={() => onNavigate('document-analysis')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="description" className="text-[18px]" />
                <span>1. Simplify Docs</span>
              </button>
              <button onClick={() => onNavigate('clause-inspector')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold bg-[#1b382b] text-white shadow-sm text-left">
                <StitchIcon name="find_in_page" className="text-[18px]" />
                <span>2. Highlight Risks</span>
              </button>
              <button onClick={() => onNavigate('doc-comparison')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="difference" className="text-[18px]" />
                <span>3. Compare Versions</span>
              </button>
              <button onClick={() => onNavigate('ai-assistant')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="chat" className="text-[18px]" />
                <span>4. Document Q&amp;A</span>
              </button>
              <button onClick={() => onNavigate('action-center')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="checklist" className="text-[18px]" />
                <span>5. Checklists &amp; Lawyer Prep</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-3 rounded bg-white border border-[#e2ddd5]">
          <div className="flex items-center gap-1.5 text-[#1b382b] font-bold text-xs">
            <StitchIcon name="lock" className="text-[16px]" />
            <span>Private &amp; Secure</span>
          </div>
          <div className="text-[11px] text-[#506358] leading-tight">
            Comparison is private to your session.
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-[#fbf9f5]">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2 pb-6 border-b border-[#e2ddd5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#506358]">
                <span>Home</span>
                <span>/</span>
                <span>Documents</span>
                <span>/</span>
                <span className="text-[#1b382b]">Clause 4 Breakdown</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-bold">
                      Flagged Clause
                    </span>
                    <span className="text-xs text-[#506358] font-medium">• Non-Compete &amp; Work Restrictions</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] font-semibold mt-1 tracking-tight">
                    Clause 4.2: Non-Compete Restrictions After Leaving
                  </h1>
                  <p className="text-xs sm:text-sm text-[#424844] mt-1.5 max-w-2xl leading-relaxed">
                    Compare the exact legal text written in the contract with a plain-English explanation of your legal rights under Indian Law.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
                  <button
                    onClick={() => onNavigate('ai-assistant')}
                    className="px-4 py-2 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center gap-1.5"
                  >
                    <StitchIcon name="chat" className="text-[18px]" />
                    <span>Ask AI About This Clause</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Indian Law Alert Box */}
            <div className="p-5 rounded-xl bg-white border border-[#c5a880] shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#fedeb2] text-[#281800] flex items-center justify-center flex-shrink-0">
                <StitchIcon name="gavel" className="text-[22px]" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#042217] font-semibold">
                  Indian Law Protection: Section 27 of The Indian Contract Act, 1872
                </h4>
                <p className="text-xs text-[#506358] mt-1 leading-relaxed">
                  In India, any agreement that stops you from working, taking up another job, or starting your own business after leaving is <strong>100% void ab initio</strong> (invalid from the start). The Supreme Court of India in <em>Percept D'Mark v. Zaheer Khan</em> ruled that companies cannot enforce post-employment non-compete bans.
                </p>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Original Legal Text */}
              <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#e2ddd5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#506358]">Original Legal Text</span>
                  <span className="px-2 py-0.5 rounded bg-[#f0f5f0] text-[10px] font-mono text-[#506358]">Verbatim</span>
                </div>
                <div className="p-4 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5] font-serif text-xs sm:text-sm text-[#181d1a] leading-relaxed italic">
                  "During the period of engagement and for eighteen (18) months following termination of this Agreement for any reason, Contractor shall not directly or indirectly develop software, consult, or provide services to any company operating in the enterprise AI or technology sector within the country."
                </div>
                <div className="text-xs text-[#506358] leading-relaxed">
                  <strong>Why it looks scary:</strong> It uses broad phrases like "directly or indirectly" and sets an 18-month ban across the entire technology sector.
                </div>
              </div>

              {/* Right Column: Plain English Translation */}
              <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#e2ddd5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1b382b]">Plain English Meaning</span>
                  <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[10px] font-bold text-[#042217]">Simple Words</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#424844] leading-relaxed">
                  <p>
                    <strong>What the company is asking:</strong> They are asking you to promise that you will not work for any competitor or build AI software for 18 months after you leave.
                  </p>
                  <p>
                    <strong>Is it enforceable in India?</strong> <strong>No.</strong> Under Section 27 of the Indian Contract Act, Indian courts will not enforce this ban once your contract ends. You have the constitutional right (Article 19) to earn a living.
                  </p>
                  <p>
                    <strong>What you should still be careful about:</strong> While they cannot stop you from taking a new job, you cannot steal their private source code or confidential client lists.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Checklist for this Clause */}
            <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-3">
              <h4 className="font-serif text-base text-[#042217] font-semibold">
                Recommended Action
              </h4>
              <div className="text-xs sm:text-sm text-[#424844] space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1b382b] mt-2 flex-shrink-0" />
                  <span>Ask the company in writing to clarify that confidentiality applies strictly to proprietary code, not to your general ability to work.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1b382b] mt-2 flex-shrink-0" />
                  <span>Rest assured that under Indian Supreme Court rulings, you cannot be sued for simply taking another job in your field.</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
