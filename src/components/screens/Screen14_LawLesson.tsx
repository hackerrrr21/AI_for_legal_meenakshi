import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen14_LawLessonProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen14_LawLesson: React.FC<Screen14_LawLessonProps> = ({
  onNavigate,
  userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample,
  ...props
}) => {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [expandedTerm, setExpandedTerm] = useState<string | null>('term-1');

  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md">
        <div className="flex flex-col gap-space-lg">
          <div className="px-space-sm pt-space-xs">
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div>
            <div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Meridian India vs. Vantage</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">High Court of Delhi • #2024-HC-88219</div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Legal Knowledge</div>
            <nav className="flex flex-col gap-0.5">
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Law Library &amp; Academy</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-chapter')} href="javascript:void(0)">Chapters &amp; Sections</a>
              <a aria-current="page" className="px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded font-body-sm text-body-sm" onClick={() => onNavigate('law-lesson')} href="javascript:void(0)">Interactive Lesson (Sec 2.4)</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('doctrinal-quiz')} href="javascript:void(0)">Doctrinal Assessment</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span>
            <span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention privilege mode active.</div>
        </div>
      </aside>

      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-surface">
          <div className="flex flex-col w-full">
            {/* Masthead & Telemetry Section */}
            <section className="w-full bg-surface-container-low px-gutter py-space-md shadow-sm">
              <div className="max-w-[1400px] mx-auto flex flex-col gap-space-sm">
                {/* Breadcrumbs */}
                <nav aria-label="Curriculum Breadcrumb" className="flex items-center gap-2 text-on-surface-variant flex-wrap">
                  <span className="material-symbols-outlined text-[16px] text-secondary">local_library</span>
                  <a className="font-label-sm text-label-sm hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('law-library')}>Law Library &amp; Juris Academy</a>
                  <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
                  <a className="font-label-sm text-label-sm hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('law-chapter')}>The Constitution &amp; Contract Act</a>
                  <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
                  <a className="font-label-sm text-label-sm hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('law-chapter')}>Chapter 2: Restraints of Trade</a>
                  <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Section 2.4</span>
                </nav>

                {/* Main Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
                  <div className="flex flex-col gap-1 max-w-4xl">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        Supreme Court of India Landmark Precedent
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">• Module #IND-CON-2024-04</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-medium">
                      Section 2.4: Section 27, Indian Contract Act vs. Article 19(1)(g) of The Constitution of India: Why Post-Employment Non-Competes are Void in India
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Doctrinal mechanics of <span className="italic font-display-md text-on-surface">Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (2006)</span>, <span className="italic">Niranjan Shankar Golikari (1967)</span>, and the absolute statutory voidness of post-termination restrictions.
                    </p>
                  </div>

                  <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                    <div className="w-10 h-10 rounded-md bg-primary-container text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">balance</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Active Case Impact</span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[210px]">
                        Meridian India vs. Vantage
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary font-medium">
                        Clause 4.2 Non-Compete Invalidation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Strip */}
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2 text-on-surface-variant">
                  <div className="flex flex-wrap items-center gap-space-md text-secondary">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span className="font-label-sm text-label-sm">Est. 18 min study time</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">auto_stories</span>
                      <span className="font-label-sm text-label-sm">5 Systematic Pedagogical Phases</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-sm text-label-sm font-semibold text-primary">50 XP Award Eligible</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
                    <span>Active Phase:</span>
                    <span className="font-semibold text-primary">Phase {activePhase} of 5</span>
                  </div>
                </div>

                {/* 5-Phase Step Bar */}
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1 flex">
                  {[1, 2, 3, 4, 5].map(phase => (
                    <div
                      key={phase}
                      onClick={() => setActivePhase(phase)}
                      className={`flex-1 h-full cursor-pointer transition-colors ${
                        phase <= activePhase ? 'bg-primary' : 'bg-surface-variant'
                      }`}
                      title={`Phase ${phase}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Audio Reader Utility Toolbar */}
            <section className="sticky top-16 z-30 w-full bg-surface-container-lowest/95 backdrop-blur shadow-sm px-gutter py-2">
              <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm bg-surface-container-low px-space-sm py-1 rounded-md">
                  <button 
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity" 
                    title="Play / Pause Audio Lecture"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isPlayingAudio ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-semibold text-secondary">
                      {isPlayingAudio ? 'Playing Narration: Dr. D.D. Basu & Zaheer Khan Ruling' : 'Narration: Indian Supreme Court Analysis'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => onNavigate('doctrinal-quiz')}
                    className="px-space-md py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">quiz</span>
                    <span>Proceed to Assessment (Screen 15)</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Main Lesson Dual-Column Split */}
            <div className="w-full max-w-[1400px] mx-auto px-gutter py-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              {/* Left Column: Lesson Content (8 Cols) */}
              <article className="lg:col-span-8 flex flex-col gap-space-xl">

                {/* PHASE 1: Statutory Codex & Exact Excerpts */}
                <section id="phase-1" className="scroll-mt-32 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-1 border-b border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[12px] font-bold flex items-center justify-center">1</span>
                    <h2 className="font-headline-md text-headline-md text-primary font-serif font-semibold">
                      Phase 1: Statutory Codex &amp; Exact Statutory Excerpts
                    </h2>
                  </div>

                  <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border-l-4 border-primary">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Statutory Instrument: Section 27, The Indian Contract Act, 1872
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container font-mono">Central Act No. 9 of 1872</span>
                    </div>
                    <blockquote className="p-space-md rounded bg-surface-container-low font-serif text-[16px] text-primary italic leading-relaxed">
                      "Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void."
                    </blockquote>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      <strong>Exception 1:</strong> Saving of agreement not to carry on business of which good-will is sold. (Note: Indian law recognizes NO other exception for employment agreements).
                    </p>
                  </div>

                  <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border-l-4 border-tertiary">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Constitutional Instrument: Article 19(1)(g) &amp; Article 19(6)
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container font-mono">The Constitution of India</span>
                    </div>
                    <blockquote className="p-space-md rounded bg-surface-container-low font-serif text-[16px] text-primary italic leading-relaxed">
                      "All citizens shall have the right to practise any profession, or to carry on any occupation, trade or business... Nothing in sub-clause (g) shall affect the operation of any existing law... imposing reasonable restrictions in the interests of the general public."
                    </blockquote>
                  </div>

                  <div className="p-space-md rounded bg-secondary-container/50 text-on-secondary-container flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">menu_book</span>
                    <div className="font-body-sm text-body-sm leading-relaxed">
                      <strong className="text-primary font-semibold">Treatise Insight — Pollock &amp; Mulla on The Indian Contract Act:</strong>
                      <p className="mt-1">
                        "The law in India is clear and distinct from English Common Law. Section 27 does not recognize the test of reasonableness for post-employment covenants. A contract in restraint of trade is void, not voidable, and courts have no power to create new exceptions or rewrite the contract through blue-penciling."
                      </p>
                    </div>
                  </div>
                </section>

                {/* PHASE 2: Plain-Language Codex & Doctrinal Mechanics */}
                <section id="phase-2" className="scroll-mt-32 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-1 border-b border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[12px] font-bold flex items-center justify-center">2</span>
                    <h2 className="font-headline-md text-headline-md text-primary font-serif font-semibold">
                      Phase 2: Plain-Language Codex &amp; The 3 Golden Rules
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                      <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">During Term vs. Post-Term</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Negative covenants during the active subsistence of employment are valid (an employee cannot moonlight or serve competitors while employed full-time, per <em>Niranjan Shankar Golikari</em>).
                      </p>
                    </div>

                    <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                      <div className="w-8 h-8 rounded bg-error/10 text-error flex items-center justify-center font-bold">2</div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Post-Term is 100% Void</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Any clause that restrains a former employee from taking up work with a competitor or starting a rival enterprise after resignation/termination is strictly void ab initio under Section 27.
                      </p>
                    </div>

                    <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                      <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 flex items-center justify-center font-bold">3</div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">No Blue-Penciling in India</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Unlike US courts which blue-pencil overbroad restrictions into narrower territories, Indian courts refuse to rewrite unlawful restraints. The whole post-service restraint is struck down.
                      </p>
                    </div>
                  </div>
                </section>

                {/* PHASE 3: Strategic Risk Matrix */}
                <section id="phase-3" className="scroll-mt-32 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-1 border-b border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[12px] font-bold flex items-center justify-center">3</span>
                    <h2 className="font-headline-md text-headline-md text-primary font-serif font-semibold">
                      Phase 3: Strategic Risk Matrix — Indian Law vs. Foreign Doctrines
                    </h2>
                  </div>

                  <div className="overflow-x-auto rounded-lg bg-surface-container-lowest shadow-sm">
                    <table className="w-full text-left font-body-sm text-body-sm">
                      <thead>
                        <tr className="bg-surface-container text-primary font-semibold border-b border-surface-container-high">
                          <th className="p-3">Covenant Type</th>
                          <th className="p-3">Indian Law Position</th>
                          <th className="p-3">US / UK Common Law</th>
                          <th className="p-3">Statutory Anchor</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-container-high">
                        <tr>
                          <td className="p-3 font-semibold text-on-surface">Post-Employment Non-Compete</td>
                          <td className="p-3 text-error font-semibold">VOID AB INITIO (Unenforceable)</td>
                          <td className="p-3 text-secondary">Enforceable if Reasonable</td>
                          <td className="p-3 font-mono text-[12px]">Section 27 ICA / Art 19(1)(g)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-on-surface">Non-Solicitation of Customers</td>
                          <td className="p-3 text-primary font-medium">Valid if Narrowly Tailored to IP</td>
                          <td className="p-3 text-secondary">Commonly Enforceable</td>
                          <td className="p-3 font-mono text-[12px]">Proprietary Secrets Doctrine</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-on-surface">Garden Leave during Notice Period</td>
                          <td className="p-3 text-primary font-semibold">VALID (Employment Subsisting)</td>
                          <td className="p-3 text-secondary">Valid &amp; Standard</td>
                          <td className="p-3 font-mono text-[12px]">Golikari Distinction</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-on-surface">Equity / Distribution Forfeiture</td>
                          <td className="p-3 text-error font-semibold">VOID as In Terrorem Penalty</td>
                          <td className="p-3 text-secondary">Scrutinized under Ainslie Test</td>
                          <td className="p-3 font-mono text-[12px]">Section 74 ICA / Section 27</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* PHASE 4: Landmark Supreme Court Precedent */}
                <section id="phase-4" className="scroll-mt-32 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-1 border-b border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[12px] font-bold flex items-center justify-center">4</span>
                    <h2 className="font-headline-md text-headline-md text-primary font-serif font-semibold">
                      Phase 4: Landmark Supreme Court Precedent — Percept D'Mark v. Zaheer Khan
                    </h2>
                  </div>

                  <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-headline-sm text-headline-sm text-primary font-serif font-semibold">
                        Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan &amp; Anr.
                      </span>
                      <span className="font-mono text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                        (2006) 4 SCC 227
                      </span>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      <strong>The Fact Pattern:</strong> Cricketer Zaheer Khan entered a talent management contract with Percept D'Mark. The contract included a negative covenant that upon expiration of the contract term, Zaheer could not sign with any third-party agency without first giving Percept the right of first refusal to match the offer.
                    </p>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      <strong>The Supreme Court Holding:</strong> Justice D.K. Jain, delivering the judgment of the Supreme Court of India, held that:
                    </p>

                    <blockquote className="p-space-md rounded bg-surface-container-low font-serif text-[15px] text-primary italic leading-relaxed border-l-4 border-primary">
                      "(a) Under Section 27 of the Contract Act, a restrictive covenant extending beyond the term of the agreement is void and not enforceable.<br/>
                      (b) The doctrine of restraint of trade applies to all contracts, whether commercial or employment.<br/>
                      (c) Section 27 is clear and unequivocal, and courts cannot engraft common law doctrines of partial reasonableness onto the statute."
                    </blockquote>
                  </div>
                </section>

                {/* PHASE 5: Practice Deliberation & Proceed to Assessment */}
                <section id="phase-5" className="scroll-mt-32 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-1 border-b border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[12px] font-bold flex items-center justify-center">5</span>
                    <h2 className="font-headline-md text-headline-md text-primary font-serif font-semibold">
                      Phase 5: Practice Deliberation &amp; Matter Application
                    </h2>
                  </div>

                  <div className="p-space-md rounded-lg bg-surface-container p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">gavel</span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                        Application to Meridian India Clause 4.2
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      In the dispute before the Delhi High Court, Defendant Vantage claims that Clause 4.2's 24-month non-compete is enforceable because Dr. Chen accepted equity compensation. Under <em>Percept D'Mark v. Zaheer Khan</em>, this claim will fail decisively: payment of compensation does not validate a void restraint of trade, and Section 27 strictly protects Dr. Chen's Article 19(1)(g) constitutional freedom.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
                      <button 
                        onClick={() => onNavigate('doctrinal-quiz')}
                        className="w-full sm:w-auto px-space-md py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">quiz</span>
                        <span>Begin Doctrinal Assessment (Quiz 2.4)</span>
                      </button>
                      <button 
                        onClick={() => onNavigate('ai-assistant')}
                        className="w-full sm:w-auto px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">smart_toy</span>
                        <span>Consult Juris AI on Clause 4.2</span>
                      </button>
                    </div>
                  </div>
                </section>
              </article>

              {/* Right Companion Column */}
              <aside aria-label="Lesson Sidebar" className="lg:col-span-4 flex flex-col gap-space-md">
                {/* Table of Contents Widget */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Lesson Syllabus</span>
                    <span className="font-label-sm text-label-sm text-primary font-mono font-bold">5 Phases</span>
                  </div>
                  <nav className="flex flex-col gap-1 font-body-sm text-body-sm">
                    {[
                      { num: 1, title: '1. Statutory Codex & Excerpts', anchor: '#phase-1' },
                      { num: 2, title: '2. Plain-Language Codex', anchor: '#phase-2' },
                      { num: 3, title: '3. Strategic Risk Matrix', anchor: '#phase-3' },
                      { num: 4, title: '4. Percept D\'Mark Precedent', anchor: '#phase-4' },
                      { num: 5, title: '5. Practice Deliberation', anchor: '#phase-5' }
                    ].map(p => (
                      <a
                        key={p.num}
                        href={p.anchor}
                        onClick={() => setActivePhase(p.num)}
                        className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                          activePhase === p.num
                            ? 'bg-primary-container text-on-primary font-semibold'
                            : 'hover:bg-surface-container-low text-on-surface'
                        }`}
                      >
                        <span>{p.title}</span>
                        <span className="material-symbols-outlined text-[16px]">
                          {p.num <= activePhase ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Doctrinal Lexicon Drawer */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Doctrinal Lexicon</span>
                    <span className="material-symbols-outlined text-[16px] text-outline">menu_book</span>
                  </div>
                  <div className="flex flex-col gap-space-sm divide-y divide-surface-container-high">
                    <div className="pt-2 first:pt-0">
                      <button 
                        onClick={() => setExpandedTerm(expandedTerm === 'term-1' ? null : 'term-1')}
                        className="w-full text-left flex items-center justify-between font-label-md text-label-md text-primary font-semibold"
                      >
                        <span>Section 27 Rule</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {expandedTerm === 'term-1' ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {expandedTerm === 'term-1' && (
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Agreements in restraint of trade are void ab initio in India. No court can engraft partial reasonableness exceptions onto post-service restraints.
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => setExpandedTerm(expandedTerm === 'term-2' ? null : 'term-2')}
                        className="w-full text-left flex items-center justify-between font-label-md text-label-md text-primary font-semibold"
                      >
                        <span>Article 19(1)(g)</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {expandedTerm === 'term-2' ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {expandedTerm === 'term-2' && (
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Fundamental right of every citizen to practice any profession, trade or business. Private covenants cannot override this public policy mandate.
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => setExpandedTerm(expandedTerm === 'term-3' ? null : 'term-3')}
                        className="w-full text-left flex items-center justify-between font-label-md text-label-md text-primary font-semibold"
                      >
                        <span>Niranjan Golikari Rule</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {expandedTerm === 'term-3' ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {expandedTerm === 'term-3' && (
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Negative covenants operating during the term of employment are valid to prevent exclusive employees from serving competing masters.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Statutory Citations */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Statutory Authorities</span>
                  <ul className="font-body-sm text-body-sm space-y-1.5 text-on-surface">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary-container">link</span>
                      <span>Section 27, The Indian Contract Act, 1872</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary-container">link</span>
                      <span>Article 19(1)(g) &amp; Article 21, The Constitution of India</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary-container">link</span>
                      <span>Section 4(f) &amp; 111, Bharatiya Nyaya Sanhita, 2023 (BNS)</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
