import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen18_LegalUpdatesProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen18_LegalUpdates: React.FC<Screen18_LegalUpdatesProps> = ({
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
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Meridian Corp vs. Vantage</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Docket #2024-CV-88219</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('legal-articles-updates')} href="javascript:void(0)">Legal Articles &amp; Updates</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Co-Counsel</a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Folio Header Banner (Archival Broadsheet Style)  */}
<section className="w-full px-gutter pt-space-md pb-space-lg bg-surface">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-md">
{/*  Top Folio Serial & Date Line  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm tracking-widest uppercase font-semibold">Folio Nº 19-U</span>
<span className="text-outline-variant font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Juris Gazette &amp; Statutory Reporters</span>
<span className="text-outline-variant font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Vol. CXIV, Michaelmas Term</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-secondary">Synchronized to LexisNexis® &amp; Bloomberg Law®</span>
<div className="flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container">
<span className="w-2 h-2 rounded-full bg-surface-tint"></span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Chancery Live Wire: Active</span>
</div>
</div>
</div>
{/*  Main Headline & Subtitle  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pt-space-xs">
<div className="max-w-4xl">
<h1 className="font-display-md text-display-md text-primary font-headline-lg tracking-tight">Legal Updates &amp; Doctrinal Insights</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
            Curated jurisprudential reporting, statutory amendments, and real-time judicial analyses tailored to corporate counsel and active docket matters.
          </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-end">
<button className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-space-xs text-on-surface font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">bookmark_border</span>
<span>Saved Briefs (12)</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-space-xs text-on-surface font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">download</span>
<span>Export Compendium</span>
</button>
</div>
</div>
{/*  Matter Pin Notification Strip  */}
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>push_pin</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context Linked</span>
<span className="text-outline-variant font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm font-semibold text-primary">Priority High</span>
</div>
<div className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
<span className="font-semibold text-primary">Meridian Corp vs. Vantage</span> (#2024-CV-88219 • Del. Ch.) — <span className="text-on-secondary-container">4 articles directly relevant to disputed Clause 4.2 (Clawbacks) &amp; Clause 14.2 (Liquidated Damages)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-sm py-1.5 rounded bg-surface-container-highest hover:bg-surface-dim transition-colors text-primary font-label-sm text-label-sm font-semibold">
            Filter To This Matter
          </button>
<button className="p-1.5 text-secondary hover:text-on-surface transition-colors" title="Dismiss Notice">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</div>
</section>
{/*  Filter & Search Toolbar (Debossed Paper Well)  */}
<section className="w-full px-gutter py-space-sm bg-surface-container sticky top-16 z-30 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
<div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-space-md">
{/*  Interactive Search Input Bar  */}
<div className="w-full lg:w-[460px] relative">
<div className="flex items-center px-space-md py-2 rounded-lg bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
<span className="material-symbols-outlined text-secondary text-[20px] mr-space-xs">search</span>
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" placeholder="Search articles, judicial opinions, statutory alerts, authors, or citation keys..." type="text"/>
<kbd className="ml-space-xs px-1.5 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-semibold">⌘K</kbd>
</div>
</div>
{/*  Category Filter Tabs  */}
<div className="w-full lg:w-auto flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-primary text-on-primary whitespace-nowrap shadow-sm">
          All Intelligence
        </button>
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-sm">
<span>Matter-Linked Priority</span>
<span className="px-1.5 py-0.2 rounded-full font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container font-semibold">4 New</span>
</button>
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap shadow-sm">
          Delaware Chancery &amp; DGCL
        </button>
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap shadow-sm">
          Restrictive Covenants &amp; Labour
        </button>
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap shadow-sm">
          Commercial M&amp;A
        </button>
<button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap shadow-sm">
          AI &amp; Tech Governance
        </button>
</div>
{/*  Sorting Selector  */}
<div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-space-md shrink-0">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px]">sort</span>
<span className="font-label-sm text-label-sm font-semibold uppercase">Sort:</span>
<select className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded focus:outline-none cursor-pointer shadow-sm">
<option>Relevance to Active Matter</option>
<option>Most Recent First</option>
<option>Highest Judicial Precedent</option>
<option>Most Cited in Chancery</option>
</select>
</div>
</div>
</div>
</section>
{/*  Editorial Main Body Grid  */}
<section className="w-full px-gutter py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
{/*  Primary Editorial Column (Left 8 Cols)  */}
<div className="xl:col-span-8 flex flex-col gap-space-xl min-w-0">
{/*  HERO FEATURED ARTICLE (High Precedent Alert)  */}
<article className="rounded-xl bg-surface-container-lowest p-space-lg lg:p-space-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
<div className="flex flex-col gap-space-md">
{/*  Alert Badge & Matter Pinning Meta  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-2.5 py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm tracking-wider uppercase font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">gavel</span>
                  Critical Precedent Alert
                </span>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wide font-medium">
                  Direct Relevance to Meridian vs. Vantage
                </span>
</div>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-sm text-label-sm font-medium">Peer Reviewed</span>
</div>
</div>
{/*  Title & Secondary Header  */}
<div>
<h2 className="font-headline-lg text-headline-lg lg:text-display-md text-primary leading-tight font-medium">
                The Death of “Employee Choice”: How the Delaware Supreme Court’s Cantor Fitzgerald Ruling Re-Draws Forfeiture Boundaries in Corporate Equity
              </h2>
</div>
{/*  Author & Publication Byline Strip  */}
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1.5 py-space-xs bg-surface-container-low px-space-md rounded-lg text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5 text-on-surface font-semibold">
<span className="material-symbols-outlined text-[16px] text-surface-tint">account_circle</span>
<span>Eleanor Vance, Esq. &amp; Hon. Marcus Sterling (Ret.)</span>
</div>
<span className="text-outline-variant">•</span>
<div>Oct 18, 2024 (Updated 3h ago)</div>
<span className="text-outline-variant">•</span>
<div className="text-secondary font-medium">Delaware Corporate Law Journal &amp; AdvoChat Juris Briefings</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span>
<span>9 min read</span>
</div>
<span className="text-outline-variant">•</span>
<div className="font-mono text-tertiary-container font-semibold">148 Harv. L. Rev. F. 412</div>
</div>
{/*  Editorial Lead Paragraph & Rich Visual Mock  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center pt-space-xs">
<div className="md:col-span-8 flex flex-col gap-space-sm font-body-md text-body-md text-on-surface leading-relaxed">
<p>
                  Delaware’s definitive rejection of unmitigated forfeiture-for-competition structures has fundamentally altered the litigation defense calculus in corporate non-compete enforcement. By overruling prior decisions upholding conditional equity redemption without geographic or temporal bounds, the Supreme Court in <em className="font-serif">Cantor Fitzgerald, L.P. v. Ainslie</em> established that restrictive financial penalization constitutes an unreasonable restraint of trade.
                </p>
<p className="text-on-surface-variant">
                  For active litigants in <strong className="text-on-surface font-medium">Meridian Corp vs. Vantage</strong>, this holding immediately provides defensive leverage to strike Vantage’s pending $1.8M clawback counterclaim under disputed <span className="bg-secondary-container px-1 py-0.5 rounded text-primary font-semibold">Clause 4.2</span>, shifting exposure liability directly back onto the counter-claimants.
                </p>
</div>
{/*  Graphic Precedent Abstract Visual  */}
<div className="md:col-span-4 rounded-xl bg-surface-container-low p-space-md shadow-inner flex flex-col gap-space-sm">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Judicial Impact Analysis
                </div>
{/*  Inline SVG Spark Gauge / Metric Chart  */}
<div className="flex items-center justify-between pt-1">
<div className="relative w-20 h-20 flex items-center justify-center shrink-0">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-headline-sm text-headline-sm font-semibold text-primary">92%</span>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-secondary">Defensive Strength</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Enforceable Void</span>
<span className="font-label-sm text-label-sm text-surface-tint font-medium">Clawback Precluded</span>
</div>
</div>
<div className="pt-space-xs text-on-surface-variant font-label-sm text-label-sm leading-tight">
                  Calculated against Chancery Court 2023-2024 bench rulings on LP Agreement covenants.
                </div>
</div>
</div>
{/*  Action Toolbar & Integration Badges  */}
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">balance</span>
<span>Cross-Examine Clause 4.2</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary">note_add</span>
<span>Add to Brief Appendix</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Download Annotated PDF</span>
</button>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-2 rounded hover:bg-surface-container transition-colors text-secondary hover:text-on-surface" title="Bookmark article">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<button className="p-2 rounded hover:bg-surface-container transition-colors text-secondary hover:text-on-surface" title="Share with Co-Counsel">
<span className="material-symbols-outlined text-[20px]">share</span>
</button>
</div>
</div>
</div>
</article>
{/*  SECTION 2: MATTER-LINKED DOSSIER ARTICLES  */}
<div className="flex flex-col gap-space-md pt-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Active Docket Alignments</span>
<h3 className="font-headline-md text-headline-md text-primary">Doctrinal Focus: Meridian vs. Vantage Dispute Matrix</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">3 Articles Correlated</span>
</div>
{/*  Structured Docket Linked Articles Grid  */}
<div className="grid grid-cols-1 gap-space-md">
{/*  Article 1: DGCL § 122(18)  */}
<article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-space-lg items-start">
<div className="w-full md:w-48 h-32 rounded-lg bg-surface-container-low shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Close up architectural photograph of the Delaware Supreme Court pillars under warm overcast afternoon daylight, casting stately architectural shadows across granite steps with classical judicial solemnity, rich parchment tones and deep forest green foliage in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmB3OooNrrpI2PRJTgd9MN1TCqJwskiATWE0zwQ4yFg6CeBvLDJ8uUpRPgaU-r5vY8JtPU07hlb_LzXyIK16F-Y9kKJjoCdou9p6eg9CxN2-5lRj8fsZaudqgg1pfnMrCSZh-GaespW3RNOasDRDLUblQLPgEAUW9ucGjS7OwthMmziWcQFd9SGYm-NRhT-y_j7icNxR9HPvR_q5W6JU7MzbjpT10MTNcOXL7vnvY7-Vdhh_yjTSd2xg"/>
<span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase font-semibold">DGCL Review</span>
</div>
<div className="flex-1 flex flex-col justify-between gap-space-sm">
<div>
<div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary-container font-semibold uppercase">Harvard Law School Forum on Corporate Governance</span>
<span className="text-outline-variant">•</span>
<span>Oct 14, 2024</span>
<span className="text-outline-variant">•</span>
<span>7 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-medium mt-1 hover:text-surface-tint cursor-pointer transition-colors">
                    Navigating DGCL § 122(18): Safe Harbors for Stockholder Governance Agreements Post-Moelis
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    Comprehensive statutory breakdown examining the newly codified corporate powers allowing boards to enter pre-approval contracts, insulating management from breach of fiduciary claims under Clause 16.1.
                  </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Directly affects Clause 16.1</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Board Autonomy</span>
</div>
<button className="flex items-center gap-1 text-primary hover:text-surface-tint font-label-sm text-label-sm font-semibold transition-colors">
<span>Read Analysis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</article>
{/*  Article 2: Liquidated Damages vs Penalties  */}
<article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-space-lg items-start">
<div className="w-full md:w-48 h-32 rounded-lg bg-surface-container-low shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Editorial still life of an antique brass balance scale resting upon an ebony desk beside stacked bound leather legal case volumes with cream-colored parchment pages and an engraved gold fountain pen in soft atmospheric library lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMuwr_o6Lyzg3g2FhXSL6idMussHhGFEdkjLXbVffmyWYPdqPALUn8h-F1M-XcRNgw6BBLJfZ4c8VV4MUvpegWtMd4qa-lXxlieOLyF8TO8Zyh3icr3EIc8ZM2r7EfzctoN_7cVYlyjxZGEIjmjGBdjHtDvw-YA_wr5x7gM2uTGVhiibaaIf-o6ysm4E5rI4Ckb4LazpOYlW7Ep4QRnxsvaUKND8Lj8XUfAAO-ePJxpjvXdHZ6XIeoqQ"/>
<span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase font-semibold">Chancery Precedent</span>
</div>
<div className="flex-1 flex flex-col justify-between gap-space-sm">
<div>
<div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary-container font-semibold uppercase">Columbia Business Law Review</span>
<span className="text-outline-variant">•</span>
<span>Oct 09, 2024</span>
<span className="text-outline-variant">•</span>
<span>11 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-medium mt-1 hover:text-surface-tint cursor-pointer transition-colors">
                    Liquidated Damages vs. Unenforceable Penalties in Cross-Border Tech Licensing: The 2024 Chancery Standard
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    How Vice Chancellor Laster’s latest memorandum distinguishes between justifiable prospective damages projections and unlawful terror clauses, offering strict defensive guidelines for the $4.5M Escrow disputed under Clause 14.2.
                  </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Directly affects Clause 14.2 (Escrow)</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Escrow Release</span>
</div>
<button className="flex items-center gap-1 text-primary hover:text-surface-tint font-label-sm text-label-sm font-semibold transition-colors">
<span>Read Analysis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</article>
{/*  Article 3: FTC Final Rule on Non-Competes  */}
<article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-space-lg items-start">
<div className="w-full md:w-48 h-32 rounded-lg bg-surface-container-low shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Overhead flatlay photograph of official federal gazette documents stamped with administrative wax seals and debossed legal letterheads, illuminated by gentle directional morning window light with subtle shadows on textured ivory cotton paper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9EH4a2D5OHjWb7kyeZ0JAQiK6mu7OCF8ugouzzF9_NrRgVXfNr4llB1YwHztA-KJpxDssWAguRPzu55wADIpaSWmsvyH5PUTNgRlhNeDA1OTy5sT4oCeTK4uqgs1F7KGPRnUtCy1EB4QoZtKokbQxsVRy7CpzJygMwS6Ob13vyBnooyn7ttyKl3z-5PTVksZzWiN8ONDhXjnORHnXcpLjWum70xnfD3fUA-EOjcE1Ehb4CxqStMhGjw"/>
<span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase font-semibold">Federal Scope</span>
</div>
<div className="flex-1 flex flex-col justify-between gap-space-sm">
<div>
<div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary-container font-semibold uppercase">Georgetown Law Tech Review</span>
<span className="text-outline-variant">•</span>
<span>Sep 28, 2024</span>
<span className="text-outline-variant">•</span>
<span>8 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-medium mt-1 hover:text-surface-tint cursor-pointer transition-colors">
                    Federal Trade Commission Final Rule on Non-Competes: Interplay with Delaware LP Restrictive Covenants
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    Analyzing the intersection of federal administrative non-compete prohibitions and state corporate equity redemption mechanisms for senior corporate executives and partners.
                  </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">FTC 16 CFR Part 910</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Injunction Impact</span>
</div>
<button className="flex items-center gap-1 text-primary hover:text-surface-tint font-label-sm text-label-sm font-semibold transition-colors">
<span>Read Analysis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</article>
</div>
</div>
{/*  SECTION 3: REAL-TIME REGULATORY & CHANCERY DIGEST FEED  */}
<div className="rounded-xl bg-surface-container-low p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">rss_feed</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-medium">Statutory Docket &amp; Chancery Digest</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Real-Time Slip Opinions &amp; Enactments</span>
</div>
<div className="flex flex-col gap-space-sm">
{/*  Digest Item 1  */}
<div className="p-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-bright transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase shrink-0 mt-0.5">Statutory Alert</span>
<div>
<a className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary transition-colors" href="javascript:void(0)">
                    Delaware Senate Enacts S.B. 313: Technical amendments to DGCL provisions regulating internal corporate claims
                  </a>
<div className="font-label-sm text-label-sm text-secondary mt-0.5">Delaware State Senate Digest • 2 days ago • Passed En Banc</div>
</div>
</div>
<button className="self-start md:self-center px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold shrink-0">
                View Text
              </button>
</div>
{/*  Digest Item 2  */}
<div className="p-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-bright transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold uppercase shrink-0 mt-0.5">Judicial Memo</span>
<div>
<a className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary transition-colors" href="javascript:void(0)">
                    Chancery Court grants Rule 12(b)(6) dismissal where restrictive covenant lacked temporal demarcation
                  </a>
<div className="font-label-sm text-label-sm text-secondary mt-0.5">Delaware Court of Chancery Slip Opinion • Oct 21, 2024 • C.A. No. 2023-1102-JTL</div>
</div>
</div>
<button className="self-start md:self-center px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold shrink-0">
                Cite in Brief
              </button>
</div>
{/*  Digest Item 3  */}
<div className="p-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-bright transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold uppercase shrink-0 mt-0.5">Executive Order</span>
<div>
<a className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary transition-colors" href="javascript:void(0)">
                    DOJ Antitrust Division &amp; FTC Issue Joint Guidance on Algorithmic Price-Fixing and Information Exchanges
                  </a>
<div className="font-label-sm text-label-sm text-secondary mt-0.5">Federal Regulatory Gazette • Oct 19, 2024 • Joint Release 24-88</div>
</div>
</div>
<button className="self-start md:self-center px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold shrink-0">
                Read Brief
              </button>
</div>
{/*  Digest Item 4  */}
<div className="p-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-bright transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold uppercase shrink-0 mt-0.5">Case Law</span>
<div>
<a className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary transition-colors" href="javascript:void(0)">
                    Seventh Circuit Clarifies Trade Secret Inevitable Disclosure Doctrine in Executive Lateral Transitions
                  </a>
<div className="font-label-sm text-label-sm text-secondary mt-0.5">Federal Circuit Digest • Oct 15, 2024 • No. 23-3419</div>
</div>
</div>
<button className="self-start md:self-center px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold shrink-0">
                Read Brief
              </button>
</div>
</div>
</div>
</div>
{/*  Tactical Sidebar Intelligence Panel (Right 4 Cols)  */}
<aside className="xl:col-span-4 flex flex-col gap-space-lg">
{/*  Card 1: Issue Briefing Dossier & Matter Exposure  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">folder_special</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-medium">Issue Briefing Dossier</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">Active Risk</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Financial Exposure Disputed:</span>
<span className="font-headline-sm text-headline-sm text-primary font-semibold">$1,850,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
              Vantage counterclaim asserts equity clawback penalty based on non-compete clause 4.2.
            </div>
{/*  Progress Bar of Brief Rebuttal Readiness  */}
<div className="pt-space-xs">
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Doctrinal Defense Readiness</span>
<span className="font-semibold text-primary">85% Complete</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
</div>
<div className="font-body-sm text-body-sm text-secondary">
            Your intelligence feed is automatically re-weighted to surface Delaware Chancery decisions addressing equity forfeiture and post-employment covenants.
          </div>
<button className="w-full py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
<span>Generate Rebuttal Skeleton</span>
</button>
</div>
{/*  Card 2: Trending Doctrinal Lexicon & Citations  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs pb-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">tag</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-medium">Trending Doctrinal Lexicon</h3>
</div>
<div className="flex flex-wrap gap-1.5">
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #AinslieStandard
            </a>
<a className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold" href="javascript:void(0)">
              #DGCL122(18)
            </a>
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #Rule12b6Dismissal
            </a>
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #PeppercornConsideration
            </a>
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #ForfeitureForCompetition
            </a>
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #InterlocutoryAppeal
            </a>
<a className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-primary font-semibold" href="javascript:void(0)">
              #ChanceryRule15a
            </a>
</div>
<div className="p-space-sm rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
<span className="font-semibold text-on-surface">Did you know?</span> Chancery citations for <em className="font-serif">Cantor Fitzgerald</em> have surged 340% following the recent en banc reversal.
          </div>
</div>
{/*  Card 3: Continuing Legal Education (CLE) Accreditation Tracker  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">school</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-medium">CLE Accreditation</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold">ABA Certified</span>
</div>
<div className="flex items-center gap-space-md">
{/*  Inline Mini Donut Meter  */}
<div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<span className="absolute font-label-md text-label-md font-semibold text-primary">1.5h</span>
</div>
<div className="flex flex-col">
<div className="font-body-md text-body-md text-on-surface font-semibold">1.5 of 2.0 Credit Units Available</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Eligible under DE, NY &amp; CA Bar reading standards.</div>
</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
            Reading and annotating the Cantor Fitzgerald and DGCL articles provides statutory verification credit upon module assessment completion.
          </div>
<button className="w-full py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors font-semibold">
            Claim Completed Reading Credits
          </button>
</div>
{/*  Card 4: Dispatch Newsletter Subscription Toggle  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs pb-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">mark_email_read</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-medium">Delaware Chancery Dispatch</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Receive Friday morning executive synopses of all Delaware Supreme Court &amp; Chancery slip opinions, annotated for corporate general counsels.
          </p>
<div className="flex items-center justify-between p-space-sm rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Weekly Briefing Alert</span>
<span className="font-label-sm text-label-sm text-secondary">Delivered 07:00 AM EST Fridays</span>
</div>
{/*  Interactive Stylized Toggle  */}
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span>Delivered via TLS Encrypted Dispatch to e.vance@vance-law.com</span>
</div>
</div>
</aside>
</div>
</section>
</div>
</main></div>
    </div>
  );
};
