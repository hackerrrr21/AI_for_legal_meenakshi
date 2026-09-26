import { LegalArticle, ArticleCategory } from '../types/article';

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'art-1',
    title: 'Top 5 Unfair Tenancy Clauses and How to Strike Them Before Signing',
    category: 'Tenant Rights',
    readTimeMinutes: 5,
    publishedDate: 'March 18, 2026',
    summary: 'A practical guide on spotting automatic deposit forfeiture, unilateral landlord access, and arbitrary repainting fees in standard residential lease contracts.',
    author: {
      name: 'Adv. Ananya Deshmukh',
      role: 'Housing Law Specialist & Bar Council Member'
    },
    keyTakeaways: [
      'Landlords cannot legally withhold deposits for ordinary wear and tear.',
      'Mandatory lock-in periods with complete forfeiture of deposits violate tenancy balance principles.',
      'Always request an itemized physical damage estimate with contractor bills before accepting deposit deductions.',
      'Written notice must be served at least 24 hours prior to landlord visits.'
    ],
    fullBodyMarkdown: `### Overview: The Tenant's Dilemma
When signing a residential lease, tenants often feel rushed into signing 20-page boilerplate agreements filled with archaic legalese. However, accepting unfair clauses can lead to thousands of dollars in lost security deposits or surprise evictions.

### 1. The Blanket Repainting Deduction
One of the most rampant landlord practices is automatically deducting 1 month of deposit for "flat painting" regardless of the condition in which the tenant leaves the property. 

Under the **Transfer of Property Act** and the **Model Tenancy Act**, maintenance is bifurcated into capital structural repairs (landlord's statutory obligation) and day-to-day minor maintenance (tenant's obligation). Natural wall discoloration or picture-frame shadow marks constitute *normal wear and tear* and cannot be deducted.

### 2. The Unilateral Entry Clause
Clauses stating *"Landlord reserves the right to inspect premises at any time"* breach the fundamental covenant of **Quiet Enjoyment**. Insist on adding: *"save and except upon twenty-four (24) hours prior written notice during reasonable daytime hours."*

### 3. Open-Ended Dispute Venues
Watch out for clauses requiring you to travel to a distant city or submit to costly private arbitration forums for minor disputes under $5,000. Statutory Rent Courts exist specifically to resolve residential grievances swiftly and affordably.`,
    sourceCitations: [
      {
        title: 'Transfer of Property Act, Section 108 (Rights and Liabilities of Lessor and Lessee)',
        authorityOrAct: 'Ministry of Law and Justice',
        yearOrDocket: 'Central Act No. 4 of 1882'
      },
      {
        title: 'National Model Tenancy Act (MTA) Framework Guidelines',
        authorityOrAct: 'Ministry of Housing and Urban Affairs',
        yearOrDocket: 'Policy Resolution 2021/MTA'
      },
      {
        title: 'Supreme Court of India Ruling on Ordinary Wear and Tear vs Wilful Neglect',
        authorityOrAct: 'Supreme Court Law Reports',
        yearOrDocket: 'Civil Appeal No. 4819/2019'
      }
    ],
    relatedPracticeArea: 'Real Estate & Tenancy'
  },
  {
    id: 'art-2',
    title: 'Why Most Non-Compete Clauses in Freelance and Tech Contracts Are Void',
    category: 'Freelancer & Employment',
    readTimeMinutes: 6,
    publishedDate: 'March 10, 2026',
    summary: 'An in-depth legal breakdown explaining why blanket post-employment restrictions are unenforceable under restraint of trade doctrines, and how non-disclosure differs from non-compete.',
    author: {
      name: 'Robert Vance, Esq.',
      role: 'Employment Law Counselor'
    },
    keyTakeaways: [
      'Section 27 of the Indian Contract Act deems all post-termination non-competes void as contrary to public policy.',
      'Courts strictly distinguish between legitimate trade secret protection and illegal restriction on professional livelihood.',
      'Non-solicitation of clients can be valid if strictly limited in geographic scope and time (e.g. 6 months).',
      'Independent contractors cannot be subjected to the same restrictive covenants as full-time corporate officers.'
    ],
    fullBodyMarkdown: `### The Intimidation Factor
Many freelancers and software engineers decline lucrative career leaps because they fear a former employer will sue them under a non-compete covenant signed two years prior.

### The Doctrine of Restraint of Trade
Both common law jurisprudence and statutory provisions—notably **Section 27 of the Indian Contract Act** and recent rulings by the **US Federal Trade Commission (FTC)**—prohibit agreements that restrain anyone from exercising a lawful profession, trade, or business.

The law recognizes that an individual's skills, knowledge, and right to earn an honest livelihood belong to the individual, not the employer.

### Where Employers Cross the Line
1. **Scope:** Barring a developer from working in "any technology or AI company" is absurdly overbroad.
2. **Post-Termination:** While an employer can restrict outside moonlighting *during* active employment, restrictions *after* termination are almost universally struck down.
3. **Remedy:** When confronted with non-compete threats, a formal legal response citing established precedent usually causes corporate legal departments to retreat immediately.`,
    sourceCitations: [
      {
        title: 'Indian Contract Act, 1872 - Section 27 (Agreement in Restraint of Trade Void)',
        authorityOrAct: 'Indian Statutory Code',
        yearOrDocket: 'Act IX of 1872'
      },
      {
        title: 'Percept D\'Mark (India) (P) Ltd. v. Zaheer Khan & Anr.',
        authorityOrAct: 'Supreme Court of India',
        yearOrDocket: '(2006) 4 SCC 227'
      },
      {
        title: 'FTC Non-Compete Clause Final Rule (16 CFR Part 910)',
        authorityOrAct: 'Federal Trade Commission',
        yearOrDocket: 'FTC Docket No. 2024-0028'
      }
    ],
    relatedPracticeArea: 'Employment & Labor'
  },
  {
    id: 'art-3',
    title: 'Your Statutory Rights Against "No Returns" Policies in E-Commerce',
    category: 'Consumer Rights',
    readTimeMinutes: 4,
    publishedDate: 'February 26, 2026',
    summary: 'How the Consumer Protection Act 2019 outlaws unfair contract terms, dark patterns, and refusal to refund defective goods.',
    author: {
      name: 'Jonathan K. Sterling, Esq.',
      role: 'Consumer Rights Litigator'
    },
    keyTakeaways: [
      'E-commerce platforms cannot disclaim liability for counterfeit or materially defective products.',
      'Dark patterns such as drip pricing, forced continuity, and false urgency are illegal unfair trade practices.',
      'Consumers can file complaints digitally through the e-Daakhil portal without physical court appearances.',
      'Class action claims can now be initiated under the Central Consumer Protection Authority.'
    ],
    fullBodyMarkdown: `### The Myth of "Final Sale"
Online sellers frequently stamp "All Sales Are Final" or "Goods Once Sold Cannot Be Exchanged" across digital invoices. Under modern consumer protection statutes, this disclaimer is legally toothless when goods fail to conform to warranties or merchantability standards.

### The Consumer Protection Act 2019 Revolution
The 2019 enactment fundamentally revamped consumer rights:
1. **Product Liability (Chapter VI):** The platform, manufacturer, and seller are jointly and severally accountable for harm caused by defective products.
2. **Unfair Contract Terms:** Clauses that require unreasonable deposits or impose unilateral termination penalties on consumers are statutorily declared void.
3. **E-Daakhil Filing:** You can initiate consumer complaints from your laptop or phone within 15 minutes, with statutory hearings conducted via video conferencing.`,
    sourceCitations: [
      {
        title: 'Consumer Protection Act, 2019 (Act No. 35 of 2019)',
        authorityOrAct: 'Parliament of India',
        yearOrDocket: 'Gazette of India, Part II'
      },
      {
        title: 'Guidelines for Prevention and Regulation of Dark Patterns',
        authorityOrAct: 'Central Consumer Protection Authority (CCPA)',
        yearOrDocket: 'Notification No. J-25/17/2023-CCPA'
      }
    ],
    relatedPracticeArea: 'Consumer Protection & Dispute'
  }
];

export const ARTICLE_CATEGORIES: { id: string; label: string; count: number }[] = [
  { id: 'all', label: 'All Articles', count: 3 },
  { id: 'Tenant Rights', label: 'Tenant Rights', count: 1 },
  { id: 'Freelancer & Employment', label: 'Freelancer & Employment', count: 1 },
  { id: 'Consumer Rights', label: 'Consumer Rights', count: 1 },
];
