import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen11_DocumentArchiveProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen11_DocumentArchive: React.FC<Screen11_DocumentArchiveProps> = ({
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
{/*  Subtle Architectural Watermark / Atmosphere Layer  */}
<div className="relative w-full px-gutter py-space-lg flex flex-col gap-space-lg">
{/*  Evidentiary Folio Header & Enclave Telemetry  */}
<section className="flex flex-col gap-space-md">
{/*  Top Meta Line: Folio Identifier, Matter Stamp & Privilege Enclave  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b-0">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-widest uppercase">
            FOLIO Nº 08-H • DOCUMENT REPOSITORY &amp; AUDIT ARCHIVE
          </span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container-lowest text-secondary">
<span className="material-symbols-outlined text-[15px] text-primary">folder_managed</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Meridian Corp vs. Vantage (#2024-CV-88219)</span>
<span className="text-outline-variant">/</span>
<span className="font-label-sm text-label-sm text-secondary">All Matched Filings</span>
</div>
</div>
{/*  Telemetry Badges  */}
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span className="font-label-sm text-label-sm font-semibold">256-BIT AES ENCLAVE</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">inventory_2</span>
<span className="font-label-sm text-label-sm font-semibold">14 INSTRUMENTS INDEXED</span>
</div>
</div>
</div>
{/*  Main Folio Headline & Operational Action Row  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl flex flex-col gap-1.5">
<h1 className="font-display-md text-display-md text-primary tracking-tight">
            Document History &amp; Evidentiary Archive
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Comprehensive repository of previously analyzed legal instruments, redline variance reports, discovery exhibits, and synthetic counsel deliberations conducted under ABA 477R zero-retention evidentiary privilege.
          </p>
</div>
{/*  Primary Action Suite  */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span>Export Manifest (.csv)</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:text-error hover:bg-error-container transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">security_update_warning</span>
<span>Retention Ledger</span>
</button>
<button className="flex items-center gap-space-xs px-space-lg py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-md" type="button">
<span className="material-symbols-outlined text-[18px]">upload_file</span>
<span>Ingest New Document</span>
<span className="font-mono text-label-sm opacity-60 ml-0.5">(+)</span>
</button>
</div>
</div>
</section>
{/*  Visual Ledger Analytics & Risk Gauge Banner  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
{/*  Metric 1: Total Indexed Corpus  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Active Repository Corpus</span>
<span className="material-symbols-outlined text-[20px] text-primary">library_books</span>
</div>
<div className="my-space-sm flex items-baseline gap-space-sm">
<span className="font-display-md text-display-md text-primary font-medium">14</span>
<span className="font-label-md text-label-md text-secondary">Instruments (606 Folios)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs border-t-0">
<span>Enclave footprint</span>
<span className="font-mono text-primary font-semibold">428 MB / 5.0 GB</span>
</div>
</div>
{/*  Metric 2: Judicial Risk Distribution  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Judicial Vulnerabilities</span>
<span className="material-symbols-outlined text-[20px] text-error">gavel</span>
</div>
<div className="my-space-sm flex items-baseline gap-space-sm">
<span className="font-display-md text-display-md text-error font-medium">4</span>
<span className="font-label-md text-label-md text-error">Severe Variances Flagged</span>
</div>
{/*  Inline Mini Sparkline / Risk Meter SVG  */}
<div className="flex items-center gap-1.5 pt-space-xs">
<div className="h-1.5 flex-1 rounded-full bg-surface-container overflow-hidden flex">
<div className="w-[30%] bg-error"></div>
<div className="w-[45%] bg-tertiary-fixed-dim"></div>
<div className="w-[25%] bg-on-primary-container"></div>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">3 Crit • 5 Mod</span>
</div>
</div>
{/*  Metric 3: Privilege Shield Integrity  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Privilege Redaction</span>
<span className="material-symbols-outlined text-[20px] text-tertiary-container">verified</span>
</div>
<div className="my-space-sm flex items-baseline gap-space-sm">
<span className="font-display-md text-display-md text-primary font-medium">100%</span>
<span className="font-label-md text-label-md text-secondary">ABA 477R Shield</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
<span>Zero-Retention Audit</span>
<span className="font-semibold text-primary">Certified Compliant</span>
</div>
</div>
{/*  Metric 4: Scheduled Expungements  */}
<div className="p-space-md rounded bg-surface-container-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Auto-Purge Pipeline</span>
<span className="material-symbols-outlined text-[20px] text-secondary">hourglass_top</span>
</div>
<div className="my-space-sm flex items-baseline gap-space-sm">
<span className="font-display-md text-display-md text-on-surface font-medium">3</span>
<span className="font-label-md text-label-md text-secondary">Dockets in 30-Day Queue</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
<span>Next Purge Event</span>
<span className="font-mono text-secondary">11 Days (Nov 04)</span>
</div>
</div>
</section>
{/*  Search, High-Dimensional Filtering & Layout Modifiers  */}
<section className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
{/*  Primary Omnisearch Bar  */}
<div className="relative w-full flex items-center">
<span className="material-symbols-outlined absolute left-space-md text-secondary text-[22px]">search</span>
<input className="w-full pl-12 pr-28 py-3 rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-colors" placeholder="Search repository by instrument title, SHA-256 hash, governing clause, statutory citation, or docket tag..." type="text"/>
<div className="absolute right-space-sm flex items-center gap-space-xs">
<span className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono">⌘K</span>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary" title="Clear Search" type="button">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
</div>
{/*  Filter Matrix & Control Strip  */}
<div className="flex flex-wrap items-center justify-between gap-space-md">
{/*  Multivariable Facets  */}
<div className="flex flex-wrap items-center gap-space-xs">
{/*  Document Type Dropdown Pill  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 rounded bg-surface-container font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none hover:bg-surface-container-high transition-colors">
<option value="all">Document Type: All Instruments</option>
<option value="spa">Stock Purchase Agreements (SPA)</option>
<option value="msa">Master Service Agreements</option>
<option value="nda">NDAs &amp; Restrictive Covenants</option>
<option value="transcripts">Deposition Transcripts</option>
<option value="motions">Judicial Pleadings &amp; Motions</option>
<option value="bylaws">Bylaws &amp; Corporate Charters</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-secondary pointer-events-none">expand_more</span>
</div>
{/*  Date Analyzed Filter  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 rounded bg-surface-container font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none hover:bg-surface-container-high transition-colors">
<option value="all-time">Date: All Time</option>
<option value="7d">Analyzed Last 7 Days</option>
<option value="30d">Analyzed Last 30 Days</option>
<option value="q4">Q4 2024</option>
<option value="custom">Custom Date Range...</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-secondary pointer-events-none">expand_more</span>
</div>
{/*  Risk Severity Filter  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 rounded bg-surface-container font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none hover:bg-surface-container-high transition-colors">
<option value="all-risks">Risk: All Severities</option>
<option value="high">High Judicial Risk (Clause Level)</option>
<option value="moderate">Moderate Risk</option>
<option value="clean">Clean / Low Risk</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-secondary pointer-events-none">expand_more</span>
</div>
{/*  Jurisdictional Bench  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 rounded bg-surface-container font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none hover:bg-surface-container-high transition-colors">
<option value="all-jur">Jurisdiction: All Benches</option>
<option value="de-chancery">Delaware Chancery Court</option>
<option value="ca-bp">California B&amp;P Bench</option>
<option value="ny-comm">NY Commercial Division</option>
<option value="fed-2nd">Federal 2nd Circuit</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-secondary pointer-events-none">expand_more</span>
</div>
</div>
{/*  Sorting & Display Toggles  */}
<div className="flex items-center gap-space-sm ml-auto">
{/*  Sort Dropdown  */}
<div className="flex items-center gap-1.5 text-secondary">
<span className="font-label-sm text-label-sm uppercase font-semibold">Sort:</span>
<div className="relative">
<select className="appearance-none pl-2.5 pr-7 py-1 rounded bg-transparent font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none font-medium hover:bg-surface-container transition-colors">
<option>Date Analyzed (Newest First)</option>
<option>Risk Severity (Highest First)</option>
<option>Folio Size (Pages)</option>
<option>Instrument Name (A-Z)</option>
</select>
<span className="material-symbols-outlined absolute right-1 top-1.5 text-[16px] text-secondary pointer-events-none">sort</span>
</div>
</div>
{/*  View Mode Toggle  */}
<div className="flex items-center p-0.5 rounded bg-surface-container">
<button className="px-2 py-1 rounded bg-surface-container-lowest text-primary shadow-xs font-label-sm flex items-center gap-1" title="Ledger View" type="button">
<span className="material-symbols-outlined text-[16px]">view_list</span>
<span className="hidden sm:inline">List</span>
</button>
<button className="px-2 py-1 rounded text-secondary hover:text-on-surface font-label-sm flex items-center gap-1" title="Folio Card Grid" type="button">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span className="hidden sm:inline">Grid</span>
</button>
</div>
</div>
</div>
</section>
{/*  Main Analyzed Documents Ledger (Structured Archival Table)  */}
<section className="flex flex-col gap-space-md">
{/*  Section Title & Batch Selector Counter  */}
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-sm">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" id="select-all" type="checkbox"/>
<label className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold cursor-pointer" htmlFor="select-all">
            Select All Ledger Instruments (5 Showing)
          </label>
</div>
<div className="font-body-sm text-body-sm text-secondary">
          Displaying verified work products under Case Docket <span className="font-mono text-on-surface font-semibold">#2024-CV-88219</span>
</div>
</div>
{/*  Ledger Cards Container  */}
<div className="flex flex-col gap-space-sm">
{/*  ITEM 1: Series B SPA  */}
<article className="p-space-md rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/*  Left: Indicator Strip + Document Particulars  */}
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="flex items-center pt-1">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" type="checkbox"/>
</div>
{/*  Type Icon Badge  */}
<div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">history_edu</span>
</div>
{/*  Descriptive Text Hierarchy  */}
<div className="flex flex-col gap-1 min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  Transactional Equity
                </span>
<span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                  3 High Judicial Risks
                </span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  DGCL § 102(b)(7) Verified
                </span>
</div>
{/*  Document Title  */}
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Series B Preferred Stock Purchase &amp; Investor Rights Agreement
              </h2>
{/*  Metadata & Cryptographic Hashes  */}
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">attachment</span>
                  Meridian_Series_B_SPA_Rev4.1.pdf
                </span>
<span className="font-mono text-label-sm text-outline">
                  SHA-256: 7c4e9f...8a01b2
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Oct 24, 2024 • 14:18 EST
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">person_check</span>
                  Eleanor Vance, Esq.
                </span>
</div>
{/*  Extracted Juridical Insight Snippet  */}
<div className="mt-1 px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">warning</span>
<span className="truncate">
<strong>Clause 4.2 Ainslie Restraint flag:</strong> Potential liquidated damages enforceability challenge under Delaware Chancery standard. 42 total redline variances tracked.
                </span>
</div>
</div>
</div>
{/*  Right: Key Folio Specs & Action Matrix  */}
<div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0 pt-space-xs lg:pt-0">
{/*  Numerical Folio Stats  */}
<div className="text-right hidden sm:flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-primary">198 Folios</span>
<span className="font-label-sm text-label-sm text-secondary">42 Variances • 1.8 MB</span>
</div>
{/*  Action Cluster  */}
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">difference</span>
<span className="hidden md:inline">Compare Diff</span>
</button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Open Previous Analysis</span>
</button>
{/*  Dropdown Trigger for Purge & Ancillary Operations  */}
<div className="relative group">
<button className="p-2 rounded text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Additional Instrument Actions" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden group-hover:flex flex-col absolute right-0 top-full mt-1 w-64 rounded bg-surface-container-lowest shadow-xl p-1 z-30">
<button className="flex items-center gap-2 px-3 py-2 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container text-left" type="button">
<span className="material-symbols-outlined text-[16px]">download</span>
                    Download Redline Summary (.pdf)
                  </button>
<button className="flex items-center gap-2 px-3 py-2 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container text-left" type="button">
<span className="material-symbols-outlined text-[16px]">neurology</span>
                    Re-run AI Deliberation
                  </button>
<div className="h-px bg-surface-container my-1"></div>
<button className="flex items-center gap-2 px-3 py-2 rounded font-body-sm text-body-sm text-error hover:bg-error-container text-left" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">delete_forever</span>
                    Delete Instrument / Purge from Vault
                  </button>
</div>
</div>
</div>
</div>
</article>
{/*  ITEM 2: Bilateral NDA  */}
<article className="p-space-md rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="flex items-center pt-1">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div className="flex flex-col gap-1 min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  Bilateral NDA &amp; Trade Secret
                </span>
<span className="font-label-sm text-label-sm text-on-primary-container bg-surface-container px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>
                  Low Risk • Clean
                </span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  DTSA Validated
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Mutual Non-Disclosure &amp; IP Proprietary Rights Covenant
              </h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">attachment</span>
                  Vantage_Meridian_Bilateral_NDA_2024.docx
                </span>
<span className="font-mono text-label-sm text-outline">
                  SHA-256: 3a91bf...992c10
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Oct 21, 2024 • 09:42 EST
                </span>
</div>
<div className="mt-1 px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check_circle</span>
<span className="truncate">
                  Standard bilateral covenant protections verified. Includes 2 international jurisdiction carve-outs; fully enforceable.
                </span>
</div>
</div>
</div>
<div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0 pt-space-xs lg:pt-0">
<div className="text-right hidden sm:flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-primary">14 Folios</span>
<span className="font-label-sm text-label-sm text-secondary">2 Carve-outs • 240 KB</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">difference</span>
<span className="hidden md:inline">Compare Diff</span>
</button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Open Previous Analysis</span>
</button>
<button className="p-2 rounded text-secondary hover:text-error hover:bg-error-container transition-colors" onClick={() => {}} title="Delete Document / Purge" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</article>
{/*  ITEM 3: Deposition Transcript  */}
<article className="p-space-md rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="flex items-center pt-1">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">record_voice_over</span>
</div>
<div className="flex flex-col gap-1 min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  Discovery Exhibit / Deposition
                </span>
<span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">shield</span>
                  24 Work-Product Shields
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-mono">
                  EXHIBIT-C
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Deposition Transcript of Dr. Julian Mercer (CEO, Meridian Corp)
              </h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">attachment</span>
                  Vantage_Counterclaim_Exhibit_C_Deposition_Transcript.pdf
                </span>
<span className="font-mono text-label-sm text-outline">
                  SHA-256: e820ba...43df88
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Oct 18, 2024 • 16:30 EST
                </span>
</div>
<div className="mt-1 px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">lock</span>
<span className="truncate">
                  ABA Formal Op. 477R auto-redaction invoked on 24 attorney-client communication references. Cross-referenced against counterclaim filings.
                </span>
</div>
</div>
</div>
<div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0 pt-space-xs lg:pt-0">
<div className="text-right hidden sm:flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-primary">312 Folios</span>
<span className="font-label-sm text-label-sm text-secondary">24 Privileged • 8.4 MB</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">checklist_rtl</span>
<span className="hidden md:inline">Privilege Log</span>
</button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Open Previous Analysis</span>
</button>
<button className="p-2 rounded text-secondary hover:text-error hover:bg-error-container transition-colors" onClick={() => {}} title="Delete Document / Purge" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</article>
{/*  ITEM 4: Executive Employment Agreement  */}
<article className="p-space-md rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="flex items-center pt-1">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">badge</span>
</div>
<div className="flex flex-col gap-1 min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  Executive Comp &amp; Severance
                </span>
<span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  High Exposure (IRC 409A)
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  Deliberation Complete
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Executive Employment Agreement &amp; Restricted Stock Award (Rev. 2.0)
              </h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">attachment</span>
                  Exec_Employment_Mercer_Clean_Draft.docx
                </span>
<span className="font-mono text-label-sm text-outline">
                  SHA-256: 12f0cc...65bb41
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Oct 14, 2024 • 11:15 EST
                </span>
</div>
<div className="mt-1 px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">error_outline</span>
<span className="truncate">
                  24-Month Non-Solicitation clause exceeds Cal. Bus. &amp; Prof. Code § 16600 thresholds. Golden parachute severance excise tax risk.
                </span>
</div>
</div>
</div>
<div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0 pt-space-xs lg:pt-0">
<div className="text-right hidden sm:flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-primary">48 Folios</span>
<span className="font-label-sm text-label-sm text-secondary">6 Substantive Clauses • 890 KB</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">difference</span>
<span className="hidden md:inline">Compare Diff</span>
</button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Open Previous Analysis</span>
</button>
<button className="p-2 rounded text-secondary hover:text-error hover:bg-error-container transition-colors" onClick={() => {}} title="Delete Document / Purge" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</article>
{/*  ITEM 5: Certificate of Incorporation  */}
<article className="p-space-md rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="flex items-center pt-1">
<input className="w-4 h-4 rounded-xs accent-primary cursor-pointer" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">account_balance</span>
</div>
<div className="flex flex-col gap-1 min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  Corporate Governance Charter
                </span>
<span className="font-label-sm text-label-sm text-on-primary-container bg-surface-container px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">done_all</span>
                  Fully Executed &amp; Recorded
                </span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  DGCL § 242 Certified
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Second Amended &amp; Restated Certificate of Incorporation
              </h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">attachment</span>
                  Meridian_Amended_Charter_Delaware_Filing.pdf
                </span>
<span className="font-mono text-label-sm text-outline">
                  SHA-256: bd8401...11ae92
                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                  Oct 09, 2024 • 17:05 EST
                </span>
</div>
<div className="mt-1 px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">assignment_turned_in</span>
<span className="truncate">
                  Certified stamped copy from Dover Dept of State. Preferred series liquidation preference rights cross-checked against bylaws.
                </span>
</div>
</div>
</div>
<div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0 pt-space-xs lg:pt-0">
<div className="text-right hidden sm:flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-primary">34 Folios</span>
<span className="font-label-sm text-label-sm text-secondary">0 Redlines • 1.1 MB</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">file_open</span>
<span className="hidden md:inline">Charter Memos</span>
</button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Open Previous Analysis</span>
</button>
<button className="p-2 rounded text-secondary hover:text-error hover:bg-error-container transition-colors" onClick={() => {}} title="Delete Document / Purge" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</article>
</div>
{/*  Pagination & Enclave Status Bar  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm pb-space-lg px-space-xs">
<div className="flex items-center gap-space-sm font-body-sm text-body-sm text-secondary">
<span>Showing 1 to 5 of 14 Instruments</span>
<span>•</span>
<span className="text-on-surface font-medium">Delaware Jurisdiction Enclave 01</span>
</div>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 rounded bg-surface-container text-outline font-label-md cursor-not-allowed" disabled={true} type="button">Previous</button>
<button className="px-3 py-1.5 rounded bg-primary text-on-primary font-label-md" type="button">1</button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-colors" type="button">2</button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-colors" type="button">3</button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-colors" type="button">Next</button>
</div>
</div>
</section>
{/*  Bottom Batch Vault Health & Retention Status Banner  */}
<aside className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">policy</span>
</div>
<div className="flex flex-col">
<div className="font-label-lg text-label-lg font-semibold text-primary">
            Statutory Vault Integrity &amp; Model Rule 1.6 Shield Active
          </div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
            Total Storage: 14 Documents (428 MB of 5 GB Enclave Quota) • 3 Documents Flagged for Expungement / 30-Day Auto-Purge
          </div>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
          View Audit Certificate
        </button>
<button className="px-space-md py-2 rounded bg-error-container text-on-error-container font-label-md text-label-md hover:bg-error hover:text-on-error transition-all" onClick={() => {}} type="button">
          Trigger Purge Routine
        </button>
</div>
</aside>
</div>
{/*  Statutory Purge & Zero-Retention Confirmation Modal (Interactive Preview)  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4" id="purge-audit-modal">
<div className="max-w-xl w-full rounded bg-surface-container-lowest shadow-2xl p-space-lg flex flex-col gap-space-md animate-in fade-in zoom-in-95">
{/*  Modal Header  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm text-error">
<div className="w-10 h-10 rounded bg-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px] text-error">gavel</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-error">Statutory Evidentiary Warning</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Purge Instrument from Privileged Vault?
            </h3>
</div>
</div>
<button className="p-1 rounded text-secondary hover:text-on-surface" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/*  Legal Admonishment Body  */}
<div className="p-space-sm rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-space-xs">
<div className="font-semibold text-primary">Permanent Zero-Retention Deletion per Model Rule 1.6 &amp; ABA 477R</div>
<p>
          Executing this command immediately overwrites the instrument cache with random cryptographic entropy across the 256-bit enclave. All redline variance telemetry, vectorized clause embeddings, and synthetic memos will be irrecoverably expunged.
        </p>
</div>
{/*  Specific Target Instrument Snapshot  */}
<div className="px-space-sm py-2 rounded bg-surface-container flex flex-col gap-1 text-on-surface">
<div className="font-label-md text-label-md font-semibold truncate">Target: Series B Preferred Stock Purchase &amp; Investor Rights Agreement</div>
<div className="font-mono text-label-sm text-secondary">SHA-256: 7c4e9f3b890a218fce132cda908129841bb21019</div>
</div>
{/*  Confirmation Checkbox  */}
<div className="flex items-start gap-space-sm pt-1">
<input className="mt-1 w-4 h-4 rounded-xs accent-error cursor-pointer" id="confirm-purge-checkbox" type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="confirm-purge-checkbox">
          I certify that this expungement complies with the relevant Protective Order and document retention guidelines under Case #2024-CV-88219.
        </label>
</div>
{/*  Modal Actions  */}
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => {}} type="button">
          Cancel &amp; Retain
        </button>
<button className="px-space-md py-2 rounded bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">delete_forever</span>
<span>Execute Cryptographic Purge</span>
</button>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};
