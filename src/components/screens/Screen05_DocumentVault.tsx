import React, { useState, useRef } from 'react';
import { StitchIcon } from '../common/StitchIcon';
import { parseUploadedFile } from '../../services/documentParser';

interface Screen05_DocumentVaultProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  onCustomDocument?: (title: string, text: string) => void;
}

export const Screen05_DocumentVault: React.FC<Screen05_DocumentVaultProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  onQuickLoadSample,
  onCustomDocument
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Live manual text paste mode
  const [showLivePaste, setShowLivePaste] = useState<boolean>(false);
  const [liveClauseText, setLiveClauseText] = useState<string>(
    'Clause 4.2 Restrictive Covenant: Employee covenants and agrees that for a period of 24 months following separation, they shall not directly or indirectly engage in any competing software enterprise within the territory of India.'
  );

  const handleSampleClick = (sampleId: string) => {
    if (onQuickLoadSample) {
      onQuickLoadSample(sampleId);
    }
    onNavigate('document-analysis');
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMessage(null);
    setSuccessMessage(null);
    setIsProcessing(true);

    try {
      const parsed = await parseUploadedFile(file);
      setSuccessMessage(`File Accepted: "${file.name}" (${(file.size / 1024).toFixed(1)} KB, ${parsed.wordCount} words). Parsing clauses with AI...`);

      setTimeout(() => {
        if (onCustomDocument) {
          onCustomDocument(file.name.replace(/\.[^/.]+$/, ""), parsed.rawText);
        } else if (onQuickLoadSample) {
          onQuickLoadSample('sample-lease-standard');
        }
      }, 800);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error processing file. Please ensure it is a valid PDF, DOCX, or TXT document.';
      setErrorMessage(msg);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleTriggerUnsupportedEdgeCase = () => {
    setSuccessMessage(null);
    setErrorMessage("Live Test Error: Unsupported file format (.png image). AdvoChat only accepts PDF, DOCX, or TXT documents.");
  };

  const handleAnalyzeLiveClause = () => {
    if (!liveClauseText.trim()) {
      setErrorMessage("Please enter or paste contract clause text to analyze.");
      return;
    }
    setErrorMessage(null);
    setSuccessMessage("Clause text received. Extracting legal obligations and checking validity under Indian Law...");

    setTimeout(() => {
      if (onCustomDocument) {
        onCustomDocument("Custom-Pasted-Clause", liveClauseText);
      } else if (onQuickLoadSample) {
        onQuickLoadSample('sample-freelance');
      }
    }, 700);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.docx,.txt"
        className="hidden"
      />

      {/* LEFT NAVIGATION DRAWER */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-[#f6fbf5] border-r border-[#e2ddd5] z-40 flex flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold">
              Document Center
            </span>
            <div className="font-serif text-base text-[#042217] font-semibold mt-1">
              AdvoChat Vault
            </div>
            <div className="text-xs text-[#506358] mt-0.5">
              Upload &amp; Plain English Analysis
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold px-2 mb-1">
              Menu
            </span>
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => onNavigate('dashboard')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="space_dashboard" className="text-[18px]" />
                <span>Overview Hub</span>
              </button>
              <button 
                onClick={() => onNavigate('document-vault')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold bg-[#1b382b] text-white shadow-sm text-left"
              >
                <StitchIcon name="upload_file" className="text-[18px]" />
                <span>Upload &amp; Ingest</span>
              </button>
              <button 
                onClick={() => onNavigate('document-analysis')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="description" className="text-[18px]" />
                <span>1. Simplify Docs</span>
              </button>
              <button 
                onClick={() => onNavigate('clause-inspector')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="rule" className="text-[18px]" />
                <span>2. Highlight Risks</span>
              </button>
              <button 
                onClick={() => onNavigate('doc-comparison')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="compare_arrows" className="text-[18px]" />
                <span>3. Compare Versions</span>
              </button>
              <button 
                onClick={() => onNavigate('ai-assistant')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="chat" className="text-[18px]" />
                <span>4. Document Q&amp;A</span>
              </button>
              <button 
                onClick={() => onNavigate('action-center')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="checklist" className="text-[18px]" />
                <span>5. Checklists &amp; Lawyer Prep</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-3 rounded bg-white border border-[#e2ddd5]">
          <div className="flex items-center gap-1.5 text-[#1b382b] font-bold text-xs">
            <StitchIcon name="lock" className="text-[16px]" />
            <span>Private &amp; Secure</span>
          </div>
          <div className="text-[11px] text-[#506358] leading-tight">
            Files are analyzed privately in session and never stored on public servers.
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-[#fbf9f5]">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
            
            {/* Header */}
            <div className="flex flex-col gap-2 pb-5 border-b border-[#e2ddd5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#506358]">
                <span>Home</span>
                <span>/</span>
                <span className="text-[#1b382b]">Upload Document</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-1">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] font-semibold tracking-tight">
                    Upload Your Legal Document
                  </h1>
                  <p className="text-xs sm:text-sm text-[#424844] mt-1.5 max-w-2xl leading-relaxed">
                    Upload your rental agreement, job contract, or notice. We extract key obligations, flag unfair clauses, and translate everything into plain English.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start lg:self-auto">
                  <span className="px-2.5 py-1 rounded bg-[#d2e8d9] text-[#042217] font-semibold text-xs flex items-center gap-1 font-mono">
                    <StitchIcon name="verified" className="text-[14px]" />
                    <span>LIVE TESTING READY</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Live Testing Helper Strip */}
            <div className="p-3.5 rounded-xl bg-white border border-[#e2ddd5] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-base">🧪</span>
                <div>
                  <div className="text-xs font-bold text-[#042217]">Live Testing &amp; Edge Case Demonstrators</div>
                  <div className="text-[11px] text-[#506358]">Test invalid file error vs. valid upload or live clause entry</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleTriggerUnsupportedEdgeCase}
                  className="px-3 py-1.5 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold transition"
                >
                  ⚠️ Test Edge Case: Unsupported Format (.png)
                </button>
                <button
                  type="button"
                  onClick={() => setShowLivePaste(!showLivePaste)}
                  className="px-3 py-1.5 rounded bg-[#f0f5f0] hover:bg-[#d2e8d9] text-[#042217] border border-[#e2ddd5] text-xs font-semibold transition flex items-center gap-1"
                >
                  <StitchIcon name="edit_note" className="text-[16px]" />
                  <span>{showLivePaste ? 'Hide Live Clause Box' : '✍️ Paste Contract Text Live'}</span>
                </button>
              </div>
            </div>

            {/* Alert Banners */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 animate-fadeIn shadow-sm">
                <StitchIcon name="error" className="text-[20px] text-red-600 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed font-medium">
                  {errorMessage}
                </div>
              </div>
            )}

            {successMessage && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs flex items-start gap-2.5 animate-fadeIn shadow-sm">
                <StitchIcon name="check_circle" className="text-[20px] text-green-600 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed font-medium">
                  {successMessage}
                </div>
              </div>
            )}

            {/* LIVE CLAUSE PASTE BOX (If open) */}
            {showLivePaste && (
              <div className="p-5 rounded-xl bg-white border-2 border-[#1b382b]/30 shadow-md space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#e2ddd5]">
                  <div className="flex items-center gap-2">
                    <StitchIcon name="description" className="text-[18px] text-[#1b382b]" />
                    <h4 className="font-serif text-sm font-bold text-[#042217]">
                      Live Clause Entry (Test Custom Text Directly)
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#506358]">Type or edit any clause live</span>
                </div>
                <textarea
                  rows={3}
                  value={liveClauseText}
                  onChange={(e) => setLiveClauseText(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[#c2c8c2] text-xs font-mono text-[#181d1a] focus:outline-none focus:border-[#1b382b] bg-[#fbf9f5]"
                  placeholder="Paste any contract clause or agreement text here..."
                />
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowLivePaste(false)}
                    className="px-3 py-1.5 text-xs text-[#506358] hover:text-[#042217]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAnalyzeLiveClause}
                    className="px-4 py-2 rounded-lg bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <StitchIcon name="auto_awesome" className="text-[16px]" />
                    <span>Analyze This Clause Live with GenAI</span>
                  </button>
                </div>
              </div>
            )}

            {/* Drag & Drop Upload Zone */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl border-2 border-dashed border-[#c5a880] hover:border-[#1b382b] bg-white transition p-8 sm:p-12 flex flex-col items-center text-center cursor-pointer shadow-sm group"
            >
              <div className="w-16 h-16 rounded-full bg-[#f0f5f0] group-hover:bg-[#d2e8d9] flex items-center justify-center transition mb-4 text-[#1b382b]">
                <StitchIcon name="upload_file" className="text-[32px] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#042217] font-semibold">
                Click to Upload Document, or Drag &amp; Drop Here
              </h3>
              <p className="text-xs sm:text-sm text-[#506358] mt-2 max-w-md">
                Supports PDF, Word (DOCX), and Text (TXT) files up to 15 MB.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                  disabled={isProcessing}
                  className="px-5 py-2.5 rounded-lg bg-[#1b382b] text-white text-xs font-bold shadow-sm hover:bg-[#142b21] transition flex items-center gap-1.5"
                >
                  <StitchIcon name="add" className="text-[18px]" />
                  <span>{isProcessing ? 'Processing File...' : 'Choose File from Computer'}</span>
                </button>
              </div>
            </div>

            {/* Quick-Try Example Documents */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#042217] font-semibold">
                    Or Test with Ready-Made Legal Documents
                  </h3>
                  <p className="text-xs text-[#506358]">
                    Click any sample document to see AdvoChat explain clauses in simple English:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => handleSampleClick('sample-lease-standard')}
                  className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">
                        Tenancy Lease
                      </span>
                      <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#042217] mt-2">
                      Residential Rental Agreement
                    </h4>
                    <p className="text-xs text-[#506358] mt-1">
                      11-month lease with 30-day notice and security deposit terms.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                    <span>Explain in Simple Words</span>
                    <StitchIcon name="arrow_forward" className="text-[14px]" />
                  </div>
                </div>

                <div
                  onClick={() => handleSampleClick('sample-freelance')}
                  className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#fedeb2] text-[#281800] text-[10px] font-bold">
                        Freelance Contract
                      </span>
                      <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#042217] mt-2">
                      Independent Contractor Agreement
                    </h4>
                    <p className="text-xs text-[#506358] mt-1">
                      Contains post-job non-compete clause (strictly void under Indian Contract Act).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                    <span>Explain in Simple Words</span>
                    <StitchIcon name="arrow_forward" className="text-[14px]" />
                  </div>
                </div>

                <div
                  onClick={() => handleSampleClick('sample-nda')}
                  className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">
                        Confidentiality
                      </span>
                      <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#042217] mt-2">
                      Non-Disclosure Agreement (NDA)
                    </h4>
                    <p className="text-xs text-[#506358] mt-1">
                      Standard confidentiality terms protecting business and client information.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                    <span>Explain in Simple Words</span>
                    <StitchIcon name="arrow_forward" className="text-[14px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Preferences */}
            <div className="rounded-xl bg-white border border-[#e2ddd5] p-5 shadow-sm space-y-3">
              <h4 className="font-serif text-base text-[#042217] font-semibold">
                How AdvoChat analyzes your document:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded bg-[#f6fbf5] border border-[#e2ddd5]">
                  <span className="font-semibold text-[#042217] block">Plain English Summary</span>
                  <span className="text-[#506358]">Translates every clause into clear words without legal jargon.</span>
                </div>
                <div className="p-3 rounded bg-[#f6fbf5] border border-[#e2ddd5]">
                  <span className="font-semibold text-[#042217] block">Unfair Clauses Flagged</span>
                  <span className="text-[#506358]">Highlights terms that violate Section 27 or tenancy protections.</span>
                </div>
                <div className="p-3 rounded bg-[#f6fbf5] border border-[#e2ddd5]">
                  <span className="font-semibold text-[#042217] block">Actionable Checklist</span>
                  <span className="text-[#506358]">Lists critical deadlines, notice periods, and questions for your lawyer.</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
