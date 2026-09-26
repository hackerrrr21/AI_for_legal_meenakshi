import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen23_LegalDisclaimerProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export const Screen23_LegalDisclaimer: React.FC<Screen23_LegalDisclaimerProps> = ({
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
{/*  Top Governance Masthead & Breadcrumb  */}
<section className="w-full bg-surface-container-low px-gutter py-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-md">
{/*  Meta Navigation Hierarchy  */}
<div className="flex flex-wrap items-center gap-space-xs text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">AdvoChat Central</span>
<span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Compliance, Privacy &amp; Platform Governance</span>
<span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">Protocol &amp; Ethics Specification (ABA / SOC-2 / Rule 1.6)</span>
</div>
{/*  Main Headline Block with Asymmetric Layout  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pt-space-xs">
<div className="max-w-3xl flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high w-fit">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Institutional Governance Codex • Series 2024.4</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Help, Privacy &amp; Legal Disclaimer</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Official platform covenants, ethical firewall architecture, responsible neural synthesis disclosure, and statutory user safeguards engineered for high-stakes enterprise jurisprudence.
          </p>
</div>
{/*  Master Action Folio  */}
<div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm">
<button className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-on-surface rounded shadow-sm hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">verified</span>
<span>Download Signed Audit PDF</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm bg-primary-container text-on-primary rounded shadow-sm hover:bg-primary transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">lock_clock</span>
<span>Request Formal Audit Pack</span>
</button>
</div>
</div>
{/*  Live Cryptographic & Regulatory Attestation Strip  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md">
<div className="p-space-sm rounded bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">ABA Formal Op.</span>
<span className="font-label-lg text-label-lg text-primary font-semibold">477R &amp; 498 Compliant</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Electronic Privilege Safeguard</span>
</div>
<div className="p-space-sm rounded bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Security Framework</span>
<span className="font-label-lg text-label-lg text-primary font-semibold">SOC-2 Type II Certified</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Continuous Ernst &amp; Young Audit</span>
</div>
<div className="p-space-sm rounded bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Tenant Enclave Key</span>
<span className="font-label-lg text-label-lg text-primary font-semibold">AWS FIPS 140-2 Level 3</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Meridian Assigned HSM: #HSM-9912</span>
</div>
<div className="p-space-sm rounded bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">LLM Retention Policy</span>
<span className="font-label-lg text-label-lg text-primary font-semibold">0.00% Model Training</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Client Work-Product Protected</span>
</div>
</div>
</div>
</section>
{/*  Sticky In-Page Anchor Rail  */}
<nav className="sticky top-16 z-30 w-full bg-surface-container-lowest/95 backdrop-blur shadow-sm px-gutter py-space-xs">
<div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-space-md py-1">
<div className="flex items-center gap-space-xs whitespace-nowrap">
<a className="px-space-sm py-1 rounded text-primary hover:bg-surface-container-high font-label-md text-label-md" href="#pipeline">1. Juridical Pipeline</a>
<span className="text-outline-variant text-label-sm">•</span>
<a className="px-space-sm py-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md" href="#responsible-ai">2. Responsible AI Tenets</a>
<span className="text-outline-variant text-label-sm">•</span>
<a className="px-space-sm py-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md" href="#privilege-safeguards">3. Privilege &amp; Rule 1.6</a>
<span className="text-outline-variant text-label-sm">•</span>
<a className="px-space-sm py-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md" href="#data-lifecycle">4. Evidentiary Lifecycle</a>
<span className="text-outline-variant text-label-sm">•</span>
<a className="px-space-sm py-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md font-semibold text-error" href="#statutory-disclaimer">5. Statutory Disclaimer</a>
<span className="text-outline-variant text-label-sm">•</span>
<a className="px-space-sm py-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md" href="#counsel-helpdesk">6. Emergency Hotline</a>
</div>
<div className="hidden md:flex items-center gap-space-xs text-secondary font-label-sm text-label-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
<span>Counsel Shell: Eleanor Vance, Esq. (Meridian Corp)</span>
</div>
</div>
</nav>
{/*  Content Container  */}
<div className="max-w-7xl mx-auto w-full px-gutter py-space-xl flex flex-col gap-space-xl">
{/*  Section 1: How AdvoChat Works  */}
<section className="flex flex-col gap-space-lg" id="pipeline">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Section 01 // Architectural Pipeline</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">How AdvoChat Processes Juridical Intelligence</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Every ingested brief and query undergoes a deterministic 4-stage isolation sequence before delivery to counsel.</span>
</div>
{/*  4-Stage Bento Flow  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Step 1  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between h-full">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">STAGE 01</span>
<span className="material-symbols-outlined text-[20px] text-primary">fingerprint</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Matter-Bound Ingestion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Incoming pleadings, exhibits, and master agreements generate immediate SHA-256 tamper-evident checksums. All client-attorney transmission headers are sanitized prior to semantic tokenization.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Client Scrubbing</span>
<span className="font-semibold text-primary">SHA-256 Sealed</span>
</div>
</div>
{/*  Step 2  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between h-full">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">STAGE 02</span>
<span className="material-symbols-outlined text-[20px] text-primary">account_balance</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Precedent Indexing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Hybrid vector retrieval matches clauses against Delaware General Corporation Law (DGCL), DRULPA, Restatements of Contracts, and Bloomberg Law primary source reporters without hallucinated citations.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Primary Sources</span>
<span className="font-semibold text-primary">Delaware Chancery</span>
</div>
</div>
{/*  Step 3  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between h-full">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">STAGE 03</span>
<span className="material-symbols-outlined text-[20px] text-primary">psychology</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Doctrinal Synthesis</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dual-layer adversarial neural checkers review proposed drafts for predatory restrictive covenants, ambiguous indemnifications, and statutory conflicts under zero-retention memory enclaves.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Model Retention</span>
<span className="font-semibold text-primary">Zero Cached Prompts</span>
</div>
</div>
{/*  Step 4  */}
<div className="p-space-md rounded bg-primary-container text-on-primary shadow-sm flex flex-col justify-between h-full">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-primary-container font-semibold">STAGE 04</span>
<span className="material-symbols-outlined text-[20px] text-on-primary">gavel</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Attorney Verification</h3>
<p className="font-body-sm text-body-sm text-on-primary/80">
              Outputs are delivered strictly as deliberative work-product skeletons, redlines, and cross-examination drafts for independent review and formal signature by practicing counsel.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-primary-container font-label-sm text-label-sm">
<span>Human-in-the-Loop</span>
<span className="font-semibold text-on-primary">Mandatory Signoff</span>
</div>
</div>
</div>
{/*  Live Diagram Visualization  */}
<div className="p-space-lg rounded bg-surface-container-low flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[24px]">balance</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Cryptographic Air-Gap Proof Between Matters</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Meridian Corp vs. Vantage (Docket #2024-CV-88219) tokens are isolated inside a dedicated tenant enclave. Memory pools are flushed upon session termination.</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-primary font-semibold">Enclave Latency: 14ms</span>
<span className="px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Status: Nominal</span>
</div>
</div>
</section>
{/*  Section 2: Responsible AI Principles & Model Transparency  */}
<section className="flex flex-col gap-space-lg" id="responsible-ai">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Section 02 // Neural Ethics &amp; Transparency</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Responsible AI Principles for Corporate Jurisprudence</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Unlike generalist consumer LLMs, AdvoChat’s neural engines are constrained by strict doctrinal grounding covenants. Speculative extrapolation and hallucinated legal authority are mathematically suppressed.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Tenet 1  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Zero Hallucination Quorum</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Dual-quorum verification requires explicit statutory or case reporter citations (e.g., <span className="italic font-headline-sm text-body-sm">Ainslie v. Cantor Fitzgerald L.P., Del. 2024</span>) for every legal deduction. Unanchored claims trigger automatic confidence demotion.
          </p>
<div className="mt-auto pt-space-xs">
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold">Quorum Threshold: 99.8% Anchor Confidence</span>
</div>
</div>
{/*  Tenet 2  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Explainable Syllogism Graph</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Every synthesized brief exposes its underlying doctrinal structure: <em>Major Premise</em> (governing rule of law), <em>Minor Premise</em> (record facts in dispute), and <em>Judicial Holding</em> (statutory synthesis).
          </p>
<div className="mt-auto pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Formal Logic Trace Available per Query</span>
</div>
</div>
{/*  Tenet 3  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">difference</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Deterministic Redline Diffs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Redline reviews never synthesize speculative filler. Character-level diff trackers annotate exact additions, strike-outs, and clause alterations backed by side-by-side risk ratings.
          </p>
<div className="mt-auto pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Non-Destructive Word &amp; PDF Export</span>
</div>
</div>
{/*  Tenet 4  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">balance</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Anti-Predatory Clause Bias Checks</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Automated audits identify unconscionable arbitration requirements, unilateral fee-shifting provisions, and overbroad non-compete covenants across employment and merger transactions.
          </p>
<div className="mt-auto pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary font-semibold">FTC &amp; Chancery Equity Parity Rules</span>
</div>
</div>
{/*  Tenet 5  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">security</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Cryptographic Non-Training Covenant</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Matter filings, discovery batches, and chat turns are strictly walled. Neither base foundation models nor downstream fine-tuned instances ingest Meridian client communications.
          </p>
<div className="mt-auto pt-space-xs">
<span className="font-label-sm text-label-sm text-on-primary-container font-semibold">Zero Fine-Tuning Ingestion Policy</span>
</div>
</div>
{/*  Metric Callout Card  */}
<div className="p-space-lg rounded bg-surface-container-high shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Current Accuracy Score</span>
<div className="font-display-md text-display-md text-primary">99.98%</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Citation verification index across 4.2 million judicial opinions in the Delaware, Second, and Federal Circuits.</p>
</div>
<div className="pt-space-md">
<a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:underline" href="javascript:void(0)">
<span>View Full Accuracy Methodology</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  Section 3: Privacy, Privilege & ABA Formal Opinion 477R  */}
<section className="flex flex-col gap-space-lg" id="privilege-safeguards">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Section 03 // Privilege &amp; Ethical Walls</span>
<h2 className="font-headline-lg text-headline-lg text-primary">ABA Formal Op. 477R &amp; 498 Compliant Architecture</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Maintaining the sanctity of the attorney-client privilege under Model Rule 1.6 requires technological safeguards that eliminate the risk of inadvertent waiver in generative environments.
        </p>
</div>
{/*  Split Card: Rules Analysis & Safeguards  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm pb-space-xs">
<span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Ethical Wall &amp; Duty of Confidentiality (Rule 1.6)</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Pursuant to American Bar Association Formal Opinions 477R (Securing Communication of Protected Client Information) and 498 (Virtual Practice), AdvoChat deploys client-isolated computational enclaves. Each case matter retains an isolated vector index preventing cross-matter data bleed.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Model Rule 1.6(c)</span>
<p className="font-body-sm text-body-sm text-on-surface">"A lawyer shall make reasonable efforts to prevent the inadvertent or unauthorized disclosure of, or unauthorized access to, information relating to the representation of a client."</p>
</div>
<div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Delaware Supreme Court Rule 64</span>
<p className="font-body-sm text-body-sm text-on-surface">Enforces heightened diligence regarding digital evidentiary repositories and non-discoverable litigation strategy notes.</p>
</div>
</div>
</div>
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Defense Against Discovery Subpoenas</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              AdvoChat operates under a zero-knowledge architectural covenant. Customer tenant keys are held exclusively within client-managed Hardware Security Modules (AWS CloudHSM or FIDO2 HSM tokens). AdvoChat personnel cannot decrypt, read, or produce matter documents in response to third-party civil discovery demands.
            </p>
</div>
</div>
{/*  Technical Specification Visual Folio  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="p-space-lg rounded bg-primary text-on-primary shadow-sm flex flex-col justify-between h-full">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold">Enclave Cryptography</span>
<span className="material-symbols-outlined text-tertiary-fixed text-[20px]">shield_lock</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">Hardware Security Module (HSM) Specifications</h3>
<ul className="flex flex-col gap-space-sm text-on-primary/90 font-body-sm text-body-sm">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed shrink-0 mt-0.5">check_circle</span>
<span><strong>AES-GCM-256:</strong> Document payloads encrypted at rest with client-ephemeral key sets.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed shrink-0 mt-0.5">check_circle</span>
<span><strong>TLS 1.3 Strict Mode:</strong> High-entropy forward secrecy for in-flight judicial transcripts.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed shrink-0 mt-0.5">check_circle</span>
<span><strong>No Third-Party Multi-Tenant Pools:</strong> Dedicated memory nodes in secure SOC-2 regions.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed shrink-0 mt-0.5">check_circle</span>
<span><strong>Hardware Attestation:</strong> TPM-validated microVM boots for isolated neural inference.</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between">
<div>
<div className="font-label-sm text-label-sm text-on-primary-container">Key State for Meridian Corp</div>
<div className="font-label-lg text-label-lg font-mono">0x44F9...E912</div>
</div>
<button className="px-space-sm py-1 rounded bg-surface text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors" type="button">
                Rotate Key
              </button>
</div>
</div>
</div>
</div>
</section>
{/*  Section 4: Data Handling & Evidentiary Lifecycle  */}
<section className="flex flex-col gap-space-lg" id="data-lifecycle">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Section 04 // Data Retention &amp; Destruction</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Evidentiary Retention, Export &amp; Certified Purge</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Complete operational sovereignty over corporate matter data. Firm administrators dictate automated wipe cycles with cryptographically validated Certificates of Destruction.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/*  Lifecycle Feature 1  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary pb-space-xs">
<span className="material-symbols-outlined text-[20px]">auto_delete</span>
<h3 className="font-headline-sm text-headline-sm">Automated 90-Day Purge</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            By default, all conversational turns, exploratory drafting scratchpads, and interim OCR matrices are purged after 90 days of inactivity, or immediately upon matter closing.
          </p>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Current Inactive Count</span>
<span className="font-semibold text-primary">0 Expired Records</span>
</div>
</div>
{/*  Lifecycle Feature 2  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary pb-space-xs">
<span className="material-symbols-outlined text-[20px]">memory</span>
<h3 className="font-headline-sm text-headline-sm">RAM-Ephemeral Processing</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Dynamic inference occurs in volatility-bound execution instances. Prompts and contextual token trees are unmounted from system RAM immediately upon message dispatch.
          </p>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Disk Write Avoidance</span>
<span className="font-semibold text-primary">100% Enforced</span>
</div>
</div>
{/*  Lifecycle Feature 3  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary pb-space-xs">
<span className="material-symbols-outlined text-[20px]">folder_zip</span>
<h3 className="font-headline-sm text-headline-sm">Matter Portability &amp; Vault Export</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Litigation teams may request a complete export of case binders, citation graphs, and generated redlines as an encrypted .ZIP archive with verifiable SHA-256 audit manifest.
          </p>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Format Standard</span>
<span className="font-semibold text-primary">Legal-XML / PDF/A</span>
</div>
</div>
</div>
{/*  On-Demand Emergency Purge Action Tray  */}
<div className="p-space-md rounded bg-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">delete_forever</span>
<div>
<div className="font-label-lg text-label-lg text-primary font-semibold">Immediate On-Demand Matter Purge Routine</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Instantly overwrite all cache blocks, vector indices, and chat histories for Docket #2024-CV-88219.</div>
</div>
</div>
<button className="px-space-md py-space-xs rounded bg-surface-container-lowest text-error font-label-md text-label-md font-semibold hover:bg-error-container transition-colors shrink-0 shadow-sm" type="button">
          Initiate Cryptographic Shredding
        </button>
</div>
</section>
{/*  Section 5: Statutory Legal Disclaimer & Professional Practice Boundary  */}
<section className="flex flex-col gap-space-md" id="statutory-disclaimer">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[22px]">warning</span>
<span className="font-label-sm text-label-sm text-error uppercase tracking-widest font-semibold">Section 05 // Statutory Governance Covenants</span>
</div>
{/*  Authoritative Legal Disclaimer Callout Box  */}
<div className="p-space-xl rounded bg-surface-container-lowest shadow-md flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pb-space-md">
<div className="flex flex-col gap-0.5">
<h2 className="font-headline-lg text-headline-lg text-primary">Statutory Legal Disclaimer &amp; Non-Legal Advice Covenant</h2>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Mandatory Regulatory Notice • Read Carefully Prior to Relying Upon Work Product</span>
</div>
<div className="px-space-sm py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold shrink-0">
            JURISDICTION: ALL US FEDERAL &amp; STATE COURTS
          </div>
</div>
<div className="flex flex-col gap-space-md text-on-surface font-body-md text-body-md leading-relaxed">
<p className="font-semibold text-primary text-body-lg">
            AdvoChat is a proprietary legal technology, natural language synthesis, and automated drafting workflow application engineered strictly to assist licensed legal professionals, corporate legal departments, and judicial clerks. ADVOCHAT TECHNOLOGIES LLC IS NOT A LAW FIRM, IS NOT ENGAGED IN THE PRACTICE OF LAW, AND DOES NOT PROVIDE LEGAL REPRESENTATION, FORMAL LEGAL OPINIONS, OR DIRECT CLIENT ADVICE.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">Non-Creation of Attorney-Client Relationship</h3>
<p className="text-on-surface-variant font-body-sm text-body-sm">
                No interaction with the AdvoChat platform, including the generation of motion drafts, synthesis of Delaware Chancery precedents, or analysis of contractual indemnity clauses, shall create an attorney-client relationship between AdvoChat Technologies LLC (or its employees) and any user, enterprise client, or represented litigant. Communications through AdvoChat are not covered by an attorney-client relationship directly with the platform provider, although client confidentiality is technically safeguarded as outlined under Section 03.
              </p>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">Affirmative Duty of Independent Counsel</h3>
<p className="text-on-surface-variant font-body-sm text-body-sm">
                Licensed legal counsel retains the sole and non-delegable duty to review, analyze, Shepherdize, and independently confirm all citations, statutory interpretations, and factual claims synthesized by AdvoChat before such materials are filed in court, delivered to an adversary, or presented to a board of directors. Reliance on unverified generative outputs may constitute a violation of Federal Rule of Civil Procedure 11 and corresponding state disciplinary rules.
              </p>
</div>
</div>
<div className="p-space-md rounded bg-surface-container-low flex flex-col gap-space-xs">
<div className="font-label-md text-label-md text-primary font-semibold">Limitation of Statutory Liability</div>
<p className="text-on-surface-variant font-body-sm text-body-sm">
              Under no circumstances shall AdvoChat Technologies LLC, its licensors, or neural engineering affiliates be liable for any court sanctions, dismissed pleadings, adverse judgments, loss of claims, or consequential commercial damages resulting from counsel’s failure to independently audit generated citations or arguments.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">verified</span>
<span>Ratified by Office of the General Counsel • AdvoChat Technologies LLC</span>
</div>
<span>Effective Revision Date: October 24, 2024</span>
</div>
</div>
</section>
{/*  Section 6: Support, Counsel Helpdesk & Emergency Incident Channel  */}
<section className="flex flex-col gap-space-lg" id="counsel-helpdesk">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Section 06 // Counsel Helpdesk &amp; Emergency Escalation</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Round-the-Clock Legal Operations Support</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">24/7 dedicated enclave support for emergency trial filings, overnight redline bottlenecks, and docket synchronizations.</span>
</div>
{/*  Support Channels Bento  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Emergency Hotline  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">24/7 Priority Docket Hotline</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Immediate voice escalation for active trial teams with impending filing deadlines in Chancery, Federal Circuit, or SDNY matters.
            </p>
<div className="mt-space-sm font-headline-md text-headline-md text-primary font-mono font-semibold">
              +1 (800) 555-ADVO
            </div>
<span className="font-label-sm text-label-sm text-secondary">PIN: #MERIDIAN-88219 (Priority Route)</span>
</div>
<div className="pt-space-md">
<span className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Average pickup: &lt; 45 seconds</span>
</span>
</div>
</div>
{/*  Encrypted Inquiries  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">mark_email_read</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">PGP-Encrypted Inquiries</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Submit sensitive case file bug reports, custom firm taxonomy requests, or citation correction notices directly to our staff attorneys.
            </p>
<div className="mt-space-sm font-label-md text-label-md text-primary font-mono select-all">
              support-enclave@advochat-legal.com
            </div>
<span className="font-label-sm text-label-sm text-secondary">Fingerprint: 7B4F 91A2 CD33 11F0</span>
</div>
<div className="pt-space-md">
<button className="w-full py-2 rounded bg-surface-container-high text-primary hover:bg-surface-container-highest font-label-md text-label-md font-semibold transition-colors" type="button">
              Download Public PGP Key
            </button>
</div>
</div>
{/*  Dedicated Account Representative  */}
<div className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">assignment_ind</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary font-semibold">Assigned Specialist</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Marcus Thorne, J.D.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Legal Technology Director assigned to the Meridian Technologies account. Former Delaware Chancery law clerk.
            </p>
<div className="mt-space-sm flex flex-col gap-0.5 text-secondary font-label-sm text-label-sm">
<span>Direct: +1 (212) 555-0194</span>
<span>Enclave Slack: @mthorne.advochat</span>
</div>
</div>
<div className="pt-space-md">
<button className="w-full py-2 rounded bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-semibold transition-colors" type="button">
              Schedule Briefing Call
            </button>
</div>
</div>
</div>
{/*  Real-Time Institutional Status Banner  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-3 h-3 rounded-full bg-primary-container animate-ping"></div>
<div>
<span className="font-label-md text-label-md text-primary font-semibold">All Enclave Core Clusters Operational (99.998% 30-Day Uptime)</span>
<div className="font-body-sm text-body-sm text-on-surface-variant">CourtListener Sync: Up-to-date (6 mins ago) • Zero Incident Reports</div>
</div>
</div>
<div className="flex items-center gap-space-md text-secondary font-label-sm text-label-sm">
<span>Latency: US-East-1 (8ms)</span>
<span>Zero Vulnerabilities Logged</span>
</div>
</div>
{/*  Frequently Asked Legal Governance Questions (Accordion)  */}
<div className="flex flex-col gap-space-xs pt-space-md">
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Frequently Asked Governance &amp; Practice Questions</h3>
{/*  FAQ 1  */}
<details className="group p-space-md rounded bg-surface-container-lowest shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between cursor-pointer list-none font-headline-sm text-headline-sm text-primary">
<span>Can opposing counsel subpoena AdvoChat session transcripts or prompt histories?</span>
<span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md">
            No. Under our zero-knowledge architecture, prompts and session matrices are transiently stored only in memory for the duration of the active conversation. Once disconnected or purged, prompt embeddings are destroyed. Furthermore, tenant cryptographic keys are controlled exclusively via your firm's HSM, rendering AdvoChat legally and technically unable to decrypt or produce substantive matter files in third-party discovery.
          </div>
</details>
{/*  FAQ 2  */}
<details className="group p-space-md rounded bg-surface-container-lowest shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between cursor-pointer list-none font-headline-sm text-headline-sm text-primary">
<span>What safeguards prevent citations from being overturned overnight (Shepard's / KeyCite parity)?</span>
<span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md">
            AdvoChat maintains an active webhook listener with Federal, Appellate, and Delaware judicial dockets. When a precedential decision is modified, vacated, or granted en banc review, the corresponding knowledge graph nodes are immediately tagged with warning flags in your Briefing Assistant, preventing reliance on negative authority.
          </div>
</details>
{/*  FAQ 3  */}
<details className="group p-space-md rounded bg-surface-container-lowest shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between cursor-pointer list-none font-headline-sm text-headline-sm text-primary">
<span>Can our firm ingest proprietary clause playbooks without risking IP leaks?</span>
<span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md">
            Yes. Enterprise accounts utilize dedicated Private Precedent Vaults. Playbooks are tokenized within your private partition and never pooled into public indexing. Your proprietary fallback positions and negotiating tactics remain protected under your firm's strict cryptographic enclave.
          </div>
</details>
{/*  FAQ 4  */}
<details className="group p-space-md rounded bg-surface-container-lowest shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between cursor-pointer list-none font-headline-sm text-headline-sm text-primary">
<span>How does AdvoChat satisfy the ABA Model Rule 1.1 Duty of Technological Competence?</span>
<span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md">
            AdvoChat provides complete auditability via its "Explainable Reasoning" graph. Rather than generating opaque answers, the system displays the underlying logic steps, source paragraph numbers, and statutory cross-references, enabling counsel to fulfill their supervisory duties under Rule 5.1 and 5.3 effortlessly.
          </div>
</details>
</div>
</section>
</div>
</div></main></div>
    </div>
  );
};
