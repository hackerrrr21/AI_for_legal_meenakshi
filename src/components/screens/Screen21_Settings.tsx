import React from 'react';

interface Screen21_SettingsProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen21_Settings: React.FC<Screen21_SettingsProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Eleanor Vance, Esq.",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample: _onQuickLoadSample}) => {
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">Meridian Corp vs. Vantage</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Docket #2024-CV-88219</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('legal-articles-updates')} href="javascript:void(0)">Legal Articles &amp; Updates</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Co-Counsel</a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Top Command Header / Breadcrumbs & Actions  */}
<div className="px-margin py-space-lg bg-surface-container-low shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
{/*  Breadcrumb & Title Cluster  */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest">
<span className="hover:text-on-surface cursor-pointer">Workspace</span>
<span className="text-outline-variant">/</span>
<span className="hover:text-on-surface cursor-pointer">Counsel Account</span>
<span className="text-outline-variant">/</span>
<span className="text-primary font-semibold">Preferences &amp; Security Governance</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold">
          Settings &amp; System Governance
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Manage counsel identity, ethical firewall security, statutory privilege safeguards, notification dispatches, and evidentiary archive lifecycle under ABA Rule 1.6 &amp; Formal Opinion 477R.
        </p>
</div>
{/*  Action Cluster  */}
<div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
<button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[17px] text-secondary">history</span>
<span>Revert to Firm Policy</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[17px] text-tertiary-container">policy</span>
<span>Audit Export (PDF)</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md shadow hover:bg-primary transition-all" id="save-settings-btn" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Save Changes</span>
</button>
</div>
</div>
</div>
{/*  Main Content Layout: Asymmetric 2-Column Broad-folio  */}
<div className="px-margin py-space-xl grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
{/*  Left Sticky Navigation Spine (4 cols on xl)  */}
<div className="xl:col-span-3">
<div className="xl:sticky xl:top-24 flex flex-col gap-space-md">
{/*  Profile Identity Stamp Card  */}
<div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm shadow-inner">
              JV
            </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate font-medium">Julian Vance, Esq.</span>
</div>
<span className="font-label-sm text-label-sm text-secondary truncate">Senior In-House Counsel</span>
<div className="flex items-center gap-1 mt-0.5">
<span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">DE Bar #48102</span>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Privilege Tier:</span>
<span className="font-semibold text-primary">Class-A Enclave</span>
</div>
</div>
{/*  Vertical Section Navigation Card  */}
<nav className="p-space-xs rounded bg-surface-container-lowest shadow-sm flex flex-col gap-1 text-on-surface-variant" id="settings-nav">
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all" data-target="section-account" href="#section-account">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px]">account_balance</span>
<span>Account &amp; Bar Credentials</span>
</div>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" data-target="section-notifications" href="#section-notifications">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-secondary">forward_to_inbox</span>
<span>Docket Dispatches &amp; Alerts</span>
</div>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-secondary-container text-on-secondary-container font-semibold">5 Active</span>
</a>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" data-target="section-locales" href="#section-locales">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-secondary">gavel</span>
<span>Jurisdictions &amp; Bluebook Format</span>
</div>
</a>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" data-target="section-accessibility" href="#section-accessibility">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-secondary">text_fields</span>
<span>Accessibility &amp; Reader Scale</span>
</div>
</a>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" data-target="section-privacy" href="#section-privacy">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-secondary">shield_lock</span>
<span>Privilege Enclave (Op. 477R)</span>
</div>
<span className="material-symbols-outlined text-[16px] text-tertiary-container">lock</span>
</a>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" data-target="section-lifecycle" href="#section-lifecycle">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-secondary">folder_delete</span>
<span>Data &amp; Evidentiary Lifecycle</span>
</div>
</a>
<div className="my-space-xs"></div>
<a className="settings-nav-item flex items-center justify-between px-space-sm py-2.5 rounded hover:bg-error-container text-on-surface font-label-md text-label-md transition-all" data-target="section-security" href="#section-security">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[19px] text-error">logout</span>
<span className="text-error">Session Security &amp; Eviction</span>
</div>
<span className="w-2 h-2 rounded-full bg-error inline-block"></span>
</a>
</nav>
{/*  Compliance Seal Banner  */}
<div className="p-space-md rounded bg-surface-container-low shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">verified_user</span>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm font-semibold text-primary uppercase tracking-wider">Zero Model Retention</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              AdvoChat operates under verified zero-cache constraints. Client work-product never fine-tunes base neural parameters.
            </p>
</div>
</div>
</div>
</div>
{/*  Right Settings Canvas (9 cols on xl)  */}
<div className="xl:col-span-9 flex flex-col gap-space-xl">
{/*  SECTION A: ACCOUNT & COUNSEL PROFILE  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-account">
<div className="flex flex-col md:flex-row md:items-center md:justify-between pb-space-sm gap-space-xs">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Account &amp; Counsel Credentials</h2>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-semibold">Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bar-associated credentials certified with the Delaware Supreme Court &amp; New York Bar.</p>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">ENCLAVE-ID: DE-88219-JV</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Field: Counsel Name  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between">
<span>Legal Name (As Admitted)</span>
<span className="text-secondary font-normal font-label-sm text-label-sm">Primary Litigator</span>
</label>
<div className="flex items-center rounded bg-surface-container-low px-space-md py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">badge</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" readOnly={true} type="text" value="Julian Vance, Esq."/>
<span className="material-symbols-outlined text-primary text-[18px]" title="Bar verified">verified</span>
</div>
</div>
{/*  Field: Enclave Email  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between">
<span>Counsel Email</span>
<span className="text-primary font-label-sm text-label-sm font-semibold">SSO Bound</span>
</label>
<div className="flex items-center rounded bg-surface-container-low px-space-md py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">mail</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" readOnly={true} type="email" value="j.vance@meridiancorp-law.com"/>
<span className="material-symbols-outlined text-secondary text-[18px]">lock</span>
</div>
</div>
{/*  Field: Organization  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Organization / Corporate Legal Dept.</label>
<div className="flex items-center rounded bg-surface-container px-space-md py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">corporate_fare</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" type="text" value="Meridian Technologies — Legal &amp; Regulatory Enclave"/>
</div>
</div>
{/*  Field: Role  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Firm Function &amp; Standing</label>
<div className="flex items-center rounded bg-surface-container px-space-md py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">assignment_ind</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" type="text" value="Senior In-House Counsel &amp; Corporate Secretary"/>
</div>
</div>
</div>
{/*  Bar Admissions & Hardware Token Sub-strip  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">gavel</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Active Bar Affiliations</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Delaware Supreme Court (#48102 Active) • NY Appellate Div. 1st Dept (Reciprocal #55194)</span>
</div>
</div>
<button className="px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container transition-all whitespace-nowrap" type="button">
            Update Bar Card
          </button>
</div>
{/*  Hardware Security Enclave Row  */}
<div className="p-space-md rounded bg-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">fingerprint</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Hardware Enclave MFA (FIDO2)</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">Bound Token: YUBI-SEC-99824-ED25519 (Slot 01 Registered)</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Active
          </span>
</div>
</section>
{/*  SECTION B: NOTIFICATIONS & DOCKET DISPATCHES  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-notifications">
<div className="flex flex-col gap-space-xs pb-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Notifications &amp; Docket Dispatches</h2>
<span className="font-label-sm text-label-sm text-secondary">Encrypted SMTP + Push API</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time statutory alerting for Delaware Court of Chancery, SDNY, and Federal Circuit dockets.</p>
</div>
{/*  Notification Switch Table  */}
<div className="flex flex-col gap-space-xs">
{/*  Item 1  */}
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[22px] mt-0.5">notification_important</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">Chancery Slip Opinions &amp; Emergency Injunctions</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immediate SMS &amp; TLS 1.3 encrypted email dispatch on bench orders.</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/*  Item 2  */}
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[22px] mt-0.5">balance</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">Active Matter Filings: Meridian Corp vs. Vantage</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant notification upon electronic docket entries (Docket #2024-CV-88219).</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/*  Item 3  */}
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">school</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">CLE Accreditation &amp; Statutory Deadlines</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Scheduled weekly docket calendar dispatched Mondays at 08:00 EST.</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/*  Item 4  */}
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-tertiary-container text-[22px] mt-0.5">find_in_page</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">LexisNexis &amp; Shepard’s Signal Shift Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Trigger warnings when precedent citations within open briefs are questioned, overruled, or distinguished.</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/*  Item 5  */}
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">newspaper</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">Delaware Chancery Friday Morning Gazette</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Weekly digest of corporate law jurisprudence, fiduciary opinions, and Rule 23 rulings.</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</section>
{/*  SECTION C: LANGUAGE & JURISDICTIONAL LOCALES  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-locales">
<div className="flex flex-col gap-space-xs pb-space-sm">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Language &amp; Jurisdictional Locales</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Controls standard statutory syntax, Bluebook citation styles, and Court clock alignment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Primary Interface &amp; Citation Engine</label>
<div className="relative">
<select className="w-full appearance-none rounded bg-surface-container px-space-md py-2.5 font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer pr-10">
<option >English (US — Delaware Chancery Legal Format)</option>
<option>English (US — Federal Second Circuit / SDNY)</option>
<option>English (UK — Commercial Court / CPR Part 31)</option>
<option>French (Civil Code / Paris Commercial Tribunal)</option>
<option>German (HGB Commercial Registry / Frankfurt)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-[18px]">unfold_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Configures auto-citation formatting in brief analysis.</span>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Citation &amp; Style Authority</label>
<div className="relative">
<select className="w-full appearance-none rounded bg-surface-container px-space-md py-2.5 font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer pr-10">
<option >The Bluebook: Uniform System of Citation (21st Ed.)</option>
<option>ALWD Guide to Legal Citation (7th Ed.)</option>
<option>Delaware Chancery Court Operating Rule 107 Standard</option>
<option>California Style Manual (4th Ed.)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-[18px]">unfold_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Footnote punctuation and parenthetical ordering conform to this standard.</span>
</div>
<div className="flex flex-col gap-space-xs md:col-span-2">
<label className="font-label-md text-label-md font-semibold text-on-surface">Statutory Jurisdictional Time Zone</label>
<div className="flex items-center rounded bg-surface-container px-space-md py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">schedule</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" readOnly={true} type="text" value="America/New_York (EST / EDT) — Wilmington Chancery Operating Clock"/>
<span className="font-label-sm text-label-sm text-primary font-mono font-semibold">SYNCHRONIZED</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Crucial for statute of limitations and 23:59:59 PM EST electronic filing cutoffs.</span>
</div>
</div>
</section>
{/*  SECTION D: ACCESSIBILITY & VISUAL COMFORT  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-accessibility">
<div className="flex flex-col gap-space-xs pb-space-sm">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Accessibility &amp; Visual Comfort</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Editorial reading ergonomics calibrated for long-form briefs and courtroom laptop usage.</p>
</div>
<div className="flex flex-col gap-space-md">
{/*  Typography scale selector  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium">Editorial Typography Scale</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Scales Playfair Display briefs and analytical transcript font sizes.</span>
</div>
<span className="font-label-md text-label-md font-semibold text-primary px-space-sm py-0.5 rounded bg-surface-container-high" id="scale-indicator">100% (Standard)</span>
</div>
<div className="grid grid-cols-3 gap-space-sm pt-space-xs">
<button className="type-scale-btn py-2 px-space-md rounded bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all" data-scale="100%" type="button">Standard (100%)</button>
<button className="type-scale-btn py-2 px-space-md rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all" data-scale="115%" type="button">Enhanced (115%)</button>
<button className="type-scale-btn py-2 px-space-md rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all" data-scale="125%" type="button">Editorial Reader (125%)</button>
</div>
</div>
{/*  High contrast & reader options  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-medium text-on-surface">Juridical High-Contrast</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">WCAG 2.2 AAA black/white ink ratio</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-medium text-on-surface">Screen Reader Footnote Expansion</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated ARIA recital of cited reporters</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="p-space-md rounded bg-surface-container-low flex items-center justify-between gap-space-sm md:col-span-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-medium text-on-surface">Courtroom Reduced Motion</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Suppresses dynamic transitions for battery preservation during live trial oral arguments.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</div>
</section>
{/*  SECTION E: PRIVACY & PRIVILEGE SAFEGUARDS (ABA 477R / Rule 1.6)  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-privacy">
<div className="flex flex-col gap-space-xs pb-space-sm">
<div className="flex items-center justify-between flex-wrap gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Privacy &amp; Privilege Safeguards</h2>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>ABA Formal Op. 477R Compliant</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Statutory confidentiality protections enforce non-disclosure and eliminate evidentiary waiver risk.</p>
</div>
<div className="flex flex-col gap-space-md">
{/*  Covenant 1: Strict Zero Retention (Locked)  */}
<div className="p-space-md rounded bg-surface-container-high flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[26px]">lock_clock</span>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Model Zero-Retention Covenant</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary text-[11px] font-mono font-semibold uppercase">Firm Locked</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Zero client filings, depositions, or prompts are retained in persistent vector indexes for model weight adaptation. Fully segregated inference enclave verified by SOC-2 Type II audit.
                </p>
