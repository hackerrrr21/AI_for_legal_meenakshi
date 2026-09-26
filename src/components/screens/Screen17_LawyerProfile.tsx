import React from 'react';

interface Screen17_LawyerProfileProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen17_LawyerProfile: React.FC<Screen17_LawyerProfileProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  onQuickLoadSample: _onQuickLoadSample}) => {
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Residential Tenancy Due Diligence</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Matter Ref #DEL-TEN-2026</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Co-Counsel</a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Folio Header & Top Metadata Bar  */}
<section className="w-full px-gutter py-space-sm bg-surface-container-low shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Matters</span>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<a className="font-label-sm text-label-sm text-on-surface hover:text-primary-container font-medium transition-colors" href="javascript:void(0)">Residential Tenancy Due Diligence</a>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<a className="font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors" href="javascript:void(0)">Find Co-Counsel</a>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Folio Nº 12-L • Adv. Ananya Deshmukh</span>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/60 text-primary-container">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="font-label-sm text-label-sm tracking-wide font-semibold">Conflict Check Pre-Cleared</span>
</div>
<button className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container text-label-sm font-label-sm shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors" title="Export Certified CV" type="button">
<span className="material-symbols-outlined text-[15px]">download</span>
<span>CV (.pdf)</span>
</button>
<button className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-primary-container hover:bg-surface-container text-label-sm font-label-sm shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors" type="button">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>bookmark</span>
<span>Shortlisted</span>
</button>
</div>
</div>
</section>
{/*  Context Alignment Banner  */}
<section className="w-full px-gutter pt-space-md">
<div className="max-w-7xl mx-auto rounded-lg bg-surface-container p-space-md shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<div className="h-10 w-10 shrink-0 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-lg text-label-lg shadow-sm">
          98%
        </div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Matter Match Resonance</span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded">Matter Ref #DEL-TEN-2026</span>
<span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-0.5 rounded font-semibold">Priority Counsel Tier</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Admitted Delhi High Court &amp; Rent Controller Tribunals specialist with direct jurisprudence involvement in <strong className="text-on-surface font-medium">Section 106 Transfer of Property Act</strong> corporate safe harbors, preferred shareholder rights, and non-compete reasonableness tests.
          </p>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary">Statutory Match Score:</span>
<div className="w-28 h-2 rounded-full bg-surface-variant overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"98%"}}></div>
</div>
</div>
</div>
</section>
{/*  Main Profile Container  */}
<section className="w-full px-gutter py-space-md">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
{/*  Profile Header Hero Card  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative overflow-hidden">
{/*  Subtle antique parchment watermark accent  */}
<div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary-fixed/20 pointer-events-none blur-3xl"></div>
<div className="flex flex-col lg:flex-row items-start gap-space-lg relative z-10">
{/*  Portrait Container  */}
<div className="relative shrink-0 mx-auto lg:mx-0">
<div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md bg-surface-container-high relative">
<img alt="Professional legal portrait of Adv. Ananya Deshmukh, Senior Advocate • Delhi High Court &amp; Bar Council of Delhi" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAL2PVPA-eiTyPEkqbxJq-WytcgHcrz9IlDrD7REQ8Jt7YQ-LlolDdqT-KiN4OocTfeAKypdmioBbR5uSLBy7G9d0IYbitdRjNTq6oCtjyTUwR9DbXfKV0xSoKp5FdSTmdRAuUzEdD8D63y8v6LQWYkmmCisKpNbnLo55x_pVbubUmapf2vkuBbCFP6mDK_304mi4qpAk6ZbHZ_eJOfhUMBqkXQu-69KwnYmmP-_KOw4r6ibj1Df-jUA"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[14px]">gavel</span>
<span className="font-label-sm text-label-sm font-semibold tracking-wide">BCI/D/2012/4891</span>
</div>
</div>
{/*  Bio & Practice Overview Details  */}
<div className="flex-1 flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">Tenancy &amp; Real Estate Practice Head</span>
<span className="px-2 py-0.5 rounded bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-medium">Chambers Band 1</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Active Privilege Enclave</span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>Active for Direct Engagement</span>
</div>
</div>
<div className="mt-1">
<h1 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">Adv. Ananya Deshmukh</h1>
<p className="font-headline-sm text-headline-sm text-secondary font-normal mt-0.5">
                Senior Partner &amp; Head of Tenancy & Consumer Protection Practice • Deshmukh Chambers of Law, New Delhi
              </p>
</div>
{/*  Location & Clearance Row  */}
<div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2 text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
<span>Barakhamba Road, Connaught Place, New Delhi</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">account_balance</span>
<span>Near Patiala House Courts & Delhi High Court</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">history_edu</span>
<span>22 Years in Practice</span>
</div>
</div>
{/*  Credentials & Rate Pill Cluster  */}
<div className="flex flex-wrap items-center gap-2 mt-3 pt-3 bg-surface-container-low/50 rounded-lg p-2.5">
<div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<span className="material-symbols-outlined text-primary-container text-[18px]">payments</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase leading-none">Billing Rate</span>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">$875 / hr <span className="font-body-sm text-body-sm text-secondary font-normal">Civil Court Lead</span></span>
</div>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<span className="material-symbols-outlined text-primary-container text-[18px]">event_available</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase leading-none">Intake Window</span>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Within 24–48 Hours</span>
</div>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<span className="material-symbols-outlined text-primary-container text-[18px]">school</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase leading-none">Education</span>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Harvard Law (magna cum laude)</span>
</div>
</div>
</div>
{/*  Action Buttons Row  */}
<div className="flex flex-wrap items-center gap-space-sm mt-4 pt-2">
<a className="px-space-md py-2.5 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center gap-2 font-label-lg text-label-lg font-semibold shadow-sm" href="#booking-section">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Request Consultation / Retain Counsel</span>
</a>
<button className="px-space-md py-2.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 font-label-lg text-label-lg font-medium" type="button">
<span className="material-symbols-outlined text-secondary text-[18px]">lock</span>
<span>Direct Privilege Enclave Chat</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 font-label-lg text-label-lg font-medium" type="button">
<span className="material-symbols-outlined text-secondary text-[18px]">call</span>
<span>Encrypted Voice Call</span>
</button>
<button className="px-space-sm py-2.5 rounded bg-transparent text-secondary hover:text-on-surface transition-colors flex items-center gap-1 font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[16px]">mail</span>
<span>Submit Matter RFP</span>
</button>
</div>
</div>
</div>
</div>
{/*  2-Column Content Architecture  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Left 8 Columns: Credentials, Track Record, and Depth  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/*  1. Executive Bio & Overview  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">menu_book</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Professional Overview &amp; Practice Focus</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Curriculum Vitae Extract</span>
</div>
<div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-sm leading-relaxed">
<p>
                Adv. Ananya Deshmukh has spent over two decades serving as principal trial and advisory counsel in the Delhi High Court &amp; Rent Controller Tribunals. Her practice concentrates on high-stakes corporate governance, disputes concerning stockholder appraisal rights, and defense against restrictive covenant challenges for enterprise-scale software, life sciences, and venture-backed entities.
              </p>
<p>
                In 2024, following the pivotal ruling in <em className="text-on-surface font-serif italic">Anthony v. KC Ittoop & Sons & Ors (Supreme Court)</em>, Ms. Vance co-authored the Bar Council of India &amp; Delhi High Court Bar Association advisory brief recommending statutory adjustments that subsequently informed the codification of <strong className="text-on-surface font-semibold">Section 106 Transfer of Property Act</strong>. She regularly counsels boards of directors and special transaction committees navigating contentious Commercial & Residential Lease Agreements, founder voting structures, and fiduciary safe-harbor enforcement.
              </p>
</div>
{/*  Key Metrics Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md pt-space-md bg-surface-container-low/40 rounded-lg p-space-sm text-center">
<div className="flex flex-col p-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">$1.8B+</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-0.5">Disputed Deal Value</span>
</div>
<div className="flex flex-col p-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">140+</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-0.5">Real Estate & Tenancy Matters</span>
</div>
<div className="flex flex-col p-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">18</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-0.5">Published Opinions</span>
</div>
<div className="flex flex-col p-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">100%</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-0.5">Delhi Enclave Clear</span>
</div>
</div>
</div>
{/*  2. Core Practice Areas (Interactive breakdown)  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">balance</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Core Practice Focus &amp; Matter Alignment</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">Ranked by Matter Applicability</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
{/*  Practice Card 1  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">98% Primary Match</span>
<span className="font-label-sm text-label-sm text-secondary">Delhi HC</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">Rent Control &amp; Consumer Forum Litigation &amp; Corporate Governance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    Lead litigation counsel for expedited preliminary injunctions, fiduciary duty challenges, and controlling stockholder conflicts in Rodney Square.
                  </p>
</div>
<div className="mt-3 pt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span>92 Filed Actions • 9 Enjoined Resolutions</span>
</div>
</div>
{/*  Practice Card 2  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">95% Active Match</span>
<span className="font-label-sm text-label-sm text-secondary">RERA Statutory Protections</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">Restraints of Trade &amp; Restrictive Covenants</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    Drafting, stress-testing, and defending executive non-competes, forfeiture-for-competition clauses, and § 122(18) corporate power reservations.
                  </p>
</div>
<div className="mt-3 pt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span>Direct Match for AdvoChat vs Landlord</span>
</div>
</div>
{/*  Practice Card 3  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-semibold">89% Match</span>
<span className="font-label-sm text-label-sm text-secondary">Venture Equity</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">Preferred Stock Structuring &amp; Anti-Dilution Defense</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    Advising startup founders and lead institutional investors on liquidation preferences, pay-to-play amendments, and down-round recapitalizations.
                  </p>
</div>
<div className="mt-3 pt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span>34 Portfolio Companies Represented</span>
</div>
</div>
{/*  Practice Card 4  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-semibold">84% Match</span>
<span className="font-label-sm text-label-sm text-secondary">Consumer Protection Act 2019</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">Books &amp; Records Demands &amp; Special Committees</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    Navigating pre-suit stockholder inspections, proper purpose determinations, and defending boards against overbroad evidentiary subpoenas.
                  </p>
</div>
<div className="mt-3 pt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span>48 Demands Resolved Pre-Complaint</span>
</div>
</div>
</div>
</div>
{/*  3. Experience & Landmark Engagements  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">timeline</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Experience &amp; Landmark Real Estate & Tenancy Matters</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Adjudicated Record</span>
</div>
{/*  Career Timeline  */}
<div className="flex flex-col gap-space-md mt-space-sm pl-2">
{/*  Role 1  */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary-container after:content-[''] after:absolute after:left-1 after:top-4 after:bottom-0 after:w-0.5 after:bg-surface-variant pb-space-sm">
<div className="flex flex-wrap items-center justify-between gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Senior Partner &amp; Real Estate & Tenancy Practice Lead</h3>
<span className="font-label-sm text-label-sm text-secondary font-medium">2021 – Present</span>
</div>
<p className="font-body-md text-body-md text-secondary mt-0.5">Deshmukh Chambers of Law, New Delhi • New Delhi, India</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                  Directing the 14-lawyer corporate litigation boutique focused exclusively on high-velocity disputes before the Vice Chancellors of Delhi.
                </p>
</div>
{/*  Role 2  */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-secondary after:content-[''] after:absolute after:left-1 after:top-4 after:bottom-0 after:w-0.5 after:bg-surface-variant pb-space-sm">
<div className="flex flex-wrap items-center justify-between gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Partner, Civil &amp; Commercial Disputes</h3>
<span className="font-label-sm text-label-sm text-secondary font-medium">2012 – 2021</span>
</div>
<p className="font-body-md text-body-md text-secondary mt-0.5">Skadden, Arps, Slate, Meagher &amp; Flom LLP • New Delhi, India</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                  Handled multi-billion dollar merger litigation, proxy fights, and tender offer defenses for Fortune 100 enterprise clients.
                </p>
</div>
{/*  Role 3  */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-outline-variant">
<div className="flex flex-wrap items-center justify-between gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Judicial Law Clerk to the Court of Civil Court</h3>
<span className="font-label-sm text-label-sm text-secondary font-medium">2004 – 2006</span>
</div>
<p className="font-body-md text-body-md text-secondary mt-0.5">Delhi High Court &amp; Rent Controller Tribunals • Bar Council of Delhi</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                  Drafted bench memoranda and published opinions on fiduciary duty appraisal actions and preliminary injunction requests under Rule 65.
                </p>
</div>
</div>
{/*  Landmark Matters Highlight  */}
<div className="mt-space-lg pt-space-md">
<h3 className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-space-sm">Representative Public Opinions &amp; Settlements</h3>
<div className="flex flex-col gap-space-sm">
<div className="p-space-sm rounded bg-surface-container-low">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">Delhi Real Estate Tenancy & RERA Advisory</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Safe Harbor Protocol</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Structured bespoke safe-harbor protective provisions under newly amended Section 106 Transfer of Property Act, safeguarding $35M in enterprise value from dissenting common share dilution claims.
                  </p>
</div>
<div className="p-space-sm rounded bg-surface-container-low">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">In re BioSynthetica Shareholder Litigation</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Del. Ch. C.A. No. 2022-0419-JTL</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Secured dismissal with prejudice of breach of loyalty claim brought against founder board members regarding executive retention stock allocations during Series C.
                  </p>
</div>
<div className="p-space-sm rounded bg-surface-container-low">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">AlphaTech Non-Compete Injunction Defense</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Del. Ch. C.A. No. 2023-1102-SG</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Invalidated a 36-month worldwide non-competition forfeiture under the Civil Court reasonableness test following the <em>Percept D'Mark</em> and Section 27 standards, setting bench precedent.
                  </p>
</div>
</div>
</div>
</div>
{/*  4. Bar Admissions, Education, and Accolades  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">workspace_premium</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Admissions, Education &amp; Accolades</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Verified Credentials</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
{/*  Left Column: Bar Admissions & Education  */}
<div className="flex flex-col gap-space-md">
<div>
<h3 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-2">Bar Admissions</h3>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
<span>Supreme Court of the Bar Council of Delhi (2004)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
<span>U.S. District Court for the District of Delhi (2005)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
<span>U.S. Court of Appeals for the Third Circuit (2008)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
<span>State Bar of New York (Dual-Admitted 2005)</span>
</li>
</ul>
</div>
<div>
<h3 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-2">Education &amp; Honors</h3>
<div className="flex flex-col gap-2">
<div className="p-2.5 rounded bg-surface-container-low">
<div className="font-label-md text-label-md font-bold text-on-surface">Harvard Law School</div>
<div className="font-body-sm text-body-sm text-secondary">Juris Doctor (J.D.), magna cum laude (2004)</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Notes Editor, Harvard Law Review • Dean’s Scholar Prize</div>
</div>
<div className="p-2.5 rounded bg-surface-container-low">
<div className="font-label-md text-label-md font-bold text-on-surface">Dartmouth College</div>
<div className="font-body-sm text-body-sm text-secondary">Bachelor of Arts (B.A.), summa cum laude (2001)</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Philosophy &amp; Government • Phi Beta Kappa</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Honors & Languages  */}
<div className="flex flex-col gap-space-md">
<div>
<h3 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-2">Industry Accolades</h3>
<div className="flex flex-col gap-2">
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant text-[18px]">military_tech</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Chambers USA — Band 1 Leader</div>
<div className="font-body-sm text-body-sm text-secondary">Civil Court Corporate Litigation (2018–2024 editions)</div>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant text-[18px]">military_tech</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">The Best Lawyers in America</div>
<div className="font-body-sm text-body-sm text-secondary">Bet-the-Company Litigation &amp; Corporate Governance</div>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant text-[18px]">military_tech</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Fellow, American College of Trial Lawyers</div>
<div className="font-body-sm text-body-sm text-secondary">Inducted for demonstrated Civil Court advocacy excellence</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-2">Languages Spoken</h3>
<div className="grid grid-cols-3 gap-2">
<div className="p-2 rounded bg-surface-container-low text-center">
<div className="font-label-md text-label-md font-bold text-on-surface">English</div>
<div className="font-label-sm text-label-sm text-secondary">Native / Judicial</div>
</div>
<div className="p-2 rounded bg-surface-container-low text-center">
<div className="font-label-md text-label-md font-bold text-on-surface">French</div>
<div className="font-label-sm text-label-sm text-secondary">Working Legal</div>
</div>
<div className="p-2 rounded bg-surface-container-low text-center">
<div className="font-label-md text-label-md font-bold text-on-surface">Spanish</div>
<div className="font-label-sm text-label-sm text-secondary">Conversational</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right 4 Columns: Sticky Booking Drawer & Enclave Controls  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-20" id="booking-section">
{/*  Appointment Booking Module  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Direct Intake Module</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Schedule Consultation</h3>
</div>
<span className="material-symbols-outlined text-primary-container text-[20px]">calendar_today</span>
</div>
{/*  Mode Selector Tabs  */}
<div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-surface-container">
<button className="py-1.5 px-2 rounded text-center font-label-sm text-label-sm font-semibold transition-colors bg-surface-container-lowest text-primary shadow-sm" id="btn-intake-30" onClick={() => {}} type="button">
                30-Min Intake<br/><span className="text-secondary font-normal">$437.50</span>
</button>
<button className="py-1.5 px-2 rounded text-center font-label-sm text-label-sm font-semibold transition-colors text-on-surface-variant hover:text-on-surface" id="btn-intake-60" onClick={() => {}} type="button">
                60-Min Strategy<br/><span className="text-secondary font-normal">$875.00</span>
</button>
<button className="py-1.5 px-2 rounded text-center font-label-sm text-label-sm font-semibold transition-colors text-on-surface-variant hover:text-on-surface" id="btn-intake-retainer" onClick={() => {}} type="button">
                Retainer<br/><span className="text-secondary font-normal">Appearance</span>
</button>
</div>
{/*  Interactive Date & Time Picker Area  */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Available Consultation Slots</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Nov 14, 2024</span>
</div>
{/*  Time Slot Pills  */}
<div className="grid grid-cols-3 gap-1.5" id="slot-container">
<button className="slot-pill py-2 px-1 rounded bg-primary-container text-on-primary text-center font-label-sm text-label-sm font-semibold shadow-sm transition-all" onClick={() => {}} type="button">
                  10:00 AM EST
                </button>
<button className="slot-pill py-2 px-1 rounded bg-surface-container-low text-on-surface hover:bg-surface-container text-center font-label-sm text-label-sm font-medium transition-all" onClick={() => {}} type="button">
                  02:30 PM EST
                </button>
<button className="slot-pill py-2 px-1 rounded bg-surface-container-low text-on-surface hover:bg-surface-container text-center font-label-sm text-label-sm font-medium transition-all" onClick={() => {}} type="button">
                  04:30 PM EST
                </button>
</div>
</div>
{/*  Consultation Format Options  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm font-bold text-on-surface">Enclave Format</label>
<div className="grid grid-cols-3 gap-1 text-center font-label-sm text-label-sm">
<label className="p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container flex flex-col items-center gap-1 transition-colors">
<input defaultChecked={true} className="accent-primary-container" name="format" type="radio"/>
<span>Video Enclave</span>
</label>
<label className="p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container flex flex-col items-center gap-1 transition-colors">
<input className="accent-primary-container" name="format" type="radio"/>
<span>New Delhi Office</span>
</label>
<label className="p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container flex flex-col items-center gap-1 transition-colors">
<input className="accent-primary-container" name="format" type="radio"/>
<span>Secure Phone</span>
</label>
</div>
</div>
{/*  Pre-Linked Matter Context Box  */}
<div className="p-2.5 rounded bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Associated Matter Docket:</span>
<span className="text-on-surface font-semibold">Auto-Linked</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                Case #2024-CV-88219: Residential Tenancy Due Diligence
              </div>
<div className="font-label-sm text-label-sm text-secondary">
                Conflict check verified under ABA Model Rule 1.7.
              </div>
</div>
{/*  Booking Submit Button  */}
<button className="w-full py-3 px-4 rounded bg-primary-container text-on-primary hover:bg-primary transition-all flex items-center justify-center gap-2 font-label-lg text-label-lg font-semibold shadow-md active:scale-[0.99]" id="confirm-booking-btn" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Confirm &amp; Book Consultation</span>
</button>
{/*  Status Indicator Area  */}
<div className="hidden p-2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm text-center" id="booking-alert">
              Intake invitation dispatched to counsel calendar. Enclave room generated.
            </div>
{/*  Security Assurance  */}
<div className="flex items-center justify-center gap-1.5 text-secondary font-label-sm text-label-sm text-center pt-1">
<span className="material-symbols-outlined text-[14px]">shield</span>
<span>ABA Model Rule 1.6 Encrypted • Zero Data Retention</span>
</div>
</div>
{/*  Direct Chambers & Dispatch Information  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_6px_rgba(0,0,0,0.02)] flex flex-col gap-space-sm">
<h3 className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Chambers &amp; Enclave Dispatch</h3>
<div className="flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-secondary text-[18px]">phone</span>
<div>
<div className="font-semibold text-on-surface">(302) 658-9200</div>
<div className="text-secondary text-label-sm font-label-sm">Direct Chambers Extension</div>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-secondary text-[18px]">lock</span>
<div>
<div className="font-semibold text-on-surface">e.vance@sterlingvance.com</div>
<div className="text-secondary text-label-sm font-label-sm">256-bit PGP Key #8FB2-4A91-002</div>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-secondary text-[18px]">support_agent</span>
<div>
<div className="font-semibold text-on-surface">Marcus Vance, Lead Legal Coordinator</div>
<div className="text-secondary text-label-sm font-label-sm">Direct ext. 402 • Emergency Filings</div>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>
<div>
<div className="font-semibold text-on-surface">Rodney Square North</div>
<div className="text-secondary text-label-sm font-label-sm">Barakhamba Road, Connaught Place, New Delhi 110001</div>
</div>
</div>
</div>
{/*  Rapid SLA Callout  */}
<div className="p-2.5 rounded bg-surface-container flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-primary-container text-[18px]">speed</span>
<div className="font-label-sm text-label-sm text-on-surface">
<strong>Rapid Response SLA:</strong> Under 2 hours for pending TROs &amp; closing blockers.
              </div>
</div>
</div>
{/*  Frequent Co-Counsel Network  */}
<div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_6px_rgba(0,0,0,0.02)] flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Frequent Co-Counsel</h3>
<span className="font-label-sm text-label-sm text-secondary">Pre-Approved</span>
</div>
<div className="flex flex-col gap-2">
<div className="p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold font-label-md text-label-md">
                    HB
                  </div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Harrison Blake, Esq.</div>
<div className="font-label-sm text-label-sm text-secondary">Venture Equity &amp; Restructuring</div>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[16px]">chevron_right</span>
</div>
<div className="p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold font-label-md text-label-md">
                    CM
                  </div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Clarissa Morgan, Esq.</div>
<div className="font-label-sm text-label-sm text-secondary">Trade Secrets &amp; IP Restraints</div>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[16px]">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Statutory Verification Bottom Banner  */}
<section className="w-full px-gutter py-space-md bg-surface-container-low mt-space-lg shadow-[0_-1px_4px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-secondary">
<div className="flex items-center gap-space-md flex-wrap justify-center md:justify-start">
<span className="flex items-center gap-1 font-semibold text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
          Delhi State Bar Ass'n ID #DE-441829 Verified
        </span>
<span className="hidden md:inline text-outline-variant">•</span>
<span>ABA Formal Opinion 477R &amp; 498 Compliant</span>
<span className="hidden md:inline text-outline-variant">•</span>
<span>SOC-2 Type II Certified Privileged Repository</span>
</div>
<div>
<span>Encrypted Record Folio Nº 12-L • AdvoChat Vault</span>
</div>
</div>
</section>
{/*  Interactive Scripts for UI Fluidity  */}

</div></main></div>
    </div>
  );
};
