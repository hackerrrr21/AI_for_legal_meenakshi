import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen13_LawChapterProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen13_LawChapter: React.FC<Screen13_LawChapterProps> = ({
  onNavigate,
  userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample,
  ...props
}) => {
  const [openChapter, setOpenChapter] = useState<number>(2); // Default to Chapter 2

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
              <a aria-current="page" className="px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded font-body-sm text-body-sm" onClick={() => onNavigate('law-chapter')} href="javascript:void(0)">Chapters &amp; Sections</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-lesson')} href="javascript:void(0)">Current Lesson (Sec 2.4)</a>
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
            {/* Top Utility Context & Breadcrumbs Bar */}
            <section className="w-full bg-surface-container-low/70 px-gutter py-space-sm shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
              <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm flex-wrap">
                  <a className="hover:text-primary transition-colors flex items-center gap-1" onClick={() => onNavigate('law-library')} href="javascript:void(0)">
                    <span className="material-symbols-outlined text-[14px]">local_library</span>
                    <span>Law Library &amp; Juris Academy</span>
                  </a>
                  <span className="text-outline-variant font-semibold">/</span>
                  <a className="hover:text-primary transition-colors" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Curriculum Tracks</a>
                  <span className="text-outline-variant font-semibold">/</span>
                  <span className="text-on-surface font-semibold flex items-center gap-1">
                    The Constitution of India &amp; Restraints of Trade
                    <span className="ml-1 px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-[10px] tracking-widest uppercase text-secondary font-bold">IND-LAW-201</span>
                  </span>
                </nav>
                <div className="flex items-center gap-space-xs">
                  <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-secondary-container/60 text-primary font-label-sm text-label-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                    <span className="material-symbols-outlined text-[15px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
                    <span className="font-semibold">Linked Matter #2024-HC-88219</span>
                    <span className="text-secondary hidden sm:inline">• Meridian India v. Vantage (Delhi HC)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Subject Dossier Header */}
            <section className="w-full bg-surface px-gutter pt-space-lg pb-space-xl">
              <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-space-lg">
                <div className="flex-1 max-w-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-label-sm text-[11px] font-bold tracking-wider uppercase">
                      The Constitution of India &amp; Bharatiya Nyaya Sanhita (BNS)
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">Supreme Court Benchmarks • 2024 Edition</span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-medium mb-3">
                    Constitutional Freedoms &amp; Commercial Restraints
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Authoritative structural analysis of Article 19(1)(g) (Right to Practice Profession), Section 27 of the Indian Contract Act (Agreements in Restraint of Trade Void Ab Initio), and Bharatiya Nyaya Sanhita (BNS 2023) penal penology. Grounded in <em>Percept D'Mark v. Zaheer Khan</em>, <em>Maneka Gandhi</em>, and treatises by Dr. D.D. Basu and Pollock &amp; Mulla.
                  </p>
                  <div className="mt-space-lg flex flex-wrap items-center gap-space-sm pt-4">
                    <button 
                      onClick={() => onNavigate('law-lesson')}
                      className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all font-semibold" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                      <span>Resume Active Lesson (Sec. 2.4)</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('doctrinal-quiz')}
                      className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:bg-surface-container transition-all" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">quiz</span>
                      <span>Doctrinal Assessment</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('ai-assistant')}
                      className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-all" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                      <span>Consult Juris AI</span>
                    </button>
                  </div>
                </div>

                {/* Subject Progress & Metrics Ledger */}
                <div className="w-full lg:w-96 rounded-lg bg-surface-container-lowest p-space-md shadow-[0_4px_20px_rgba(31,36,33,0.04)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Curriculum Mastery Ledger</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold px-2 py-0.5 rounded bg-primary-fixed">Active Track</span>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-headline-sm text-[16px] text-primary font-bold">75%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">3 of 4 Chapters</span>
                      <span className="font-body-sm text-body-sm text-secondary">1 Active • Next: Section 2.4</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="flex flex-col p-2.5 rounded bg-surface-container-low">
                      <span className="font-label-sm text-[10px] uppercase text-secondary font-semibold">Remaining Study</span>
                      <span className="font-headline-sm text-[15px] font-semibold text-on-surface mt-0.5">~2.2 Hours</span>
                      <span className="font-body-sm text-[11px] text-secondary">Self-paced review</span>
                    </div>
                    <div className="flex flex-col p-2.5 rounded bg-surface-container-low">
                      <span className="font-label-sm text-[10px] uppercase text-secondary font-semibold">Doctrinal XP</span>
                      <span className="font-headline-sm text-[15px] font-semibold text-primary mt-0.5">350 XP</span>
                      <span className="font-body-sm text-[11px] text-secondary">Advocate Grade</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-[11px] pt-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary">gavel</span>
                    <span>Statutes: The Constitution of India, BNS 2023, Indian Contract Act § 27</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="w-full max-w-[1440px] mx-auto px-gutter py-2">
              <div className="w-full h-px bg-surface-container-high relative flex items-center justify-center">
                <span className="px-3 bg-surface text-secondary font-label-sm text-[10px] uppercase tracking-widest">Syllabus Codex • 4 Distinct Units</span>
              </div>
            </div>

            {/* Primary Workspace: Two-Column Bento Layout */}
            <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-md grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              {/* Left Column: Chapters & Lessons Tree */}
              <div className="lg:col-span-8 flex flex-col gap-space-lg">

                {/* CHAPTER 1: Constitutional Foundations (Completed) */}
                <article className="bg-surface-container-lowest rounded-lg shadow-[0_2px_12px_rgba(31,36,33,0.03)] overflow-hidden transition-all duration-200">
                  <div 
                    className="p-space-md flex items-center justify-between cursor-pointer bg-surface-container-low/40 hover:bg-surface-container-low/80 transition-colors"
                    onClick={() => setOpenChapter(openChapter === 1 ? 0 : 1)}
                  >
                    <div className="flex items-start gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-headline-sm text-[14px] font-bold shrink-0">
                        01
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Chapter 1</span>
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-[11px] font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">check_circle</span>
                            Mastered
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium mt-0.5">
                          Constitutional Foundations &amp; Fundamental Rights
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Articles 14, 19, 21 (Maneka Gandhi &amp; Puttaswamy) &amp; Writs under Articles 32 and 226
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary">
                      {openChapter === 1 ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>

                  {openChapter === 1 && (
                    <div className="p-space-md flex flex-col gap-space-xs border-t border-surface-container-high">
                      {[
                        { num: '1.1', title: 'Article 14: Rule of Law & Non-Arbitrariness Standard (E.P. Royappa v. State of T.N.)', time: '20 min', code: 'Art. 14' },
                        { num: '1.2', title: 'Article 19(1)(g): Freedom of Trade and Occupation vs. Article 19(6) Public Interest', time: '25 min', code: 'Art. 19(1)(g)' },
                        { num: '1.3', title: 'Article 21: Due Process & The Golden Triangle Doctrine (Maneka Gandhi v. Union of India)', time: '35 min', code: 'Art. 21' },
                        { num: '1.4', title: 'Digital Privacy as Inalienable Liberty (K.S. Puttaswamy v. Union of India)', time: '30 min', code: 'Art. 21' },
                        { num: '1.5', title: 'Judicial Review & Extraordinary Writs (Articles 32 & 226 Habeas, Mandamus, Certiorari)', time: '28 min', code: 'Art. 32/226' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-space-sm rounded bg-surface-container-low/50 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                            <div>
                              <span className="font-label-md text-label-md text-on-surface font-semibold">{item.num}: {item.title}</span>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="font-body-sm text-body-sm text-secondary">{item.time} study</span>
                                <span className="text-outline-variant">•</span>
                                <span className="font-label-sm text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">{item.code}</span>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => onNavigate('law-lesson')}
                            className="px-space-sm py-1 rounded text-primary hover:bg-surface-container font-label-sm text-label-sm font-semibold flex items-center gap-1"
                          >
                            <span>Review</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </article>

                {/* CHAPTER 2: Restraints of Trade (Current Active Chapter) */}
                <article className="bg-surface-container-lowest rounded-lg shadow-[0_4px_24px_rgba(31,36,33,0.06)] overflow-hidden">
                  <div className="p-space-md bg-primary-container text-on-primary flex items-center justify-between">
                    <div className="flex items-start gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-on-primary/10 text-on-primary flex items-center justify-center font-headline-sm text-[14px] font-bold shrink-0">
                        02
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container font-bold">Chapter 2</span>
                          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Active Focus (3 of 4 Complete)
                          </span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-primary font-medium mt-0.5">
                          Restraints of Trade &amp; Employment Covenants (Section 27)
                        </h2>
                        <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                          The Indian Contract Act, 1872 • Percept D'Mark v. Zaheer Khan • Absolute Voidness
                        </span>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="font-display-md text-[20px] font-bold text-on-primary">75%</span>
                      <div className="font-label-sm text-[11px] text-on-primary-container">3/4 Modules</div>
                    </div>
                  </div>

                  <div className="p-space-md flex flex-col gap-space-md">
                    {/* Section 2.1 */}
                    <div className="p-space-sm rounded bg-surface-container-low/60 flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">2.1: Section 27 Statutory Mandate: Void Ab Initio with No Reasonableness Exception</span>
                          <div className="flex items-center gap-2 text-secondary font-body-sm text-[12px] mt-0.5">
                            <span>22 min study completed</span>
                            <span>•</span>
                            <span>Contrast with English &amp; US reasonableness doctrines</span>
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-semibold px-2 py-0.5 rounded bg-primary-fixed">Passed</span>
                    </div>

                    {/* Section 2.2 */}
                    <div className="p-space-sm rounded bg-surface-container-low/60 flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">2.2: During-Employment vs. Post-Employment Restraints (Niranjan Shankar Golikari)</span>
                          <div className="flex items-center gap-2 text-secondary font-body-sm text-[12px] mt-0.5">
                            <span>26 min study completed</span>
                            <span>•</span>
                            <span>Validity of exclusive service during subsistence of employment</span>
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-semibold px-2 py-0.5 rounded bg-primary-fixed">Passed</span>
                    </div>

                    {/* Section 2.3 */}
                    <div className="p-space-sm rounded bg-surface-container-low/60 flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">2.3: Supreme Court Landmark: Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (2006)</span>
                          <div className="flex items-center gap-2 text-secondary font-body-sm text-[12px] mt-0.5">
                            <span>35 min study completed</span>
                            <span>•</span>
                            <span>Right of first refusal &amp; post-contractual covenants struck down</span>
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-semibold px-2 py-0.5 rounded bg-primary-fixed">Passed</span>
                    </div>

                    {/* Section 2.4: THE CURRENT ACTIVE LESSON */}
                    <div className="rounded-lg bg-surface p-space-md shadow-[0_3px_16px_rgba(0,0,0,0.06)] relative overflow-hidden border border-primary/20">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
                      <div className="pl-2">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[13px] text-tertiary-fixed animate-pulse">play_circle</span>
                              Current Lesson • Active Focus
                            </span>
                            <span className="font-label-sm text-[12px] text-secondary font-semibold">Lesson 4 of 4</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-secondary font-body-sm text-[12px]">
                            <span className="material-symbols-outlined text-[15px]">timer</span>
                            <span>18 min remaining</span>
                            <span className="text-outline-variant">•</span>
                            <span className="material-symbols-outlined text-[15px]">verified</span>
                            <span>50 XP Eligible</span>
                          </div>
                        </div>

                        <h3 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mt-1">
                          Section 2.4: Post-Employment Non-Competes vs. Article 19(1)(g): Why Covenants are Void Ab Initio in India
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                          Examining Indian Supreme Court jurisprudence: Why non-compete clauses extending beyond termination of employment are void ab initio under Section 27 of the Contract Act and impermissibly curtail Article 19(1)(g) rights. Explores why Indian courts refuse to "blue-pencil" overbroad employer restrictions.
                        </p>

                        <div className="mt-space-md p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">assignment_late</span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary font-semibold">Active Matter Impact Notice:</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Directly governs validity of <strong>Clause 4.2 (24-Month Non-Compete &amp; Unit Forfeiture)</strong> in <em>Meridian India vs. Vantage</em>, pending disposition before the High Court of Delhi.
                            </span>
                          </div>
                        </div>

                        <div className="mt-space-md flex flex-wrap items-center gap-space-sm pt-2">
                          <button 
                            onClick={() => onNavigate('law-lesson')}
                            className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md font-semibold shadow hover:bg-primary-container transition-all" 
                            type="button"
                          >
                            <span>Resume Lesson Now</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </button>
                          <button 
                            onClick={() => onNavigate('doctrinal-quiz')}
                            className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:bg-surface-container transition-all" 
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">quiz</span>
                            <span>Take Doctrinal Quiz</span>
                          </button>
                          <button 
                            onClick={() => onNavigate('ai-assistant')}
                            className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold hover:text-primary transition-all" 
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px] text-secondary">smart_toy</span>
                            <span>Ask AI about Section 27</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* CHAPTER 3: Bharatiya Nyaya Sanhita, 2023 */}
                <article className="bg-surface-container-lowest rounded-lg shadow-[0_2px_12px_rgba(31,36,33,0.03)] overflow-hidden transition-all duration-200">
                  <div 
                    className="p-space-md flex items-center justify-between cursor-pointer bg-surface-container-low/40 hover:bg-surface-container-low/80 transition-colors"
                    onClick={() => setOpenChapter(openChapter === 3 ? 0 : 3)}
                  >
                    <div className="flex items-start gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-headline-sm text-[14px] font-bold shrink-0">
                        03
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Chapter 3</span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold">
                            Statutory Penology
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium mt-0.5">
                          Bharatiya Nyaya Sanhita, 2023 (BNS): Modern Criminal Penology
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Community Service § 4(f), Organized Crime § 111, Defamation § 356, Breach of Trust § 316
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary">
                      {openChapter === 3 ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>

                  {openChapter === 3 && (
                    <div className="p-space-md flex flex-col gap-space-xs border-t border-surface-container-high">
                      {[
                        { num: '3.1', title: 'Section 4(f) Community Service: Statutory Sentencing Discretion & Non-Custodial Sanctions', time: '20 min', code: 'BNS § 4(f)' },
                        { num: '3.2', title: 'Section 111 & 112: Organized Crime Syndicates, Asset Forfeiture & Cyber Mafia', time: '25 min', code: 'BNS § 111' },
                        { num: '3.3', title: 'Section 304: Snatching as a Distinct Statutory Offense from Theft & Robbery', time: '15 min', code: 'BNS § 304' },
                        { num: '3.4', title: 'Section 316 & 318: Criminal Breach of Trust & Cheating in Commercial Contracts', time: '28 min', code: 'BNS § 316/318' },
                        { num: '3.5', title: 'Section 356: Criminal Defamation Reforms & Community Service Restitution', time: '22 min', code: 'BNS § 356' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-space-sm rounded bg-surface-container-low/50 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                            <div>
                              <span className="font-label-md text-label-md text-on-surface font-semibold">{item.num}: {item.title}</span>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="font-body-sm text-body-sm text-secondary">{item.time} study</span>
                                <span className="text-outline-variant">•</span>
                                <span className="font-label-sm text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">{item.code}</span>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => onNavigate('law-lesson')}
                            className="px-space-sm py-1 rounded text-primary hover:bg-surface-container font-label-sm text-label-sm font-semibold flex items-center gap-1"
                          >
                            <span>Study</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </article>

                {/* CHAPTER 4: Procedural Sanhitas (BNSS & BSA 2023) */}
                <article className="bg-surface-container-lowest rounded-lg shadow-[0_2px_12px_rgba(31,36,33,0.03)] overflow-hidden transition-all duration-200">
                  <div 
                    className="p-space-md flex items-center justify-between cursor-pointer bg-surface-container-low/40 hover:bg-surface-container-low/80 transition-colors"
                    onClick={() => setOpenChapter(openChapter === 4 ? 0 : 4)}
                  >
                    <div className="flex items-start gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-headline-sm text-[14px] font-bold shrink-0">
                        04
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Chapter 4</span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold">
                            Evidence &amp; Procedure
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium mt-0.5">
                          Procedural Sanhitas: BNSS 2023 &amp; BSA 2023
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Digital Evidence (BSA § 57 &amp; § 61), Zero-FIR (BNSS § 173), Timelines &amp; Forensic Mandates
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary">
                      {openChapter === 4 ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>

                  {openChapter === 4 && (
                    <div className="p-space-md flex flex-col gap-space-xs border-t border-surface-container-high">
                      {[
                        { num: '4.1', title: 'Sections 57 & 61 BSA: Primary Evidence for Electronic & Digital Records', time: '25 min', code: 'BSA § 61' },
                        { num: '4.2', title: 'Zero-FIR Registration & Jurisdictional Dispatch under BNSS Section 173', time: '20 min', code: 'BNSS § 173' },
                        { num: '4.3', title: 'Forensic Evidence Mandates for Offenses Punishable with 7+ Years Imprisonment', time: '22 min', code: 'BNSS § 176(3)' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-space-sm rounded bg-surface-container-low/50 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                            <div>
                              <span className="font-label-md text-label-md text-on-surface font-semibold">{item.num}: {item.title}</span>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="font-body-sm text-body-sm text-secondary">{item.time} study</span>
                                <span className="text-outline-variant">•</span>
                                <span className="font-label-sm text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">{item.code}</span>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => onNavigate('law-lesson')}
                            className="px-space-sm py-1 rounded text-primary hover:bg-surface-container font-label-sm text-label-sm font-semibold flex items-center gap-1"
                          >
                            <span>Study</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </div>

              {/* Right Companion Column */}
              <aside className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Indian Legal Authorities</span>
                    <span className="material-symbols-outlined text-[16px] text-tertiary">library_books</span>
                  </div>
                  <div className="flex flex-col gap-2 font-body-sm text-body-sm">
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-semibold text-primary block">Percept D'Mark v. Zaheer Khan</span>
                      <span className="text-secondary text-[12px]">(2006) 4 SCC 227 • Supreme Court of India</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-semibold text-primary block">Niranjan Shankar Golikari</span>
                      <span className="text-secondary text-[12px]">(1967) 2 SCR 378 • Term Covenants</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-semibold text-primary block">Maneka Gandhi v. Union of India</span>
                      <span className="text-secondary text-[12px]">(1978) 1 SCC 248 • Golden Triangle</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-semibold text-primary block">Pollock &amp; Mulla Commentary</span>
                      <span className="text-secondary text-[12px]">The Indian Contract Act • Sec 27 Voidness</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-container text-on-primary p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">quiz</span>
                    <span className="font-headline-sm text-headline-sm font-semibold">Doctrinal Knowledge Check</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    Ready to test your comprehension of Section 27 and BNS Section 4(f)? Complete the scenario assessment.
                  </p>
                  <button 
                    onClick={() => onNavigate('doctrinal-quiz')}
                    className="w-full py-2.5 rounded bg-surface text-primary hover:bg-surface-container-lowest font-label-md text-label-md font-semibold transition-colors text-center shadow-sm"
                  >
                    Start Doctrinal Quiz (Screen 15) →
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
