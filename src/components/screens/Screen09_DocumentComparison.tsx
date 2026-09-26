import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen09_DocumentComparisonProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen09_DocumentComparison: React.FC<Screen09_DocumentComparisonProps> = ({
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
{/*  Top Command & Breadcrumb Strip  */}
<section className="w-full px-gutter py-space-md bg-surface-container-low shadow-sm">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
<div className="flex flex-col gap-1.5">
<div className="flex items-center flex-wrap gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Matters</span>
<span className="text-outline-variant font-normal">/</span>
<span className="font-medium text-on-surface">Meridian Corp vs. Vantage</span>
<span className="text-outline-variant font-normal">/</span>
<span>Comparative Analysis</span>
<span className="text-outline-variant font-normal">/</span>
<span className="text-tertiary-container font-semibold">Redline Reconciliation (Folio Nº 08-R)</span>
</div>
<div className="flex items-center gap-space-sm pt-1">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
            Side-by-Side Redline Active
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">verified</span>
            Integrity Hash Verified (SHA-256)
          </span>
<span className="hidden sm:inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            Delaware Chancery • Docket #2024-CV-88219
          </span>
</div>
<h1 className="font-display-md text-display-md text-primary mt-1">Comparative Document Diff &amp; Redline Intelligence</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
          Algorithmic clause alignment, redline delta detection, and plain-language commercial impact between Series B Draft Rev. 3.2 and Series B Clean Rev. 4.1
        </p>
</div>
<div className="flex items-center flex-wrap gap-space-sm shrink-0 self-start lg:self-center">
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>Export Redline (.docx)</span>
</button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Comparison Memo (.pdf)</span>
</button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">merge</span>
<span>Merge Accepted Changes</span>
</button>
</div>
</div>
</section>
{/*  Document Selector & High-Density Reconciliation Stats Bar  */}
<section className="w-full px-gutter py-space-lg">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-stretch">
{/*  Document A (Baseline) Card  */}
<div className="xl:col-span-4 p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                Baseline Version
              </span>
<span className="font-label-sm text-label-sm text-outline">Doc A • Apex Draft</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Series B Stock Purchase Agreement</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Rev 3.2 — Apex Capital Draft</p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-body-sm text-body-sm text-secondary">
<div className="flex items-center justify-between">
<span>Executed: <strong className="text-on-surface">Oct 12, 2024</strong></span>
<span>Length: <strong className="text-on-surface">192 Pages</strong></span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-secondary">balance</span>
<span>Counsel: Wachtell &amp; Lipton (for Apex Capital)</span>
</div>
</div>
</div>
{/*  Reconciliation Dashboard & Delta Metric Matrix  */}
<div className="xl:col-span-4 p-space-md rounded bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Variance Taxonomy</span>
<span className="font-label-sm text-label-sm text-on-primary-container font-semibold">Automated Delta Engine</span>
</div>
{/*  Quick Metrics Bar  */}
<div className="grid grid-cols-3 gap-2 text-center">
<div className="p-2 rounded bg-surface-container-lowest">
<div className="font-display-md text-headline-lg text-primary leading-none">42</div>
<div className="font-label-sm text-label-sm text-secondary mt-1">Total Variances</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest">
<div className="font-display-md text-headline-lg text-tertiary-container leading-none">18</div>
<div className="font-label-sm text-label-sm text-secondary mt-1">Substantive Shifts</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest">
<div className="font-display-md text-headline-lg text-error leading-none">3</div>
<div className="font-label-sm text-label-sm text-secondary mt-1">High Judicial Risk</div>
</div>
</div>
{/*  Interactive Filter Tabs  */}
<div className="flex items-center justify-between gap-1 p-1 rounded bg-surface-container-high">
<button className="flex-1 py-1.5 px-2 rounded bg-surface-container-lowest shadow-sm text-primary font-label-sm text-label-sm text-center">
              All (42)
            </button>
<button className="flex-1 py-1.5 px-2 rounded text-secondary hover:text-on-surface font-label-sm text-label-sm text-center transition-colors">
              Substantive (18)
            </button>
<button className="flex-1 py-1.5 px-2 rounded text-secondary hover:text-on-surface font-label-sm text-label-sm text-center transition-colors">
              Added/Cut (6)
            </button>
<button className="flex-1 py-1.5 px-2 rounded text-error hover:bg-error-container/30 font-label-sm text-label-sm text-center transition-colors">
              High Risk (3)
            </button>
</div>
</div>
{/*  Document B (Revised Markup) Card  */}
<div className="xl:col-span-4 p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Revised Redline
              </span>
<span className="font-label-sm text-label-sm text-on-primary-container font-medium">Doc B • Vance Edits</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Series B Stock Purchase Agreement</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Rev 4.1 — Clean Markup with Vance Edits</p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-body-sm text-body-sm text-secondary">
<div className="flex items-center justify-between">
<span>Executed: <strong className="text-on-surface">Oct 24, 2024</strong></span>
<span>Length: <strong className="text-on-surface">198 Pages</strong></span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-on-primary-container">shield_person</span>
<span>Counsel: Eleanor Vance (Meridian Corp Litigation)</span>
</div>
</div>
</div>
</div>
{/*  Executive Key Differences & Plain-Language Commercial Translation  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-xs gap-2">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-primary">Executive Commercial Translation &amp; Strategic Leverage</div>
<p className="font-body-sm text-body-sm text-secondary">Synthesized counsel insights deciphering economic and operational exposure</p>
</div>
</div>
<div className="flex items-center gap-2 self-start md:self-auto">
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px]">gavel</span>
              Del. Chancery Enforceability Guard
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Item 1  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col justify-between gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-error uppercase tracking-wider">Clause 4.2 • High Risk</span>
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
</div>
<div className="font-headline-sm text-body-lg text-on-surface font-semibold">Non-Compete &amp; Forfeiture</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Scaled down from a 36-month worldwide ban with immediate founder equity forfeiture to a 12-month narrow mRNA restriction with compensatory damages.
              </p>
</div>
<div className="pt-space-xs font-label-sm text-label-sm text-on-primary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">done_all</span>
              Neutralizes Ainslie v. Cantor risk
            </div>
</div>
{/*  Item 2  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col justify-between gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-tertiary-container uppercase tracking-wider">Clause 2.1 • Moderate</span>
<span className="material-symbols-outlined text-[16px] text-tertiary-container">trending_down</span>
</div>
<div className="font-headline-sm text-body-lg text-on-surface font-semibold">Liquidation Preference</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Series B 1.25x Non-Participating preference capped strictly at 1.0x with an indispensable priority carve-out for founder common shares above $80M exit.
              </p>
</div>
<div className="pt-space-xs font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">account_balance_wallet</span>
              +$14.2M Founder Retention Value
            </div>
</div>
{/*  Item 3  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col justify-between gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-error uppercase tracking-wider">Clause 9.1 • High Risk</span>
<span className="material-symbols-outlined text-[16px] text-error">gavel</span>
</div>
<div className="font-headline-sm text-body-lg text-on-surface font-semibold">Indemnification Ceiling</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Converted completely uncapped patent &amp; IP representations liability into a firm $15.0M aggregate liability cap (equal to total Series B cash check size).
              </p>
</div>
<div className="pt-space-xs font-label-sm text-label-sm text-on-primary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">security</span>
              Eliminates corporate balance-sheet exposure
            </div>
</div>
{/*  Item 4  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col justify-between gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-secondary uppercase tracking-wider">Clause 5.2 • Low Risk</span>
<span className="material-symbols-outlined text-[16px] text-secondary">visibility</span>
</div>
<div className="font-headline-sm text-body-lg text-on-surface font-semibold">Books &amp; Inspection Rights</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Expanded inspection notice window from 2 to 5 business days, limiting audit access explicitly to Delaware General Corporation Law (DGCL) § 220 legitimate corporate needs.
              </p>
</div>
<div className="pt-space-xs font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span>
              Protects proprietary lab trials data
            </div>
</div>
</div>
</div>
</div>
</section>
{/*  Side-by-Side Clause Diff Explorer  */}
<section className="w-full px-gutter pb-space-lg">
<div className="max-w-7xl mx-auto flex flex-col gap-space-md">
{/*  Clause Index Navigator (Horizontal scroll / quick jump strip)  */}
<div className="p-space-sm rounded bg-surface-container-lowest shadow-sm flex items-center gap-2 overflow-x-auto">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-space-sm shrink-0 font-semibold">Quick Jump:</span>
<button className="shrink-0 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span>Clause 2.1 (Liquidation)</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
</button>
<button className="shrink-0 px-space-md py-1.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center gap-2 shadow-sm font-semibold">
<span className="material-symbols-outlined text-[15px] text-primary-fixed">priority_high</span>
<span>Clause 4.2 (Non-Compete &amp; Forfeiture)</span>
<span className="px-1.5 py-0.2 rounded bg-error text-on-error text-[10px]">HIGH RISK</span>
</button>
<button className="shrink-0 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span>Clause 7.4 (Key-Person Rider)</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>
</button>
<button className="shrink-0 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span>Clause 8.3 (Board Observer)</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</button>
<button className="shrink-0 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span>Clause 9.1 (Mutual Indemnification)</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
</button>
<button className="shrink-0 px-space-sm py-1 rounded bg-surface-container text-outline font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span>Clause 14.8 (Chancery Forum)</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
</button>
</div>
{/*  Deep Dive Clause Diff Container  */}
<div className="rounded bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
{/*  Clause Title Bar  */}
<div className="p-space-md bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded bg-error-container text-on-error-container flex items-center justify-center font-bold text-label-md">
              4.2
            </span>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Restrictive Covenants &amp; Founder Equity Forfeiture</h3>
<span className="px-space-sm py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-semibold">Substantive Modification</span>
</div>
<div className="font-label-sm text-label-sm text-secondary">Statutory Impact: Delaware Court of Chancery Enforceability Standard</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Alignment Confidence: 99.4%</span>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Toggle Fullscreen">
<span className="material-symbols-outlined text-[20px]">open_in_full</span>
</button>
</div>
</div>
{/*  Side-by-Side Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-transparent">
{/*  Document A Column  */}
<div className="p-space-lg flex flex-col justify-between bg-surface-container-lowest/70">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs bg-surface-container-low px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm font-semibold text-secondary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-error">remove_circle_outline</span>
                  Document A (Apex Draft Rev 3.2)
                </span>
<span className="font-label-sm text-label-sm text-outline">Line 1420 - 1438</span>
</div>
{/*  Excerpt A  */}
<div className="font-body-md text-body-md leading-relaxed text-on-surface space-y-4 font-normal">
<p>
<strong>Section 4.2 Restrictive Covenants and Consideration.</strong> For a continuous period commencing on the Effective Date and concluding 
                  <span className="line-through bg-error-container text-on-error-container px-1 py-0.5 rounded-sm">thirty-six (36) months following the termination</span> 
                  of Founder's employment for any reason whatsoever, whether voluntary, involuntary, with or without cause, Founder shall not, 
                  <span className="line-through bg-error-container text-on-error-container px-1 py-0.5 rounded-sm">directly or indirectly, anywhere globally</span>, 
                  engage in, consult for, advise, invest in, or participate in the management of any entity that engages in biotechnology or pharmaceutical formulation.
                </p>
<p>
                  Upon any breach of this Section 4.2, 
                  <span className="line-through bg-error-container text-on-error-container px-1 py-0.5 rounded-sm font-medium">all Common Shares, vested Series B Preferred Units, and unexercised Stock Options held by Founder or Founder's affiliates shall immediately be forfeited to the Corporation without monetary consideration or reimbursement</span>, 
                  which forfeiture the parties hereto agree constitutes legitimate liquidated restitution.
                </p>
</div>
</div>
{/*  Counsel Note Tag Document A  */}
<div className="mt-space-lg p-space-sm rounded bg-error-container/40 text-on-error-container text-body-sm font-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">warning</span>
<div>
<strong className="font-semibold">Apex Stance:</strong> Strict global restraint with automatic equity wipeout. This presents extreme vulnerability under the Delaware Supreme Court's <em>Ainslie v. Cantor Fitzgerald (2024)</em> ruling.
              </div>
</div>
</div>
{/*  Document B Column  */}
<div className="p-space-lg flex flex-col justify-between bg-surface-bright">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs bg-secondary-container/40 px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm font-semibold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-on-primary-container">add_circle_outline</span>
                  Document B (Vance Clean Rev 4.1)
                </span>
<span className="font-label-sm text-label-sm text-on-primary-container font-semibold">Active Recommendation</span>
</div>
{/*  Excerpt B  */}
<div className="font-body-md text-body-md leading-relaxed text-on-surface space-y-4 font-normal">
<p>
<strong>Section 4.2 Restrictive Covenants and Consideration.</strong> For a continuous period commencing on the Effective Date and concluding 
                  <span className="bg-secondary-container text-primary font-medium px-1.5 py-0.5 rounded-sm">twelve (12) months</span> 
                  following termination of Founder's employment 
                  <span className="bg-secondary-container text-primary font-medium px-1.5 py-0.5 rounded-sm">without Good Reason or for Cause</span>, 
                  Founder shall not 
                  <span className="bg-secondary-container text-primary font-medium px-1.5 py-0.5 rounded-sm">serve in an executive or technical leadership role for any enterprise commercializing mRNA synthetic sequencing platforms within North America and the European Economic Area</span>.
                </p>
<p>
                  Upon any provable breach of this Section 4.2, the 
                  <span className="bg-secondary-container text-primary font-medium px-1.5 py-0.5 rounded-sm">Corporation may seek injunctive relief and prove actual compensatory damages in the Delaware Court of Chancery; provided, however, that in no event shall vested equity or past compensation be subject to unilateral forfeiture</span>.
                </p>
</div>
</div>
{/*  Counsel Note Tag Document B  */}
<div className="mt-space-lg p-space-sm rounded bg-primary-container text-on-primary text-body-sm font-body-sm flex items-start gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5 text-primary-fixed">verified</span>
<div>
<strong className="font-semibold text-primary-fixed">Vance Revision:</strong> Safe Harbor conformant to Del. Chancery precedent. Narrowed temporal scope by 66%, geographic focus to legitimate operational market, and eliminated forfeiture penalty.
              </div>
</div>
</div>
</div>
{/*  Plain-Language Synthesis & Tactical Counsel Advisory  */}
<div className="p-space-lg bg-surface-container flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm max-w-3xl">
<span className="material-symbols-outlined text-tertiary-container text-[24px] mt-0.5 shrink-0">lightbulb</span>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm font-semibold text-secondary uppercase tracking-wider">Why This Variance Matters</span>
<p className="font-body-sm text-body-sm text-on-surface">
                The revised draft safeguards founder equity from forfeiture upon departure and curtails non-compete length from 3 years to 1 year. Under current Delaware case law (<em>Ainslie</em>, Jan 2024), Rev 3.2 would likely be declared entirely void as an unreasonable forfeiture-for-competition restraint. Rev 4.1 establishes an enforceable, defensible covenant that protects clinical IP without exposing founders to predatory clawbacks.
              </p>
</div>
</div>
{/*  Action Buttons for Diff Turn  */}
<div className="flex items-center gap-space-xs shrink-0 w-full md:w-auto justify-end">
<button className="px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm">
              Revert to Baseline
            </button>
<button className="px-space-md py-2 rounded bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors font-label-md text-label-md shadow-sm">
              Propose Compromise (18 Mo.)
            </button>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm flex items-center gap-1.5 font-semibold">
<span className="material-symbols-outlined text-[16px]">check</span>
              Accept Revision
            </button>
</div>
</div>
</div>
</div>
</section>
{/*  Added & Removed Clauses Showcase  */}
<section className="w-full px-gutter pb-space-lg">
<div className="max-w-7xl mx-auto flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Structural Additions &amp; Deletions</h2>
<p className="font-body-sm text-body-sm text-secondary">Discrete provisions introduced or expunged across iterations</p>
</div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">2 Critical Structural Deltas</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Added Clause Card  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">add_box</span>
                NEWLY ADDED IN REV 4.1
              </span>
<span className="font-label-sm text-label-sm text-on-primary-container font-semibold">Low Judicial Risk</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Clause 7.4: Key-Person Life &amp; Disability Insurance Rider</h3>
<div className="p-space-sm rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant italic">
              "The Corporation shall procure and maintain in full force and effect a key-person term life and disability insurance policy on the life and capacity of CEO Dr. Julian Mercer in an aggregate benefit amount of not less than $10,000,000.00..."
            </div>
<p className="font-body-sm text-body-sm text-on-surface">
<strong>Plain-Language Analysis:</strong> Obligates the corporate entity to procure a $10M key-person policy on the CEO, payable directly to the company. Protects Series B investors against catastrophic disruption during Phase II FDA trial readouts while ensuring company capitalization.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary">Proposed by Vance to satisfy lead Syndicate condition</span>
<button className="px-space-md py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm transition-colors font-medium">
              View Statutory Precedent
            </button>
</div>
</div>
{/*  Removed Clause Card  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">delete</span>
                EXPUNGED FROM REV 3.2
              </span>
<span className="font-label-sm text-label-sm text-error font-semibold">Governance Leverage Win</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Clause 8.3: Apex Capital Non-Voting Board Observer Right</h3>
<div className="p-space-sm rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant line-through italic">
              "Apex Capital Partners shall be entitled to designate one (1) representative to attend all meetings of the Board of Directors in a non-voting observer capacity and receive all executive information packets concurrently..."
            </div>
<p className="font-body-sm text-body-sm text-on-surface">
<strong>Plain-Language Analysis:</strong> Deliberately excised by Eleanor Vance to maintain strict confidentiality around sensitive molecular synthesis patents and prevent informal investor hegemony during executive board caucuses.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary">Shields DGCL § 141 executive discretion</span>
<button className="px-space-md py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm transition-colors font-medium">
              Review Removal Rationale
            </button>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive In-Diff Deliberation Prompt Bar  */}
<section className="sticky bottom-0 z-30 w-full px-gutter py-space-sm bg-surface-container-lowest/95 backdrop-blur-md shadow-md">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xs">
{/*  Prompt chips  */}
<div className="flex items-center gap-2 overflow-x-auto py-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider shrink-0 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">arrow_back_ios_new</span>
          Inquire:
        </span>
<button className="shrink-0 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          "Synthesize economic impact on Series B liquidation"
        </button>
<button className="shrink-0 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          "Check if Clause 7.4 creates tax liability for founder"
        </button>
<button className="shrink-0 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          "Draft redline negotiation email to Apex counsel"
        </button>
</div>
{/*  Blotter Input Tray  */}
<div className="flex items-center gap-space-sm p-1.5 rounded bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<div className="pl-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">neurology</span>
</div>
<input className="flex-1 bg-transparent text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none" placeholder="Ask AdvoChat about variances in Clause 4.2 or compare other revisions against Delaware precedent..." type="text"/>
<div className="flex items-center gap-2 pr-1">
<span className="hidden sm:inline font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded bg-surface-container">⌘ Enter to Send</span>
<button className="px-space-md py-1.5 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md font-medium flex items-center gap-1" type="button">
<span>Inquire</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/*  Ethical Compliance & Statutory Footer Enclave  */}
<div className="w-full px-gutter py-space-sm bg-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">verified_user</span>
        Client-Attorney Privilege Protected
      </span>
<span className="hidden md:inline text-outline-variant">•</span>
<span className="hidden md:inline">Rule 1.6 Confidentiality Enforced</span>
<span className="hidden md:inline text-outline-variant">•</span>
<span className="hidden md:inline">256-bit TLS Zero-Retention Cryptographic Vault</span>
</div>
<div>Folio Hash: 7c4e9f...8a01b2</div>
</div>
</div></main></div>
    </div>
  );
};
