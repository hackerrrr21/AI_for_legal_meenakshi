import { LawThroughTime } from '../learn/LawThroughTime';
import React, { useState } from 'react';

interface Screen12_LawLibraryProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  userXP?: number;
  streakDays?: number;
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen12_LawLibrary: React.FC<Screen12_LawLibraryProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  userXP = 450,
  streakDays = 12,
  onQuickLoadSample: _onQuickLoadSample
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showLawThroughTime, setShowLawThroughTime] = useState<boolean>(false);

  const tracks = [
    {
      id: 'constitution',
      tag: 'Supreme Lex of India',
      tagBg: 'bg-emerald-100 text-emerald-900',
      level: 'Constitutional Foundations & Writs',
      title: 'The Constitution of India',
      subtitle: 'Fundamental Rights, Articles 14, 19, 21 & Writs under Articles 32 and 226',
      modules: '24 Modules • 18 Completed • Est. 6.5 Hours',
      progress: 75,
      pills: [
        'Article 14 (Equality & Non-Arbitrariness)',
        'Article 19(1)(g) (Right to Trade & Occupation)',
        'Article 21 (Maneka Gandhi & Puttaswamy Privacy)',
        'Articles 32 & 226 (Habeas Corpus, Mandamus & Certiorari)'
      ],
      nextLesson: 'Article 21 Procedural Fairness & Digital Privacy Standards',
      duration: '16 min',
      category: 'constitutional',
      icon: 'account_balance'
    },
    {
      id: 'bns',
      tag: 'New Penal Codex 2023',
      tagBg: 'bg-amber-100 text-amber-900',
      level: 'Modern Criminal Penology',
      title: 'Bharatiya Nyaya Sanhita, 2023 (BNS)',
      subtitle: 'Modern Criminal Penology, Community Service, Organized Crime & IPC 1860 Transition',
      modules: '22 Modules • 14 Completed • Est. 5.0 Hours',
      progress: 64,
      pills: [
        'Section 4(f) (Community Service Punishment)',
        'Section 111 (Organized Crime Syndicates & Cyber Mafia)',
        'Section 304 (Snatching as Distinct Offense)',
        'Section 356 (Criminal Defamation Reforms & Redress)'
      ],
      nextLesson: 'Community Service Statutory Sentencing Mechanics under BNS',
      duration: '14 min',
      category: 'criminal',
      icon: 'gavel'
    },
    {
      id: 'contract',
      tag: 'Commercial Foundation • Pollock & Mulla',
      tagBg: 'bg-stone-200 text-stone-900',
      level: 'Advanced Commercial Contracts',
      title: 'The Indian Contract Act, 1872',
      subtitle: 'Restraints of Trade (Section 27 Void Ab Initio) & Liquidated Damages (Section 74)',
      modules: '20 Modules • 17 Completed • Est. 5.2 Hours',
      progress: 85,
      pills: [
        'Section 27 (Agreements in Restraint of Trade Void)',
        'Percept D\'Mark v. Zaheer Khan (No Reasonableness Test)',
        'Niranjan Shankar Golikari (Term Covenants)',
        'Section 74 (Liquidated Damages vs Penalties)'
      ],
      nextLesson: 'Post-Employment Non-Compete Invalidation under Indian Jurisprudence',
      duration: '18 min',
      category: 'commercial',
      icon: 'contract'
    },
    {
      id: 'procedural',
      tag: 'Evidentiary & Procedural Sanhitas',
      tagBg: 'bg-teal-100 text-teal-900',
      level: 'Digital Evidence & Trial Procedure',
      title: 'Procedural Sanhitas: BNSS 2023 & BSA 2023',
      subtitle: 'Bharatiya Nagarik Suraksha Sanhita & Bharatiya Sakshya Adhiniyam Evidence Rules',
      modules: '16 Modules • 8 Completed • Est. 4.0 Hours',
      progress: 50,
      pills: [
        'BSA Section 57 & 61 (Electronic Records Primary Evidence)',
        'Cryptographic Hash & Digital Certificate Protocols',
        'Zero-FIR Mandate under BNSS Section 173',
        'Summary Trial Expansion for Commercial Offenses'
      ],
      nextLesson: 'Section 61 BSA Digital Electronic Certificate Requirements',
      duration: '20 min',
      category: 'procedural',
      icon: 'folder_special'
    }
  ];

  const filteredTracks = tracks.filter(t => {
    if (selectedFilter !== 'all' && t.category !== selectedFilter) return false;
    if (searchQuery.trim() === '') return true;
    const q = searchQuery.toLowerCase();
    return t.title.toLowerCase().includes(q) ||
           t.subtitle.toLowerCase().includes(q) ||
           t.pills.some(p => p.toLowerCase().includes(q));
  });

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
            <div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div>
            <nav className="flex flex-col gap-0.5">
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a>
              <a className="px-space-sm py-2 rounded bg-primary-container text-on-primary font-semibold font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault &amp; Academy</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Advocates</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span>
            <span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">Bar Council of India compliance mode active.</div>
        </div>
      </aside>

      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-surface">
          <div className="flex flex-col w-full">
            {/* Top Archival Matter Linkage Banner */}
            <div className="w-full bg-surface-container-low px-gutter py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm text-secondary font-label-sm text-label-sm flex-wrap">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container">balance</span>
                <span className="tracking-wide uppercase font-semibold">Juris Academy &amp; Indian Law Library</span>
                <span className="text-outline-variant">•</span>
                <span className="tracking-widest uppercase text-tertiary">Folio Nº 13-L</span>
                <span className="text-outline-variant">•</span>
                <span className="text-on-surface-variant font-medium">The Constitution of India &amp; Bharatiya Nyaya Sanhita, 2023</span>
              </div>
              <div className="flex items-center gap-space-xs text-primary-container bg-surface-container-lowest px-space-sm py-1 rounded shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-sm text-label-sm font-semibold">Connected to Delhi HC Matter #2024-HC-88219</span>
                <span className="font-body-sm text-body-sm text-secondary">(Section 27 &amp; Art 19(1)(g))</span>
              </div>
            </div>

            {/* Primary Page Header & Editorial Briefing */}
            <section className="px-gutter pt-space-lg pb-space-md w-full bg-surface">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="space-y-space-xs max-w-3xl">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                    Curated Indian Legal Syllabi &amp; Statutory Codices
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight">
                    Juris Academy &amp; Institutional Law Library
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-normal leading-relaxed">
                    Authoritative legal syllabi, interactive doctrine primers, and statutory codices covering <strong>The Constitution of India</strong>, the new <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, and <strong>The Indian Contract Act, 1872</strong>. Grounded in leading treatises by Dr. D.D. Basu, Ratanlal &amp; Dhirajlal, and Pollock &amp; Mulla.
                  </p>
                </div>

                {/* Action Folio Header Buttons */}
                <div className="flex items-center gap-space-sm shrink-0">
                  <button 
                    onClick={() => onNavigate('law-chapter')}
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" 
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">menu_book</span>
                    <span>Browse Chapters</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('law-lesson')}
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors shadow-sm font-label-md text-label-md font-semibold" 
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                    <span>Resume Lesson (Sec. 2.4)</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Comprehensive Search & Jurisdictional Filters Tray */}
            <section className="px-gutter py-space-sm w-full bg-surface">
              <div className="max-w-7xl mx-auto space-y-space-sm">
                <div className="relative w-full rounded bg-surface-container-lowest shadow-sm flex items-center px-space-md py-3 focus-within:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-secondary text-[22px] mr-space-sm">search</span>
                  <input 
                    className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none" 
                    placeholder="Search Indian statutes, articles (e.g. Art 21, BNS § 111, Contract Act § 27), Supreme Court precedents, or treatise doctrines..." 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-secondary hover:text-on-surface p-1">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>

                {/* Filter Chips */}
                <div className="flex items-center gap-space-xs overflow-x-auto pb-1 text-on-surface-variant font-label-md text-label-md no-scrollbar">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold shrink-0 mr-space-xs">Tracks:</span>
                  {[
                    { id: 'all', label: 'All Codices' },
                    { id: 'constitutional', label: 'The Constitution of India' },
                    { id: 'criminal', label: 'Bharatiya Nyaya Sanhita (BNS)' },
                    { id: 'commercial', label: 'Indian Contract Act, 1872' },
                    { id: 'procedural', label: 'Procedural Sanhitas (BNSS & BSA)' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f.id)}
                      className={`px-space-sm py-1 rounded transition-colors shrink-0 flex items-center gap-1 ${
                        selectedFilter === f.id
                          ? 'bg-primary-container text-on-primary font-semibold'
                          : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface'
                      }`}
                    >
                      <span>{f.label}</span>
                      {selectedFilter === f.id && <span className="material-symbols-outlined text-[14px]">check</span>}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Learning Telemetry Cockpit */}
            <section className="px-gutter py-space-md w-full bg-surface">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Metric 1 */}
                <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Mastery Progress</span>
                    <span className="font-label-sm text-label-sm font-semibold text-primary px-1.5 py-0.5 rounded bg-secondary-container">21 / 48 Modules</span>
                  </div>
                  <div className="mt-space-md mb-space-sm">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-headline-md text-headline-md font-serif text-primary">68%</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Indian Codices</span>
                    </div>
                    <div className="w-full h-2 rounded bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary-container rounded" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div className="font-body-sm text-body-sm text-secondary truncate">Estimated 8.5 hrs remaining</div>
                </div>

                {/* Metric 2 */}
                <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Active Track</span>
                    <span className="material-symbols-outlined text-[18px] text-tertiary">verified</span>
                  </div>
                  <div className="mt-space-sm">
                    <span className="font-headline-sm text-headline-sm font-serif text-on-surface line-clamp-1">Section 27 vs. Art 19(1)(g)</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Voidness of Post-Employment Non-Competes in India</p>
                  </div>
                  <div className="mt-space-xs inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary">
                    <span>Level: Supreme Court Benchmarks</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Doctrinal XP Earned</span>
                    <span className="font-label-sm text-label-sm font-semibold text-on-tertiary-container px-1.5 py-0.5 rounded bg-surface-container">Verified Rank</span>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-md text-headline-md font-serif text-primary">{userXP}</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">XP Points</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5">Senior Advocate &amp; Counsel Tier</p>
                  </div>
                  <div 
                    onClick={() => onNavigate('doctrinal-quiz')}
                    className="mt-space-xs font-body-sm text-body-sm text-primary underline cursor-pointer hover:text-on-primary-container"
                  >
                    Take Doctrinal Quiz (+50 XP)
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Judicial Rigor Streak</span>
                    <span className="material-symbols-outlined text-[18px] text-primary-container">local_fire_department</span>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-md text-headline-md font-serif text-primary">{streakDays}</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Consecutive Days</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5">Top 3% active Indian legal scholars</p>
                  </div>
                  <div className="mt-space-xs font-label-sm text-label-sm text-secondary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span>Next: 14-Day Constitution Badge</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Immediate Recall Recommendation */}
            <section className="px-gutter py-space-xs w-full bg-surface">
              <div className="max-w-7xl mx-auto p-space-md rounded bg-secondary-container text-on-secondary-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-start gap-space-md">
                  <div className="p-2.5 rounded bg-surface-container-lowest text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary">Immediate Case-Impact Module</div>
                    <div className="font-headline-sm text-headline-sm font-serif font-medium text-primary">
                      Section 27 Indian Contract Act vs. Article 19(1)(g) The Constitution of India
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Why post-employment non-compete clauses are strictly void ab initio under Indian law (Percept D'Mark v. Zaheer Khan). Directly governs Clause 4.2 of the disputed executive agreement.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <span className="font-label-sm text-label-sm text-secondary font-medium hidden sm:inline">Est. 18 min study</span>
                  <button 
                    onClick={() => onNavigate('law-lesson')}
                    className="px-space-md py-2 rounded bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-semibold transition-colors shadow-sm" 
                    type="button"
                  >
                    Resume Lesson →
                  </button>
                </div>
              </div>
            </section>

            {/* Main Library Grid & Side Rail */}
            <section className="px-gutter py-space-lg w-full bg-surface">
              <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
                {/* Left Column: Primary Legal Codices */}
                <div className="xl:col-span-8 flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div>
                      <h2 className="font-headline-md text-headline-md font-serif text-primary">Foundational &amp; Advanced Codices</h2>
                      <p className="font-body-sm text-body-sm text-secondary">Accredited Indian legal curriculum covering constitutional, criminal, and commercial law</p>
                    </div>
                    <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary">
                      <button
                        type="button"
                        onClick={() => setShowLawThroughTime(prev => !prev)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                          showLawThroughTime
                            ? 'bg-primary text-white border-primary'
                            : 'bg-surface-container text-primary border-outline/30 hover:bg-surface-container-high'
                        }`}
                      >
                        {showLawThroughTime ? 'Hide Evolution Timeline' : '⚖️ Law Through Time (Then vs Now)'}
                      </button>
                      <span>Tracks: <strong className="text-on-surface">{filteredTracks.length}</strong></span>
                    </div>
                  </div>

                  {/* Tracks Rendering */}
                  {showLawThroughTime ? (
                <div className="w-full mb-8">
                  <LawThroughTime />
                </div>
              ) : null}
              {filteredTracks.map(track => (
                    <article key={track.id} className="p-space-lg rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
                        <div className="flex items-start gap-space-md">
                          <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                            <span className="material-symbols-outlined text-[26px]">{track.icon}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-space-xs flex-wrap">
                              <span className={`font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${track.tagBg}`}>
                                {track.tag}
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary">Level: {track.level}</span>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm font-serif text-on-surface mt-1">{track.title}</h3>
                            <p className="font-body-sm text-body-sm text-secondary mt-0.5">{track.subtitle}</p>
                          </div>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="font-headline-sm text-headline-sm font-serif text-primary">{track.progress}%</span>
                          <span className="font-label-sm text-label-sm text-secondary block">Completed</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded bg-surface-container mt-space-md overflow-hidden">
                        <div className="h-full bg-primary-container rounded" style={{ width: `${track.progress}%` }}></div>
                      </div>

                      {/* Pills */}
                      <div className="mt-space-md flex flex-wrap gap-1.5">
                        {track.pills.map((pill, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Action Tray */}
                      <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-sm rounded flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
                          <span className="material-symbols-outlined text-[18px] text-tertiary">timer</span>
                          <span>Next: <strong className="font-semibold text-primary">{track.nextLesson}</strong> ({track.duration})</span>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <button 
                            onClick={() => onNavigate('law-chapter')}
                            className="px-space-sm py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-sm font-label-sm font-semibold transition-colors"
                          >
                            View Syllabus
                          </button>
                          <button 
                            onClick={() => onNavigate('law-lesson')}
                            className="px-space-md py-1.5 rounded bg-primary-container text-on-primary hover:bg-primary text-label-sm font-label-sm font-semibold transition-colors"
                          >
                            Continue Learning
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Right Companion Column */}
                <aside className="xl:col-span-4 flex flex-col gap-space-lg">
                  {/* Statutory Transitions Codex */}
                  <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Indian Statutory Transitions</span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">2023–2024</span>
                    </div>
                    <div className="flex flex-col gap-space-xs divide-y divide-surface-container-high">
                      <div className="pt-2 first:pt-0">
                        <div className="font-label-sm text-label-sm font-semibold text-primary">Indian Penal Code, 1860 → BNS 2023</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          511 sections restructured into 358 sections; adds Community Service (§ 4(f)), Snatching (§ 304), Organized Crime (§ 111).
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="font-label-sm text-label-sm font-semibold text-primary">CrPC 1973 → BNSS 2023</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Codifies Zero-FIR, electronic summons, time-bound judgment delivery within 30 days of argument conclusion.
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="font-label-sm text-label-sm font-semibold text-primary">Indian Evidence Act 1872 → BSA 2023</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Recognizes electronic records as primary evidence (§ 57 &amp; § 61); streamlines digital forensics and hash standards.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Indian Commentaries */}
                  <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Leading Treatises &amp; Authors</span>
                      <span className="material-symbols-outlined text-[16px] text-tertiary">library_books</span>
                    </div>
                    <div className="flex flex-col gap-space-xs text-body-sm text-body-sm">
                      <div className="p-space-xs rounded bg-surface-container-low">
                        <div className="font-semibold text-primary">Dr. D.D. Basu</div>
                        <div className="text-secondary text-[12px]">Commentary on the Constitution of India (12 Vols)</div>
                      </div>
                      <div className="p-space-xs rounded bg-surface-container-low">
                        <div className="font-semibold text-primary">Ratanlal &amp; Dhirajlal</div>
                        <div className="text-secondary text-[12px]">The Law of Crimes &amp; Bharatiya Nyaya Sanhita</div>
                      </div>
                      <div className="p-space-xs rounded bg-surface-container-low">
                        <div className="font-semibold text-primary">Pollock &amp; Mulla</div>
                        <div className="text-secondary text-[12px]">The Indian Contract &amp; Specific Relief Acts</div>
                      </div>
                      <div className="p-space-xs rounded bg-surface-container-low">
                        <div className="font-semibold text-primary">Sarkar on Evidence</div>
                        <div className="text-secondary text-[12px]">Law of Evidence &amp; Bharatiya Sakshya Adhiniyam</div>
                      </div>
                    </div>
                  </div>

                  {/* Doctrinal Assessment CTA */}
                  <div className="p-space-md rounded bg-primary-container text-on-primary flex flex-col gap-space-sm shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">quiz</span>
                      <span className="font-headline-sm text-headline-sm font-semibold">Test Your Doctrinal Rigor</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-primary-container">
                      Evaluate your mastery of Section 27 Contract Act, BNS Community Service, and Article 21 Due Process in our scenario-based quiz.
                    </p>
                    <button 
                      onClick={() => onNavigate('doctrinal-quiz')}
                      className="w-full py-2 rounded bg-surface text-primary hover:bg-surface-container-lowest font-label-md text-label-md font-semibold transition-colors text-center"
                    >
                      Begin Doctrinal Quiz (Screen 15) →
                    </button>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
