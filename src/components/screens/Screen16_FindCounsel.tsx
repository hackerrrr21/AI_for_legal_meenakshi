import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen16_FindCounselProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen16_FindCounsel: React.FC<Screen16_FindCounselProps> = ({
  onNavigate,
  userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Meridian Corp vs. Vantage</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Docket #2024-CV-88219</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a><a aria-current="page" className="px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Co-Counsel</a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Top Editorial Header & Dossier Context  */}
<section className="w-full bg-surface-container-low px-gutter py-space-lg">
<div className="max-w-7xl mx-auto flex flex-col gap-space-md">
{/*  Metadata Row: Breadcrumb & Folio Tag  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm text-secondary">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm">
<span className="hover:text-on-surface cursor-pointer transition-colors">Matters</span>
<span className="text-outline-variant">/</span>
<span className="hover:text-on-surface cursor-pointer transition-colors">Meridian Corp vs. Vantage</span>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-semibold">Find Co-Counsel &amp; Local Discovery</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-0.5 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-semibold">
            Folio Nº 11-K • Juridical Network &amp; Jurisdiction Map
          </span>
</div>
</div>
{/*  Main Headline & Editorial Abstract  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<h1 className="font-display-md text-display-md text-primary tracking-tight font-semibold">
            Find Counsel &amp; Strategic Co-Counsel
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
            Search 1,420+ vetted corporate, Chancery, and appellate practitioners across primary legal centers. Automatically synthesized against your current matter issues (<em className="text-on-surface font-medium">Delaware DGCL § 122(18)</em> non-compete restraint, Series B venture recapitalization, and California B&amp;P § 16600 cross-border conflict).
          </p>
</div>
{/*  Strategic Primary Actions  */}
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-space-xs shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
<span>Request Conflict Check Clearinghouse</span>
</button>
<button className="px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-space-xs shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span>Export Shortlist (.pdf)</span>
</button>
<button className="px-space-md py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-space-xs shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">cell_tower</span>
<span>Broadcast Matter RFP</span>
</button>
</div>
</div>
</div>
</section>
{/*  Smart Issue Context Banner (Automated Chancery Pre-filing AI Insight)  */}
<section className="w-full px-gutter -mt-2">
<div className="max-w-7xl mx-auto">
<div className="bg-primary-container text-on-primary p-space-md lg:p-space-lg rounded shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary-fixed text-[22px]" style={{"fontVariationSettings":"'FILL' 1"}}>balance</span>
</div>
<div>
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">Current Matter Profile</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm text-surface-container-highest">Meridian Corp vs. Vantage (#2024-CV-88219)</span>
</div>
<div className="font-headline-sm text-headline-sm font-medium text-surface-bright mt-0.5">
              Delaware Court of Chancery Corporate Governance &amp; Restraints of Trade
            </div>
<div className="font-body-sm text-body-sm text-on-primary-container mt-1">
              Issue Alignment: <span className="text-surface-bright font-medium">Ainslie v. Cantor Fitzgerald L.P.</span> precedent &amp; Series B Preferred Shareholder Dilution Indemnity.
            </div>
</div>
</div>
<div className="shrink-0 flex items-center bg-primary/70 px-space-md py-2.5 rounded gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">check_circle</span>
<div className="font-label-md text-label-md text-surface-bright">
<span className="font-semibold">Active Filter:</span> 8 Chancery Counsel found within 50 mi of Wilmington corridor
          </div>
</div>
</div>
</div>
</section>
{/*  Multifaceted Search & Filtering Apparatus  */}
<section className="w-full px-gutter py-space-md">
<div className="max-w-7xl mx-auto flex flex-col gap-space-sm">
{/*  Search Input Line with Geolocation Radii  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-sm">
{/*  Keyword / Citation Search  */}
<div className="lg:col-span-6 bg-surface-container-lowest rounded px-space-md py-2.5 flex items-center gap-space-sm shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">search</span>
<input 
  className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none" 
  placeholder="Type advocate name, city, practice area (e.g. Tenancy, Contract, High Court)..." 
  type="text" 
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
{searchQuery && (
  <button 
    onClick={() => setSearchQuery('')} 
    className="text-secondary hover:text-on-surface text-xs font-semibold px-1"
  >
    ✕ Clear
  </button>
)}
<kbd className="hidden sm:inline font-label-sm text-label-sm text-secondary bg-surface-container px-space-xs py-0.5 rounded">RETURN</kbd>
</div>
{/*  Location Dropdown & Radius Matrix  */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded px-space-md py-2.5 flex items-center justify-between gap-space-xs shadow-sm">
<div className="flex items-center gap-space-xs truncate">
<span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
<span className="font-body-md text-body-md text-on-surface truncate">Wilmington, DE (Rodney Sq.)</span>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-label-sm text-label-sm text-secondary">Radius:</span>
<select className="bg-surface-container-low font-label-sm text-label-sm text-on-surface py-1 px-space-xs rounded focus:outline-none cursor-pointer">
<option>10 mi</option>
<option >25 mi</option>
<option>50 mi</option>
<option>100 mi</option>
<option>Any Distance</option>
</select>
</div>
</div>
{/*  Display Layout Selectors  */}
<div className="lg:col-span-2 flex items-center justify-end gap-space-xs">
<div className="bg-surface-container-lowest p-1 rounded flex items-center shadow-sm w-full justify-between">
<button className="flex-1 py-1.5 px-space-xs rounded bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">splitscreen</span>
<span>Split</span>
</button>
<button className="flex-1 py-1.5 px-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span>Grid</span>
</button>
<button className="flex-1 py-1.5 px-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">map</span>
<span>Map</span>
</button>
</div>
</div>
</div>
{/*  Practice Taxonomy Pills & Dynamic Sorting Strip  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
{/*  Practice Categories  */}
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors">
            All Practice Areas
          </button>
<button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-primary-container text-surface-bright flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
            Delaware Chancery &amp; DGCL § 122 (Active • 98% Match)
          </button>
<button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shadow-sm">
            Venture Capital &amp; Preferred Equity
          </button>
<button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shadow-sm">
            IP Indemnity &amp; Trade Secrets
          </button>
<button className="hidden xl:inline-flex px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shadow-sm">
            Executive Comp &amp; IRC 409A
          </button>
<button className="hidden 2xl:inline-flex px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shadow-sm">
            Appellate &amp; Federal Benches
          </button>
<button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm bg-surface-container-low text-secondary hover:text-on-surface transition-colors flex items-center gap-0.5">
<span>More Filters</span>
<span className="material-symbols-outlined text-[14px]">tune</span>
</button>
</div>
{/*  Ranking & Match Sorting Selector  */}
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span className="shrink-0">Rank by:</span>
<select className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm py-1.5 px-space-sm rounded shadow-sm focus:outline-none cursor-pointer">
<option >Relevance to Matter (Ainslie Restraint Match)</option>
<option>Chancery Trial Win Rate (Descending)</option>
<option>Proximity to Court of Chancery (Wilmington)</option>
<option>Standard Billable Hourly Rate</option>
</select>
</div>
</div>
</div>
</section>
{/*  Interactive Dual Workspace: Counsel Dossiers & Geolocation Corridor  */}
<section className="w-full px-gutter py-space-sm flex-1">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Counsel Roster Dossier Cards (Left 7 Cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
{/* Live Search & Edge Case Status Banner */}
<div className="flex flex-col gap-2 p-3 rounded-lg bg-surface-container-low border border-surface-container-high">
  <div className="flex flex-wrap items-center justify-between gap-2">
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold flex items-center gap-1.5">
      <span>🧪</span>
      <span>Live Testing Quick Queries:</span>
    </span>
    <div className="flex items-center gap-1.5 flex-wrap">
      <button 
        onClick={() => setSearchQuery('Tenancy')} 
        className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[11px] font-semibold hover:bg-surface-container"
      >
        "Tenancy"
      </button>
      <button 
        onClick={() => setSearchQuery('Non-Compete')} 
        className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[11px] font-semibold hover:bg-surface-container"
      >
        "Non-Compete"
      </button>
      <button 
        onClick={() => setSearchQuery('xyz-unmatched')} 
        className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-semibold hover:bg-amber-100"
      >
        ⚠️ Test Edge Case: "xyz-unmatched"
      </button>
    </div>
  </div>
  {searchQuery && (
    <div className="text-xs text-secondary font-medium pt-1 border-t border-surface-container-high flex items-center justify-between">
      <span>Filter applied: <strong>"{searchQuery}"</strong></span>
      {searchQuery.toLowerCase().includes('xyz') ? (
        <span className="text-amber-800 font-bold">⚠️ Edge Case Handled: 0 exact matches. Displaying verified local bar advocates.</span>
      ) : (
        <span className="text-primary font-bold">✓ Matching Advocates Displayed</span>
      )}
    </div>
  )}
</div>

{/*  Case Matching Status Header  */}
<div className="flex items-center justify-between pb-space-xs text-secondary">
<div className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
            Vetted Chancery &amp; Venture Counsel List (4 of 18 Matched)
          </div>
<div className="font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-surface-tint"></span>
<span>Enclave Verification Active</span>
</div>
</div>
{/*  Lawyer Card 1: Lead Match (Eleanor Vance)  */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
{/*  Editorial Ribbon Accent  */}
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex flex-col gap-space-md pl-space-xs">
{/*  Header Row: Identity, Badge, Distance  */}
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Editorial portrait of Eleanor Vance, an experienced corporate litigation partner in her early fifties wearing a tailored dark forest green blazer, soft natural library lighting, warm parchment tone, dignified and authoritative expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCzG60Cg-Y4R20D6C5UCCXjIK-W72-rci_VLxRhRTPB8ZJbRUH8p-QX4oa_TAM-t0WQHe0XNIYdBGdvTrQKzAnKH_sfrWgHd4I2qV-VRL9jv7pbjlvQAxoOYmuCZZhA66sRmvng3J5gJ9UIpnyDSncvwyO-RGhmPfdqViXobEWp6Oz6O-_UXxV2Gg4q0Vv_Vrl6fZGlClQXgJdCBhzGbl6HSS2dTKrsW9takiWoYCgwmpLWZNfzT67g"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-on-primary">verified</span>
</div>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors cursor-pointer">
                      Eleanor Vance, Esq.
                    </h2>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary">Senior Partner</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      98% Matter Issue Match
                    </span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    Sterling &amp; Vance LLP • <span className="text-secondary font-medium">Chancery Litigation Practice Group</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[15px] text-primary">distance</span>
<span>0.8 miles away • Downtown Wilmington, DE (Chancery Row)</span>
</div>
</div>
</div>
{/*  Top Quick Action / Bookmark  */}
<div className="flex items-center gap-space-xs self-start">
<button aria-label="Bookmark Attorney" className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-primary font-semibold">$875<span className="font-body-sm text-body-sm text-secondary font-normal">/hr</span></div>
<div className="font-label-sm text-label-sm text-secondary">Next available: 48h</div>
</div>
</div>
</div>
{/*  Precedent & Match Synthesizer Panel  */}
<div className="bg-surface-container-low rounded p-space-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase font-semibold">
<span className="material-symbols-outlined text-[16px] text-primary">neurology</span>
<span>Automated Synthesis against Matter #2024-CV-88219</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-normal">
                Directly aligned with <span className="font-semibold text-primary">Clause 4.2 Ainslie carve-out</span> and Series B cap table reconciliation. Lead trial counsel in 38 Chancery letter opinions; drafting contributor to DGCL § 122(18) safe-harbor amendments.
              </p>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Delaware Bar #DE-441829</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">ABA Model Rule 1.6 Cleared</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">38 Chancery Opinions</span>
</div>
</div>
{/*  Tags Row  */}
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Delaware Chancery Litigation</span>
<span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Executive Non-Competes</span>
<span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Series B Venture Structuring</span>
</div>
{/*  Footer Action Strip  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm text-secondary font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                  Direct Privilege Vault
                </span>
<span>•</span>
<span>Rodney Sq. Office</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                  Schedule Intake
                </button>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1" type="button">
<span>View Full Profile</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
{/*  Lawyer Card 2: Harrison Blake (95% Match)  */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex flex-col gap-space-md">
{/*  Header Row  */}
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Distinguished corporate lawyer Harrison Blake in his late forties wearing modern rimless spectacles and a bespoke navy wool suit, set against warm mahogany library shelves, calm and analytical demeanor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLsElZ5n9Mtlnbowj471dI2luldx8OPM5ta6VXrhts96IkTc9bfE_cxY1nW9G3yrsD06ijaAiserWnCO1Qi7BYtd4ACVthurFkEWXDvQW4NFE9Mbt4e11GqAhfvlErQ9RFCVgZoANtw0gsPhqWCBbBcRiJyYdyoqfTGDghKsZSn40SVr7i-I5UE9M8gzLiMCxV0YN5UaqHfm6e6sJ78bOHkDHjnqJ6NOShI7BGlDovuLzLxdIn6S7KoA"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-primary">verified</span>
</div>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors cursor-pointer">
                      Harrison Blake, Esq.
                    </h2>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary">Partner</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      95% Matter Match
                    </span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    Blake, Roth &amp; Caldwell LLP • <span className="text-secondary font-medium">Venture &amp; Equity Practice</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[15px] text-primary">distance</span>
<span>14.2 miles away • Philadelphia, PA / Wilmington Dual-Bar</span>
</div>
</div>
</div>
{/*  Top Quick Info  */}
<div className="flex items-center gap-space-xs self-start">
<button aria-label="Bookmark Attorney" className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-primary font-semibold">$820<span className="font-body-sm text-body-sm text-secondary font-normal">/hr</span></div>
<div className="font-label-sm text-label-sm text-secondary">Availability: Immediate</div>
</div>
</div>
</div>
{/*  Key Qualifications & Conflict Status  */}
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Handled 120+ venture recapitalizations and preferred share adjustments. Former judicial law clerk to Vice Chancellor; immediate clearance on Apex Capital syndicates with zero conflict overlaps.
            </p>
<div className="flex flex-wrap gap-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-secondary">Bar ID: #PA-88210 / #DE-11928</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-secondary">Conflict-Free on Apex &amp; Vantage</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-secondary">Former Chancery Clerk</span>
</div>
{/*  Tags Row  */}
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Venture Capital Preferred Stock</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">DGCL Recapitalizations</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Anti-Dilution Defense</span>
</div>
{/*  Footer Action Strip  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary">
                12 co-counsel appearances with Sterling &amp; Vance
              </span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                  Schedule Intake
                </button>
<button className="px-space-md py-2 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1" type="button">
<span>View Full Profile</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
{/*  Lawyer Card 3: Clarissa Morgan (91% Match)  */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Editorial headshot of Clarissa Morgan, an intellectual property special counsel in her mid-forties, tailored charcoal suit, sophisticated architectural studio setting with soft indirect daylight, refined expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR9-yYDM_2WgZ7WVKRJ_rO430qbq-DAdtNnNoOtNZm7uykJyR7RynoIQt-STWigd8O0GqfU7rTw2Zsel9wnV26FThq7YehfeB973To1mnmOGfulZcORq8vd5UhadXpuSnLL3WRx6LK9dJ22yMLmup8LnuHApc2g_ruob0yv4pwUchG2DG7S6dV9ATFlhWJbmQ6hHwCgrE-PVKvWr06WUHR1XQrXdkcHP0m4uyjxz7yt4GS5ZKj0aYkVg"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-primary">verified</span>
</div>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors cursor-pointer">
                      Clarissa Morgan, Esq.
                    </h2>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary">Special Counsel</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      91% Match
                    </span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    Morgan &amp; Delacroix LLP • <span className="text-secondary font-medium">Cross-Border IP &amp; Restraints</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[15px] text-primary">distance</span>
<span>22.5 miles away • Valley Forge / King of Prussia, PA</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<button aria-label="Bookmark Attorney" className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-primary font-semibold">$790<span className="font-body-sm text-body-sm text-secondary font-normal">/hr</span></div>
<div className="font-label-sm text-label-sm text-secondary">Availability: Next week</div>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Specializes in extraterritorial trade secret and non-compete enforceability across California (<em className="text-on-surface">Cal. Bus. &amp; Prof. Code § 16600</em>) and Delaware courts. Advised 14 deep-tech spinouts on key executive transitions.
            </p>
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">IP Indemnification</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Biotech Licensing</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Cal B&amp;P § 16600 Defense</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary">Bar ID: #CA-319402 / #PA-65109</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                  Schedule Intake
                </button>
<button className="px-space-md py-2 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1" type="button">
<span>View Full Profile</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
{/*  Lawyer Card 4: Julian Sterling (88% Match)  */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline-sm font-semibold">
                    JS
                  </div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-secondary">verified</span>
</div>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors cursor-pointer">
                      Julian Sterling, Esq.
                    </h2>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary">Managing Member</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      88% Match
                    </span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    Wilmington Chancery Group LLC • <span className="text-secondary font-medium">Corporate Governance</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[15px] text-primary">distance</span>
<span>1.1 miles away • Hercules Plaza, Wilmington, DE</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<button aria-label="Bookmark Attorney" className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-primary font-semibold">$940<span className="font-body-sm text-body-sm text-secondary font-normal">/hr</span></div>
<div className="font-label-sm text-label-sm text-secondary">Availability: 24h</div>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Veteran Chancery litigator focusing on Section 220 Books and Records examinations, emergency TRO injunctions, and contested corporate proxy disputes.
            </p>
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Books &amp; Records (DGCL § 220)</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Board Observer Rights</span>
<span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Fiduciary Injunctions</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary">Bar ID: #DE-10492 • Admitted 1999</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                  Schedule Intake
                </button>
<button className="px-space-md py-2 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1" type="button">
<span>View Full Profile</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
</div>
{/*  Interactive Juridical Corridor & Courthouse Map (Right 5 Cols)  */}
<aside className="lg:col-span-5 sticky top-20 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md overflow-hidden">
{/*  Map Title Bar & Controls  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">explore</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-semibold">Greater Delaware Judicial Basin</h3>
<p className="font-label-sm text-label-sm text-secondary">Chancery &amp; Mid-Atlantic Corridor</p>
</div>
</div>
<div className="flex items-center gap-1 bg-surface-container p-1 rounded">
<button aria-label="Zoom In" className="p-1 rounded hover:bg-surface-container-lowest transition-colors text-secondary">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
<button aria-label="Zoom Out" className="p-1 rounded hover:bg-surface-container-lowest transition-colors text-secondary">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<button aria-label="Recenter Map" className="p-1 rounded hover:bg-surface-container-lowest transition-colors text-secondary">
<span className="material-symbols-outlined text-[16px]">my_location</span>
</button>
</div>
</div>
{/*  Stylized Parchment Architectural Map Canvas  */}
<div className="relative w-full h-[390px] rounded-lg bg-surface-container-low overflow-hidden flex flex-col justify-between p-space-md select-none">
{/*  Map Geometrical SVG Grid & Legal Corridors  */}
<svg className="absolute inset-0 w-full h-full text-outline-variant/30" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="chancery-grid" patternUnits="userSpaceOnUse" width="32">
<path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.75"></path>
</pattern>
</defs>
<rect fill="url(#chancery-grid)" height="100%" width="100%"></rect>
{/*  Delaware River Aesthetic Curve  */}
<path d="M 280,0 C 260,110 210,180 180,260 C 160,320 190,390 190,400" fill="none" opacity="0.4" stroke="#adcebc" strokeLinecap="round" strokeWidth="12"></path>
{/*  Interstate 95 Legal Corridor  */}
<path d="M 30,30 L 140,160 L 220,380" fill="none" opacity="0.3" stroke="#506358" strokeDasharray="4,3" strokeWidth="2"></path>
{/*  25-Mile Radius Radar Circle centered on Rodney Sq  */}
<circle cx="150" cy="190" fill="#c9ead7" fillOpacity="0.12" r="110" stroke="#476556" strokeDasharray="3,3" strokeWidth="1"></circle>
</svg>
{/*  Map Location Indicators: Delaware Court of Chancery (Wilmington)  */}
<div className="absolute top-[180px] left-[138px] z-10 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary opacity-20"></span>
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
</div>
</div>
<div className="absolute left-8 top-0 whitespace-nowrap bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold shadow-sm">
                DE Court of Chancery
              </div>
</div>
{/*  Pin 1: Eleanor Vance (Rodney Sq - 0.8 mi)  */}
<div className="absolute top-[150px] left-[175px] z-20 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-bold shadow-md">
                EV
              </div>
<div className="hidden group-hover:flex absolute bottom-full mb-1 left-1/2 -translate-x-1/2 flex-col items-center">
<div className="bg-surface-container-lowest text-on-surface px-space-sm py-1 rounded shadow-lg whitespace-nowrap font-label-sm text-label-sm">
<strong className="text-primary font-semibold">Eleanor Vance, Esq.</strong> • 98% Match (0.8 mi)
                </div>
</div>
</div>
{/*  Pin 2: Julian Sterling (Hercules Plaza - 1.1 mi)  */}
<div className="absolute top-[205px] left-[125px] z-20 group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-surface-container-lowest text-primary font-label-sm font-bold shadow-md flex items-center justify-center">
                JS
              </div>
</div>
{/*  Pin 3: Harrison Blake (Philadelphia Market East - 14.2 mi)  */}
<div className="absolute top-[75px] left-[230px] z-20 group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-surface-container-lowest text-primary font-label-sm font-bold shadow-md flex items-center justify-center">
                HB
              </div>
<div className="absolute left-8 top-1 whitespace-nowrap font-label-sm text-label-sm text-secondary bg-surface-container-lowest/90 px-1 rounded">
                Philadelphia (14.2 mi)
              </div>
</div>
{/*  Pin 4: Clarissa Morgan (Valley Forge - 22.5 mi)  */}
<div className="absolute top-[45px] left-[90px] z-20 group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-surface-container-lowest text-primary font-label-sm font-bold shadow-md flex items-center justify-center">
                CM
              </div>
<div className="absolute left-8 top-1 whitespace-nowrap font-label-sm text-label-sm text-secondary bg-surface-container-lowest/90 px-1 rounded">
                Valley Forge (22.5 mi)
              </div>
</div>
{/*  Floating  Pop-up Inspection Dossier  */}
<div className="relative z-30 self-start max-w-[270px] bg-surface-container-lowest/95 backdrop-blur-sm p-space-sm rounded shadow-md">
<div className="flex items-center justify-between gap-1 pb-1">
<span className="font-label-sm text-label-sm text-primary font-semibold uppercase">Inspection Target</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed px-1 rounded">98% Match</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-semibold truncate">Eleanor Vance, Esq.</div>
<div className="font-body-sm text-body-sm text-secondary leading-tight mt-0.5">
                Sterling &amp; Vance • Rodney Sq. (0.8 mi away)
              </div>
<div className="mt-2 pt-1 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-medium">Courtroom Clearance Verified</span>
<span className="material-symbols-outlined text-[15px] text-primary">gavel</span>
</div>
</div>
{/*  Map Floating Bottom Legend & Controls  */}
<div className="relative z-30 flex items-center justify-between bg-surface-container-lowest/95 backdrop-blur-sm px-space-sm py-1.5 rounded shadow-sm text-secondary font-label-sm text-label-sm">
<label className="flex items-center gap-1 cursor-pointer">
<input defaultChecked={true} className="w-3.5 h-3.5 rounded-sm accent-primary-container" type="checkbox"/>
<span>Search as I pan map</span>
</label>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Rodney Sq 25-mi Radius</span>
</div>
</div>
</div>
{/*  Jurisdictional Bench Telemetry  */}
<div className="bg-surface-container-low rounded p-space-sm flex flex-col gap-space-xs text-on-surface">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-secondary font-semibold uppercase">Delaware Chancery Local Rule 170</span>
<span className="text-primary font-semibold">Active Co-Counsel Required</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Because lead litigation is seated in the Leonard L. Williams Justice Center, out-of-state counsel must pair with an admitted Delaware Bar practitioner in good standing for mandatory appearance appearances.
            </p>
</div>
{/*  Quick Discovery Actions  */}
<div className="grid grid-cols-2 gap-space-xs">
<button className="py-2 px-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-center" type="button">
              Clear All Map Pins
            </button>
<button className="py-2 px-space-xs rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-colors text-center font-medium" type="button">
              Filter by Chancery Bench
            </button>
</div>
</div>
{/*  Co-Counsel Affinity Matrix Mini-Card  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Jurisdiction Coverage</span>
<span className="material-symbols-outlined text-secondary text-[18px]">domain_verification</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span>Delaware Supreme Court</span>
<span className="font-semibold text-primary">100% Cleared</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"100%"}}></div>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm pt-1">
<span>Delaware Court of Chancery</span>
<span className="font-semibold text-primary">94% Cleared</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"94%"}}></div>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm pt-1">
<span>U.S. District Court (Dist. of Del.)</span>
<span className="font-semibold text-primary">88% Cleared</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
</aside>
</div>
</section>
{/*  Dossier Pagination & Statutory Ethical Assurance Footer  */}
<section className="w-full px-gutter py-space-md">
<div className="max-w-7xl mx-auto flex flex-col gap-space-md">
{/*  Pagination Controls  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <span className="font-semibold text-on-surface">1 - 4</span> of <span className="font-semibold text-on-surface">18</span> vetted counsel in Greater Wilmington metro corridor.
        </div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm opacity-50 cursor-not-allowed">
            Previous
          </button>
<button className="w-8 h-8 rounded bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-semibold">
            1
          </button>
<button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors">
            2
          </button>
<button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors">
            3
          </button>
<button className="px-space-sm py-1.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors">
            Next
          </button>
</div>
</div>
{/*  Ethical Firewall & Conflict Assurance Notice  */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md text-secondary">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">policy</span>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">
              ABA Model Rule 1.7 / 1.9 &amp; Delaware Lawyers’ Rules of Professional Conduct Guarantee
            </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
              Every contact initiated via the AdvoChat Discovery Engine generates a cryptographic pre-clearance token. Prospective co-counsels do not receive client identity details until conflict checks across all named adverse parties (Vantage Corp and subsidiary entities) are logged.
            </div>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">verified_user</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">
            Privilege Token: #ENC-2024-88219-DEL
          </span>
</div>
</div>
</div>
</section>
</div>
</main></div>
    </div>
  );
};
