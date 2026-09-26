import React from 'react';

interface Screen19_ArticleDetailsProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen19_ArticleDetails: React.FC<Screen19_ArticleDetailsProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  onQuickLoadSample: _onQuickLoadSample}) => {
  return (
    <div className="w-full bg-surface text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-surface-container-low shadow-[1px_0_8px_rgba(0,0,0,0.02)] z-40 flex flex-col justify-between p-space-md"><div className="flex flex-col gap-space-lg"><div className="px-space-sm pt-space-xs"><div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matter Context</div><div className="font-headline-sm text-headline-sm text-on-surface font-medium mt-1 truncate">IT Employment Contract Review</div><div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Guide Ref #IND-EMP-27</div></div><div className="flex flex-col gap-space-xs"><div className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Case Portfolio</div><nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-semibold rounded"><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">Overview</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">Briefing Assistant</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-analysis')} href="javascript:void(0)">Clause Analysis</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">Precedent Vault</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('legal-articles-updates')} href="javascript:void(0)">Legal Articles &amp; Updates</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-archive')} href="javascript:void(0)">Court Filings</a><a className="px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">Find Counsel &amp; Co-Counsel</a></nav></div></div><div className="flex flex-col gap-space-sm p-space-sm rounded bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-semibold text-secondary uppercase">Encryption</span><span className="font-label-sm text-label-sm font-semibold text-on-primary-container">256-BIT AES</span></div><div className="font-body-sm text-body-sm text-on-surface-variant">Zero-retention statutory compliance mode active.</div></div></aside><div className="pl-0 lg:pl-64 flex flex-col min-h-screen"><main className="relative pt-16 flex-1 w-full bg-surface"><div className="flex flex-col w-full">
{/*  Reading Progress Bar (Fixed beneath app shell header)  */}
<div className="sticky top-16 z-30 w-full bg-surface-container-high h-1">
<div className="h-1 bg-primary-container transition-all duration-150 ease-out" id="read-progress" style={{"width":"28%"}}></div>
</div>
<div className="w-full max-w-[1560px] mx-auto px-gutter py-space-md">
{/*  Top Utility Bar & Breadcrumb Matrix  */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-sm mb-space-md">
{/*  Breadcrumb navigation  */}
<nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs text-secondary overflow-x-auto whitespace-nowrap py-1">
<a className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors flex items-center gap-1" href="javascript:void(0)">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span>Legal Knowledge</span>
</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<a className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href="javascript:void(0)">
          Restrictive Covenants &amp; Clawbacks
        </a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
          Doc Ref: ART-2024-DEL-89
        </span>
</nav>
{/*  Reading Utilities Cluster  */}
<div className="flex items-center gap-space-xs flex-wrap">
{/*  Audio narration chip  */}
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
<button aria-label="Toggle narration" className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors" id="audio-play-btn" type="button">
<span className="material-symbols-outlined text-[14px]">play_arrow</span>
</button>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-semibold tracking-tight text-primary">03:15 / 09:20</span>
<span className="text-[10px] text-secondary leading-none">Hon. M. Sterling (AI Narration)</span>
</div>
</div>
<div className="h-5 w-px bg-outline-variant mx-1"></div>
{/*  Typography scaler  */}
<div className="flex items-center bg-surface-container-lowest rounded-full p-0.5 shadow-sm">
<button className="px-2 py-1 text-secondary hover:text-primary rounded-full hover:bg-surface-container font-label-sm text-label-sm" id="decrease-font" title="Decrease font size">A-</button>
<button className="px-2 py-1 text-secondary hover:text-primary rounded-full hover:bg-surface-container font-label-sm text-label-sm font-bold" id="increase-font" title="Increase font size">A+</button>
</div>
{/*  Font face switcher  */}
<button className="px-space-sm py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-sm text-label-sm text-secondary hover:text-primary flex items-center gap-1" id="toggle-serif" title="Toggle font face">
<span className="material-symbols-outlined text-[15px]">font_download</span>
<span>Editorial Serif</span>
</button>
{/*  Save to Brief & Actions  */}
<button className="px-space-sm py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container shadow-sm font-label-sm text-label-sm text-secondary hover:text-primary flex items-center gap-1 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">bookmark_add</span>
<span>Save to Brief</span>
</button>
<button className="px-space-sm py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container shadow-sm font-label-sm text-label-sm text-secondary hover:text-primary flex items-center gap-1 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
<span>Annotated PDF</span>
</button>
<button className="p-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container shadow-sm text-secondary hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
{/*  Active Matter Impact Alert Banner  */}
<div className="mb-space-lg p-space-md rounded-xl bg-gradient-to-r from-primary-container via-[#142d22] to-primary-container text-on-primary shadow-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest/15 backdrop-blur-sm flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary-fixed text-[24px]">gavel</span>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold uppercase tracking-wider">Direct Matter Nexus</span>
<span className="font-body-sm text-body-sm text-secondary-fixed font-medium">IT Employment Contract Review (Guide Ref #IND-EMP-27)</span>
</div>
<p className="font-body-md text-body-md text-on-primary/90 mt-0.5">
            This doctrine directly refutes Landlord’s reliance on the forfeiture clause in <strong>Unreasonable 2-Year Non-Compete Restraint &amp; Relieving Letter Withholding</strong>.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold hover:bg-tertiary-fixed-dim transition-colors shadow-sm flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Draft Rebuttal Memo</span>
</button>
</div>
</div>
{/*  Main Editorial Broadsheet Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Primary Column: Article Content (8 Cols)  */}
<article className="lg:col-span-8 flex flex-col gap-space-lg min-w-0">
{/*  Article Masthead Folio  */}
<header className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary-container/20 pointer-events-none"></div>
{/*  Taxonomy Flags & Citation Status  */}
<div className="flex items-center justify-between gap-space-sm flex-wrap">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase tracking-wider font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                Critical Precedent Alert
              </span>
<span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Supreme Court of India En Banc
              </span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container">verified</span>
<span className="font-semibold">Shepard’s: Positive / Overruling Precedent</span>
</div>
</div>
{/*  Headline  */}
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">
            Are Non-Compete Clauses Legal in India? Section 27 Explained for Employees and Founders
          </h1>
{/*  Deck / Subtitle  */}
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            An exhaustive doctrinal review of <strong className="text-on-surface font-semibold">Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (Supreme Court of India, 2006)</strong> and the demise of contractual immunity for unmitigated partnership equity clawbacks under Section 27 of The Indian Contract Act, 1872.
          </p>
{/*  Authorship & Publication Citation Bar  */}
<div className="pt-space-md mt-space-xs border-t-0 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low/60 -mx-space-xl -mb-space-xl p-space-lg rounded-b-xl">
<div className="flex items-center gap-space-md">
<img className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-primary-container/20" data-alt="Close-up professional headshot of Adv. Vikramaditya Sen, Senior Litigation Partner in tailored charcoal business suit with mahogany bookshelves and library law volumes in soft warm focus behind her." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYaIE4WH0wDeT96d6o2sMGFdPOQ1Qy8V_bltj4nFe-qrWkMT1wRT2QaUNazebSU4MHtin_QsRt5s_W1v422HF7wYzIzhPhb_0JsoFNllCs1ulZq2LwBsiGqXygQ5mCOcHCwAtJc-616GptZ-vbA7w5D9UjbAfkAaWBhHaqc3wmeSDBaXnts-vDW1WfTRKjD30rlpBiEWFgQnyVewNRI7ilcTSdtXLYzR-dtc16dft6F1WoWxOrqqRyIg"/>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Adv. Vikramaditya Sen</span>
<span className="text-xs text-secondary">•</span>
<span className="font-label-md text-label-md text-secondary">Co-Authored with Hon. M. Sterling</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Senior Partner, Complex Commercial Litigation • Landlord Trial Lead</span>
</div>
</div>
<div className="flex flex-col sm:text-right text-secondary">
<span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-primary">Del. Corp. L.J. (Vol. 49, Issue 3)</span>
<span className="font-body-sm text-body-sm">Published Oct 18, 2024 • 9 min read</span>
</div>
</div>
</header>
{/*  Executive Summary Callout (Docket Takeaway)  */}
<section className="p-space-lg bg-surface-container rounded-xl shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">assignment_turned_in</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold text-primary-container">Executive Doctrinal Abstract</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic font-serif">
            “The Supreme Court of India has formally dismantled the long-standing fiction that ‘forfeiture-for-competition’ provisions escape judicial reasonableness scrutiny under the guise of consensual partner choice. In <em>Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (Supreme Court of India, 2006)</em> (Del. 2024), Chief Justice Seitz clarified that substantial financial penalties conditioned on non-competition constitute restraints of trade, subject to orthodox equitable review regardless of Indian’s statutory reverence for freedom of contract.”
          </p>
</section>
{/*  Main Body Content with Rich Typographic Cadence  */}
<section className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-lg text-on-surface font-body-lg leading-relaxed" id="article-prose">
{/*  Section 1  */}
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">Section I</span>
<h2 className="font-headline-md text-headline-md font-serif text-primary mb-3" id="sec-1">
              1. The Historical Anomaly of the “Employee Choice” Doctrine
            </h2>
<p className="mb-4">
              For more than three decades, sophisticated drafters of Indian limited partnerships and corporate executive agreements relied upon an assumed legal firewall: the distinction between an affirmative <em>injunctive covenant</em> and a conditional <em>forfeiture of deferred compensation</em>. Under what came to be adopted from New York jurisprudence as the “employee choice doctrine,” courts indulged the presumption that an executive who departs to join a competitor is not legally restrained; rather, they simply choose between two freely bargained contractual options—retaining unvested equity or exercising their liberty to compete elsewhere.
            </p>
<p className="mb-4">
              This formalistic indulgence found fertile ground within the High Courts of India &amp; Supreme Court, buoyed by the express policy mandate of the Indian Revised Uniform Limited Partnership Act (<strong>Section 27 of The Indian Contract Act, 1872</strong>), which gives “maximum effect to the principle of freedom of contract and to the enforceability of partnership agreements.” Drafters quickly realized that if they structured multi-year non-compete strictures as conditions precedent to capital distribution payments rather than prohibitive injunctions, Civil Court would regularly enforce draconian four- and five-year worldwide clawbacks without subjecting the terms to traditional common-law reasonableness tests.
            </p>
</div>
{/*  Judicial Excerpt / Pull Quote  */}
<div className="my-space-sm p-space-lg bg-surface-container-low rounded-xl shadow-inner flex flex-col gap-2">
<span className="material-symbols-outlined text-tertiary-container text-[32px]">format_quote</span>
<blockquote className="font-headline-sm text-headline-sm text-primary font-serif italic leading-snug">
              “When an agreement extracts millions in vested earnings upon the commencement of competitive employment, it operates as a financial muzzle. Equity will not pretend it is anything other than a restraint of trade.”
            </blockquote>
<figcaption className="font-label-md text-label-md text-secondary font-semibold mt-1">
              — Hon'ble Supreme Court of India (Division Bench) (<cite className="font-normal not-italic">Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (Supreme Court of India, 2006)</cite>, No. 162, 2023, at *19)
            </figcaption>
</div>
{/*  Section 2  */}
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">Section II</span>
<h2 className="font-headline-md text-headline-md font-serif text-primary mb-3" id="sec-2">
              2. The Tripartite Reasonableness Test Applied to Forfeitures
            </h2>
<p className="mb-4">
              In sweeping aside the employee choice shield, the Supreme Court of India en banc unified the judicial framework. Henceforth, whenever an employer seeks to forfeit deferred compensation, capital units, or equity interests based upon post-employment competitive activity, Civil Court courts must subject the clause to the tripartite common-law reasonableness inquiry:
            </p>
{/*  3-Prong Visual breakdown  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md my-4">
<div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1.5 shadow-sm">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">1</div>
<h3 className="font-label-lg text-label-lg font-bold text-primary">Geographic Boundary</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Must be tethered strictly to territories where the employee actually had material client touchpoints or operational directorship. Worldwide blankets are presumptively overbroad.
                </p>
</div>
<div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1.5 shadow-sm">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">2</div>
<h3 className="font-label-lg text-label-lg font-bold text-primary">Temporal Duration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  One-year periods remain defensible in Civil Court; multi-year multi-stage clawbacks (such as Cantor’s 4-year conditional lock) are classified as punitive restraints unless backed by trade secrets.
                </p>
</div>
<div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1.5 shadow-sm">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">3</div>
<h3 className="font-label-lg text-label-lg font-bold text-primary">Protectable Goodwill</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  The enterprise cannot claim a legitimate interest in suffocating competition in abstract markets where the departing partner held zero proprietary IP or strategic client leverage.
                </p>
</div>
</div>
{/*  In-line Citation interactive chip  */}
<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between text-secondary my-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">library_books</span>
<span className="font-body-sm text-body-sm font-medium">Statutory Authority: Restatement (Second) of Contracts §§ 186–188; 6 Del. C. § 17-101(c)</span>
</div>
<button className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold hover:underline">View Citations (4)</button>
</div>
</div>
{/*  Section 3: Litigating in Civil Court & Redline Comparison  */}
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">Section III</span>
<h2 className="font-headline-md text-headline-md font-serif text-primary mb-3" id="sec-3">
              3. Litigating the Aftermath: Drafting &amp; Defending in Civil Court
            </h2>
<p className="mb-4">
              The practical impact on pending Indian litigations is immediate. The Supreme Court decisively reaffirmed that Indian courts will <em>not</em> readily blue-pencil (judicially modify) an overbroad restrictive covenant in an employment or partner compensation context where the disparity of bargaining power or drafting breadth suggests overreaching.
            </p>
{/*  Clause Comparison Redline Box  */}
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-low mb-4">
<div className="px-space-md py-2.5 bg-surface-container-high flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">compare</span>
                  Disputed Clause 4.2 Redline Vulnerability (AdvoChat vs. Landlord)
                </span>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold px-2 py-0.5 rounded">Void Under Section 27 (Percept D'Mark)</span>
</div>
<div className="p-space-md flex flex-col gap-3 font-mono text-body-sm text-on-surface">
<div className="p-space-sm bg-error-container/30 rounded">
<span className="font-label-sm text-label-sm text-error font-bold block mb-1">Landlord's Existing Clause 4.2 (Vulnerable to Voidance):</span>
<p className="line-through decoration-error text-on-surface-variant">
                    “Partner shall forfeit 100% of accumulated Class B Distributions ($1,850,000) if, within thirty-six (36) months of cessation of duties, Partner directly or indirectly engages in any consulting or advisory role with any entity operating in enterprise cloud orchestration anywhere in North America or EMEA.”
                  </p>
</div>
<div className="p-space-sm bg-secondary-container/40 rounded">
<span className="font-label-sm text-label-sm text-on-secondary-container font-bold block mb-1">Section 27 Compliant Revision (Permissible Confidentiality Only):</span>
<p className="text-primary font-medium">
                    “Executive agrees that forfeiture shall apply solely if, within twelve (12) months of separation, Executive directly solicits or provides competitive advisory services to Named Key Accounts with whom Executive had direct material interaction during the final eighteen (18) months of tenure.”
                  </p>
</div>
</div>
</div>
<p>
              Under Vice Chancellor Will’s latest bench rulings following <em>Cantor Fitzgerald</em>, employers can no longer plead freedom of contract under Indian Contract Act to salvage overbroad provisions. If the geographic scope encompasses territories where the partner never set foot or generated billings, the penalty fails completely.
            </p>
</div>
{/*  Section 4: Key Takeaways Cards  */}
<div className="pt-space-md border-t-0" id="sec-4">
<h3 className="font-headline-sm text-headline-sm font-serif text-primary mb-3">Statutory Key Takeaways for Corporate Counsel</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                  Scrutiny Standard Unified
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Forfeiture-for-competition is subject to strict reasonableness review under common law, identical to injunctive non-compete covenants.
                </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-[18px]">content_cut</span>
                  No Guaranteed Blue-Penciling
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Indian Civil Courts rarely repairs overbroad clawbacks; an overreaching restriction typically leads to total invalidation of the forfeiture clause.
                </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-[18px]">account_balance_wallet</span>
                  Cap Table Exposure
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Partnerships holding back distributions under legacy clauses face statutory interest and prompt distribution actions under 6 Del. C. § 17-606.
                </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-[18px]">rule</span>
                  Immediate Procedural Remedy
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  File Rule 12(c) Motion for Judgment on the Pleadings in pending Civil Court clawback disputes where scope exceeds 12 months or local accounts.
                </p>
</div>
</div>
</div>
</section>
{/*  Contextual AI Assistant Section ("Ask AdvoChat About This Article")  */}
<section className="p-space-xl bg-gradient-to-b from-surface-container-lowest to-surface-container-low rounded-xl shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-serif">Ask AdvoChat About This Precedent</h3>
<span className="font-label-sm text-label-sm text-secondary">Contextually bound to Doc Ref: ART-2024-DEL-89 &amp; Active Guide Ref #IND-EMP-27</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span>
              ABA 477R Enclave
            </span>
</div>
{/*  Prompt Suggestions Matrix  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-xs">
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all group flex items-start gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container group-hover:translate-x-0.5 transition-transform mt-0.5">arrow_forward</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">How does Section 27 invalidate post-service non-compete restraints?</span>
</button>
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all group flex items-start gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container group-hover:translate-x-0.5 transition-transform mt-0.5">arrow_forward</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Draft a 1-page notice response to employer citing Section 27 voidness</span>
</button>
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all group flex items-start gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container group-hover:translate-x-0.5 transition-transform mt-0.5">arrow_forward</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Do Indian courts apply blue-pencil doctrine to employment contracts?</span>
</button>
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all group flex items-start gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container group-hover:translate-x-0.5 transition-transform mt-0.5">arrow_forward</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Why Indian courts reject the reasonableness test for non-competes</span>
</button>
</div>
{/*  Blotter Style Chat Input Form  */}
<div className="mt-space-xs p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<textarea className="w-full bg-transparent resize-none font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none px-space-xs py-1" placeholder="Ask AdvoChat to analyze, synthesize, or formulate cross-examination questions..." rows={2}></textarea>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="Attach pleading or exhibit">
<span className="material-symbols-outlined text-[18px]">attach_file</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="Voice dictation">
<span className="material-symbols-outlined text-[18px]">mic</span>
</button>
<span className="font-label-sm text-label-sm text-outline-variant hidden sm:inline">| Privileged Workspace</span>
</div>
<button className="px-space-md py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors shadow-sm flex items-center gap-1.5">
<span>Deliberate</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
</section>
{/*  Topic Taxonomy Pills  */}
<section className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Classifications &amp; Precedent Taxonomy</span>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#RestrictiveCovenants</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#EquityClawbacks</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#Indian Contract Act§17-101(c)</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#IndianContractAct</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#ForfeitureForCompetition</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#BluePencilDoctrine</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold shadow-sm hover:text-primary hover:bg-surface-container cursor-pointer transition-colors">#ABAModelRule5.6</span>
</div>
</section>
{/*  Related Legal Articles Matrix  */}
<section className="flex flex-col gap-space-md pt-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm font-serif text-primary">Related Precedent Briefings</h3>
<a className="font-label-sm text-label-sm font-bold text-primary-container hover:underline uppercase tracking-wider flex items-center gap-1" href="javascript:void(0)">
<span>View Precedent Vault</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Card 1  */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Oct 14, 2024</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">Clause 16.1</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors line-clamp-2">
                  Navigating Article 19(1)(g) of the Constitution of India: Safe Harbors for Stockholder Agreements Post-Moelis
                </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Civil Court’s calibration of corporate governance prerogatives and stockholder voting pacts under the new legislative amendments.
                </p>
</div>
<div className="pt-space-sm mt-space-sm flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm">Harvard Corp. L. Forum</span>
<span className="font-label-sm text-label-sm font-semibold">7 min read</span>
</div>
</div>
{/*  Card 2  */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Oct 09, 2024</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-bold">Clause 14.2</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors line-clamp-2">
                  Liquidated Damages vs. Unenforceable Penalties in Cross-Border Tech Licensing
                </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Evaluating escrow release triggers and proportionality metrics in enterprise IP litigation.
                </p>
</div>
<div className="pt-space-sm mt-space-sm flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm">Columbia Bus. L. Rev.</span>
<span className="font-label-sm text-label-sm font-semibold">11 min read</span>
</div>
</div>
{/*  Card 3  */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Sep 28, 2024</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-secondary font-bold">FTC Scope</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors line-clamp-2">
                  FTC Non-Compete Injunctions &amp; Interplay with Indian LP Partnerships
                </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Federal nationwide stays versus Indian contract jurisprudence: where multi-jurisdictional executives stand.
                </p>
</div>
<div className="pt-space-sm mt-space-sm flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm">Georgetown L. Tech</span>
<span className="font-label-sm text-label-sm font-semibold">8 min read</span>
</div>
</div>
</div>
</section>
</article>
{/*  Secondary Column: Right-Rail Editorial Dossier & Table of Contents (4 Cols)  */}
<aside className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  Matter Exposure Dossier Card  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-secondary">Active Case Intelligence</span>
<span className="material-symbols-outlined text-[18px] text-tertiary-container">hub</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm font-serif text-primary font-bold">IT Employment Contract Review</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Legal Guide Ref #IND-EMP-27 • Verified by High Court Advocate</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-semibold text-secondary">Clause 4.2 Exposure</span>
<span className="font-bold text-error">$1,850,000 Equity</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-error h-1.5 rounded-full" style={{"width":"78%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-secondary mt-1">
              Section 27 statutory defense probability: <strong>Absolute (100% Void ab initio)</strong>
</span>
</div>
<button className="w-full py-2.5 px-space-md rounded bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors shadow-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">note_add</span>
<span>Inject Precedent into Landlord Brief</span>
</button>
</div>
{/*  Sticky Navigation: Table of Contents & Outline  */}
<div className="sticky top-24 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h4 className="font-label-sm text-label-sm uppercase tracking-widest font-bold text-primary">Article Outline</h4>
<span className="font-label-sm text-label-sm text-secondary font-medium">9 min read</span>
</div>
<nav className="flex flex-col gap-1 font-body-sm text-body-sm">
<a className="px-space-sm py-1.5 rounded text-on-surface font-semibold bg-surface-container flex items-center justify-between group" href="#sec-1">
<span className="group-hover:text-primary">1. Historical "Employee Choice"</span>
<span className="material-symbols-outlined text-[16px] text-primary-container">arrow_right</span>
</a>
<a className="px-space-sm py-1.5 rounded text-secondary hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between" href="#sec-2">
<span>2. The Tripartite Reasonableness Test</span>
<span className="text-xs text-outline">03:40</span>
</a>
<a className="px-space-sm py-1.5 rounded text-secondary hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between" href="#sec-3">
<span>3. Section 27 Redline Analysis: Why Non-Competes Fail</span>
<span className="text-xs text-outline">06:15</span>
</a>
<a className="px-space-sm py-1.5 rounded text-secondary hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between" href="#sec-4">
<span>4. Strategic Takeaways &amp; Blue-Pencil</span>
<span className="text-xs text-outline">08:00</span>
</a>
</nav>
{/*  CLE Credit Verification Card  */}
<div className="pt-space-md border-t-0 flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center gap-1.5 text-primary-container">
<span className="material-symbols-outlined text-[18px]">workspace_premium</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">1.0 General CLE Credit</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Accredited by Supreme Court of India Commission on CLE &amp; NY State CLE Board.
            </p>
<button className="mt-1 w-full py-1.5 rounded bg-surface-container-highest hover:bg-surface-container font-label-sm text-label-sm font-bold text-on-surface transition-colors flex items-center justify-center gap-1">
<span>Record Reading Attendance</span>
</button>
</div>
{/*  Author Profile Card  */}
<div className="pt-space-md border-t-0 flex flex-col gap-space-sm">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Adv. Vikramaditya Sen, Corporate &amp; Employment Advocate." src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=256"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Adv. Vikramaditya Sen</span>
<span className="font-body-sm text-body-sm text-secondary">Corporate &amp; Employment Advocate</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Appeared in over 45 Indian Civil Courts oral arguments involving corporate governance, Indian Contract Act interpretation, and executive remuneration disputes.
            </p>
<div className="flex items-center gap-2 mt-1">
<button className="flex-1 py-1.5 rounded bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">mail</span>
<span>Contact Counsel</span>
</button>
<button className="py-1.5 px-2.5 rounded bg-surface-container-highest hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Download V-Card">
<span className="material-symbols-outlined text-[16px]">id_card</span>
</button>
</div>
</div>
</aside>
</div>
</div>
</div>
</main></div>
    </div>
  );
};
