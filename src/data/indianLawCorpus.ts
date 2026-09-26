/**
 * Indian Legal Corpus: The Constitution of India, Bharatiya Nyaya Sanhita (BNS 2023),
 * Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), Bharatiya Sakshya Adhiniyam (BSA 2023),
 * Indian Contract Act 1872, and Leading Treatises.
 */

export interface IndianStatuteSection {
  statute: string;
  sectionOrArticle: string;
  title: string;
  text: string;
  plainMeaning: string;
  treatiseCommentary: string;
  landmarkPrecedents: string[];
  category: 'Constitutional' | 'Criminal (BNS)' | 'Commercial/Contract' | 'Procedure/Evidence';
}

export interface IPCToBNSMapping {
  ipcSection: string;
  bnsSection: string;
  offense: string;
  keyChanges: string;
  punishmentComparison: string;
}

export const INDIAN_LEGAL_TREATISES = [
  {
    title: "Introduction to the Constitution of India",
    author: "Dr. Durga Das Basu (D.D. Basu)",
    edition: "26th Edition (LexisNexis)",
    focus: "Fundamental Rights, Writs, Separation of Powers, Basic Structure Doctrine"
  },
  {
    title: "The Law of Crimes (Bharatiya Nyaya Sanhita, 2023)",
    author: "Ratanlal & Dhirajlal",
    edition: "36th Centenary Edition (LexisNexis)",
    focus: "Substantive Criminal Law, BNS Section Analysis, Mens Rea, Defenses"
  },
  {
    title: "The Indian Contract Act, 1872",
    author: "Sir Frederick Pollock & Dinshah Fardunji Mulla (Pollock & Mulla)",
    edition: "16th Edition",
    focus: "Formation of Contracts, Section 27 Restraint of Trade, Damages under Section 73-74"
  },
  {
    title: "The Transfer of Property Act, 1882",
    author: "Dinshah Fardunji Mulla (Mulla)",
    edition: "14th Edition",
    focus: "Leases (Sections 105-111), Mortgages, Actionable Claims"
  },
  {
    title: "Law of Evidence (Bharatiya Sakshya Adhiniyam, 2023)",
    author: "S.C. Sarkar (Sarkar on Evidence)",
    edition: "21st Edition",
    focus: "Digital & Electronic Records, Primary vs Secondary Evidence, Presumptions"
  }
];

export const IPC_TO_BNS_MAPPING: IPCToBNSMapping[] = [
  {
    ipcSection: "IPC Section 302",
    bnsSection: "BNS Section 103(1)",
    offense: "Murder",
    keyChanges: "Re-codified under BNS Chapter VI. Section 103(2) explicitly introduces mob lynching as an aggravated murder offense with death or life imprisonment.",
    punishmentComparison: "Death or imprisonment for life, and fine. Specific provision for group lynching added."
  },
  {
    ipcSection: "IPC Section 420",
    bnsSection: "BNS Section 318(4)",
    offense: "Cheating and dishonestly inducing delivery of property",
    keyChanges: "Modernized under BNS Chapter XVIII. Sub-section (4) covers fraudulent inducement in commercial transactions and electronic fund diversions.",
    punishmentComparison: "Imprisonment up to 7 years and fine."
  },
  {
    ipcSection: "IPC Section 406",
    bnsSection: "BNS Section 316",
    offense: "Criminal Breach of Trust",
    keyChanges: "Consolidates entrustment of property in fiduciary and commercial capacities, including digital assets and escrow custody.",
    punishmentComparison: "Imprisonment up to 5 years (extended from 3 years in IPC) or fine or both."
  },
  {
    ipcSection: "IPC Section 124A (Sedition)",
    bnsSection: "BNS Section 152",
    offense: "Act endangering sovereignty, unity, and integrity of India",
    keyChanges: "Sedition as formulated under IPC is formally omitted. Replaced with acts inciting armed rebellion, subversive activities, or separatism. Criticism of Government without incitement to violence is protected.",
    punishmentComparison: "Imprisonment for life or imprisonment up to 7 years, and fine."
  },
  {
    ipcSection: "IPC Section 499 / 500",
    bnsSection: "BNS Section 356",
    offense: "Defamation",
    keyChanges: "Consolidates definition and exceptions. Introduces Community Service as an alternative non-custodial punishment for simple defamation under Section 356(2).",
    punishmentComparison: "Simple imprisonment up to 2 years, or fine, or community service, or both."
  },
  {
    ipcSection: "None (New Offense)",
    bnsSection: "BNS Section 111",
    offense: "Organized Crime",
    keyChanges: "New substantive provision targeting syndicates, cyber-fraud cartels, illicit drug ops, and economic mafias. Freezing of proceeds of crime.",
    punishmentComparison: "Death or life imprisonment for acts causing death; minimum 5 years to life for other organized acts."
  },
  {
    ipcSection: "None (New Offense)",
    bnsSection: "BNS Section 304",
    offense: "Snatching",
    keyChanges: "Distinct codified crime separated from simple theft (Section 303) and robbery (Section 309). Covers forcible grabbing of phone/chain/purse.",
    punishmentComparison: "Imprisonment up to 3 years and fine."
  },
  {
    ipcSection: "IPC Section 279 / 304A",
    bnsSection: "BNS Section 106",
    offense: "Causing death by negligence / Rash driving (Hit & Run)",
    keyChanges: "Section 106(1) provides up to 5 years for rash/negligent death. Section 106(2) provides up to 10 years if the driver escapes without reporting to police or magistrate.",
    punishmentComparison: "Up to 5 years (106(1)); up to 10 years and fine for failure to report (106(2))."
  }
];

