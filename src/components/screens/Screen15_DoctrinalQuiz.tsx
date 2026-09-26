import React, { useState } from 'react';

interface Screen15_DoctrinalQuizProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onAddXP?: (xp: number) => void;
  onQuickLoadSample?: (sampleId: string) => void;
}

interface QuizQuestion {
  id: string;
  topicTag: string;
  matterAlignment: string;
  statutoryRef: string;
  factPatternTitle: string;
  factPatternText: string;
  meta: {
    disputedSum: string;
    scope: string;
    governingAct: string;
  };
  interrogatory: string;
  options: {
    id: string;
    letter: string;
    text: string;
    isCorrect: boolean;
    note: string;
  }[];
  explanationTitle: string;
  supremeCourtRuling: string;
  benchmarks: {
    title: string;
    desc: string;
  }[];
  citations: string[];
  matterUtilityText: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topicTag: 'The Indian Contract Act § 27 • Restraint of Trade',
    matterAlignment: 'Directly Aligned: Clause 4.2 Non-Compete',
    statutoryRef: 'SUPREME-COURT-CIVIL-2006-P4',
    factPatternTitle: 'Tech Worker Departure & 24-Month Non-Compete Dispute',
    factPatternText: 'Tech Employer Corp\'s Vice President of R&D, Dr. Julian Chen, resigned to join a competitor\'s artificial intelligence robotics lab in Bengaluru. Dr. Chen received ₹15,00,000 in equity and severance. Clause 4.2 of his employment agreement specifies that for 24 months post-employment, he cannot directly or indirectly engage with any competing technology business in India. The employer filed for an injunction in the High Court of Delhi seeking to enforce Clause 4.2 under freedom of contract principles.',
    meta: {
      disputedSum: '₹15,00,000 Severance Paid',
      scope: '24 Months Pan-India',
      governingAct: 'Indian Contract Act 1872 § 27'
    },
    interrogatory: 'Under Section 27 of The Indian Contract Act, 1872 and the Supreme Court of India\'s ruling in Percept D\'Mark (India) Pvt. Ltd. v. Zaheer Khan (2006), how will the High Court of Delhi rule on AdvoChat\'s injunction application?',
    options: [
      {
        id: 'opt-a',
        letter: 'A',
        text: 'Enforce Clause 4.2 because 24 months is commercially reasonable and severance compensation was voluntarily accepted by Dr. Chen.',
        isCorrect: false,
        note: 'English/US Common Law rule (inapplicable under Indian Section 27)'
      },
      {
        id: 'opt-b',
        letter: 'B',
        text: 'Declare Clause 4.2 strictly VOID AB INITIO under Section 27, as Indian law does not permit any post-employment non-compete restraint, and dismiss the injunction as an infringement of Article 19(1)(g).',
        isCorrect: true,
        note: 'VERIFIED SUPREME COURT HOLDING (Percept D\'Mark v. Zaheer Khan)'
      },
      {
        id: 'opt-c',
        letter: 'C',
        text: 'Apply the judicial "blue-pencil" doctrine to rewrite and narrow the 24-month duration down to 6 months within Karnataka only.',
        isCorrect: false,
        note: 'Indian courts consistently reject judicial rewriting or blue-penciling of void covenants'
      },
      {
        id: 'opt-d',
        letter: 'D',
        text: 'Refer the dispute to compulsory arbitration under the MSME Development Act without examining constitutional validity.',
        isCorrect: false,
        note: 'Arbitration clauses cannot validate statutory voidness under public policy'
      }
    ],
    explanationTitle: 'Supreme Court Landmark: Percept D\'Mark (India) Pvt. Ltd. v. Zaheer Khan',
    supremeCourtRuling: 'In Percept D\'Mark v. Zaheer Khan (2006) 4 SCC 227, the Supreme Court of India definitively held that under Section 27 of the Indian Contract Act, a restrictive covenant extending beyond the term of the agreement is void and completely unenforceable. The court ruled that Section 27 is clear and unequivocal: Indian law does not recognize common-law doctrines of partial reasonableness for post-employment restraints.',
    benchmarks: [
      { title: '1. No Reasonableness Test', desc: 'Unlike US/UK courts, Indian courts cannot evaluate whether time or geography is reasonable.' },
      { title: '2. Public Policy Shield', desc: 'Article 19(1)(g) grants the fundamental right to trade; private contracts cannot override it.' },
      { title: '3. Rejection of Blue-Pencil', desc: 'Overbroad post-employment restraints are struck down in full; courts will not rewrite them.' }
    ],
    citations: [
      'Section 27, The Indian Contract Act, 1872',
      'Percept D\'Mark v. Zaheer Khan (2006) 4 SCC 227',
      'Niranjan Shankar Golikari (1967) 2 SCR 378',
      'Pollock & Mulla: Indian Contract Act (16th Ed.)'
    ],
    matterUtilityText: 'Decisively invalidates Landlord\'s counterclaim regarding Clause 4.2 in Standard Employment Dispute. Because Clause 4.2 is a post-service covenant, the Delhi High Court must declare it void ab initio.'
  },
  {
    id: 'q2',
    topicTag: 'Bharatiya Nyaya Sanhita, 2023 (BNS) • Penal Penology',
    matterAlignment: 'Penological Reform Standard • Section 4(f)',
    statutoryRef: 'PARLIAMENT-ACT-2023-BNS-SEC4',
    factPatternTitle: 'State of NCT of Delhi v. Sharma — Non-Violent First-Time Infraction',
    factPatternText: 'A first-time offender was convicted of public nuisance and petty defamation on social media under Section 356(2) of the Bharatiya Nyaya Sanhita, 2023 (BNS). The offender has no prior criminal antecedents. The trial Magistrate seeks to impose a reformative sentence that avoids the social stigma and prison overcrowding of custodial detention.',
    meta: {
      disputedSum: 'First-Offense Infraction',
      scope: 'Summary Jurisdiction',
      governingAct: 'Bharatiya Nyaya Sanhita, 2023'
    },
    interrogatory: 'Which newly codified statutory punishment under Section 4 of the Bharatiya Nyaya Sanhita, 2023 (BNS) can the Magistrate impose, which did not exist under the erstwhile Indian Penal Code, 1860?',
    options: [
      {
        id: 'opt-2a',
        letter: 'A',
        text: 'Solitary confinement in a central prison facility for a minimum duration of 14 days.',
        isCorrect: false,
        note: 'Solitary confinement existed under IPC § 73 and is strictly limited'
      },
      {
        id: 'opt-2b',
        letter: 'B',
        text: 'Community Service under Section 4(f) of BNS 2023, providing reformative civic restitution without custodial stigmatization.',
        isCorrect: true,
        note: 'VERIFIED STATUTORY REFORM (BNS 2023, Section 4(f))'
      },
      {
        id: 'opt-2c',
        letter: 'C',
        text: 'Compulsory corporate labor under the supervision of state public sector undertakings.',
        isCorrect: false,
        note: 'Not recognized under Indian criminal penology'
      },
      {
        id: 'opt-2d',
        letter: 'D',
        text: 'Transportation beyond the seas for an indefinite term.',
        isCorrect: false,
        note: 'Colonial punishment repealed decades ago'
      }
    ],
    explanationTitle: 'Bharatiya Nyaya Sanhita Section 4(f) Penological Analysis',
    supremeCourtRuling: 'Section 4 of the Bharatiya Nyaya Sanhita, 2023 introduces "Community service" as category (f) in the statutory roster of punishments, marking a historic shift from retributive incarceration to restorative justice for minor offenses like petty theft upon restitution, public servant misconduct, and defamation under Section 356(2).',
    benchmarks: [
      { title: '1. Statutory Recognition', desc: 'Codified for the first time in Indian penal history in Chapter II Section 4(f).' },
      { title: '2. De-stigmatization', desc: 'Avoids turning non-violent first-time offenders into hardened criminals in prisons.' },
      { title: '3. Restorative Civic Value', desc: 'Directs unpaid service to public libraries, hospitals, or municipal services.' }
    ],
    citations: [
      'Section 4(f), Bharatiya Nyaya Sanhita, 2023',
      'Section 356(2), BNS 2023 (Defamation Community Service)',
      'Ratanlal & Dhirajlal on BNS 2023',
      'Law Commission of India 156th Report'
    ],
    matterUtilityText: 'Provides modern statutory alternatives when advising corporate entities and individuals on non-custodial resolutions for regulatory and non-violent complaints under BNS.'
  },
  {
    id: 'q3',
    topicTag: 'The Constitution of India • Article 21 & Due Process',
    matterAlignment: 'Constitutional Supremacy • Maneka Gandhi Standard',
    statutoryRef: 'CONSTITUTION-BENCH-1978-SC-MG',
    factPatternTitle: 'Seizure of Enterprise Digital Records without Statutory Warrant',
    factPatternText: 'An executive agency conducted a raid on a tech company\'s premises, seizing encrypted laptops and personal digital devices of executives under an unnotified internal guideline without showing statutory cause, obtaining a judicial search warrant, or providing a post-seizure hearing. The company challenges the executive action as a violation of personal liberty.',
    meta: {
      disputedSum: 'Confidential IP Devices',
      scope: 'Fundamental Rights Enclave',
      governingAct: 'Constitution of India Art 21'
    },
    interrogatory: 'Under Article 21 of The Constitution of India and the Supreme Court\'s landmark ruling in Maneka Gandhi v. Union of India (1978), what constitutional standard must any "procedure established by law" satisfy?',
    options: [
      {
        id: 'opt-3a',
        letter: 'A',
        text: 'The procedure is valid so long as it is enacted by Parliament or executive order, regardless of fairness or arbitrariness (the pre-1978 A.K. Gopalan standard).',
        isCorrect: false,
        note: 'Expressly overruled by the 7-judge Constitution Bench in Maneka Gandhi'
      },
      {
        id: 'opt-3b',
        letter: 'B',
        text: 'The procedure must be "just, fair, and reasonable" — free from oppression and arbitrariness, and must satisfy the equality scrutiny of Articles 14 and 19.',
        isCorrect: true,
        note: 'VERIFIED CONSTITUTION BENCH PRECEDENT (Maneka Gandhi & Puttaswamy)'
      },
      {
        id: 'opt-3c',
        letter: 'C',
        text: 'Article 21 applies only to physical detention in prison cells and has no bearing on digital property or investigatory search procedures.',
        isCorrect: false,
        note: 'Overruled by K.S. Puttaswamy (2017) affirming informational and digital privacy'
      },
      {
        id: 'opt-3d',
        letter: 'D',
        text: 'Executive agencies have unreviewable sovereign discretion during investigations.',
        isCorrect: false,
        note: 'Completely unconstitutional under the Basic Structure Doctrine'
      }
    ],
    explanationTitle: 'The Maneka Gandhi Doctrine & The Golden Triangle of Indian Liberty',
    supremeCourtRuling: 'In Maneka Gandhi v. Union of India (1978) 1 SCC 248, Justice P.N. Bhagwati held that the "procedure established by law" under Article 21 cannot be an arbitrary, fanciful, or oppressive procedure. It must satisfy natural justice (audi alteram partem) and pass the rigorous tests of Article 14 (non-arbitrariness) and Article 19 (reasonableness). Reaffirmed in K.S. Puttaswamy (2017) to encompass digital and privacy liberties.',
    benchmarks: [
      { title: '1. The Golden Triangle', desc: 'Articles 14, 19, and 21 are mutually reinforcing pillars of liberty.' },
      { title: '2. Substantive Due Process', desc: 'Mere formal legislative enactment is insufficient; the process must be fair and just.' },
      { title: '3. Digital Privacy Protection', desc: 'Unwarranted seizure of digital records infringes fundamental rights without strict statutory authorization.' }
    ],
    citations: [
      'Article 21, The Constitution of India',
      'Maneka Gandhi v. Union of India (1978) 1 SCC 248',
      'K.S. Puttaswamy v. Union of India (2017) 10 SCC 1',
      'Dr. D.D. Basu: Commentary on the Constitution of India'
    ],
    matterUtilityText: 'Forms the foundational constitutional ground for challenging arbitrary regulatory actions and warrants under Article 226 in the High Court.'
  }
];

