import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen10_ActionCenterProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen10_ActionCenter: React.FC<Screen10_ActionCenterProps> = ({
  onNavigate,
  userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample,
  ...props
}) => {
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Meridian Corp vs. Vantage</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Docket #2024-CV-88219</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">space_dashboard</span><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">neurology</span><span>Briefing Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">contract</span><span>Clause Analysis</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">menu_book</span><span>Precedent Vault</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">gavel</span><span>Court Filings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)"><span className="material-symbols-outlined text-[18px]">groups</span><span>Co-Counsel Network</span></a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Folio Header & Context Tier  */}
<section className="w-full bg-surface-container-lowest shadow-sm py-space-lg px-gutter">
<div className="max-w-[1360px] mx-auto flex flex-col gap-space-md">
{/*  Breadcrumb & Folio Stamp  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<div className="flex items-center gap-space-xs flex-wrap">
<span>Matters</span>
<span className="text-outline-variant font-normal">/</span>
<span className="text-on-surface font-semibold">Meridian Corp vs. Vantage</span>
<span className="text-outline-variant font-normal">/</span>
<span>Series B Stock Purchase Agreement</span>
<span className="text-outline-variant font-normal">/</span>
<span className="text-primary-container font-bold">Action Center &amp; Execution</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant font-bold">FOLIO Nº 09-K • EXECUTION PROTOCOL</span>
</div>
</div>
{/*  Main Headline Block with Action Bar  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold mb-2">
<span className="material-symbols-outlined text-[14px]">tune</span>
            POST-ANALYSIS ACTION PLAN • ACTIVE DEAL TRACK
          </div>
<h1 className="font-display-md text-display-md text-primary tracking-tight font-semibold">
            Action Center: Commercial Execution &amp; Counsel Briefing
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
            Translating algorithmic redlines and Delaware Chancery vulnerability assessments into actionable closing steps, attorney deliberation briefs, and statutory milestones.
          </p>
</div>
{/*  Utility Buttons  */}
<div className="flex items-center gap-space-sm flex-wrap">
<button className="px-space-md py-2.5 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs shadow-sm">
<span className="material-symbols-outlined text-[17px] text-secondary">file_download</span>
<span>Export Counsel Brief (.pdf)</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs shadow-sm">
<span className="material-symbols-outlined text-[17px] text-secondary">sync_alt</span>
<span>Sync Checklist</span>
</button>
<button className="px-space-md py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-space-xs shadow-sm">
<span className="material-symbols-outlined text-[17px]">send</span>
<span>Share with Outside Counsel</span>
</button>
</div>
</div>
</div>
</section>
{/*  Execution Content Body  */}
<div className="max-w-[1360px] mx-auto w-full px-gutter py-space-xl flex flex-col gap-space-xl">
{/*  PRIORITY 1 HERO CARD: Ainslie Safe Harbor Carve-Out  */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden relative">
{/*  Decorative Accent Indicator Bar  */}
<div className="h-1.5 w-full bg-primary-container"></div>
<div className="p-space-lg lg:p-space-xl flex flex-col lg:flex-row gap-space-lg justify-between items-start">
<div className="flex-1 flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-bold tracking-wider uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">error</span>
              Priority 1 • Immediate Action Required
            </span>
<span className="text-secondary font-label-sm text-label-sm">•</span>
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wide">Closing Blocker: SPA § 4.2</span>
<span className="text-secondary font-label-sm text-label-sm">•</span>
<span className="text-secondary font-label-sm text-label-sm">Delaware Supreme Court Precedent (2024)</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold mt-1">
            Negotiate Ainslie Safe Harbor Carve-Out for Clause 4.2 Non-Compete
          </h2>
<div className="bg-surface-container-low p-space-md rounded-lg mt-2 text-on-surface leading-relaxed font-body-md text-body-md shadow-sm">
<p className="font-medium text-primary-container mb-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[17px]">gavel</span>
              Executive Legal Vulnerability Briefing:
            </p>
            Apex Capital’s Series B draft imposes a 36-month global non-compete with automatic forfeiture of <span className="font-semibold text-primary">$18.4M in vested Series B founder shares</span> without compensation. Recent Delaware Supreme Court precedent (<span className="italic font-medium">Ainslie v. Cantor Fitzgerald L.P., Jan 2024</span>) renders forfeiture-for-competition provisions unenforceable as an unreasonable restraint of trade. While Chancery will not blue-pencil, the current wording leaves proprietary trade secrets exposed. You should immediately dispatch the <span className="font-semibold text-on-surface">Vance Rev 4.1 12-month narrow redline</span> before closing escrow.
          </div>
{/*  Impact Metrics Bar  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-2 pt-space-xs">
<div className="bg-surface-container-high/60 px-space-md py-2.5 rounded">
<div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Value at Risk Protected</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">$18.4M Founder Equity</div>
</div>
<div className="bg-surface-container-high/60 px-space-md py-2.5 rounded">
<div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Covenant Horizon</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">36 Mo. → 12 Mo. (Safe)</div>
</div>
<div className="bg-surface-container-high/60 px-space-md py-2.5 rounded">
<div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Chancery Enforceability</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">94% Target Likelihood</div>
</div>
</div>
</div>
{/*  Quick Action Terminal  */}
<div className="lg:w-80 w-full flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-lg shadow-sm">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Action Protocol</div>
<button className="w-full px-space-md py-3 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-between shadow-sm">
<span className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">difference</span>
<span>Open Redline Diff</span>
</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-space-xs shadow-sm" id="btn-counsel-memo">
<span className="material-symbols-outlined text-[18px] text-primary-container">mail</span>
<span>Generate Counsel Memo</span>
</button>
<button className="w-full px-space-md py-2.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center gap-space-xs" id="btn-mark-progress">
<span className="material-symbols-outlined text-[18px]">pending_actions</span>
<span>Mark as In Progress</span>
</button>
<div className="mt-2 pt-2 text-center text-secondary font-label-sm text-label-sm flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">verified</span>
            Validated against DGCL Ch. 1 § 122
          </div>
</div>
</div>
</div>
{/*  MAIN TWO-COLUMN SPLIT: 60% Execution Workstream / 40% Intelligence & Counsel  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  LEFT COLUMN: 60% (7 of 12 columns)  */}
<div className="lg:col-span-7 flex flex-col gap-space-xl">
{/*  SECTION A: High-Priority Document Clauses to Review  */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Clause Discrepancies</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Key Matters &amp; Redline Clauses</h2>
</div>
<span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">4 Items Identified</span>
</div>
{/*  Cards Stack  */}
<div className="flex flex-col gap-space-sm">
{/*  Card 1: Clause 4.2  */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-bold uppercase">High Risk</span>
<span className="font-label-md text-label-md font-semibold text-primary">Clause 4.2 • Non-Compete &amp; Forfeiture</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Pending Counter-Draft</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Refusal to blue-pencil exposure under <span className="italic font-medium text-on-surface">Ainslie</span>. Apex’s 3-year term risks complete judicial voiding, stripping founders of equitable non-solicitation defenses.
              </p>
<div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm">
<span className="text-secondary font-medium">Recommended: Reduce to 12 months, tie to goodwill purchase exemption</span>
<a className="text-primary-container font-semibold hover:underline flex items-center gap-0.5" href="javascript:void(0)">
                  Inspect Clause <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 2: Clause 9.1  */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold uppercase">Moderate Risk</span>
<span className="font-label-md text-label-md font-semibold text-primary">Clause 9.1 • IP Indemnity Cap</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">In Review</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Indemnity for third-party patent and trade secret claims is currently uncapped. Should be strictly capped at the aggregate Series B proceeds (<span className="font-semibold text-on-surface">$15.0M</span>) with a standard 18-month survival sunset.
              </p>
<div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm">
<span className="text-secondary font-medium">Drafting Proposal: Insert Section 9.1(b) liability limitation carve-out</span>
<a className="text-primary-container font-semibold hover:underline flex items-center gap-0.5" href="javascript:void(0)">
                  Inspect Clause <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 3: Option Pool Allocation Conflict  */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-bold uppercase">Blocking</span>
<span className="font-label-md text-label-md font-semibold text-primary">Conflict #1 • Option Pool Allocation</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Drafting Fix Needed</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Section 2.1 specifies a post-closing unallocated option pool of 12.5%, but Exhibit B capitalization schedule reflects an unissued 10.0% pool, generating a <span className="font-semibold text-on-surface">312,500 share discrepancy</span> before issuance.
              </p>
<div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm">
<span className="text-secondary font-medium">Action: Instruct paralegal to re-run Carta model table before execution</span>
<a className="text-primary-container font-semibold hover:underline flex items-center gap-0.5" href="javascript:void(0)">
                  View Cap Table Discrepancy <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 4: Clause 5.2  */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-bold uppercase">Low Risk</span>
<span className="font-label-md text-label-md font-semibold text-primary">Clause 5.2 • Books &amp; Records Inspection</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Recommended</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Notice window permits investor inspection within 2 business days. Unreasonably disrupts corporate operations; recommend harmonizing with statutory <span className="font-semibold text-on-surface">DGCL § 220</span> (5 business days, written oath).
              </p>
<div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm">
<span className="text-secondary font-medium">Standard Clause: Adopt NVCA 2024 Model Stock Purchase Agreement language</span>
<a className="text-primary-container font-semibold hover:underline flex items-center gap-0.5" href="javascript:void(0)">
                  Inspect Clause <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
{/*  SECTION B: Interactive Closing Checklist  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-2 pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Execution Workflow</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Pre-Closing Action Checklist</h2>
</div>
{/*  Progress indicator  */}
<div className="flex items-center gap-space-sm">
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary">Completion Status</span>
<div className="font-label-md text-label-md font-bold text-primary" id="checklist-counter">2 of 6 Completed (33%)</div>
</div>
<div className="w-12 h-12 relative flex items-center justify-center">
<svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" id="progress-circle" stroke="currentColor" strokeDasharray="33, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-label-sm text-label-sm font-bold text-primary">33%</span>
</div>
</div>
</div>
{/*  Tasks List  */}
<div className="flex flex-col gap-space-xs divide-y divide-surface-container" id="tasks-container">
{/*  Item 1: Complete  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface line-through text-secondary">Run automated DGCL &amp; Chancery precedent vulnerability scan</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold">Complete</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Completed by Eleanor Vance, Esq. • 14 potential conflicts logged.</p>
</div>
</label>
{/*  Item 2: Complete  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface line-through text-secondary">Obtain Secretary Certificate &amp; Articles of Incorporation Amendment</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold">Complete</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Filed with Dover Department of State, Division of Corporations.</p>
</div>
</label>
{/*  Item 3: Pending Attorney  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Schedule pre-closing alignment call with lead partner (Eleanor Vance) regarding Ainslie non-compete posture</span>
<span className="px-space-xs py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-label-sm font-semibold">Pending Attorney</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Target session: Tomorrow, 10:30 AM EST via Enclave Encrypted Room.</p>
</div>
</label>
{/*  Item 4: In Progress  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Deliver formal redline memo with revised Clause 4.2 and Clause 9.1 to Apex Capital counsel (Wachtell)</span>
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold">In Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Draft Vance Rev 4.1 queued in export tray with statutory annotations.</p>
</div>
</label>
{/*  Item 5: Blocked  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Rectify Exhibit B Option Pool Discrepancy with corporate paralegal team</span>
<span className="px-space-xs py-0.5 rounded bg-error-container text-error text-label-sm font-label-sm font-semibold">Blocked</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Awaiting updated fully-diluted cap table schedule from Carta auditor.</p>
</div>
</label>
{/*  Item 6: Pending  */}
<label className="flex items-start gap-space-md p-space-sm rounded cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer task-checkbox" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Execute Form D Blue Sky exemption filings with SEC within 15 calendar days of closing</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary text-label-sm font-label-sm font-semibold">Scheduled</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Statutory clock initiates upon Initial Tranche disbursement escrow release.</p>
</div>
</label>
</div>
</div>
{/*  SECTION C: Prepared Attorney Deliberation Agenda  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-2 pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Counsel Preparation</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Questions to Ask Your Lawyer</h2>
</div>
<span className="text-secondary font-label-sm text-label-sm">Synthesized from AI Clause Diff</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Jurisdictionally grounded inquiries formulated for your upcoming consultation with Eleanor Vance, Esq., ensuring zero wasted billable minutes.
          </p>
{/*  Questions Cards  */}
<div className="flex flex-col gap-space-sm">
{/*  Question 1  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-primary-container">Deliberation Topic 01 • Severability Safeguards</span>
<span className="material-symbols-outlined text-[16px] text-secondary">psychology</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-normal">
                “Under <span className="italic">Ainslie v. Cantor Fitzgerald</span>, if the Court of Chancery invalidates Section 4.2’s forfeiture-for-competition clause, does Section 14.3’s severability clause adequately preserve our trade secret and customer non-solicitation protections?”
              </p>
<div className="text-secondary font-label-sm text-label-sm pt-1">
                Context: Prevents total unenforceability if the court refuses to blue-pencil overbroad restrictions.
              </div>
</div>
{/*  Question 2  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-primary-container">Deliberation Topic 02 • Interstate Jurisdiction Conflict</span>
<span className="material-symbols-outlined text-[16px] text-secondary">balance</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-normal">
                “Can Apex Capital enforce Delaware forum selection (Clause 11.4) against California-domiciled founders under California Business &amp; Professions Code § 16600.5, or would California courts enjoin enforcement?”
              </p>
<div className="text-secondary font-label-sm text-label-sm pt-1">
                Context: SB 699 and AB 1076 create private rights of action for California employees subject to out-of-state non-competes.
              </div>
</div>
{/*  Question 3  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-primary-container">Deliberation Topic 03 • IP Indemnity Structure</span>
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-normal">
                “Should we convert the uncapped IP indemnity in Clause 9.1 into a dedicated special indemnity escrow carve-out or tie it strictly to the $15.0M aggregate Series B investment ceiling?”
              </p>
<div className="text-secondary font-label-sm text-label-sm pt-1">
                Context: Shields founder equity from enterprise patent troll litigation without blocking funding.
              </div>
</div>
</div>
{/*  Bottom Actions for Questions  */}
<div className="flex items-center justify-between flex-wrap gap-space-sm pt-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">add_circle</span>
<span>Add Custom Inquiry</span>
</button>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">print</span>
<span>Print Deliberation Sheet</span>
</button>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">forward_to_inbox</span>
<span>Draft Email to Counsel</span>
</button>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN: 40% (5 of 12 columns)  */}
<div className="lg:col-span-5 flex flex-col gap-space-xl">
{/*  SECTION D: Important Dates & Statutory Deadlines  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Deal Milestones</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Dates &amp; Statutory Timers</h2>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">calendar_today</span>
</div>
{/*  Timeline Items  */}
<div className="relative pl-6 flex flex-col gap-space-md before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container">
{/*  Item 1: Next Milestone in 4 Days  */}
<div className="relative">
<span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-surface-container-lowest"></span>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between flex-wrap">
<span className="font-label-sm text-label-sm font-bold text-primary-container">NOV 15, 2024</span>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold animate-pulse">In 4 Days</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">Initial Escrow Closing &amp; Effective Date</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Disbursement of $10,000,000 Initial Tranche upon receipt of verified signature packets and closing opinions.
                </p>
</div>
</div>
{/*  Item 2: Nov 30  */}
<div className="relative">
<span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between flex-wrap">
<span className="font-label-sm text-label-sm font-bold text-secondary">NOV 30, 2024</span>
<span className="text-secondary font-label-sm text-label-sm">In 19 Days</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">SEC Form D Blue Sky Deadline</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Strict 15-day statutory window under SEC Rule 506(b) following first receipt of investor consideration.
                </p>
</div>
</div>
{/*  Item 3: Dec 15  */}
<div className="relative">
<span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between flex-wrap">
<span className="font-label-sm text-label-sm font-bold text-secondary">DEC 15, 2024</span>
<span className="text-secondary font-label-sm text-label-sm">In 34 Days</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">First Post-Series B Board Meeting</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Formal seat allocation for Apex Designee (Marcus Vance, Observer) and adoption of amended corporate bylaws.
                </p>
</div>
</div>
{/*  Item 4: Jan 15, 2025  */}
<div className="relative">
<span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between flex-wrap">
<span className="font-label-sm text-label-sm font-bold text-secondary">JAN 15, 2025</span>
<span className="text-secondary font-label-sm text-label-sm">Q1 2025</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tranche 2 Milestone Readiness Review</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Second closing tranche ($5,000,000) condition audit tied to FDA Phase II trial enrollment benchmark.
                </p>
</div>
</div>
{/*  Item 5: Sunset  */}
<div className="relative">
<span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-outline-variant ring-4 ring-surface-container-lowest"></span>
<div className="p-space-md rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold text-secondary">NOV 15, 2029</span>
<span className="text-secondary font-label-sm text-label-sm">5 Years</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">5-Year Investor Rights Sunset Expiration</div>
<p className="font-body-sm text-body-sm text-secondary">Automatic termination of special information and co-sale covenants.</p>
</div>
</div>
</div>
<button className="w-full py-2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-space-xs mt-1">
<span className="material-symbols-outlined text-[16px]">edit_calendar</span>
<span>Sync to Corporate Counsel Calendar (iCal/GCal)</span>
</button>
</div>
{/*  SECTION E: Relevant Legal Knowledge & Educational Upskilling  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Juris Academy Briefs</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Relevant Legal Knowledge</h2>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">school</span>
</div>
<div className="flex flex-col gap-space-sm">
{/*  Lesson 1  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-bright transition-colors flex flex-col gap-space-xs cursor-pointer group">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary-container font-semibold uppercase">5 Min Read • DGCL &amp; Chancery Precedent</span>
<span className="material-symbols-outlined text-[16px] text-secondary group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary-container transition-colors">
                Delaware Non-Compete Jurisprudence: The Post-Ainslie Landscape
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Why the Court of Chancery rejects the traditional employee choice doctrine and refuses to blue-pencil overbroad forfeiture covenants in commercial partnership agreements.
              </p>
</div>
{/*  Lesson 2  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-bright transition-colors flex flex-col gap-space-xs cursor-pointer group">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary-container font-semibold uppercase">8 Min Read • Venture Finance</span>
<span className="material-symbols-outlined text-[16px] text-secondary group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary-container transition-colors">
                Negotiating Liquidation Preferences: 1.0x vs 1.25x Non-Participating
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Cap table modeling scenarios demonstrating the dilution impact of downside protection tiers across multiple acquisition valuations.
              </p>
</div>
{/*  Lesson 3  */}
<div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-bright transition-colors flex flex-col gap-space-xs cursor-pointer group">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary-container font-semibold uppercase">6 Min Read • Governance</span>
<span className="material-symbols-outlined text-[16px] text-secondary group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary-container transition-colors">
                Director Oversight &amp; Caremark Duties in Biotech Series B
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Mitigating fiduciary exposure through verified board reporting systems following the Delaware Supreme Court’s <span className="italic">Marchand</span> precedent.
              </p>
</div>
</div>
<a className="font-label-md text-label-md text-primary-container font-semibold flex items-center justify-center gap-space-xs py-2 hover:underline" href="javascript:void(0)">
<span>Explore All Legal Knowledge Modules (42 Guides)</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
{/*  SECTION F: Specialized Legal Counsel Match  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Vetted Co-Counsel</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Matched Delaware Counsel</h2>
</div>
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">98% Match</span>
</div>
{/*  Featured Attorney Profile Card  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-primary-container" data-alt="Sophisticated portrait of female corporate partner Eleanor Vance in elegant dark green suit inside modern law firm office with law library background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJH8y8WVmz31JcJhilalkUHDOjKmSaxkuwM44LhfMXaYYG4Mgdi2XzxjtpAQ0fuNz4jLZ0Ib1u3bLLv6AQhrNQjvUUPjF2gXQS-TobzJr2OCTWtNnSWgdl2-P2xvigrRlA_cq73bsoitNUuiafve7FdUjHBKHJc_PqBExJBXU7gU1Zm8r9jRaOz1XXC_t2TrIviL9pFxrpTuNKqRAwUXSzGboT8uZdk9rE2JcVPEzEiWHvRVNZSqoQ9Q"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Eleanor Vance, Esq.</h3>
<span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
</div>
<div className="font-label-sm text-label-sm text-primary font-medium">Partner • Chancery Litigation &amp; Venture</div>
<div className="font-body-sm text-body-sm text-secondary truncate">Sterling &amp; Vance LLP • Wilmington, DE</div>
</div>
</div>
{/*  Expertise Pills  */}
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">DGCL § 122 Non-Competes</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">Series B Recap</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">Ainslie Defense</span>
</div>
{/*  Status & Availability  */}
<div className="flex items-center justify-between text-label-sm font-label-sm pt-space-xs text-secondary">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="text-on-surface font-medium">Retainer Active • Context Pre-synced</span>
</div>
<span className="font-semibold text-primary">Priority Turnaround</span>
</div>
{/*  CTA Buttons  */}
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="w-full py-2.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">video_call</span>
<span>Schedule Call</span>
</button>
<button className="w-full py-2.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">forum</span>
<span>Message Enclave</span>
</button>
</div>
</div>
{/*  Secondary Specialist Mini-Card  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Professional headshot of senior male intellectual property attorney Marcus Thorne in tailored charcoal blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANKc1RFR7qwLxr24UmxvGm6iKuE2QlfK5E6SPa-y2HK1rXdIUVNNoQpA5ug4UDMZ2hjHYP9dt5c-hfK4OiUwlro_ZbjfHst72C0oke1dTBGLmH2FIks1pFlxK6I5XPv66730j0446YLIkxaNoKB8Gw_depCD3e4iPVNC5fYQ0gdOjomzKaEPZcNbYBef8sRlAImd-5cWkio1BtWzREdEf5grFZeCELb2cvOuDs2lc1yTQ79LuVuJyTIg"/>
<div>
<div className="font-label-md text-label-md font-semibold text-on-surface">Marcus Thorne, Esq.</div>
<div className="font-body-sm text-body-sm text-secondary">IP Indemnity Specialist • Silicon Valley</div>
</div>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high">
              View Brief
            </button>
</div>
<a className="font-label-md text-label-md text-primary-container font-semibold flex items-center justify-center gap-space-xs hover:underline text-center" href="javascript:void(0)">
<span>Browse Co-Counsel Network (124 Chancery Practitioners)</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  WORK PRODUCT PRIVILEGE STAMP & STATUTORY BADGING  */}
<div className="w-full bg-surface-container-low rounded-lg p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md text-secondary">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm font-semibold uppercase text-primary">
<span className="material-symbols-outlined text-[16px] text-primary-container">lock</span>
<span>Confidential Work Product</span>
</div>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm">Protected by ABA Formal Opinion 477R &amp; 498 Standards</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm">Delaware State Bar Rule 1.6 Privileged Enclave</span>
</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
<span>Last algorithmic audit: 12 minutes ago</span>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};
