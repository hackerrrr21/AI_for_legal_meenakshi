import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen03SSOProps {
  onConfirmSSO?: () => void;
  onCancelSSO?: () => void;
  onNavigate?: (path: string) => void;
}

export const Screen03_SSO: React.FC<Screen03SSOProps> = ({ onConfirmSSO, onCancelSSO, onNavigate }) => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleConfirm = () => {
    setIsVerifying(true);
    setTimeout(() => {
      if (onConfirmSSO) onConfirmSSO();
      else if (onNavigate) onNavigate('dashboard');
    }, 800);
  };

  const handleCancel = () => {
    if (onCancelSSO) onCancelSSO();
    else if (onNavigate) onNavigate('login');
  };

  return (
    <div className="bg-[#f6fbf5] font-sans text-[#181d1a] antialiased min-h-screen flex flex-col justify-between p-4">
      {/* Header */}
      <header className="w-full py-4 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-[#1b382b] text-white flex items-center justify-center font-serif text-xs font-bold">
            ⚖
          </div>
          <span className="font-serif text-lg text-[#042217] font-semibold">AdvoChat</span>
        </div>
      </header>

      {/* Main card */}
      <main className="w-full max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Top Folio Pill */}
        <div className="inline-flex items-center gap-2 bg-[#e5e9e4] px-3 py-1 rounded-full mb-4 shadow-sm border border-[#c2c8c2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#476556]"></span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#506358]">
            Identity Verification • Protocol G-SSO
          </span>
          <span className="text-[#506358] text-[10px]">•</span>
          <span className="text-[10px] font-mono text-[#b2966f] font-semibold">SEC-AUTH-2024</span>
        </div>

        {/* Main Parchment Card */}
        <div className="w-full bg-white rounded-xl shadow-xl p-6 sm:p-10 flex flex-col relative overflow-hidden border border-[#e2ddd5]">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1b382b]"></div>

          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-lg bg-[#f0f5f0] flex items-center justify-center mb-3 shadow-sm border border-[#e2ddd5]">
              <StitchIcon name="balance" className="text-[32px] text-[#042217]" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] tracking-tight mb-1 font-semibold">
              Verify Legal Identity via Google Workspace
            </h1>
            <p className="text-xs text-[#424844] max-w-lg leading-relaxed">
              Connecting your accredited enterprise Google credentials to AdvoChat Juridical Vault.
            </p>
          </div>

          {/* Identity Profile Card */}
          <div className="w-full bg-[#f0f5f0] rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#e2ddd5]">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
                alt="Priya Sharma"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#1b382b]"
              />
              <div>
                <div className="font-serif font-bold text-sm text-[#181d1a]">Priya Sharma</div>
                <div className="text-xs text-[#506358]">priya.sharma@example.in</div>
                <div className="text-[10px] text-[#82a291] font-mono mt-0.5">Citizen Account • Verified Enclave (DPDP Act 2023)</div>
              </div>
            </div>

            <div className="px-2.5 py-1 bg-white rounded border border-[#c2c8c2] text-[10px] font-mono font-bold text-[#1b382b] flex items-center gap-1">
              <StitchIcon name="verified" className="text-[14px] text-[#2d6a4f]" />
              <span>DPDP VERIFIED</span>
            </div>
          </div>

          {/* Privilege Scope Notice */}
          <div className="space-y-3 mb-6 text-xs text-[#424844]">
            <span className="font-bold text-[#181d1a] uppercase text-[10px] tracking-wider block font-mono">
              Privilege Enclave Security Grants:
            </span>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 rounded bg-[#f6fbf5] border border-[#e2ddd5]">
                <StitchIcon name="shield" className="text-[#1b382b] text-[16px] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181d1a]">Epistemic Zero-Retention:</strong> Contract texts are processed in ephemeral memory buffers and never used for foundation model training.
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded bg-[#f6fbf5] border border-[#e2ddd5]">
                <StitchIcon name="lock" className="text-[#1b382b] text-[16px] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[#181d1a]">Attorney-Client Privilege Envelope:</strong> Communications are stamped with cryptographic confidentiality metadata complying with ABA Opinion 477R.
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#e2ddd5]">
            <button
              onClick={handleCancel}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#506358] hover:text-[#181d1a] transition"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirm}
              disabled={isVerifying}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#1b382b] hover:bg-[#142b21] text-white font-semibold text-xs rounded transition flex items-center justify-center gap-2 shadow-sm"
            >
              {isVerifying ? (
                <>
                  <StitchIcon name="sync" className="text-[16px] animate-spin" />
                  <span>Verifying Scopes...</span>
                </>
              ) : (
                <>
                  <span>Confirm & Authorize Vault Access</span>
                  <StitchIcon name="check" className="text-[16px]" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 text-center text-[11px] text-[#506358]">
        OAuth 2.0 Identity Assertion • Google Cloud Protected
      </footer>
    </div>
  );
};
