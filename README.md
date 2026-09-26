# ⚖️ AdvoChat — GenAI-Powered Legal Accessibility & Assistance Platform

> **Official Problem Statement:**
> *"Legal information can often be complex, difficult to understand, and challenging to navigate without professional assistance. Build a GenAI-powered solution that makes legal information and basic legal assistance more accessible by helping users understand, compare, and navigate legal documents and information."*

---

## 🎯 Direct Alignment with the 7 Core Problem Statement Use Cases

| Problem Statement Use Case | AdvoChat Solution & Features | Verification & File References |
| :--- | :--- | :--- |
| **1. Simplifying complex legal documents** | Translates dense legalese into plain, everyday English; completely strips raw markdown clutter (`##`, `**`, `//`, `---`); side-by-side clause translations | `src/services/aiService.ts` (`cleanLegalText`), `Screen07`, `Screen08` |
| **2. Comparing contracts, agreements, or policies** | Side-by-side comparative redline diffing between standard baselines and counterparty revisions; highlights risk level shifts and lock-in clauses | `src/components/assistant/DocumentComparisonView.tsx`, `Screen09` |
| **3. Highlighting important clauses, obligations, risks, or inconsistencies** | Automatically extracts critical clauses, party obligation matrices, financial radar, and flags unilateral indemnification or unfair penalties | `src/services/aiService.ts`, `Screen07_DocumentAnalysis.tsx` |
| **4. Answering questions based on provided legal documents** | Context-grounded Q&A with Web Speech STT/TTS; uses TF-IDF lexical chunk retrieval and Google Gemini LLM synthesis | `src/components/screens/Screen06_AIAssistant.tsx`, `src/services/ragService.ts` |
| **5. Helping users understand their options and potential next steps** | Delivers actionable closing steps, statutory milestones, and rights under Indian statutes (Section 106 TP Act, Section 27 Contract Act, BNS 2023) | `src/components/screens/Screen10_ActionCenter.tsx`, `Screen06` |
| **6. Generating summaries, checklists, or other actionable outputs** | Generates executive summaries, party obligation breakdowns, and pre-signing due diligence checklists with 1-click clipboard export | `src/components/assistant/ActionChecklist.tsx`, `Screen10` |
| **7. Helping users prepare information or questions for a legal professional** | Formulates tailored consultation questions for attorneys; connects with verified Bar Council advocates nearby (5km, 10km, 25km radius) | `src/components/lawyers/FindLawyers.tsx`, `Screen16` |

### 🛡️ Core Mandate Adherence
> **NOTE:** *Solutions should provide information and assistance, rather than replace professional legal advice.*
* **AdvoChat Implementation:** AdvoChat strictly adheres to this principle across every screen. Prominent legal disclaimers appear on all AI analysis outputs, headers, footers, and Screen 23 (`Screen23_LegalDisclaimer.tsx`). AdvoChat acts as an educational and preparation bridge between citizens and licensed advocates, explicitly declaring it does not replace certified counsel.

### 💡 Innovative & Out-of-the-Box Directions
As encouraged by the problem statement, AdvoChat explores innovative dimensions:
1. **Duolingo-Style Gamified Legal Learning**: 8-step micro-lessons (`Law → Chapter → Section → Original Text → Plain Meaning → Why It Matters → Scenario → Quiz → XP/Streak`).
2. **"Law Through Time"**: Visual historical evolution comparing Past Regimes (IPC 1860, CPA 1986) to Current Laws (BNS 2023, CPA 2019).
3. **DPDP Act 2023 On-Device PII Redaction**: Automatically anonymizes 10 sensitive identifiers (Aadhaar, PAN, Bank, IFSC, Cards, Phone) locally on the browser before LLM transmission.
4. **Universal Accessibility Toolbar (`Alt + A`)**: WCAG 2.1 AA/AAA compliance with text scaling (100%, 115%, 130%), 15:1 high-contrast mode, and dyslexia-friendly typography.

---

## 🧭 Core Workflow

AdvoChat implements the required 5-stage sequential workflow:

```
[ Login / Auth ] ──▶ [ Home Dashboard ] ──▶ [ Understand (AI Assistant) ] ──▶ [ Learn (Duolingo Academy) ] ──▶ [ Act (Lawyers & Articles) ]
```

1. **Login & Identity**: Secure authentication supporting Persona switching (*Tenant*, *Freelancer*, *Corporate Employee*, *Guest Evaluator*) and Google Fast Sign-in.
2. **Home Dashboard**: Central hub providing immediate access to the **Four Core Actions**:
   - **1. AI Legal Assistant** (Real-time Q&A, Voice I/O, Document Vault)
   - **2. Find Lawyers Nearby** (Location-based Bar Council advocate discovery)
   - **3. Legal Articles & Updates** (Statutory guides & Supreme Court citations)
   - **4. Learn Law** (Duolingo-style micro-lessons & "Law Through Time")
