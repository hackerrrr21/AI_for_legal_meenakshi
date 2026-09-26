# ⚖️ AdvoChat — AI-Powered Legal Understanding Assistant

AdvoChat is a modern, responsive, trustworthy web application designed to bridge the legal literacy gap. It empowers everyday individuals, small business owners, tenants, and freelancers to understand complex legal documents, learn fundamental legal concepts through gamified micro-lessons, and take informed action by discovering relevant legal counsel and reliable statutory articles.

---

## 🧭 Core Workflow

```
[ Login / Persona ] ──▶ [ Home Dashboard ] ──▶ [ Understand (AI Assistant) ] ──▶ [ Learn (Duolingo-Style) ] ──▶ [ Act (Lawyers & Articles) ]
```

1. **Login & Persona Switcher**: Test AdvoChat from realistic viewpoints (*Alex Rivera - Tenant*, *Marcus Chen - Freelancer*, *Priya Sharma - Corporate Employee*, or *Guest Evaluator*).
2. **Home Dashboard**: Quick access to all four core pillars, high-level metrics (documents analyzed, active risks flagged, streak days, knowledge XP), and 1-click test contracts.
3. **Understand**: Upload contracts (PDF/DOCX/TXT), review structured clause extractions (original vs. plain English), obligations matrices, financial schedules, and potential red flags. Interact through context-grounded Q&A with voice input (STT) and voice readout (TTS), or compare contract revisions side-by-side.
4. **Learn Law**: Gamified, bite-sized curriculum (`Law → Chapter → Section → Original Text → Plain English → Why It Matters → Real-world Scenario → Micro-Quiz → XP/Streak`), plus an interactive **"Law Through Time"** amendment viewer.
5. **Act**: Discover verified lawyers filtered automatically by practice areas derived from your active document, with interactive map views and booking requests. Browse reliable legal articles cited with official statutes and Supreme Court precedents.

---

## 🏛️ System Architecture

```
                                  ┌──────────────────────────────┐
                                  │      User Browser Client     │
                                  │  (React 18 + TS + Tailwind)  │
                                  └──────────────┬───────────────┘
                                                 │
                   ┌─────────────────────────────┼────────────────────────────┐
                   ▼                             ▼                            ▼
        ┌──────────────────────┐      ┌────────────────────┐      ┌─────────────────────────┐
        │  Document Ingestion  │      │ Duolingo Learning  │      │  Lawyer & Case Articles │
        │   & RAG Pipeline     │      │   Gamified Engine  │      │   Geolocation Engine    │
        └──────────┬───────────┘      └────────────────────┘      └─────────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
   ┌───────────┐      ┌─────────────┐
   │ pdfjs /   │      │ Prompt      │
   │ mammoth   │      │ Injection   │
   │ Parsers   │      │ Defense     │
   └─────┬─────┘      └──────┬──────┘
         │                   │
         └─────────┬─────────┘
                   ▼
     ┌───────────────────────────┐
     │  Semantic Clause Chunker  │
     │  & Lexical TF-IDF RAG     │
     └─────────────┬─────────────┘
                   │
                   ▼
     ┌───────────────────────────┐
     │    AI Legal Intelligence  │
     │  - Gemini API (Cloud)     │
     │  - Autonomous Determin-   │
     │    istic Fallback Engine  │
     └───────────────────────────┘
```

---

## 🛡️ Security & Prompt Injection Defense

AdvoChat treats all uploaded documents as **untrusted data**:
1. **Sanitization Engine (`promptInjectionDefense.ts`)**: Scans for system override patterns (`ignore previous instructions`, `system prompt override`, `you are now DAN`, script injection) and neutralizes them with `[POTENTIAL_OVERRIDE_STRIPPED]`.
2. **Defensive Envelopes**: Document chunks are encapsulated inside strict XML boundary envelopes (`<<<DOC_CONTENT_START>>> ... <<<DOC_CONTENT_END>>>`) with explicit instructions directing the LLM never to treat document text as operational commands.
3. **Token Efficiency (RAG Chunking)**: Documents are not dumped entirely into the prompt. Our RAG engine chunks documents by legal headings, computes TF-IDF relevance scores, and injects only the top-K relevant chunks into the context window.
4. **Input Size & File Type Enforcement**: Strict 15MB file size limits and validation for MIME types (`.pdf`, `.docx`, `.txt`).

---

## 🚀 Key Features