export const INDIAN_KEY_STATUTES: IndianStatuteSection[] = [
  {
    statute: "The Constitution of India",
    sectionOrArticle: "Article 21",
    title: "Protection of Life and Personal Liberty",
    text: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    plainMeaning: "Article 21 guarantees that your life, dignity, bodily autonomy, and personal liberty cannot be encroached upon by the State unless done under a fair, just, and non-arbitrary legal procedure. As held in Maneka Gandhi, the procedure must not be oppressive or unreasonable.",
    treatiseCommentary: "D.D. Basu notes: Article 21 has evolved from a formal restraint on executive action into the bedrock of human rights jurisprudence in India, encompassing the Right to Privacy (Puttaswamy), Right to Livelihood (Olga Tellis), and Right to Speedy Trial.",
    landmarkPrecedents: [
      "Maneka Gandhi v. Union of India (1978) 1 SCC 248",
      "K.S. Puttaswamy v. Union of India (2017) 10 SCC 1 (Privacy)",
      "Sunil Batra v. Delhi Administration (1978) 4 SCC 494"
    ],
    category: "Constitutional"
  },
  {
    statute: "The Constitution of India",
    sectionOrArticle: "Article 19(1)(g) read with Article 19(6)",
    title: "Right to Practice Any Profession, Trade, or Business",
    text: "All citizens shall have the right to practise any profession, or to carry on any occupation, trade or business, subject to reasonable restrictions imposed in the interests of the general public.",
    plainMeaning: "Every Indian citizen possesses the constitutional right to earn their livelihood and practice their chosen trade. Corporate employers cannot prohibit former employees from earning a living through blanket post-termination bans.",
    treatiseCommentary: "D.D. Basu Commentary: The freedom under Art. 19(1)(g) is fundamental and can only be curbed by statutory law satisfying the proportionality test under Art. 19(6). Private contractual covenants that infringe this freedom are void under Section 27 of the Indian Contract Act.",
    landmarkPrecedents: [
      "Chintaman Rao v. State of M.P. (1950) SCR 759",
      "Modern Dental College v. State of M.P. (2016) 7 SCC 353 (Proportionality)",
      "Internet and Mobile Association of India v. RBI (2020) 10 SCC 274"
    ],
    category: "Constitutional"
  },
  {
    statute: "The Constitution of India",
    sectionOrArticle: "Article 32 & Article 226",
    title: "Remedies for Enforcement of Fundamental Rights (Constitutional Writs)",
    text: "The Supreme Court (Art. 32) and High Courts (Art. 226) shall have the power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, for the enforcement of fundamental rights.",
    plainMeaning: "Article 32 is the 'Heart and Soul' of the Constitution (Dr. B.R. Ambedkar). Citizens can approach the Supreme Court directly if fundamental rights are violated. High Courts under Article 226 enjoy even broader writ jurisdiction covering legal and constitutional rights.",
    treatiseCommentary: "D.D. Basu explains: The writ jurisdiction cannot be suspended except as provided by the Constitution. High Courts under Art. 226 have plenary powers to curb executive arbitrariness and protect citizen liberty.",
    landmarkPrecedents: [
      "Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225",
      "L. Chandra Kumar v. Union of India (1997) 3 SCC 261",
      "Bandhua Mukti Morcha v. Union of India (1984) 3 SCC 161"
    ],
    category: "Constitutional"
  },
  {
    statute: "The Indian Contract Act, 1872",
    sectionOrArticle: "Section 27",
    title: "Agreement in Restraint of Trade Void",
    text: "Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void. Exception 1: Saving of agreement not to carry on business of which good-will is sold.",
    plainMeaning: "Under Indian law, all post-employment non-compete clauses are strictly VOID ab initio. Unlike Delaware or English law, Indian courts DO NOT apply a 'reasonableness test' or 'blue-pencil rule' to save a post-termination non-compete. Once employment ends, the employee is free to work anywhere.",
    treatiseCommentary: "Pollock & Mulla on Contract: Section 27 is uncompromising. Indian courts have consistently refused to import the English common law doctrine of partial restraint. A restrictive covenant extending beyond the period of employment is a total nullity under Indian public policy.",
    landmarkPrecedents: [
      "Percept D'Mark (India) (P) Ltd. v. Zaheer Khan (2006) 4 SCC 227",
      "Niranjan Shankar Golikari v. Century Spg. & Mfg. Co. Ltd. (1967) 2 SCR 378",
      "Superintendence Company of India (P) Ltd. v. Krishan Murgai (1981) 2 SCC 246"
    ],
    category: "Commercial/Contract"
  },
  {
    statute: "The Indian Contract Act, 1872",
    sectionOrArticle: "Section 73 & Section 74",
    title: "Compensation for Breach of Contract & Liquidated Damages vs Penalty",
    text: "Section 73: Compensation for loss or damage caused by breach of contract. Section 74: Compensation for breach of contract where penalty stipulated for.",
    plainMeaning: "Even if a contract specifies a massive penalty or 'forfeiture' of dues upon breach, the court will only award reasonable compensation not exceeding the amount named, and the party claiming must prove actual loss where possible.",
    treatiseCommentary: "Pollock & Mulla on Contract: Section 74 eliminates the English common law distinction between liquidated damages and penalties. The court has full jurisdiction to award only reasonable compensation.",
    landmarkPrecedents: [
      "Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136",
      "Fateh Chand v. Balkishan Dass (1964) 1 SCR 515",
      "ONGC Ltd. v. Saw Pipes Ltd. (2003) 5 SCC 705"
    ],
    category: "Commercial/Contract"
  },
  {
    statute: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    sectionOrArticle: "Section 4(f)",
    title: "Community Service as a Recognized Statutory Punishment",
    text: "The punishments to which offenders are liable under the provisions of this Sanhita are: (a) Death; (b) Imprisonment for life; (c) Imprisonment; (d) Forfeiture of property; (e) Fine; (f) Community service.",
    plainMeaning: "For the first time in Indian criminal law, Community Service is established as an official statutory sentencing alternative for minor, non-violent offenses (such as petty theft under ₹5,000, defamation, attempt to commit suicide to compel public servant, or public intoxication).",
    treatiseCommentary: "Ratanlal & Dhirajlal on BNS: Section 4(f) shifts Indian penology from purely retributive to reformative justice, relieving jail congestion and emphasizing social restitution for petty offenses.",
    landmarkPrecedents: [
      "Parliamentary Standing Committee Report No. 246 on BNS 2023",
      "Sunil Batra v. Delhi Administration (Reformative Guidelines)"
    ],
    category: "Criminal (BNS)"
  },
  {
    statute: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    sectionOrArticle: "Section 111",
    title: "Organized Crime & Economic Offenses",
    text: "Any continuing unlawful activity including kidnapping, robbery, vehicle theft, extortion, land grabbing, contract killing, economic offenses, cyber-crimes having severe consequences, trafficking in persons or drugs, by any person either singly or jointly as a member of an organized crime syndicate.",
    plainMeaning: "BNS introduces a comprehensive federal framework against organized syndicates and commercial cyber-fraud cartels, criminalizing both the commission and harboring of proceeds.",
    treatiseCommentary: "Ratanlal & Dhirajlal on BNS: Section 111 incorporates provisions previously scattered across state special laws (like MCOCA) into the unified national penal code, with severe procedural safeguards.",
    landmarkPrecedents: [
      "State of Maharashtra v. Bharat Shanti Lal Shah (2008) 13 SCC 5",
      "Kavitha Lankesh v. State of Karnataka (2022) 12 SCC 753"
    ],
    category: "Criminal (BNS)"
  },
  {
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
    sectionOrArticle: "Section 57 & Section 61",
    title: "Electronic and Digital Records as Primary Evidence",
    text: "An electronic or digital record produced from an electronic source shall have the same legal effect, validity and enforceability as any other document and shall be admitted in evidence without further proof of the original.",
    plainMeaning: "Digital contracts, emails, WhatsApp communications, and server logs are now explicitly recognized as primary documentary evidence, fundamentally transforming commercial dispute resolution and criminal proceedings in India.",
    treatiseCommentary: "Sarkar on Evidence: BSA simplifies the cumbersome certificate requirements of former Section 65B of the Indian Evidence Act, reflecting modern technological reality.",
    landmarkPrecedents: [
      "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) 7 SCC 1",
      "Shafhi Mohammad v. State of H.P. (2018) 2 SCC 801"
    ],
    category: "Procedure/Evidence"
  }
];
