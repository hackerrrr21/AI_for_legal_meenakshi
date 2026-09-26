/**
 * AI Legal Assistant Service.
 * Implements document analysis, general legal Q&A, and RAG context-aware deliberation.
 * Functions as an open legal AI chatbot (like ChatGPT for legal guidance) grounded in Indian Law.
 * Written in simple, easy-to-understand English without confusing symbols (##, **, //, etc.).
 * Integrates with Google Gemini API with fallback to built-in Legal Intelligence Engine.
 */
import { DocumentAnalysisResult, ClauseItem, ObligationItem, KeyDateAmountItem, ConcernItem, SeverityLevel, RAGChunk } from '../types/legal';
import { ChatMessage, Citation } from '../types/chat';
import { sanitizeUntrustedContent, wrapInSecurityEnvelopes } from '../utils/promptInjectionDefense';
import { redactPII } from '../utils/piiRedactor';
import { globalChatRateLimiter } from '../utils/rateLimiter';
import { chunkLegalDocument, retrieveRelevantChunks, formatCitations, getIndianLegalCorpusChunks } from './ragService';

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';

/**
 * Strips raw markdown symbols like ##, **, //, ***, --- from text,
 * producing clean, readable, plain English.
 */
export function cleanLegalText(text: string): string {
  if (!text) return '';
  return text
    // Remove headers like ### or ## at line start
    .replace(/^#{1,6}\s*/gm, '')
    // Remove triple or double asterisks
    .replace(/\*{2,}/g, '')
    // Remove single asterisks when used as emphasis (preserve clean bullets)
    .replace(/(^|\s)\*([^\*\n]+)\*(\s|$)/g, '$1$2$3')
    // Replace bullet asterisk at start of line with clean bullet
    .replace(/^\*\s+/gm, '• ')
    // Remove horizontal rules or triple dashes like --- or ===
    .replace(/[-=]{3,}/g, '')
    // Remove comment slashes like // or ///
    .replace(/\/{2,}/g, '')
    // Normalize excessive newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Gets effective Gemini API key from localStorage or env variable.
 */
export function getEffectiveGeminiKey(): string {
  if (typeof window !== 'undefined') {
    const userKey = localStorage.getItem('advochat_gemini_api_key') || localStorage.getItem('gemini_api_key');
    if (userKey && userKey.trim().length > 10) return userKey.trim();
  }
  return GEMINI_API_KEY || '';
}

/**
 * Sets or removes custom Gemini API key in localStorage.
 */
export function setCustomGeminiKey(key: string): void {
  if (typeof window !== 'undefined') {
    if (key && key.trim().length > 0) {
      localStorage.setItem('advochat_gemini_api_key', key.trim());
    } else {
      localStorage.removeItem('advochat_gemini_api_key');
    }
  }
}

/**
 * Analyzes a legal document, extracting clauses, obligations, key dates, risks, and checklists.
 */
export async function analyzeDocument(
  rawText: string,
  fileName: string,
  fileSize: number
): Promise<DocumentAnalysisResult> {
  // Security: Redact PII (Aadhaar, PAN, Bank Accounts) under DPDP Act 2023
  const piiCleaned = redactPII(rawText);
  const sanitization = sanitizeUntrustedContent(piiCleaned.sanitizedText);
  const cleanText = sanitization.safeText;
  const effectiveKey = getEffectiveGeminiKey();

  if (effectiveKey && effectiveKey.length > 10) {
    try {
      const geminiResult = await callGeminiDocumentAnalysis(cleanText, fileName, fileSize, effectiveKey);
      if (geminiResult) return geminiResult;
    } catch (err) {
      console.warn('Gemini API call failed or timed out. Falling back to built-in Legal Intelligence Engine:', err);
    }
  }

  // Built-in Deterministic Legal Intelligence Engine
  return runDeterministicLegalAnalysis(cleanText, fileName, fileSize);
}

/**
 * General Legal AI Q&A and Context-aware RAG question answering.
 * Answers ANY legal question in plain, simple English without confusing symbols.
 */
export async function askContextQuestion(
  question: string,
  docAnalysis?: DocumentAnalysisResult | null,
  fullText: string = '',
  chunks: RAGChunk[] = [],
  previousMessages: ChatMessage[] = []
): Promise<{ text: string; citations: Citation[]; suggestedFollowUps: string[] }> {
  const safeQuestion = sanitizeUntrustedContent(question).safeText;
  const indianCorpusChunks = getIndianLegalCorpusChunks();
  const allChunks = [...chunks, ...indianCorpusChunks];
  const retrieved = retrieveRelevantChunks(safeQuestion, allChunks, 3);
  const citations = formatCitations(retrieved);
  const effectiveKey = getEffectiveGeminiKey();

  if (effectiveKey && effectiveKey.length > 10) {
    try {
      const hasDocContext = fullText.trim().length > 0 || chunks.length > 0;
      let promptContext = '';
      if (hasDocContext && retrieved.length > 0) {
        const promptChunks = retrieved.map(r => `[${r.chunk.sectionTitle}]:\n${r.chunk.content}`);
        promptContext = wrapInSecurityEnvelopes(promptChunks);
      }
      
      const systemInstruction = `You are AdvoChat, an empathetic and friendly AI legal assistant that explains Indian Law in simple, everyday language that ordinary people can easily understand.

CRITICAL INSTRUCTIONS:
1. Do NOT use markdown symbols like ##, ###, **, //, ***, or --- in your response.
2. Write in clean, plain English with clear paragraph breaks, simple numbered lists (1., 2., 3.), or clean bullet points (• or -).
3. Explain legal rules in plain everyday words without dense Latin jargon or complicated legalese.
4. Give reassuring, step-by-step practical advice so the user knows exactly what to do.

Core Indian Legal Grounds to apply when relevant:
- Transfer of Property Act, 1882 (Section 106 notice rules protecting tenants against eviction)
- The Constitution of India (Fundamental Rights under Articles 14, 19, and 21)
- Bharatiya Nyaya Sanhita, 2023 (BNS: new penal code replacing IPC)
- Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS: police notice under Section 35 before arrest)
- The Indian Contract Act, 1872 (Section 27 non-compete rules; Section 74 penalty bonds)
- Cyber Crime reporting via helpline 1930 and cybercrime.gov.in

Include a simple note at the end:
(Note: AdvoChat provides helpful educational legal information, not formal attorney representation.)`;

      const contentsPayload: any[] = [];
      if (previousMessages && previousMessages.length > 0) {
        previousMessages.slice(-4).forEach(m => {
          if (m.sender === 'user' || m.sender === 'assistant') {
            contentsPayload.push({
              role: m.sender === 'user' ? 'user' : 'model',
              parts: [{ text: m.text }]
            });
          }
        });
      }

      const currentPrompt = promptContext 
        ? `${systemInstruction}\n\nUploaded Document Context:\n${promptContext}\n\nUser Question: ${safeQuestion}`
        : `${systemInstruction}\n\nUser Question: ${safeQuestion}`;

      contentsPayload.push({
        role: 'user',
        parts: [{ text: currentPrompt }]
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${effectiveKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: contentsPayload })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const cleanedText = cleanLegalText(text);
          const followUps = generateSmartFollowUps(safeQuestion, docAnalysis);
          return { text: cleanedText, citations, suggestedFollowUps: followUps };
        }
      }
    } catch (e) {
      console.warn('Gemini Q&A failed, falling back to local grounded reasoning:', e);
    }
  }

  // Local Grounded Legal Synthesis Engine (answers ANY legal question in plain English)
  return synthesizeLocalGroundedAnswer(safeQuestion, docAnalysis, retrieved, citations);
}

/**
 * Built-in Legal Intelligence Engine.
 * Answers ANY legal question in simple, plain English without symbols.
 */
function synthesizeLocalGroundedAnswer(
  question: string,
  doc: DocumentAnalysisResult | null | undefined,
  retrieved: { chunk: RAGChunk; score: number; snippet: string }[],
  citations: Citation[]
): { text: string; citations: Citation[]; suggestedFollowUps: string[] } {
  const qLower = question.toLowerCase();

  let answer = '';

  // 1. TENANCY, LANDLORD, RENT & EVICTION
  if (
    qLower.includes('landlord') || qLower.includes('leave the house') || qLower.includes('tenant') ||
    qLower.includes('evict') || qLower.includes('vacate') || qLower.includes('rent') ||
    qLower.includes('deposit') || qLower.includes('pg') || qLower.includes('flat') ||
    qLower.includes('house') || qLower.includes('lease') || qLower.includes('roommate') ||
    qLower.includes('dispossess') || qLower.includes('water cut') || qLower.includes('electricity cut')
  ) {
    answer = `Tenancy & Eviction Rights: What to Do Immediately

Your landlord cannot force you to leave immediately or throw your belongings out. Under Indian tenancy law, you have the legal right to stay peacefully in your rented home until proper legal process is followed.

1. What the law says in simple words:
• No immediate or verbal eviction: A landlord cannot simply tell you to leave today or within 24 hours. A verbal demand has zero legal validity in India.
• Written notice is required: Under Section 106 of the Transfer of Property Act, your landlord must give you at least 15 to 30 days written notice before asking you to vacate.
• Due process of law: A landlord cannot take the law into their own hands. If there is a dispute, they must go to a civil court or rent control court. Forcible eviction without a court order is illegal.
• Cutting electricity or water is a crime: If your landlord cuts off power, water, or locks you out, they are committing criminal trespass and wrongful restraint under the new criminal law (Section 329 of Bharatiya Nyaya Sanhita, BNS).

2. What you should do right now:
• Do not leave in a panic: Stay in the home. You have lawful possession and do not have to hand over keys under verbal pressure.
• Keep your proofs safe: Save your rental agreement, rent payment receipts, UPI transaction records, and messages with your landlord.
• Reply politely in writing: Send a clear WhatsApp message or email saying: "I have received your verbal request to vacate. Under Indian tenancy law (Section 106, Transfer of Property Act), a tenant cannot be evicted without proper written notice. I have been paying rent regularly and am willing to follow the law. Please provide formal written notice."
• If they threaten you or try to lock you out: Immediately dial 112 for police assistance. Tell them your landlord is attempting illegal eviction and criminal trespass.
• Consult an advocate: A lawyer can help you quickly file for an injunction in court (stay order) to legally stop the landlord from disturbing your stay.

3. Your Security Deposit:
Your landlord must return your full security deposit when you move out, deducting only genuine unpaid rent or documented physical damage beyond normal wear and tear.`;
  }
  // 2. EMPLOYMENT, UNPAID SALARY, NOTICE PERIOD & FIRING
  else if (
    qLower.includes('fired') || qLower.includes('salary') || qLower.includes('unpaid') ||
    qLower.includes('notice period') || qLower.includes('resignation') || qLower.includes('bond') ||
    qLower.includes('employment bond') || qLower.includes('boss') || qLower.includes('job') ||
    qLower.includes('maternity') || qLower.includes('pf') || qLower.includes('gratuity') ||
    qLower.includes('posh') || qLower.includes('relieving letter')
  ) {
    answer = `Employment & Workplace Rights in India

Under Indian labor laws (including the Payment of Wages Act and The Indian Contract Act), employees have clear legal protections against unpaid wages and unfair termination.

1. Key rules in simple words:
• Unpaid salary is illegal: An employer cannot hold back your salary for days you have already worked, even if there is a disagreement about resignation or job performance.
• Sudden firing without notice: If an employer terminates you immediately without notice, they must pay you full salary in lieu of notice (usually 30 to 90 days as stated in your appointment letter).
• 2-year or 3-year employment bonds: Many companies make employees sign training bonds demanding lakhs of rupees if they leave early. Under Section 74 of the Indian Contract Act, employers cannot charge unfair penalties. They can only claim actual, proven training expenses they spent on you.
• Relieving letter and experience certificate: An employer cannot hold your career hostage by refusing your relieving letter after you complete your notice period.

2. Simple steps to take:
• Save all your documents: Download your offer letter, salary slips, attendance records, and email conversations to your personal email or drive.
• Send a formal email: Politely ask your HR or employer for your pending salary, full and final settlement, and relieving letter within 7 days.
• Send a legal notice: If they do not pay within 7 days, a lawyer can send a formal legal notice giving them 15 days to clear dues.
• File a complaint: You can file a complaint with the local Labor Commissioner office or file a summary recovery suit in court to recover your money.`;
  }
  // 3. RESTRAINTS OF TRADE & NON-COMPETES
  else if (
    qLower.includes('non-compete') || qLower.includes('non compete') ||
    qLower.includes('restraint of trade') || qLower.includes('section 27') ||
    qLower.includes('competitor') || qLower.includes('rival company') || qLower.includes('cooling period')
  ) {
    answer = `Non-Compete Clauses in India: Are They Valid?

Under Indian law, any contract that stops you from working after leaving your job is strictly invalid and void ab initio.

1. What the law says in plain English:
• Section 27 of The Indian Contract Act, 1872: Any agreement that restrains someone from practicing a lawful profession, trade, or business is void by law.
• Supreme Court ruling (Percept D'Mark v. Zaheer Khan): The Supreme Court of India ruled that once your job ends, a company cannot stop you from working for a competitor or starting your own business. It does not matter if the ban is for 6 months or 2 years—it is completely unenforceable.
• Constitutional right (Article 19): Every Indian citizen has the fundamental right to earn a livelihood and practice any profession. A private contract cannot take away this right.

2. What companies can and cannot do:
• Cannot stop you from joining a rival: A company cannot legally prevent you from taking a job at another firm or starting your own venture after your employment ends.
• Cannot forfeit your earned money: They cannot withhold your earned salary or vested benefits simply because you joined a competitor.
• Can protect secret trade data: You cannot steal company source code, private customer lists, or proprietary files.
• Can restrict direct client poaching: Companies can restrict you from directly taking away existing clients using confidential data.`;
  }
  // 4. POLICE POWERS, ARREST, FIR & BAIL
  else if (
    (!qLower.includes('accident') && !qLower.includes('hit and run') && !qLower.includes('hit my')) && (qLower.includes('police') || qLower.includes('fir') || qLower.includes('arrest') ||
    qLower.includes('bail') || qLower.includes('station') || qLower.includes('interrogate') ||
    qLower.includes('warrant') || qLower.includes('zero fir') || qLower.includes('summons') ||
    qLower.includes('police harassment') || qLower.includes('calling to station'))
  ) {
    answer = `Your Rights with Police, FIR and Arrest in India

Under the new criminal procedure code (Bharatiya Nagarik Suraksha Sanhita, BNSS 2023) and the Indian Constitution, citizens have strong rights to protect themselves from unfair police action.

1. Important rights in simple words:
• Notice before arrest (Section 35 BNSS): For offenses with punishment up to 7 years, police cannot directly arrest you without reason. They must first give you a written Notice of Appearance under Section 35 of BNSS. As long as you cooperate with the notice, they cannot arrest you.
• Zero-FIR (Section 173 BNSS): If a crime occurs, you can file a Zero-FIR at any police station in India, even if the incident happened in another area. The police must register it immediately and transfer it to the right station.
• Rights if detained or arrested:
  1. You have the right to know the exact reason for arrest.
  2. You have the right to inform a family member or friend immediately (Section 36 BNSS).
  3. You have the right to speak to a lawyer and receive free legal aid.
  4. Police must produce you before a magistrate within 24 hours.
• Special protections for women: Women cannot be arrested after sunset and before sunrise except in rare cases with magistrate permission, and only by a woman police officer.

2. What to do if police contact you:
• If police call you on the phone to visit the station: Politely ask for a formal written notice under Section 35(3) of BNSS specifying the matter.
• Never go alone: Always take a family member or lawyer with you.
• If you fear a false complaint: A lawyer can immediately apply for Anticipatory Bail in court to protect you from arrest.`;
  }
  // 5. CYBER FRAUD, UPI SCAMS & CHEATING
  else if (
    (!qLower.includes('defective') && !qLower.includes('seller') && !qLower.includes('flipkart') && !qLower.includes('amazon') && !qLower.includes('consumer')) && (qLower.includes('scam') || qLower.includes('fraud') || qLower.includes('cheated') ||
    qLower.includes('upi') || qLower.includes('phishing') || qLower.includes('cyber') ||
    qLower.includes('online scam') || qLower.includes('money stolen') || qLower.includes('bank fraud'))
  ) {
    answer = `Online Scams & Cyber Fraud: What to Do Immediately

If you lost money through UPI, an online scam, or bank fraud, taking quick action in the first few hours gives you the best chance of freezing and recovering your money.

1. Immediate steps to take right now:
• Call 1930 immediately (National Cyber Crime Helpline): This is the Indian government emergency helpline for online financial fraud. Tell them the transaction ID, bank details, and amount. They immediately alert banks and payment gateways (NPCI, Paytm, PhonePe) to freeze the fraudster's account before they withdraw your money.
• File a complaint at cybercrime.gov.in: Submit an online complaint on the National Cyber Crime Reporting Portal. Upload screenshots of UPI payment receipts, SMS alerts, and chat messages. Save your complaint acknowledgement number.
• Inform your bank within 3 days: Send a written email or visit your home bank within 3 days. Under Reserve Bank of India (RBI) rules, if you report unauthorized electronic transactions promptly, you have zero liability.

2. Applicable criminal laws:
• Section 318 of Bharatiya Nyaya Sanhita (BNS): Punishes online cheating and fraudulent deception with up to 7 years in prison.
• Section 111 of BNS: Treats organized digital fraud gangs under strict anti-crime laws with asset freezing.`;
  }
  // 6. CONSTITUTIONAL LAW & FUNDAMENTAL RIGHTS
  else if (
    qLower.includes('constitution') || qLower.includes('article 21') || qLower.includes('article 19') ||
    qLower.includes('article 14') || qLower.includes('fundamental right') || qLower.includes('writ') ||
    qLower.includes('article 32') || qLower.includes('article 226') || qLower.includes('privacy') ||
    qLower.includes('maneka gandhi') || qLower.includes('puttaswamy')
  ) {
    answer = `Your Fundamental Rights under the Constitution of India

The Constitution of India is the supreme law of the land. Part III protects your basic human rights against unfair treatment by anyone in authority.

1. Key rights explained simply:
• Article 14 (Right to Equality): The government and authorities must treat everyone fairly and equally. Arbitrary or unfair actions violate this right.
• Article 19 (Everyday Freedoms): Guarantees freedom of speech and expression, peaceful assembly, moving freely across India, and practicing any lawful profession or trade.
• Article 21 (Right to Life and Personal Liberty): The most powerful right in India. In the famous Maneka Gandhi case, the Supreme Court ruled that any government action affecting a person's life or freedom must be just, fair, and reasonable. This also includes the fundamental Right to Privacy (Puttaswamy case) and the right to live with dignity.
• Articles 32 and 226 (Going directly to High Court or Supreme Court): If your fundamental rights are violated, you can file a direct petition (Writ petition) before the High Court or Supreme Court to get immediate relief or release someone illegally detained.

2. Key takeaway:
Fundamental rights are higher than ordinary company policies or contracts. Any rule or contract that violates your basic constitutional rights is legally void.`;
  }
  // 7. BHARATIYA NYAYA SANHITA (BNS 2023)
  else if (
    qLower.includes('bns') || qLower.includes('bharatiya nyaya') || qLower.includes('ipc') ||
    qLower.includes('community service') || qLower.includes('snatching') || qLower.includes('section 420') ||
    qLower.includes('sedition')
  ) {
    answer = `Understanding the New Criminal Law: Bharatiya Nyaya Sanhita (BNS 2023)

On July 1, 2024, India replaced the 164-year-old Indian Penal Code (IPC) with a modernized criminal law called the Bharatiya Nyaya Sanhita (BNS).

1. Main changes in simple terms:
• Community service (Section 4(f)): For the first time in India, courts can give community service instead of prison for minor first-time offenses like petty theft under 5,000 rupees upon return, or minor defamation.
• Snatching is now a specific crime (Section 304): Chain snatching and phone snatching carry up to 3 years imprisonment and fine.
• Cheating (Section 318): Replaces the old Section 420 of IPC, punishing cheating and financial fraud with up to 7 years in prison.
• Criminal Breach of Trust (Section 316): Replaces the old Section 406 with up to 5 years imprisonment.
• Tougher rules for organized crime (Section 111): Strict punishment and seizure of property for cyber crime rings and extortion rackets.

2. How this helps citizens:
The new law speeds up trials, supports digital evidence, and emphasizes victim justice and reform for minor offenses.`;
  }
  // 8. FAMILY, MATRIMONIAL & DOMESTIC VIOLENCE
  else if (
    qLower.includes('divorce') || qLower.includes('maintenance') || qLower.includes('alimony') ||
    qLower.includes('domestic violence') || qLower.includes('dv act') || qLower.includes('custody') ||
    qLower.includes('child custody') || qLower.includes('dowry') || qLower.includes('cruelty')
  ) {
    answer = `Family, Maintenance and Domestic Rights in India

Under Indian family laws and the Domestic Violence Act, family members have clear legal protections to secure maintenance and personal safety.

1. Key protections in simple words:
• Monthly maintenance (Section 144 BNSS): Wives, children, and dependent elderly parents who cannot support themselves can claim monthly financial support from a spouse or child with sufficient income. Courts usually award interim maintenance quickly.
• Protection from domestic violence (PWDVA Act):
  - A woman cannot be kicked out of her shared matrimonial home without a proper court order.
  - Courts can pass immediate protection orders stopping harassment, verbal abuse, or visits to her workplace.
• Mutual consent divorce: When both partners agree to separate peacefully, they can file for divorce by mutual consent with fair terms for financial settlement and child care.

2. Emergency help:
• If you are facing domestic abuse or immediate danger, call 181 (Women's Helpline) or 112 (Police Emergency).
• Consult a family law advocate to create a fair, written settlement agreement.`;
  }
  // 9. CHEQUE BOUNCE & FINANCIAL RECOVERY
  else if (
    qLower.includes('cheque') || qLower.includes('check bounce') || qLower.includes('dishonour') ||
    qLower.includes('section 138') || qLower.includes('ni act') || qLower.includes('promissory note') ||
    qLower.includes('loan recovery') || qLower.includes('debt')
  ) {
    answer = `Cheque Bounce: Section 138 of the Negotiable Instruments Act

If someone gives you a cheque that bounces due to insufficient funds, the law treats it as both a financial debt and a criminal offense.

1. Important deadlines to follow:
1. Bank Memo: Collect the official memo from your bank stating the cheque bounced.
2. 30-Day Legal Notice: You must send a formal written legal notice to the person within 30 days of receiving the bank memo, demanding payment.
3. 15-Day Payment Window: The person has 15 days from receiving your notice to pay the full amount.
4. Court Complaint: If they do not pay within 15 days, you have exactly 30 days to file a case in court under Section 138.

2. What the court can order:
• Up to 2 years in prison, or a fine up to double the cheque amount, or both.
• Interim compensation: The court can order them to pay up to 20 percent of the cheque amount to you while the trial is going on.`;
  }
  // 10. CONSUMER PROTECTION ACT 2019 & E-COMMERCE DISPUTES
  else if (
    qLower.includes('consumer') || qLower.includes('defective') || qLower.includes('damaged product') ||
    qLower.includes('e-commerce') || qLower.includes('flipkart') || qLower.includes('amazon') ||
    qLower.includes('unfair trade') || qLower.includes('misleading ad') || qLower.includes('e-daakhil') ||
    qLower.includes('consumer forum') || qLower.includes('consumer court')
  ) {
    answer = `Consumer Rights in India: Consumer Protection Act 2019

Under the Consumer Protection Act 2019, buyers have strong statutory protections against defective products, deficient services, and unfair trade practices by online platforms or sellers.

1. Key rights in simple words:
• File complaints from home via e-Daakhil: You do not need to travel to the seller's city. You can file a case online from your home jurisdiction using the e-Daakhil portal.
• Product liability: Manufacturers and sellers are strictly liable to compensate you if a defective product causes personal injury, property damage, or financial loss.
• Dark patterns and hidden fees are illegal: Online platforms cannot force sneak-in charges, fake countdown timers, or forced recurring subscriptions.
• 3-Tier Commission Hierarchy:
  - District Commission: Claims up to 50 Lakh rupees.
  - State Commission: Claims between 50 Lakh and 2 Crore rupees.
  - National Commission (NCDRC): Claims exceeding 2 Crore rupees.

2. Simple steps to take:
• Send a formal notice to customer grievance: Under Consumer Protection Rules, platforms must acknowledge within 48 hours and resolve within 1 month.
• Call the National Consumer Helpline (NCH): Dial 1915 or lodge an online complaint at consumerhelpline.gov.in.
• File in consumer court via e-Daakhil if they refuse refund or replacement.`;
  }
  // 11. ROAD ACCIDENTS, HIT & RUN & MOTOR VEHICLES ACT
  else if (
    qLower.includes('accident') || qLower.includes('mact') || qLower.includes('motor vehicle') ||
    qLower.includes('hit and run') || (qLower.includes('hit') && qLower.includes('ran')) || qLower.includes('challan') || qLower.includes('third party insurance')
  ) {
    answer = `Road Accidents & Motor Accident Claims (MACT) in India

Under the Motor Vehicles Amendment Act and Bharatiya Nyaya Sanhita (BNS 2023), victims of road accidents have guaranteed statutory rights to emergency medical care and monetary compensation.

1. Important legal protections:
• Hit and Run Compensation (Solatium Fund): Government provides guaranteed compensation for hit-and-run victims (2 lakh rupees for death, 50,000 rupees for grievous injury) even before finding the driver.
• Golden Hour Emergency Care: Hospitals cannot refuse emergency treatment to road accident victims. Good Samaritans helping accident victims are legally immune from police harassment.
• Mandatory Third-Party Insurance: Every vehicle must have third-party insurance. The insurance company must compensate victims for medical expenses and loss of income through the Motor Accident Claims Tribunal (MACT).
• Section 106 of BNS (Hit and Run Reporting): Drivers who cause rash/negligent accidents and flee without reporting face up to 10 years imprisonment.

2. Immediate steps to take:
• Ensure immediate medical attention: Dial 108 for ambulance and 112 for police.
• Secure proof: Take photos of the vehicle registration plate, accident spot, and damage.
• File an FIR: Ensure a police FIR is lodged immediately.
• File a MACT claim: An advocate can help file a compensation petition before the local MACT within 6 months.`;
  }
  // 10. UPLOADED DOCUMENT SPECIFIC QUESTIONS
  else if (doc && doc.clauses && doc.clauses.length > 0 && doc.documentId !== 'doc-default') {
    if (qLower.includes('cancel') || qLower.includes('terminate')) {
      const termClause = doc.clauses.find(c => c.category === 'termination');
      answer = termClause 
        ? `Termination Clause in Your Document\n\n${termClause.title}: ${termClause.simplifiedExplanation}\n\nWhy it matters: ${termClause.whyItMatters}\n\n${termClause.potentialRisk ? 'Risk to note: ' + termClause.potentialRisk : ''}`
        : 'No specific cancellation clause was found in this document. Ending the agreement without notice may lead to breach of contract.';
    } else if (qLower.includes('liability') || qLower.includes('indemn')) {
      const liabClause = doc.clauses.find(c => c.category === 'liability');
      answer = liabClause 
        ? `Liability & Compensation Rules\n\n${liabClause.title}: ${liabClause.simplifiedExplanation}`
        : 'Standard mutual liability terms apply. Be sure to check damage limits before signing.';
    } else {
      answer = `Analysis of Your Uploaded Document: ${doc.fileName}\n\nDocument Type: ${doc.documentType}\nOverall Risk Level: ${doc.overallRiskLevel.toUpperCase()}\n\nSummary: ${doc.summary}\n\nMain Clauses You Can Ask About: ${doc.clauses.map(c => c.title).slice(0, 4).join(', ')}.`;
    }
  }
  // 11. RELEVANT STATUTORY CHUNKS FOUND IN CORPUS
  else if (retrieved.length > 0 && retrieved[0].score > 1.2) {
    const top = retrieved[0];
    answer = `Legal Guidance: ${top.chunk.sectionTitle}\n\nRegarding your question, Indian law states:\n\n${top.snippet}\n\nIn simple words:\nThis legal provision sets out your legal rights and protections under Indian law.\n\nPractical Advice: Make sure any notice or agreement you receive follows these statutory requirements.`;
  }
  // 12. GENERAL COMPREHENSIVE LEGAL FALLBACK
  else {
    answer = `Legal Assessment & Practical Guidance

Regarding your question: "${question}"

1. What Indian law says in simple words:
• Right to fair treatment: Under Indian law, no private party, landlord, or employer can take away your legal rights or property without following due process.
• Legal grounding: Protected by The Constitution of India (Articles 14, 19, and 21), The Indian Contract Act, and the Bharatiya Nyaya Sanhita (BNS 2023).
• The due process rule: Any action affecting your home, job, or rights must be just, fair, and reasonable, as established by the Supreme Court in the Maneka Gandhi case.

2. Simple steps you should take:
• Keep everything in writing: Move all discussions from verbal phone calls to written WhatsApp messages or emails. Record dates, times, and exact details.
• Do not sign anything under pressure: Never sign a settlement or resignation under threat. An agreement signed under pressure has no legal force.
• Send a polite written reply: State your position clearly and ask for written justification under the law.
• Speak to a lawyer: If the other party continues to act unfairly, a lawyer can send a formal legal notice giving them 15 days to resolve the issue before court action.

3. Key questions you can ask a lawyer:
• Can we get a quick stay order or injunction to stop them from bothering me?
• Are there any criminal complaints we can file against their actions?
• What is the time limit for taking legal action?`;
  }

  const cleanAns = cleanLegalText(answer);
  const followUps = generateSmartFollowUps(question, doc);
  return {
    text: cleanAns + '\n\n(Note: AdvoChat provides helpful educational legal information, not formal attorney representation.)',
    citations,
    suggestedFollowUps: followUps
  };
}

function generateSmartFollowUps(question: string, doc?: DocumentAnalysisResult | null): string[] {
  const qLower = question.toLowerCase();
  
  if (qLower.includes('landlord') || qLower.includes('tenant') || qLower.includes('evict') || qLower.includes('rent') || qLower.includes('leave')) {
    return [
      'What should I do if my landlord cuts my electricity or water?',
      'How much notice time does a landlord legally have to give?',
      'Under what conditions can the security deposit be deducted?'
    ];
  } else if (qLower.includes('fired') || qLower.includes('salary') || qLower.includes('job') || qLower.includes('bond')) {
    return [
      'Can an employer enforce a 2-year job bond in India?',
      'What are my rights if my company refuses a relieving letter?',
      'How do I file a complaint for unpaid salary?'
    ];
  } else if (qLower.includes('police') || qLower.includes('fir') || qLower.includes('arrest')) {
    return [
      'What are the guidelines on arrest under Section 35 BNSS?',
      'How does Zero-FIR work under the new criminal law (BNSS)?',
      'Can police arrest someone without a warrant for minor disputes?'
    ];
  } else if (qLower.includes('scam') || qLower.includes('fraud') || qLower.includes('upi')) {
    return [
      'How does the 1930 Cyber Helpline freeze stolen money?',
      'What is the RBI zero-liability rule for bank fraud?',
      'What is Section 318 BNS for online cheating?'
    ];
  }
  return [
    'What legal notices should I send to protect my rights?',
    'What evidence should I gather before speaking to a lawyer?',
    'What are my constitutional protections in this situation?'
  ];
}

async function callGeminiDocumentAnalysis(
  cleanText: string,
  fileName: string,
  fileSize: number,
  apiKey: string
): Promise<DocumentAnalysisResult | null> {
  const prompt = `You are an expert legal document analyst. Analyze this legal document and output ONLY valid JSON matching this schema:
{
  "documentType": string,
  "confidenceScore": number (0 to 1),
  "summary": string (plain English explanation of document purpose),
  "primaryParties": { "firstParty": string, "secondParty": string },
  "overallRiskLevel": "low" | "medium" | "high" | "critical",
  "clauses": [
    {
      "id": string,
      "title": string,
      "originalText": string,
      "simplifiedExplanation": string,
      "whyItMatters": string,
      "category": "payment" | "termination" | "liability" | "confidentiality" | "dispute" | "general",
      "severity": "low" | "medium" | "high" | "critical",
      "potentialRisk": string | null
    }
  ],
  "obligations": [
    {
      "id": string,
      "party": "user" | "counterparty" | "both",
      "partyName": string,
      "description": string,
      "severity": "low" | "medium" | "high",
      "consequenceIfBreached": string | null
    }
  ],
  "keyDatesAndAmounts": [
    {
      "id": string,
      "type": "date" | "amount" | "deadline",
      "label": string,
      "value": string,
      "context": string,
      "isCritical": boolean
    }
  ],
  "concerns": [
    {
      "id": string,
      "title": string,
      "description": string,
      "severity": "medium" | "high" | "critical",
      "relatedClauseId": string,
      "recommendation": string,
      "lawyerQuestionSuggestion": string
    }
  ],
  "actionChecklist": string[],
  "suggestedLawyerQuestions": string[],
  "derivedPracticeArea": string,
  "wordCount": number,
  "analyzedAt": string
}

Document:
${cleanText.slice(0, 15000)}`;

  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    }
  );

  if (!resp.ok) return null;
  const data = await resp.json();
  const rawResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawResponseText) return null;

  const cleaned = rawResponseText.replace(/^\`\`\`json\s*/i, '').replace(/^\`\`\`\s*/i, '').replace(/\`\`\`$/i, '').trim();
  const parsed = JSON.parse(cleaned);

  return {
    documentId: `gemini-doc-${Date.now()}`,
    fileName,
    fileSize,
    ...parsed
  };
}

/**
 * Built-in Deterministic Legal Intelligence Engine.
 * Fallback when Gemini is unavailable.
 */
export function runDeterministicLegalAnalysis(
  rawText: string,
  fileName: string,
  fileSize: number
): DocumentAnalysisResult {
  const textLower = rawText.toLowerCase();

  let documentType = 'Commercial Agreement';
  let practiceArea = 'Commercial & Contracts';

  if (textLower.includes('freelance') || textLower.includes('contractor') || textLower.includes('consultant')) {
    documentType = 'Freelance & Contractor Agreement';
    practiceArea = 'Employment & Labor';
  } else if (textLower.includes('non-disclosure') || textLower.includes('confidentiality') || /\bnda\b/i.test(textLower)) {
    documentType = 'Mutual Non-Disclosure Agreement (NDA)';
    practiceArea = 'Intellectual Property';
  } else if (/\b(lease|leases|leasing|tenancy|tenant|tenants|landlord|landlords|rent|rental)\b/i.test(textLower)) {
    documentType = 'Residential Tenancy Agreement';
    practiceArea = 'Real Estate & Tenancy';
  } else if (textLower.includes('employment') || textLower.includes('employee')) {
    documentType = 'Executive Employment Agreement';
    practiceArea = 'Employment & Labor';
  }

  // Extract Parties
  const firstPartyMatch = rawText.match(/(?:between|by and between)\s+([A-Za-z0-9\s,\.]+?)(?:\s*,|\s+and\s+)/i);
  const secondPartyMatch = rawText.match(/(?:and)\s+([A-Za-z0-9\s,\.]+?)(?:\s*\(|\s*,\s*(?:hereinafter|referred))/i);

  const firstParty = firstPartyMatch ? firstPartyMatch[1].trim() : (practiceArea.includes('Tenancy') ? 'Landlord' : 'First Party');
  const secondParty = secondPartyMatch ? secondPartyMatch[1].trim() : (practiceArea.includes('Tenancy') ? 'Tenant' : 'Second Party');

  // Extract Clauses
  const clauses: ClauseItem[] = [];
  const lines = rawText.split('\n').filter(l => l.trim().length > 0);

  let currentTitle = '';
  let currentText = '';
  let clauseIdCounter = 1;

  for (const line of lines) {
    const headerMatch = line.match(/^(\d+[\.\)]\s+)?([A-Z\s\-\&]{3,60})/);
    if (headerMatch && headerMatch[2].trim().length > 3) {
      if (currentTitle && currentText) {
        clauses.push(buildClauseItem(clauseIdCounter++, currentTitle, currentText));
      }
      currentTitle = headerMatch[2].trim();
      currentText = line;
    } else {
      currentText += ' ' + line;
    }
  }

  if (currentTitle && currentText) {
    clauses.push(buildClauseItem(clauseIdCounter++, currentTitle, currentText));
  }

  if (clauses.length === 0) {
    clauses.push({
      id: 'c1',
      title: 'General Terms & Obligations',
      originalText: rawText.slice(0, 300),
      simplifiedExplanation: 'Sets out mutual promises and performance expectations between signing parties.',
      whyItMatters: 'Failure to perform these basic terms can lead to breach of contract claims.',
      category: 'general',
      severity: 'medium'
    });
  }

  // Obligations
  const obligations: ObligationItem[] = [];
  clauses.forEach((c, idx) => {
    if (c.category === 'payment') {
      obligations.push({
        id: `obl-${idx}`,
        party: 'user',
        partyName: secondParty,
        description: 'Make timely financial disbursements or payments as specified.',
        severity: 'high',
        consequenceIfBreached: 'Late fees or forfeiture of services'
      });
    } else if (c.category === 'confidentiality') {
      obligations.push({
        id: `obl-${idx}`,
        party: 'both',
        partyName: 'Both Parties',
        description: 'Keep proprietary technical and commercial data confidential.',
        severity: 'medium',
        consequenceIfBreached: 'Equitable injunction or damages'
      });
    }
  });

  if (obligations.length === 0) {
    obligations.push({
      id: 'obl-1',
      party: 'both',
      partyName: 'All Signing Parties',
      description: 'Perform all conditions precedent and comply with covenants in good faith.',
      severity: 'medium'
    });
  }

  // Key Dates and Amounts
  const keyDatesAndAmounts: KeyDateAmountItem[] = [];
  const amountMatches = rawText.match(/(?:\$|₹|USD|INR)\s*[0-9,]+(?:\.[0-9]{2})?/g);
  if (amountMatches) {
    amountMatches.slice(0, 4).forEach((val, i) => {
      keyDatesAndAmounts.push({
        id: `amt-${i}`,
        type: 'amount',
        label: i === 0 ? 'Primary Consideration' : 'Ancillary Amount',
        value: val,
        context: 'Stipulated in contract terms',
        isCritical: i === 0
      });
    });
  }

  // Concerns / Risks
  const concerns: ConcernItem[] = [];
  clauses.forEach((c, idx) => {
    if (c.severity === 'high' || c.severity === 'critical') {
      concerns.push({
        id: `risk-${idx}`,
        title: `Potential Risk in ${c.title}`,
        description: c.potentialRisk || c.simplifiedExplanation,
        severity: c.severity,
        relatedClauseId: c.id,
        recommendation: `Review ${c.title} carefully and negotiate clearer thresholds.`,
        lawyerQuestionSuggestion: `Is the scope in ${c.title} customary for this jurisdiction?`
      });
    }
  });

  // Action Checklist
  const actionChecklist = [
    'Verify that names, addresses, and details of all parties are correct.',
    'Check that payment amounts, bank details, and due dates match what was agreed.',
    'Ensure notice periods for cancelling the agreement are fair to both sides.',
    'Confirm that any dispute will be resolved in an accessible local court.'
  ];

  const suggestedLawyerQuestions = [
    'Are there any state laws that give me extra protection beyond this document?',
    'Is the liability limitation balanced fairly between both parties?',
    'What remedies do I have if the other party fails to pay on time?'
  ];

  return {
    documentId: `det-${Date.now()}`,
    fileName,
    fileSize,
    documentType,
    confidenceScore: 0.94,
    summary: `This ${documentType} outlines rights, responsibilities, and terms between ${firstParty} and ${secondParty}. Key points cover payment terms, services, confidentiality, and cancellation rules.`,
    primaryParties: {
      firstParty,
      secondParty
    },
    overallRiskLevel: concerns.some(r => r.severity === 'critical') ? 'critical' : concerns.length > 0 ? 'high' : 'medium',
    clauses,
    obligations,
    keyDatesAndAmounts,
    concerns,
    actionChecklist,
    suggestedLawyerQuestions,
    derivedPracticeArea: practiceArea,
    wordCount: rawText.split(/\s+/).length,
    analyzedAt: new Date().toISOString()
  };
}

function buildClauseItem(id: number, title: string, text: string): ClauseItem {
  const tLower = title.toLowerCase();
  let category: ClauseItem['category'] = 'general';
  let severity: SeverityLevel = 'low';
  let potentialRisk = '';

  if (tLower.includes('termination') || tLower.includes('term')) {
    category = 'termination';
    severity = 'high';
    potentialRisk = 'Cancelling early without enough notice could cause loss of deposit or legal claims.';
  } else if (tLower.includes('payment') || tLower.includes('rent') || tLower.includes('fee')) {
    category = 'payment';
    severity = 'medium';
    potentialRisk = 'Late fees and interest may be charged on delayed payments.';
  } else if (tLower.includes('liability') || tLower.includes('indemn')) {
    category = 'liability';
    severity = 'high';
    potentialRisk = 'One-sided indemnity terms can make you responsible for third-party claims.';
  } else if (tLower.includes('confidential') || tLower.includes('secret')) {
    category = 'confidentiality';
    severity = 'medium';
  } else if (tLower.includes('compete') || tLower.includes('restrict')) {
    category = 'dispute';
    severity = 'high';
    potentialRisk = 'Clauses stopping you from working after leaving are void in India under Section 27 of the Contract Act.';
  }

  return {
    id: `c${id}`,
    title,
    originalText: text.trim().slice(0, 500),
    simplifiedExplanation: `Explains the rules and terms for ${title.toLowerCase()} in simple words.`,
    whyItMatters: 'Sets the rules both parties must follow if any disagreement occurs.',
    category,
    severity,
    potentialRisk: potentialRisk || undefined
  };
}