</div>
</div>
<div className="shrink-0 pt-1">
<span className="px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">ENFORCED</span>
</div>
</div>
{/*  Covenant 2: AES-256 Privilege Isolation  */}
<div className="p-space-md rounded bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[26px]">key</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Per-Matter Cryptographic Key Isolation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Matter keys are partitioned via AWS CloudHSM. Revoking matter access instantly renders all local and remote clause caches cryptographically unreadable.
                </p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer pt-1">
<input defaultChecked={true} className="sr-only peer" disabled={true} type="checkbox"/>
<div className="w-11 h-6 bg-primary-container rounded-full cursor-not-allowed peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
</div>
{/*  Covenant 3: Metadata Scrubbing  */}
<div className="p-space-md rounded bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[26px]">cleaning_services</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Automated Redline &amp; Metadata Sanitization</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Strips track changes, author initials, internal IP addresses, and GPS EXIF stamps before briefing exports are rendered for opposing counsel.
                </p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer pt-1">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-surface-container-lowest after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</section>
{/*  SECTION F: DATA & DOCUMENT MANAGEMENT  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-lifecycle">
<div className="flex flex-col gap-space-xs pb-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-primary font-semibold">Data &amp; Evidentiary Lifecycle</h2>
<span className="font-label-sm text-label-sm text-secondary font-mono">ENCLAVE STORAGE: 50.0 MB</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">E-Discovery retention thresholds, automated local purge timers, and external DMS integrations.</p>
</div>
{/*  Storage Progress Indicator  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="font-semibold text-on-surface">Statutory Secure Vault Allocation</span>
<span className="text-secondary font-mono">4.2 MB / 50.0 MB (8.4% capacity • 14 Active Dockets)</span>
</div>
{/*  Visual progress bar without borders  */}
<div className="w-full h-2.5 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"8.4%"}}></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Automated clean: Zero lingering PDFs</span>
<span className="text-primary font-semibold">Zero-Spill Certified</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Retention Cycle Selector  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Automated Vault Purge Frequency</label>
<div className="relative">
<select className="w-full appearance-none rounded bg-surface-container px-space-md py-2.5 font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer pr-10">
<option >Every 90 Days (Statutory Zero-Trace)</option>
<option>Every 30 Days (Strict High-Risk)</option>
<option>Every 180 Days (Long-Trial Retention)</option>
<option>Immediate (Session-Only Transient Cache)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-[18px]">unfold_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">All local temporary scratchpads shred according to this cadence.</span>
</div>
{/*  Connected DMS systems  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Authorized Cloud DMS Integrations</label>
<div className="flex items-center gap-space-xs flex-wrap pt-1">
<div className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span>NetDocuments®</span>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span>iManage® Work 10</span>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span>CoCounsel®</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary mt-1">DMS tokens are authenticated through Meridian Corporate Okta.</span>
</div>
</div>
{/*  Manual Emergency Actions  */}
<div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container text-error hover:bg-error-container font-label-md text-label-md font-semibold transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">delete_sweep</span>
<span>Trigger Immediate Vault Purge Routine</span>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">inventory_2</span>
<span>Export Complete Matter Evidentiary Archive (.zip)</span>
</button>
</div>
</section>
{/*  SECTION G: SESSION SECURITY & EVICTION (DANGER ZONE)  */}
<section className="p-space-lg rounded bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg scroll-mt-24" id="section-security">
<div className="flex flex-col gap-space-xs pb-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-error font-semibold">Session Security &amp; Eviction</h2>
<span className="font-label-sm text-label-sm text-error font-semibold uppercase">Restricted Area</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active TLS terminal connections and privilege de-authorization controls.</p>
</div>
{/*  Active Sessions List  */}
<div className="flex flex-col gap-space-sm">
{/*  Session 1: Current  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">laptop_mac</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Wilmington Chancery Chambers Station (macOS Safari 18.1)</span>
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase font-semibold">Current Session</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[12px]">IP: 198.51.100.24 • TLS 1.3 • FIDO2 Hardware Session Authenticated</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-emerald-800 font-semibold self-start md:self-center">Active Now</span>
</div>
{/*  Session 2: Mobile  */}
<div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">smartphone</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">iPhone 16 Pro — AdvoChat iOS Secure Enclave</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase font-medium">Biometric</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[12px]">IP: 198.51.100.89 • Last Ping 2 hours ago from New Castle, DE</span>
</div>
</div>
<button className="text-error font-label-sm text-label-sm font-semibold hover:underline self-start md:self-center" type="button">
              Terminate
            </button>
</div>
</div>
{/*  Eviction Buttons Cluster  */}
<div className="p-space-md rounded bg-error-container/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-error text-[22px] mt-0.5">warning</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-error-container">De-Authenticate Counsel Workstation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Zero local traces will remain on this machine. Hardware tokens will be revoked and transient document caches purged immediately.
              </p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 w-full md:w-auto">
<button className="w-full md:w-auto px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium shadow-sm transition-all" type="button">
              Evict Remote Only
            </button>
<button className="w-full md:w-auto px-space-lg py-2 rounded bg-error text-on-error hover:bg-red-800 font-label-md text-label-md font-semibold shadow transition-all" type="button">
              Sign Out Now
            </button>
</div>
</div>
</section>
</div>
</div>
{/*  Interactive Script for Tab Highlight & Toast Micro-interactions  */}

</div></main></div>
    </div>
  );
};