3. **Understand**: Upload agreements (PDF/DOCX/TXT) or ask general legal questions without uploads. Inspect structured clause extractions (original vs. plain English), obligations matrices, financial schedules, red flags, and contract version diffs.
4. **Learn Law**: Gamified 8-step micro-curriculum (`Law → Chapter → Section → Original Text → Simplified Meaning → Why It Matters → Real-world Scenario → Micro-Quiz → XP/Streak`), plus the interactive **"Law Through Time"** amendment viewer.
5. **Act**: Discover verified Bar Council advocates nearby with distance filtering (5km, 10km, 25km), practice area alignment derived from active documents, and actionable due-diligence checklists.

---

## 🏛️ System Architecture

```
                                  ┌──────────────────────────────┐
                                  │      User Browser Client     │
                                  │  (React 18 + TS + Tailwind)  │
                                  └──────────────┬───────────────┘
                                                 │
                    ┌────────────────────────────┼────────────────────────────┐
                    ▼                            ▼                            ▼
         ┌──────────────────────┐     ┌────────────────────┐      ┌─────────────────────────┐
         │  Document Ingestion  │     │ Duolingo Learning  │      │  Lawyer & Case Articles │
         │   & RAG Pipeline     │     │   Gamified Engine  │      │   Geolocation Engine    │
         └──────────┬───────────┘     └────────────────────┘      └─────────────────────────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    ┌───────────┐      ┌─────────────┐
    │ pdfjs /   │      │ Client PII  │
    │ mammoth   │      │ Redaction   │
    │ Parsers   │      │ (DPDP 2023) │
    └─────┬─────┘      └──────┬──────┘
          │                   │
          └─────────┬─────────┘
                    ▼
      ┌───────────────────────────┐
      │  OWASP Prompt Injection   │
      │  Boundary Envelopes       │
      └─────────────┬─────────────┘
                    │
                    ▼
      ┌───────────────────────────┐
      │  Semantic Clause Chunker  │
      │  & Lexical TF-IDF RAG     │
      └─────────────┬─────────────┘
                    │
                    ▼
      ┌───────────────────────────┐
      │    AI Legal Intelligence  │
      │  - Google Gemini API      │
      │  - Deterministic Fallback │
      └───────────────────────────┘
```

---

## 🧠 AI Logic & Semantic Retrieval (RAG)

1. **Context Window Optimization & Budgeting**: Contracts are never dumped raw into LLM prompts. Documents are chunked by legal headings and scored using TF-IDF lexical relevance, injecting only the top-K relevant passages and saving 80–90% token overhead.
2. **Deterministic Autonomous Engine**: When offline or if API limits are reached, AdvoChat falls back seamlessly to its internal heuristic legal rule engine covering Indian statutes (Section 106 Transfer of Property Act, Section 27 Indian Contract Act, BNS 2023, Consumer Protection Act 2019) with 0ms external latency.
3. **Symbol-Free Plain English Sanitizer**: Raw markdown syntax (`##`, `**`, `//`, `---`) is parsed and stripped into clean, accessible typography.

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Quick Start
```bash
# 1. Clone repository
git clone https://github.com/hackerrrr21/AI_for_legal_meenakshi.git
cd AI_for_legal_meenakshi

# 2. Install dependencies
npm install

# 3. Configure optional Gemini API Key in .env
cp .env.example .env
# VITE_GEMINI_API_KEY=your_gemini_api_key_here

# 4. Run local development server
npm run dev
# Server opens at http://localhost:3000

# 5. Run full automated test suite (17 test suites, 140 tests)
npm test

# 6. Build optimized production bundle
npm run build
```

---

## 📋 Assumptions

1. **Statutory Jurisdiction**: Primary legal grounding is based on Indian federal statutory acts (The Constitution of India, Bharatiya Nyaya Sanhita 2023, Indian Contract Act 1872, Transfer of Property Act 1882, Consumer Protection Act 2019, DPDP Act 2023).
2. **Educational & Informational Mandate**: AdvoChat operates as an educational and document comprehension assistant. As reinforced on Screen 23, it does not constitute formal attorney representation or legal advice.
3. **Client-Side Privacy Preservation**: Sensitive user data is assumed untrusted. Under the DPDP Act 2023, client-side regex anonymization removes personal identifiers locally on the user's browser before any external API transmission.
4. **Offline Resilience**: Network connectivity to external LLM services cannot be guaranteed; the system assumes a deterministic local fallback engine must be available with 100% feature parity.

---

## 🛡️ Security & Prompt Injection Defense

