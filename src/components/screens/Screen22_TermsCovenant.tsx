import React from 'react';

interface Screen22_TermsCovenantProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen22_TermsCovenant: React.FC<Screen22_TermsCovenantProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample: _onQuickLoadSample}) => {
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <main className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin flex-1 flex flex-col items-center justify-center"><div className="flex flex-col w-full py-space-sm items-center justify-center">
<div className="w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md bg-surface-container-low/60 -mx-space-md sm:-mx-space-xl -mt-space-md sm:-mt-space-xl px-space-md sm:px-space-xl pt-space-md">
<div className="flex items-center gap-space-sm">
<img alt="AdvoChat logo emblem" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wv881jQKz2jesYju2wzeVmGSRaHC7nwRk_HrX1x-UlZTN7ilySUR37j9x3l8Ma6QayY5gTQbONRuLTOCHHDNhIYESSBE7ldFvz8LTuGj1L0BaY9TosWQi_9bCXX7O_hY4iGZInXAIHfqwhVvuZKzy_oa7rLo1_tZeNMVqc2dQCtWc5mUKnQVp73qxnYmR2SAu02iz3mz7F4QTarexyfgOr_5PRHQQeVxQZ6n5SsYInJcFtoqL9mHVKk1c4"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold leading-tight">AdvoChat</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-medium">Statutory Verification Desk</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-start sm:self-auto bg-surface-container-high px-3 py-1 rounded-full text-secondary">
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">verified</span>
<span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-on-surface-variant">Folio • Rev. 2024.4</span>
</div>
</div>
<div className="mt-space-lg flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-on-tertiary-container">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Mandatory Covenant Verification</span>
</div>
<h1 className="font-display-md text-display-md text-primary font-medium tracking-tight mt-1">
        Terms of Counsel &amp; Privacy Covenant
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
        Please review and execute the terms governing artificial intelligence assistance in jurisdictional matters, attorney-client privilege safeguard protocols, and evidentiary integrity.
      </p>
</div>
<div className="mt-space-md flex items-center justify-between py-2 px-space-sm bg-surface-container-low rounded-lg text-secondary">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span className="font-label-md text-label-md font-medium text-on-surface">Docket Reference: ACT-2024-COV-882</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-surface-tint"></span>
<span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase">SOC-2 Certified Enclave</span>
</div>
</div>
<div className="mt-space-sm bg-surface-container-lowest rounded-lg p-space-md sm:p-space-lg max-h-72 overflow-y-auto space-y-space-md shadow-inner bg-gradient-to-b from-surface-container-lowest via-surface-bright to-surface-container-low/40" id="covenantScrollArea">
<div className="space-y-2">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-bold">01</span>
            Juridical Non-Delegation &amp; Attorney Oversight
          </h2>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">Clause 1.1 - 1.4</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-7">
          AdvoChat is configured strictly to operate in an assistive, advisory, and computational capacity. The software does not establish an independent attorney-client relationship with third-party litigants. The final verification, signature, delivery, and procedural filing of all pleadings, legal memoranda, cross-examinations, discovery subpoenas, and advisory opinions remain the sole non-delegable duty and ethical responsibility of the licensed attorney of record under Model Rules of Professional Conduct 1.1 (Competence) and 5.3 (Supervisory Responsibility).
        </p>
</div>
<div className="h-px w-full bg-surface-variant"></div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-bold">02</span>
            Uncompromised Confidentiality &amp; Privilege Inviolability
          </h2>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">Clause 2.1 - 2.9</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-7">
          All client prompts, matter dockets, attached exhibits, and internal firm work product processed through the AdvoChat platform are cryptographically isolated within private, zero-retention ephemeral compute enclaves. Data submitted is strictly excluded from foundation model pre-training, fine-tuning, or inter-tenant synthetic cache generation. The system complies fully with ABA Formal Opinion 477R, ensuring absolute parity with statutory requirements for safeguarding client confidences and attorney work product immunity.
        </p>
</div>
<div className="h-px w-full bg-surface-variant"></div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-bold">03</span>
            Precedent Fidelity &amp; Citation Attribution
          </h2>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">Clause 3.1 - 3.5</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-7">
          AdvoChat maintains zero tolerance for synthetic or hallucinated precedent. All case law citations, judicial reporter volume numbers, pin-cites, and statutory provisions are dynamically authenticated against real-time verified Shepard’s and KeyCite equivalent indexes prior to token emission. In the event of conflicting appellate circuit splits or vacated judgments, the system explicitly prefixes doctrinal flags and jurisdictional divergence markers.
        </p>
</div>
<div className="h-px w-full bg-surface-variant"></div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-bold">04</span>
            Data Processing &amp; Cryptographic Auditability
          </h2>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">Clause 4.1 - 4.3</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-7">
          Execution of this covenant generates an immutable SHA-256 ledger record tying the executing bar admission or corporate principal identifier to this exact folio revision. Any material unilateral revisions to computational guardrails or subpoena notification practices will trigger mandatory re-attestation before session initialization.
        </p>
</div>
</div>
<div className="mt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
<label className="flex items-start gap-space-sm cursor-pointer select-none group">
<input className="mt-1 h-4 w-4 rounded accent-primary-container cursor-pointer transition-all duration-150" id="checkPractitioner" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
            Licensed Practitioner or Authorized Agent Certification
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            I confirm that I am an actively licensed legal practitioner in good standing, or an authorized agent of a retaining corporate entity authorized to bind our enterprise to these jurisdictional terms.
          </span>
</div>
</label>
<div className="h-px w-full bg-surface-variant/70"></div>
<label className="flex items-start gap-space-sm cursor-pointer select-none group">
<input className="mt-1 h-4 w-4 rounded accent-primary-container cursor-pointer transition-all duration-150" id="checkAgreement" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
            Master Subscription Agreement &amp; Data Processing Addendum (DPA)
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            I acknowledge receipt and binding adherence to the AdvoChat Master Subscription Agreement, Privacy Framework, and standard European/US Data Processing Addendum.
          </span>
</div>
</label>
</div>
<div className="mt-space-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-xs">
<a className="flex items-center justify-center gap-space-xs text-secondary hover:text-primary font-label-md text-label-md font-semibold transition-colors py-2 px-3 rounded hover:bg-surface-container" href="javascript:void(0)" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Download Executed Copy (PDF) • Legal Archive</span>
</a>
<button className="flex items-center justify-center gap-space-xs px-6 py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-semibold tracking-wide shadow-md transition-all duration-200 hover:bg-primary-container" id="submitAgreementBtn" onClick={() => onNavigate('dashboard')}>
<span>Execute Agreement &amp; Enter AdvoChat</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-variant/60 flex items-center justify-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[15px] text-surface-tint">fingerprint</span>
<span className="font-label-sm text-label-sm text-center">
        Cryptographically signed audit entry (<span className="font-mono text-[10px]">SHA256:0x7F9A...B41D</span>) will be recorded in docket registry upon execution.
      </span>
</div>
</div>
<div className="fixed bottom-6 right-6 hidden transform transition-all duration-300 bg-primary text-on-primary px-space-md py-space-sm rounded-lg shadow-xl items-center gap-space-sm z-50" id="toastNotification">
<span className="material-symbols-outlined text-[20px] text-tertiary-fixed">task_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold">Covenant Cryptographically Signed</span>
<span className="font-body-sm text-body-sm text-surface-container-highest">Redirecting to AdvoChat Executive Counsel...</span>
</div>
</div>
</div>
</main>
    </div>
  );
};