export const Screen15_DoctrinalQuiz: React.FC<Screen15_DoctrinalQuizProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  onAddXP,
  onQuickLoadSample: _onQuickLoadSample}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [xpAwarded, setXpAwarded] = useState<number>(0);

  const q = QUIZ_QUESTIONS[currentIdx];
  const selectedOption = q.options.find(o => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSelectOption = (optId: string) => {
    if (submitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || submitted) return;
    setSubmitted(true);
    setAnsweredCount(prev => prev + 1);
    if (isCorrect) {
      setScore(prev => prev + 1);
      setXpAwarded(prev => prev + 50);
      if (onAddXP) {
        onAddXP(50);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOptionId(null);
      setSubmitted(false);
    } else {
      onNavigate('law-library');
    }
  };

  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md">
        <div className="flex flex-col gap-space-lg">
          <div className="px-space-sm pt-space-xs">
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div>
            <div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Citizen Legal Knowledge Base</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">High Court of Delhi • #2024-HC-88219</div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Legal Knowledge</div>
            <nav className="flex flex-col gap-0.5">
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Law Library &amp; Academy</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-chapter')} href="javascript:void(0)">Chapters &amp; Sections</a>
              <a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-lesson')} href="javascript:void(0)">Current Lesson (Sec 2.4)</a>
              <a aria-current="page" className="px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded font-body-sm text-body-sm" onClick={() => onNavigate('doctrinal-quiz')} href="javascript:void(0)">Doctrinal Assessment</a>
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
          <div className="font-body-sm text-body-sm text-on-surface-variant">Bar Council of India compliance mode active.</div>
        </div>
      </aside>

      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-surface">
          <div className="flex flex-col w-full">
            <div className="w-full px-gutter py-space-lg flex flex-col gap-space-lg max-w-[1560px] mx-auto">
              {/* Masthead */}
              <div className="flex flex-col gap-space-sm">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant flex-wrap">
                  <a className="font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors cursor-pointer" onClick={() => onNavigate('law-library')}>Law Library &amp; Juris Academy</a>
                  <span className="text-outline-variant select-none">/</span>
                  <a className="font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors cursor-pointer" onClick={() => onNavigate('law-chapter')}>Indian Jurisprudence Tracks</a>
                  <span className="text-outline-variant select-none">/</span>
                  <a className="font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors cursor-pointer" onClick={() => onNavigate('law-lesson')}>Section 2.4 Lesson</a>
                  <span className="text-outline-variant select-none">/</span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Doctrinal Knowledge Assessment</span>
                </nav>

                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md pt-space-xs">
                  <div className="flex flex-col gap-1.5 max-w-4xl">
                    <div className="flex items-center gap-space-sm flex-wrap">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        {q.topicTag}
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container bg-surface-container-low px-2 py-0.5 rounded font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                        {q.matterAlignment}
                      </span>
                    </div>
                    <h1 className="font-display-md text-display-md text-primary tracking-tight font-semibold">
                      Interactive Deliberation Assessment: Indian Legal Doctrines &amp; Precedents
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Scenario-based juridical evaluation stress-testing doctrine comprehension under <em>The Constitution of India</em>, <em>Bharatiya Nyaya Sanhita (BNS 2023)</em>, and <em>The Indian Contract Act, 1872</em>.
                    </p>
                  </div>

                  <div className="flex items-center gap-space-sm shrink-0">
                    <button 
                      onClick={() => onNavigate('law-lesson')}
                      className="px-3.5 py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px] text-secondary">history</span>
                      <span>Review Lesson (Sec 2.4)</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('ai-assistant')}
                      className="px-3.5 py-2 rounded bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 font-semibold" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                      <span>Consult Juris AI</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Metric Ribbon & Stepper Card */}
              <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                  <div className="flex flex-col gap-0.5 pl-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Question Stepper</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-bold">{currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
                      <span className="font-label-sm text-label-sm text-secondary">(Active Scenario)</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Doctrinal Precision</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-bold">
                        {answeredCount > 0 ? `${Math.round((score / answeredCount) * 100)}%` : '100%'}
                      </span>
                      <span className="font-label-sm text-label-sm text-primary-container font-semibold">{score} / {answeredCount} Verified</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Estimated Allocation</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-bold">~4 min</span>
                      <span className="font-label-sm text-label-sm text-secondary">Remaining</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">XP Accrual Target</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-bold">+{xpAwarded}</span>
                      <span className="font-label-sm text-label-sm text-secondary">/ 150 Total XP</span>
                    </div>
                  </div>
                </div>

                {/* Question Steppers */}
                <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                  {QUIZ_QUESTIONS.map((question, idx) => (
                    <div 
                      key={question.id} 
                      onClick={() => {
                        setCurrentIdx(idx);
                        setSelectedOptionId(null);
                        setSubmitted(false);
                      }}
                      className="flex flex-col gap-1.5 cursor-pointer"
                    >
                      <div className={`h-1.5 w-full rounded-full transition-all ${
                        idx === currentIdx 
                          ? 'bg-primary-container h-2' 
                          : idx < currentIdx 
                            ? 'bg-primary' 
                            : 'bg-surface-container-high'
                      }`}></div>
                      <div className="flex items-center justify-between">
                        <span className={`font-label-sm text-label-sm font-semibold ${idx === currentIdx ? 'text-primary font-bold' : 'text-secondary'}`}>
                          Q{idx + 1}: {idx === 0 ? 'Contract Act § 27' : idx === 1 ? 'BNS § 4(f)' : 'Art. 21 Liberty'}
                        </span>
                        {idx === currentIdx ? (
                          <span className="font-label-sm text-[10px] px-1.5 rounded bg-primary-container text-on-primary font-bold">Active</span>
                        ) : idx < currentIdx ? (
                          <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        ) : (
                          <span className="material-symbols-outlined text-[14px] text-outline">lock</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Dual-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* Left Column: Fact Pattern & Options */}
                <section className="lg:col-span-8 flex flex-col gap-space-lg">
                  {/* Fact Pattern Scenario Card */}
                  <article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between flex-wrap gap-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          Fact Pattern Scenario • Judicial Examination
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono bg-surface-container px-2 py-0.5 rounded">
                        Ref: {q.statutoryRef}
                      </span>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">feed</span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {q.factPatternTitle}
                        </h2>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {q.factPatternText}
                      </p>
                      <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant flex-wrap font-label-sm text-label-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-outline">Subject:</span>
                          <span className="font-semibold text-primary">{q.meta.disputedSum}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-outline">Scope:</span>
                          <span className="font-semibold text-on-surface">{q.meta.scope}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-outline">Governing Instrument:</span>
                          <span className="font-semibold text-on-surface">{q.meta.governingAct}</span>
                        </div>
                      </div>
                    </div>

                    {/* Judicial Prompt */}
                    <div className="flex flex-col gap-1.5 pt-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Juridical Interrogatory</span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-semibold leading-snug">
                        {q.interrogatory}
                      </h3>
                    </div>

                    {/* Multiple-Choice Interactive Set */}
                    <div aria-label="Doctrinal Choices" className="flex flex-col gap-space-sm pt-space-xs" role="radiogroup">
                      {q.options.map(opt => {
                        const isSelected = selectedOptionId === opt.id;
                        let itemStyle = "bg-surface-container-low/70 hover:bg-surface-container-low border border-transparent";
                        if (isSelected && !submitted) {
                          itemStyle = "bg-primary/5 border border-primary text-primary font-medium shadow-sm";
                        } else if (submitted) {
                          if (opt.isCorrect) {
                            itemStyle = "bg-emerald-50 border-2 border-emerald-600 text-emerald-950 shadow-sm";
                          } else if (isSelected && !opt.isCorrect) {
                            itemStyle = "bg-rose-50 border-2 border-rose-500 text-rose-950";
                          }
                        }

                        return (
                          <label
                            key={opt.id}
                            onClick={() => handleSelectOption(opt.id)}
                            className={`relative flex items-start gap-space-md p-space-md rounded-lg cursor-pointer transition-all ${itemStyle}`}
                          >
                            <div className="pt-0.5">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-semibold transition-colors ${
                                submitted && opt.isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : submitted && isSelected && !opt.isCorrect
                                    ? 'bg-rose-500 text-white'
                                    : isSelected
                                      ? 'bg-primary text-on-primary'
                                      : 'bg-surface-container-high text-outline'
                              }`}>
                                {submitted && opt.isCorrect ? (
                                  <span className="material-symbols-outlined text-[14px]">check</span>
                                ) : submitted && isSelected && !opt.isCorrect ? (
                                  <span className="material-symbols-outlined text-[14px]">close</span>
                                ) : (
                                  opt.letter
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col gap-1 flex-1">
                              <span className="font-body-md text-body-md leading-snug">
                                {opt.text}
                              </span>
                              {submitted && (
                                <div className="flex items-center gap-2 pt-1 font-label-sm text-label-sm">
                                  {opt.isCorrect ? (
                                    <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-semibold flex items-center gap-1">
                                      <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                      VERIFIED DOCTRINAL HOLDING (CORRECT)
                                    </span>
                                  ) : isSelected ? (
                                    <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-semibold flex items-center gap-1">
                                      <span className="material-symbols-outlined text-[13px]">close</span>
                                      INCORRECT JURIDICAL RATIONALE
                                    </span>
                                  ) : (
                                    <span className="text-secondary italic">{opt.note}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>

                    {/* Submit / Verification CTA */}
                    {!submitted ? (
                      <div className="pt-space-xs flex justify-end">
                        <button
                          disabled={!selectedOptionId}
                          onClick={handleSubmitAnswer}
                          className={`px-6 py-2.5 rounded font-label-md text-label-md font-semibold transition-all flex items-center gap-2 shadow ${
                            selectedOptionId
                              ? 'bg-primary text-on-primary hover:bg-primary-container'
                              : 'bg-surface-container-high text-outline cursor-not-allowed'
                          }`}
                        >
                          <span>Confirm &amp; Evaluate Answer</span>
                          <span className="material-symbols-outlined text-[16px]">gavel</span>
                        </button>
                      </div>
                    ) : null}
                  </article>

                  {/* Doctrinal Rationale & Holding Deep Dive (Feedback Panel) */}
                  {submitted && (
                    <article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border-t-4 border-primary">
                      <div className="flex items-center justify-between flex-wrap gap-space-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">menu_book</span>
                          </div>
                          <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                              Doctrinal Analysis &amp; Judicial Holding Breakdown
                            </h3>
                            <span className="font-label-sm text-label-sm text-secondary">
                              {q.explanationTitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm leading-relaxed">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-tertiary-container shrink-0 mt-0.5">format_quote</span>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            <strong className="text-on-surface font-semibold">Supreme Court Jurisprudence:</strong> {q.supremeCourtRuling}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xs pt-space-xs">
                          {q.benchmarks.map((bm, bidx) => (
                            <div key={bidx} className="p-2.5 rounded bg-surface-container-lowest flex flex-col gap-1 shadow-sm">
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">{bm.title}</span>
                              <span className="font-body-sm text-body-sm text-on-surface">{bm.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg bg-surface-container p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-sm max-w-2xl">
                          <span className="material-symbols-outlined text-[22px] text-primary shrink-0 mt-0.5">balance</span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                              Matter Application: Standard Employment Dispute
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              {q.matterUtilityText}
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={() => onNavigate('ai-assistant')}
                          className="px-3 py-2 rounded bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1 shrink-0 shadow-sm" 
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">add_link</span>
                          <span>Insert into Matter Brief</span>
                        </button>
                      </div>

                      {/* Citation Pills */}
                      <div className="flex items-center gap-space-xs flex-wrap pt-space-xs">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold mr-1">Statutory &amp; Treatise Citations:</span>
                        {q.citations.map((cite, cidx) => (
                          <span key={cidx} className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                            {cite}
                          </span>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm border-t border-surface-container-high">
                        <button 
                          onClick={() => onNavigate('law-lesson')}
                          className="px-4 py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                          <span>Re-examine Lesson Text (Sec 2.4)</span>
                        </button>
                        <button 
                          onClick={handleNextQuestion}
                          className="px-5 py-2.5 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-colors flex items-center gap-2 shadow-sm"
                        >
                          <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? `Continue to Question ${currentIdx + 2}` : 'Complete Assessment & View Library'}</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </article>
                  )}
                </section>

                {/* Right Column: Juris Companion & Assessment Intelligence */}
                <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                  {/* Rigor Index Card */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Juris Intelligence</h3>
                      </div>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary font-semibold">Active Session</span>
                    </div>

                    <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
                      <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle className="text-surface-container-high" cx="18" cy="18" fill="none" r="15.9155" stroke="currentColor" strokeWidth="3"></circle>
                          <circle 
                            className="text-primary" 
                            cx="18" 
                            cy="18" 
                            fill="none" 
                            r="15.9155" 
                            stroke="currentColor" 
                            strokeDasharray={`${answeredCount > 0 ? (score / answeredCount) * 100 : 100}, 100`} 
                            strokeLinecap="round" 
                            strokeWidth="3"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="font-label-lg text-label-lg font-bold text-primary">
                            {answeredCount > 0 ? `${Math.round((score / answeredCount) * 100)}%` : '100%'}
                          </span>
                          <span className="font-label-sm text-[9px] uppercase tracking-wider text-secondary">Rigor</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex items-baseline justify-between">
                          <span className="font-label-sm text-label-sm text-secondary">First-Pass Precision</span>
                          <span className="font-label-sm text-label-sm font-bold text-primary">{score} / {answeredCount}</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="font-label-sm text-label-sm text-secondary">Statutory Forum</span>
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">Supreme Lex</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="font-label-sm text-label-sm text-secondary">XP Points Earned</span>
                          <span className="font-label-sm text-label-sm font-bold text-tertiary-container">+{xpAwarded} XP</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-surface-container p-space-sm flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">shield</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Accreditation Tier</span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Supreme Court Advocate Tier</span>
                        <span className="font-label-sm text-[11px] text-outline">Verified against Indian Law Corpus</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Indian Law Books Reference Card */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-tertiary-container">local_library</span>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Top Indian Law Books</h3>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-medium">Standard Authorities</span>
                    </div>

                    <div className="flex flex-col gap-space-sm">
                      <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-primary">The Constitution of India</span>
                          <span className="font-label-sm text-[10px] uppercase font-bold text-on-tertiary-container bg-surface-container px-1.5 py-0.5 rounded">Dr. D.D. Basu</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Authoritative 12-volume treatise establishing the Golden Triangle of liberty (Articles 14, 19, 21) and writs under Articles 32 and 226.
                        </p>
                      </div>

                      <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-primary">Bharatiya Nyaya Sanhita (BNS)</span>
                          <span className="font-label-sm text-[10px] uppercase font-bold text-secondary bg-surface-container px-1.5 py-0.5 rounded">Ratanlal &amp; Dhirajlal</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Leading criminal commentary analyzing Community Service sentencing (§ 4(f)), Snatching (§ 304), and Organized Crime (§ 111).
                        </p>
                      </div>

                      <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-primary">Indian Contract Act</span>
                          <span className="font-label-sm text-[10px] uppercase font-bold text-secondary bg-surface-container px-1.5 py-0.5 rounded">Pollock &amp; Mulla</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Definitive reference on Section 27 voidness ab initio of all post-employment restrictive covenants.
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