AdvoChat follows the **OWASP Top 10 for LLM Applications (LLM01: Prompt Injection)**:
1. **Instruction Override Stripping**: Scans for patterns such as `ignore previous instructions`, `system prompt override`, `DAN mode`, or script injection, replacing malicious substrings with `[POTENTIAL_OVERRIDE_STRIPPED]`.
2. **Defensive XML Boundary Envelopes**: Document chunks are strictly encapsulated inside `<<<DOC_CONTENT_START>>> ... <<<DOC_CONTENT_END>>>` boundaries with explicit instructions instructing the LLM never to execute operational instructions inside document content.
3. **DPDP Act 2023 PII Redactor**: Automatically redacts 10 sensitive identity markers on-device:
   - Aadhaar Numbers (`[REDACTED_AADHAAR]`)
   - Permanent Account Numbers (`[REDACTED_PAN]`)
   - Bank Account Numbers (`[REDACTED_BANK_ACCOUNT]`)
   - IFSC Codes (`[REDACTED_IFSC]`)
   - Payment Card Numbers (`[REDACTED_CARD]`)
   - Contact Telephones (`[REDACTED_PHONE]`)
   - Personal Email Addresses (`[REDACTED_EMAIL]`)
   - Voter ID Cards, Driving Licenses, and Passports
4. **Sliding-Window Rate Limiting**: Enforces max request limits per minute to guard against automated scraping and resource exhaustion.

---

## 🧪 Testing Verification

AdvoChat maintains an exhaustive automated test suite verified via Vitest:
- **17 Test Files | 140 Passing Tests (100% Pass Rate)** executed in **< 1.7 seconds**.
- **0 TypeScript Errors** (`tsc --noEmit` passing cleanly).
- **0 Build Warnings or Broken Bundles**.

```
 Test Files  17 passed (17)
      Tests  140 passed (140)
   Duration  1.61s

 ✓ tests/unit/problemStatementAlignment.test.ts (12 tests) - Official 7 Use Cases & Mandate Validated
 ✓ tests/unit/security.test.ts                  (15 tests) - DPDP 2023 PII Redaction & Rate Limiting
 ✓ tests/unit/promptInjection.test.ts          (5 tests)  - OWASP LLM01 Override Sanitization
 ✓ tests/unit/indianLawStatutes.test.ts        (16 tests) - BNS 2023, Contract Act, TP Act, CPA
 ✓ tests/unit/accessibility.test.ts            (13 tests) - WCAG 2.1 Contrast, Scaling & ARIA
 ✓ tests/unit/efficiency.test.ts               (7 tests)  - LRU Caching (<1ms) & Context Budgeting
 ✓ tests/unit/codeQuality.test.ts              (7 tests)  - Text Sanitization & Input Validation
 ✓ tests/unit/evaluationTiers.test.ts          (9 tests)  - Baseline, Practical, Advanced Tiers
 ✓ tests/unit/chatBotGeneralQA.test.ts         (7 tests)  - General Q&A Without Uploaded Docs
 ✓ tests/unit/userWorkflow.test.ts             (11 tests) - Sequential 5-Stage Navigation
 ✓ tests/unit/contractRedlineAndDiff.test.ts   (7 tests)  - Version Comparison & Escalation
 ✓ tests/unit/documentParser.test.ts           (4 tests)  - 15MB Limits & Format Parsing
 ✓ tests/unit/ragChunker.test.ts               (4 tests)  - TF-IDF Lexical Retrieval
 ✓ tests/unit/aiAnalysis.test.ts               (3 tests)  - Classification & Red Flag Extraction
 ✓ tests/unit/documentComparison.test.ts       (1 test)   - Contract Redline Diff
 ✓ tests/unit/speechAndAudio.test.ts           (5 tests)  - Web Speech API STT/TTS Handlers
 ✓ tests/unit/edgeCasesAndRobustness.test.ts   (14 tests) - Nulls, Malformed Files, Corrupt Data
```

---

## ⚠️ Limitations & Boundary Conditions

1. **Non-Legal Practice Disclaimer**: AdvoChat does not possess Bar Council licensure and does not replace certified legal counsel. It is designed to assist users in understanding documents and preparing for formal legal consultations.
2. **File Size Boundaries**: File uploads are capped at 15MB per file to maintain optimal browser memory limits and prevent client-side buffer overflows.
3. **Browser Audio Support**: Speech recognition and synthesis utilize native W3C Web Speech APIs; voice input requires browser microphone permissions and modern Chromium, WebKit, or Gecko browsers.
4. **Historical Disclosures**: Statutory comparisons in "Law Through Time" focus on core central enactments (IPC to BNS 2023, CPA 1986 to 2019, IT Act to DPDP 2023) and may differ depending on specific state-level tenancy amendments.

---

## ⚖️ Legal Disclaimer & Statutory Compliance

AdvoChat is an artificial intelligence-powered educational and document-understanding platform. AdvoChat is **not a law firm** and does not provide formal legal representation or binding legal advice. Use of AdvoChat does not establish an attorney-client relationship. For binding legal representation in court or formal arbitration, please consult a qualified advocate licensed by the Bar Council of India.
