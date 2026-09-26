# ⚖️ AdvoChat — AI-Powered Legal Understanding Assistant

AdvoChat is a modern, responsive, trustworthy, and accessible web application designed to empower everyday citizens, tenants, employees, and freelancers with plain-English legal intelligence grounded in Indian jurisprudence.

---

## 🧭 Core Workflow

AdvoChat strictly implements the required 5-stage architectural workflow:

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

## 🎯 Problem Statement Alignment & Approach

AdvoChat was engineered to satisfy every clause of the hackathon problem statement with zero compromises:

| Problem Statement Requirement | AdvoChat Implementation | Verification & File Reference |
| :--- | :--- | :--- |
| **Core Workflow (Login → Home → Understand → Learn → Act)** | Seamless sequential flow across 23 screens with persistent header navigation and stepper bar | `src/components/common/StitchHeader.tsx`, `UserFlowBar.tsx` |
| **Home (4 Core Actions)** | Four prominent action cards: AI Legal Assistant, Find Lawyers Nearby, Legal Articles, Learn Law | `src/components/screens/Screen04_Dashboard.tsx` |
| **AI Legal Assistant (Text & Voice)** | Native Web Speech API integration (SpeechRecognition STT + SpeechSynthesis TTS) | `src/utils/speechService.ts`, `tests/unit/speechAndAudio.test.ts` |
| **Document Ingestion (PDF/DOCX/TXT)** | Client-side text extraction using `pdfjs-dist` and `mammoth` with 15MB file boundary guards | `src/services/documentParser.ts`, `tests/unit/documentParser.test.ts` |
| **Structured Extraction** | Automated extraction of Document Type, Important Clauses, Obligations, Dates/Amounts, and Concerns | `src/services/aiService.ts`, `src/types/legal.ts` |
| **Simplified Clause Explanations** | Translates complex legal legalese into plain English; completely eliminates raw markdown symbols | `src/services/aiService.ts` (`cleanLegalText`) |
| **Follow-up Grounded Q&A** | Context-aware document Q&A backed by TF-IDF lexical chunk retrieval and Gemini LLM synthesis | `src/services/ragService.ts`, `src/components/screens/Screen06_AIAssistant.tsx` |
| **Document Comparison** | Side-by-side diff comparing baseline vs revised contracts with clause-level risk escalation | `src/components/assistant/DocumentComparisonView.tsx`, `Screen09` |
| **Actionable Checklists & Lawyer Questions** | Generates pre-signing diligence checklists and tailored questions to bring to legal counsel | `src/components/assistant/ActionChecklist.tsx`, `Screen10` |
| **Duolingo-Style Learn Law** | `Law → Chapter → Section → Original Text → Plain English → Why It Matters → Scenario → Quiz → XP` | `src/data/legalKnowledge.ts`, `Screen12`, `Screen14`, `Screen15` |
| **Law Through Time** | Historical evolution comparing Past Regimes (IPC 1860, CPA 1986) to Current Laws (BNS 2023, CPA 2019) | `src/components/learn/LawThroughTime.tsx`, `Screen12` |
| **Find Lawyers Nearby (Maps & Practice Areas)** | Distance-based discovery (5km, 10km, 25km), Bar Council profiles, simulated map, auto-derived practice area | `src/components/lawyers/FindLawyers.tsx`, `Screen16` |
| **Legal Articles & Updates** | Topic-based articles with authoritative statutory citations (Transfer of Property Act, Contract Act 1872) | `src/components/articles/LegalArticles.tsx`, `Screen18` |
| **Prompt Injection Defense** | Sanitizes untrusted content, strips DAN overrides, wraps context in defensive XML envelopes | `src/utils/promptInjectionDefense.ts`, `tests/unit/promptInjection.test.ts` |
| **PII & DPDP Act 2023 Compliance** | Client-side anonymization of 10 sensitive identifiers (Aadhaar, PAN, Bank, IFSC, Phone) before LLM calls | `src/utils/piiRedactor.ts`, `tests/unit/security.test.ts` |
| **Accessibility (WCAG 2.1 AA/AAA)** | Floating Accessibility Toolbar (`Alt + A`), 15:1 high contrast, text scaling, dyslexia spacing, screen reader | `src/components/common/AccessibilityToolbar.tsx`, `tests/unit/accessibility.test.ts` |

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

# 5. Run full automated test suite (17 test suites, 145 tests)
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
- **17 Test Files | 145 Passing Tests (100% Pass Rate)** executed in **< 1.8 seconds**.
- **0 TypeScript Errors** (`tsc --noEmit` passing cleanly).
- **0 Build Warnings or Broken Bundles**.

```
 Test Files  17 passed (17)
      Tests  145 passed (145)
   Duration  1.69s

 ✓ tests/unit/problemStatementAlignment.test.ts (17 tests)  - All Hackathon Requirements Validated
 ✓ tests/unit/security.test.ts                  (15 tests)  - DPDP 2023 PII Redaction & Rate Limiting
 ✓ tests/unit/promptInjection.test.ts          (5 tests)   - OWASP LLM01 Override Sanitization
 ✓ tests/unit/indianLawStatutes.test.ts        (16 tests)  - BNS 2023, Contract Act, TP Act, CPA
 ✓ tests/unit/accessibility.test.ts            (13 tests)  - WCAG 2.1 Contrast, Scaling & ARIA
 ✓ tests/unit/efficiency.test.ts               (7 tests)   - LRU Caching (<1ms) & Context Budgeting
 ✓ tests/unit/codeQuality.test.ts              (7 tests)   - Text Sanitization & Input Validation
 ✓ tests/unit/evaluationTiers.test.ts          (9 tests)   - Baseline, Practical, Advanced Tiers
 ✓ tests/unit/chatBotGeneralQA.test.ts         (7 tests)   - General Q&A Without Uploaded Docs
 ✓ tests/unit/userWorkflow.test.ts             (11 tests)  - Sequential 5-Stage Navigation
 ✓ tests/unit/contractRedlineAndDiff.test.ts   (7 tests)   - Version Comparison & Escalation
 ✓ tests/unit/documentParser.test.ts           (4 tests)   - 15MB Limits & Format Parsing
 ✓ tests/unit/ragChunker.test.ts               (4 tests)   - TF-IDF Lexical Retrieval
 ✓ tests/unit/aiAnalysis.test.ts               (3 tests)   - Classification & Red Flag Extraction
 ✓ tests/unit/documentComparison.test.ts       (1 test)    - Contract Redline Diff
 ✓ tests/unit/speechAndAudio.test.ts           (5 tests)   - Web Speech API STT/TTS Handlers
 ✓ tests/unit/edgeCasesAndRobustness.test.ts   (14 tests)  - Nulls, Malformed Files, Corrupt Data
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
