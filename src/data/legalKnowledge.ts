import { LawTrack, TimeComparison } from '../types/learn';

export const LAW_TRACKS: LawTrack[] = [
  {
    id: 'track-constitution',
    title: 'The Constitution of India',
    category: 'Constitutional',
    shortDescription: 'Master the Supreme Lex of India: Fundamental Rights (Articles 14, 19, 21), Writs under Articles 32 & 226, and the Basic Structure Doctrine.',
    icon: 'Scale',
    color: 'from-emerald-700 to-teal-900',
    totalXP: 500,
    chapters: [
      {
        id: 'chap-const-1',
        chapterNumber: 1,
        title: 'Fundamental Rights & Judicial Review',
        description: 'Understand Articles 14, 19, and the golden triangle of personal liberty.',
        iconName: 'ShieldCheck',
        sections: [
          {
            id: 'sec-art-21',
            sectionNumber: 'Article 21 (The Constitution of India)',
            title: 'Right to Life and Personal Liberty: The Maneka Gandhi Doctrine',
            originalLegalText: `No person shall be deprived of his life or personal liberty except according to procedure established by law. (The Constitution of India, Part III)`,
            simplifiedMeaning: `Article 21 is India's most expansive constitutional shield. Following Maneka Gandhi v. Union of India (1978), any government procedure depriving a person of liberty or dignity must be 'fair, just, and reasonable'—not fanciful, oppressive, or arbitrary. It encompasses the Right to Privacy (Puttaswamy), Right to Livelihood, and Clean Environment.`,
            whyItMatters: `Protects every individual against arbitrary arrest, unlawful surveillance, police brutality, and state overreach. Guarantees that procedural rules must satisfy substantive natural justice.`,
            realWorldExample: {
              situation: `The government seized an investigative journalist's mobile phone and laptop without a judicial warrant or specific statutory authorization during a raid.`,
              outcome: `Citing Article 21 and the Puttaswamy Privacy judgment, the High Court ordered the immediate return of the digital devices and mandated strict forensic hash protocols, ruling that digital privacy is an inalienable component of personal liberty.`,
              keyTakeaway: `The State cannot infringe your digital or physical liberty without a statutory procedure that is just, fair, and proportional.`
            },
            quiz: {
              id: 'q-const-1',
              prompt: `Under Article 21 and the Supreme Court's ruling in Maneka Gandhi v. Union of India, what standard must a 'procedure established by law' satisfy?`,
              scenario: `A state agency detains a citizen using a vague departmental rule without giving a hearing.`,
              xpReward: 35,
              options: [
                {
                  id: 'opt-c1-1',
                  text: 'It is valid so long as the legislature passed it, regardless of fairness.',
                  isCorrect: false,
                  explanation: 'This was the pre-1978 Gopalan doctrine, which was explicitly overturned in Maneka Gandhi.'
                },
                {
                  id: 'opt-c1-2',
                  text: 'The procedure must be just, fair, and reasonable, free from arbitrariness and oppression.',
                  isCorrect: true,
                  explanation: 'Correct! Maneka Gandhi established that procedure under Article 21 must satisfy Articles 14 and 19 natural justice standards.'
                },
                {
                  id: 'opt-c1-3',
                  text: 'Article 21 only applies to Indian citizens, not foreign nationals.',
                  isCorrect: false,
                  explanation: 'Article 21 applies to "any person", protecting both citizens and non-citizens.'
                }
              ]
            }
          },
          {
            id: 'sec-art-19-1-g',
            sectionNumber: 'Article 19(1)(g) & Article 19(6)',
            title: 'Freedom of Profession and Trade vs. Unreasonable Restraints',
            originalLegalText: `All citizens shall have the right to practise any profession, or to carry on any occupation, trade or business. Nothing in sub-clause (g) shall affect the operation of any existing law, or prevent the State from making any law imposing reasonable restrictions in the interests of the general public.`,
            simplifiedMeaning: `Every Indian citizen has a fundamental right to earn a living in any lawful vocation. Employers cannot contractually enslave an employee or prevent them from joining a competitor post-employment through private covenants.`,
            whyItMatters: `Provides the constitutional foundation for why Section 27 of the Indian Contract Act invalidates post-termination non-competes in India.`,
            realWorldExample: {
              situation: `A tech company sued an engineer who resigned to join another startup, citing a contract clause banning work in software for 2 years.`,
              outcome: `The court dismissed the injunction, holding that the freedom under Article 19(1)(g) and Section 27 of the Contract Act makes any post-employment restraint void ab initio.`,
              keyTakeaway: `You have the constitutional right to practice your trade, and employers cannot enforce post-employment non-compete bans in India.`
            },
            quiz: {
              id: 'q-const-2',
              prompt: `Can a private employment agreement restrict a former employee's Article 19(1)(g) right to practice their profession after resignation?`,
              scenario: `An employer includes a 24-month nationwide non-compete clause in an employment agreement.`,
              xpReward: 35,
              options: [
                {
                  id: 'opt-c2-1',
                  text: 'Yes, if the employee signed the contract voluntarily with a signing bonus.',
                  isCorrect: false,
                  explanation: 'Under Indian law (Section 27 Contract Act), private contracts cannot waive or override public policy and constitutional freedom of trade.'
                },
                {
                  id: 'opt-c2-2',
                  text: 'No, post-employment non-competes are void ab initio under Section 27 and infringe Article 19(1)(g).',
                  isCorrect: true,
                  explanation: 'Correct! As held in Percept D\'Mark v. Zaheer Khan, post-contractual restraints are totally void in India.'
                },
                {
                  id: 'opt-c2-3',
                  text: 'Yes, but only if approved by the Ministry of Corporate Affairs.',
                  isCorrect: false,
                  explanation: 'No executive approval can make an unconstitutional restraint of trade valid.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'track-bns',
    title: 'Bharatiya Nyaya Sanhita, 2023 (BNS)',
    category: 'Criminal',
    shortDescription: 'Master India\'s new penal code: Community Service, Organized Crime (Sec 111), Snatching (Sec 304), Defamation reforms, and key differences from the IPC 1860.',
    icon: 'Gavel',
    color: 'from-amber-800 to-stone-900',
    totalXP: 450,
    chapters: [
      {
        id: 'chap-bns-1',
        chapterNumber: 1,
        title: 'Modern Punishments & General Exceptions',
        description: 'Explore the revolutionary shift from purely retributive to reformative justice under BNS.',
        iconName: 'ShieldAlert',
        sections: [
          {
            id: 'sec-bns-community-service',
            sectionNumber: 'Section 4(f) (Bharatiya Nyaya Sanhita, 2023)',
            title: 'Community Service: A New Dimension in Indian Criminal Penology',
            originalLegalText: `The punishments to which offenders are liable under the provisions of this Sanhita are: (a) Death; (b) Imprisonment for life; (c) Imprisonment; (d) Forfeiture of property; (e) Fine; (f) Community service. (BNS 2023, Chapter II, Section 4)`,
            simplifiedMeaning: `For the first time in Indian history, Community Service is recognized as a statutory punishment. It applies to minor offenses (such as petty theft under ₹5,000 upon restitution, defamation under Section 356, public intoxication nuisance, or misconduct by public servants). It avoids prison stigmatization for first-time petty offenders.`,
            whyItMatters: `Prevents petty offenders from becoming hardened criminals in crowded prisons and provides restorative value to the community.`,
            realWorldExample: {
              situation: `A college student was charged with defamatory social media posts against a local official.`,
              outcome: `Under BNS Section 356(2), the Magistrate sentenced the student to 30 hours of community service at a local municipal library rather than sending them to prison.`,
              keyTakeaway: `BNS introduces modern, reformative sentencing options for non-violent minor infractions.`
            },
            quiz: {
              id: 'q-bns-1',
              prompt: `Which new punishment was introduced under Section 4 of the Bharatiya Nyaya Sanhita, 2023 that did not exist in the Indian Penal Code, 1860?`,
              scenario: `A magistrate is sentencing a first-time offender for petty misconduct.`,
              xpReward: 30,
              options: [
                {
                  id: 'opt-b1-1',
                  text: 'Solitary Confinement',
                  isCorrect: false,
                  explanation: 'Solitary confinement already existed under the IPC.'
                },
                {
                  id: 'opt-b1-2',
                  text: 'Community Service',
                  isCorrect: true,
                  explanation: 'Correct! Section 4(f) of BNS 2023 introduces Community Service as an official statutory punishment.'
                },
                {
                  id: 'opt-b1-3',
                  text: 'Transportation Beyond the Seas',
                  isCorrect: false,
                  explanation: 'Transportation was an archaic colonial punishment abolished decades ago.'
                }
              ]
            }
          },
          {
            id: 'sec-bns-organized-crime',
            sectionNumber: 'Section 111 (Bharatiya Nyaya Sanhita, 2023)',
            title: 'Organized Crime Syndicates & Commercial Cyber Fraud',
            originalLegalText: `Any continuing unlawful activity including kidnapping, robbery, vehicle theft, extortion, land grabbing, contract killing, economic offenses, cyber-crimes having severe consequences, by any person singly or jointly as a member of an organized crime syndicate... (BNS 2023, Section 111)`,
            simplifiedMeaning: `Section 111 creates a unified national offense targeting organized crime networks, financial mafia cartels, and large-scale cyber-fraud rings. It also criminalizes harboring syndicate members and possessing proceeds of crime.`,
            whyItMatters: `Previously, organized crime was only tackled under state statutes (like Maharashtra\'s MCOCA). BNS makes organized crime a comprehensive federal-level offense across India.`,
            realWorldExample: {
              situation: `A cyber-criminal gang orchestrated fake investment apps that defrauded thousands of citizens of ₹50 Crores.`,
              outcome: `The police invoked Section 111 of BNS for organized cyber-economic crime, leading to the freezing of illicit digital accounts and minimum 5-year sentences for syndicate operatives.`,
              keyTakeaway: `BNS Section 111 provides severe penalties for organized commercial syndicates and digital fraud networks.`
            },
            quiz: {
              id: 'q-bns-2',
              prompt: `Under Section 111 of the Bharatiya Nyaya Sanhita (BNS 2023), what can the state do with property derived from organized crime?`,
              scenario: `Investigators uncover bank accounts and luxury villas funded by a financial fraud syndicate.`,
              xpReward: 30,
              options: [
                {
                  id: 'opt-b2-1',
                  text: 'The court can order attachment and forfeiture of all proceeds of crime.',
                  isCorrect: true,
                  explanation: 'Correct! Section 111 empowers courts to attach and forfeit properties acquired through organized crime syndicates.'
                },
                {
                  id: 'opt-b2-2',
                  text: 'Proceeds of crime can only be taxed as undisclosed income under the Income Tax Act.',
                  isCorrect: false,
                  explanation: 'Criminal forfeiture under BNS Section 111 is independent of tax laws.'
                },
                {
                  id: 'opt-b2-3',
                  text: 'Property cannot be touched until all appeals to the Supreme Court are exhausted.',
                  isCorrect: false,
                  explanation: 'Interim attachment of crime proceeds is permitted during trial.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'track-contract-india',
    title: 'Indian Contract Act, 1872',
    category: 'Commercial',
    shortDescription: 'Master Indian commercial contract law: Section 27 Restraint of Trade, Section 74 Liquidated Damages vs Penalty, Pollock & Mulla treatise insights.',
    icon: 'FileText',
    color: 'from-amber-700 to-yellow-900',
    totalXP: 400,
    chapters: [
      {
        id: 'chap-ica-1',
        chapterNumber: 1,
        title: 'Restraints of Trade & Public Policy',
        description: 'Why Indian law is uniquely strict on non-compete clauses and liquidated damages.',
        iconName: 'ShieldCheck',
        sections: [
          {
            id: 'sec-ica-27',
            sectionNumber: 'Section 27 (Indian Contract Act, 1872)',
            title: 'Agreement in Restraint of Trade Void: The Strict Indian Rule',
            originalLegalText: `Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void. (Section 27, The Indian Contract Act, 1872)`,
            simplifiedMeaning: `Under Indian law, all post-termination non-compete agreements are strictly VOID ab initio. Unlike US or UK courts, Indian courts DO NOT apply a 'reasonableness test' or 'blue-pencil rule'. Section 27 invalidates any restriction on post-employment livelihood, save for the sale of goodwill.`,
            whyItMatters: `Founders, executives, and employees in India cannot be barred from taking up employment with competitors or starting a rival business once their term of employment has concluded.`,
            realWorldExample: {
              situation: `Cricketer Zaheer Khan entered a promotion contract with Percept D'Mark. The contract contained a clause that if Zaheer wanted to sign with another agency after the term expired, Percept had a 'right of first refusal'.`,
              outcome: `The Supreme Court of India in Percept D'Mark v. Zaheer Khan (2006) held that this post-contractual restriction was void under Section 27. The doctrine of restraint of trade applies to all post-term covenants.`,
              keyTakeaway: `Negative covenants during employment are enforceable; negative covenants post-employment are void under Indian law.`
            },
            quiz: {
              id: 'q-ica-1',
              prompt: `Does the Indian Supreme Court allow 'reasonable' post-employment non-compete clauses under Section 27 of the Indian Contract Act?`,
              scenario: `An IT consulting company asks whether a 6-month non-compete with reasonable geography is valid in India.`,
              xpReward: 30,
              options: [
                {
                  id: 'opt-ica-1',
                  text: 'No, Indian courts hold that Section 27 does not permit any post-employment restraint, regardless of reasonableness.',
                  isCorrect: true,
                  explanation: 'Correct! Unlike US/UK law, Section 27 has no reasonableness exception for post-employment restrictions (Percept D\'Mark v. Zaheer Khan).'
                },
                {
                  id: 'opt-ica-2',
                  text: 'Yes, if the duration is less than 12 months.',
                  isCorrect: false,
                  explanation: 'Duration does not save a post-employment restraint in India.'
                },
                {
                  id: 'opt-ica-3',
                  text: 'Yes, if the company pays severance compensation.',
                  isCorrect: false,
                  explanation: 'Paying garden leave does not validate a void covenant in restraint of trade under Indian jurisprudence.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'track-tenancy',
    title: 'Tenancy Rights & Housing Law',
    category: 'Tenancy',
    shortDescription: 'Master your rights as a tenant: security deposits, unlawful deductions, landlord entry limits, and Model Tenancy Act protections.',
    icon: 'Home',
    color: 'from-blue-600 to-indigo-700',
    totalXP: 300,
    chapters: [
      {
        id: 'chap-tenancy-1',
        chapterNumber: 1,
        title: 'Security Deposits & Deductions',
        description: 'Understand what landlords can and cannot legally deduct when you move out.',
        iconName: 'ShieldCheck',
        sections: [
          {
            id: 'sec-deposit-limits',
            sectionNumber: 'Section 105 (Transfer of Property Act) & Model Tenancy Norms',
            title: 'Permissible Deductions vs Normal Wear and Tear',
            originalLegalText: `A lease of immovable property is a transfer of a right to enjoy such property, made for a certain time, in consideration of a price paid or promised. The security deposit held in trust shall be refunded to the tenant within thirty days of vacating the premises, after deducting only arrears of rent or documented physical damages caused by willful tenant negligence, excluding reasonable wear and tear arising from normal domestic occupation.`,
            simplifiedMeaning: `Your landlord cannot deduct money for ordinary wear and tear (like minor paint fading, small nail holes, or natural aging of fixtures). They can only deduct for actual physical destruction you caused, or unpaid rent/utility bills, and they must provide itemized receipts.`,
            whyItMatters: `Unscrupulous landlords frequently attempt to fund full apartment renovations out of a departing tenant's security deposit. Knowing this distinction protects your hard-earned money.`,
            realWorldExample: {
              situation: `Elena lived in an apartment for 2 years. Upon move-out, the landlord withheld ₹40,000 from her deposit to repaint the entire living room because the paint had naturally faded from sunlight.`,
              outcome: `Elena pointed out that sun-fading is ordinary wear and tear under tenancy law. When she requested an itemized bill citing tenancy regulations, the landlord refunded the amount in full.`,
              keyTakeaway: `Always conduct a move-in and move-out video walk-through to document pre-existing conditions.`
            },
            quiz: {
              id: 'q-deposit-1',
              prompt: `Which of the following may a landlord legally deduct from your security deposit?`,
              scenario: `You are moving out of your leased apartment after 18 months.`,
              xpReward: 25,
              options: [
                {
                  id: 'opt-1',
                  text: 'Natural fading of wall paint due to regular sunlight exposure.',
                  isCorrect: false,
                  explanation: 'Faded paint is normal wear and tear and cannot be legally deducted.'
                },
                {
                  id: 'opt-2',
                  text: 'Repairing a broken bathroom door that you cracked during a party.',
                  isCorrect: true,
                  explanation: 'Correct! Physical damage caused by tenant actions or negligence is a valid deduction when backed by receipts.'
                },
                {
                  id: 'opt-3',
                  text: 'Upgrading the old kitchen stove to a newer luxury model.',
                  isCorrect: false,
                  explanation: 'Landlords cannot use tenant deposits to fund capital property upgrades.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const TIME_COMPARISONS: TimeComparison[] = [
  {
    id: 'tc-ipc-bns',
    lawName: 'Indian Penal Code (1860) → Bharatiya Nyaya Sanhita (2023)',
    category: 'Criminal Law',
    historicalPeriod: 'Colonial Era (IPC 1860)',
    historicalProvision: 'British colonial penal code focused on retributive punishment and maintaining crown authority. Sedition (Sec 124A) criminalized disaffection against the Government. No concept of Community Service; petty offenses carried jail terms. Cyber offenses and organized crime were absent.',
    amendmentReason: 'Need for decolonization, modernization for digital crimes, introduction of reformative justice, and streamlining of complex 511 sections into 358 cohesive sections.',
    currentPeriod: 'BNS (Effective July 1, 2024)',
    currentProvision: 'Replaced IPC with 358 modernized sections. Introduces Community Service (Sec 4(f)) for petty crimes. Codifies Organized Crime (Sec 111), Mob Lynching (Sec 103(2)), and Snatching (Sec 304). Omitted Sedition and replaced with Sec 152 (Acts endangering sovereignty).',
    practicalImpactOnYou: 'First-time petty offenders can receive community service instead of prison records. Stricter statutory accountability for organized cyber-fraud, financial cheating, and hit-and-run accidents.'
  },
  {
    id: 'tc-crpc-bnss',
    lawName: 'Code of Criminal Procedure (1973) → Bharatiya Nagarik Suraksha Sanhita (2023)',
    category: 'Criminal Procedure',
    historicalPeriod: 'CrPC (1973)',
    historicalProvision: 'Mandatory physical presence for FIR registration; paper summons; cumbersome warrants; indefinite delays in framing charges and delivering judgments.',
    amendmentReason: 'Severe backlog in Indian judicial system, custodial delays, and lack of digital transparency during police searches and seizures.',
    currentPeriod: 'BNSS (Effective July 1, 2024)',
    currentProvision: 'Mandatory Zero-FIR registration across all police stations. Electronic summons and virtual witness examinations. Mandatory audio-video recording during search and seizure. Strict 30-day timeline to deliver judgment after trial concludes.',
    practicalImpactOnYou: 'Citizens can report crimes at any police station via Zero FIR without jurisdictional denial. Video-recorded seizures prevent police evidence planting.'
  },
  {
    id: 'tc-iea-bsa',
    lawName: 'Indian Evidence Act (1872) → Bharatiya Sakshya Adhiniyam (2023)',
    category: 'Evidence & Digital Law',
    historicalPeriod: 'Evidence Act (1872)',
    historicalProvision: 'Strict paper-centric evidence rules. Cumbersome Section 65B electronic certificate requirements often resulted in crucial WhatsApp messages and emails being thrown out of court.',
    amendmentReason: 'Commercial disputes and personal interactions are overwhelmingly digital; requirement of physical certificates caused massive evidentiary bottlenecks.',
    currentPeriod: 'BSA (Effective July 1, 2024)',
    currentProvision: 'Digital and electronic records are given primary evidence status (Section 57 & 61). Cloud storage, encrypted messages, server logs, and digital signatures are directly admissible with streamlined certification.',
    practicalImpactOnYou: 'Your digital agreements, emails, and electronic payment trails hold full evidentiary weight in courts without procedural dismissal.'
  },
  {
    id: 'tc-consumer',
    lawName: 'Consumer Protection Act: 1986 vs 2019',
    category: 'Consumer Rights',
    historicalPeriod: 'CPA 1986',
    historicalProvision: 'Consumers had to file complaints where the seller was located. No provisions for e-commerce, misleading celebrity endorsements, or product liability.',
    amendmentReason: 'Explosion of digital commerce, Amazon/Flipkart platforms, and predatory dark patterns.',
    currentPeriod: 'CPA 2019 (Current)',
    currentProvision: 'File complaints from your home jurisdiction via e-Daakhil. Strict product liability on manufacturers. E-commerce platforms held directly liable for counterfeit goods. Mediation cells mandatory.',
    practicalImpactOnYou: 'You can sue an online company from your home town without traveling, and recover damages directly from delivery platforms for defective products.'
  }
];