### 1. AI Legal Assistant
- **Multi-Format Ingestion**: Upload PDF, Word DOCX, or plaintext agreements, or select from preloaded sample contracts (Balanced Residential Lease, High-Risk Revised Lease, Freelance Software Agreement, Mutual NDA).
- **Structured Extraction**:
  - **Document Classification & Parties**: Automatic recognition of contract type and signing entities.
  - **Clause Explorer**: Switch between *Plain English* (What it means for you), *Original Legal Text*, and *Side-by-Side* comparison.
  - **Obligations Matrix**: Party-by-party responsibilities, deadlines, and breach penalties.
  - **Financial & Timeline Radar**: Rent, deposits, interest rates, notice periods, and critical dates.
  - **Concerns & Red Flags**: Highlights unilateral indemnification, hidden fees, mandatory lock-ins, and broad non-competes.
  - **Action Checklist & Lawyer Questions**: Interactive due-diligence checklist with 1-click clipboard export.
- **Context-Aware Grounded Chat**:
  - Speech-to-Text (STT) voice input via Web Speech API.
  - Text-to-Speech (TTS) audio readout for accessible listening.
  - Precise source citations with section titles and exact quotes.
- **Contract Version Comparison**:
  - Side-by-side diff comparing baseline drafts against landlord/counterparty revisions.
  - Detects added penalties, removed protections, and shifts in risk level.

### 2. Learn Law (Duolingo-Style)
- **Gamified Micro-Curriculum**:
  - Tracks: *Tenancy Rights & Housing Law*, *Employment & Freelance Protections*, *Consumer Rights & E-Commerce*.
  - Step-by-step interactive flow: `Section → Original Text → Simplified Meaning → Why It Matters → Real-World Case Scenario → Interactive Quiz → XP Reward & Streak Counter`.
- **"Law Through Time"**:
  - Visual historical evolution comparing past regimes, reasons for reform, current statutory protections, and everyday practical impacts (e.g. Consumer Protection Act 1986 vs 2019; IT Act 2000 vs DPDP 2023; Model Tenancy reforms).

### 3. Find Lawyers Nearby
- **Location-Based Discovery**: Interactive simulated map view and distance-filtered list (within 5 km, 10 km, 25 km).
- **Smart Context Linking**: Automatically derives the recommended practice area from your active document (e.g., analyzing a lease auto-filters for *Real Estate & Tenancy* lawyers).
- **Verified Profiles**: Bar Council registration numbers, experience years, rating, verified badges, fee schedules, and instant consultation scheduling modal.

### 4. Legal Articles & Updates
- **Authoritative Editorial Content**: Written from the perspective of legal advocates.
- **Reliable Citations**: Grounded in official statutory acts (Transfer of Property Act, Contract Act 1872, Consumer Protection Act 2019) and Supreme Court rulings.
- **Key Takeaways & Reader**: Bookmark articles, review practical action steps, and search by keyword.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide Icons.
- **Document Processing**: `pdfjs-dist` (PDF extraction), `mammoth` (DOCX extraction).
- **AI & RAG Engine**: Google Gemini API (`gemini-1.5-flash`) with client-side Legal Intelligence & TF-IDF RAG fallback.
- **Voice I/O**: Native Web Speech API (SpeechRecognition + SpeechSynthesis).
- **Testing**: Vitest automated test suite.
- **Build Tool**: Vite 5.

---

## 📦 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd advochat

# Install dependencies
npm install
```

### Environment Configuration (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Provide your optional Google Gemini API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
> **Note:** If omitted, AdvoChat automatically runs its built-in offline Legal Intelligence & RAG engine with zero downtime or external dependencies.

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Automated Tests
```bash
npm run test
```
Runs 17 automated tests covering prompt injection defenses, RAG chunking, TF-IDF retrieval, document validation, and deterministic analysis.

### Production Build
```bash
npm run build
```

---

## 🧪 Testing Verification

The test suite validates:
- **`tests/unit/promptInjection.test.ts`**: Verifies that instruction overrides, DAN prompts, and delimiter attacks are stripped while preserving legitimate legal terminology.
- **`tests/unit/ragChunker.test.ts`**: Verifies clause segmentation, TF-IDF lexical retrieval, and citation formatting.
- **`tests/unit/documentParser.test.ts`**: Verifies file size limit enforcement (15MB), format validation, and whitespace normalization.
- **`tests/unit/aiAnalysis.test.ts`**: Verifies classification of Leases, Freelance Agreements, and NDAs with structured risk extraction.
- **`tests/unit/documentComparison.test.ts`**: Verifies clause diffing, lock-in detection, and risk escalation calculation.

---

## ⚖️ Legal Disclaimer

AdvoChat is an artificial intelligence-powered educational and document-understanding platform. AdvoChat is **not a law firm** and does not provide legal representation or formal legal advice. Use of AdvoChat does not create an attorney-client relationship. For binding legal counsel or representation in litigation, please consult a qualified, licensed attorney in your jurisdiction.
