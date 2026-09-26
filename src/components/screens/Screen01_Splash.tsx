import React, { useState, useEffect } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen01SplashProps {
  onProceed?: () => void;
  onDirectLogin?: () => void;
  onNavigate?: (path: string) => void;
}

export const Screen01_Splash: React.FC<Screen01SplashProps> = ({ 
  onProceed, 
  onDirectLogin, 
  onNavigate 
}) => {
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const handleProceed = () => {
    if (onProceed) onProceed();
    else if (onNavigate) onNavigate('login');
  };

  const handleDirectLogin = () => {
    if (onDirectLogin) onDirectLogin();
    else if (onNavigate) onNavigate('dashboard');
  };

  return (
    <div className="bg-[#f6fbf5] font-sans text-[#181d1a] antialiased min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-white border border-[#e2ddd5] rounded-2xl p-6 sm:p-10 shadow-lg relative my-auto animate-fadeIn">
        
        {/* Top Folio Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e2ddd5]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1b382b] animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#506358] font-bold">
              AdvoChat Legal AI System
            </span>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#d2e8d9] text-[#042217] font-bold uppercase tracking-wider">
            Online &amp; Active
          </span>
        </div>

        {/* Centerpiece Branding */}
        <div className="flex flex-col items-center text-center py-6 sm:py-8 space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b382b] text-white rounded-2xl shadow-md flex items-center justify-center text-3xl sm:text-4xl font-serif font-bold transition-transform hover:scale-105">
            ⚖
          </div>

          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#042217] font-bold tracking-tight">
              AdvoChat
            </h1>
            <p className="text-xs sm:text-sm text-[#506358] font-semibold uppercase tracking-wider">
              AI-Powered Legal Understanding Assistant
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#424844] max-w-md leading-relaxed pt-1">
            Understand the law in plain everyday English. Translate complicated rental agreements, employment contracts, and notices without legalese.
          </p>

          {/* Key Capabilities Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-2 text-left">
            <div className="p-2.5 rounded-xl bg-[#f6fbf5] border border-[#e2ddd5]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#042217]">
                <StitchIcon name="chat" className="text-[16px] text-[#1b382b]" />
                <span>AI Legal Chat</span>
              </div>
              <div className="text-[11px] text-[#506358] mt-0.5 leading-snug">
                Plain English answers to tenancy, job, and consumer questions.
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f6fbf5] border border-[#e2ddd5]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#042217]">
                <StitchIcon name="description" className="text-[16px] text-[#1b382b]" />
                <span>Clause Inspector</span>
              </div>
              <div className="text-[11px] text-[#506358] mt-0.5 leading-snug">
                Detects unfair terms and explains legal consequences.
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f6fbf5] border border-[#e2ddd5]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#042217]">
                <StitchIcon name="menu_book" className="text-[16px] text-[#1b382b]" />
                <span>Learn Indian Law</span>
              </div>
              <div className="text-[11px] text-[#506358] mt-0.5 leading-snug">
                Grounded in Constitution, BNS 2023 &amp; Contract Act.
              </div>
            </div>
          </div>
        </div>

        {/* Loading Progress Bar & Ready State */}
        <div className="w-full space-y-3 pt-2">
          <div className="w-full h-1.5 bg-[#e2ddd5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1b382b] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#506358] font-mono">
            <span className="flex items-center gap-1.5">
              <StitchIcon name={progress >= 100 ? "verified" : "sync"} className={`text-[14px] ${progress >= 100 ? 'text-[#1b382b]' : 'animate-spin'}`} />
              <span>{progress >= 100 ? "Legal Knowledge Base Loaded & Ready" : "Loading Statutory Precedents & BNS 2023..."}</span>
            </span>
            <span className="font-bold">{progress}%</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
            <button
              onClick={handleProceed}
              className="w-full sm:flex-1 py-3 px-5 bg-[#1b382b] hover:bg-[#142b21] text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 group"
            >
              <span>Get Started</span>
              <StitchIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={handleDirectLogin}
              className="w-full sm:w-auto py-3 px-4 bg-[#f0f5f0] hover:bg-[#e2ddd5] text-[#042217] font-semibold text-xs rounded-xl border border-[#e2ddd5] transition text-center"
            >
              Direct to Home Dashboard
            </button>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="mt-6 pt-4 border-t border-[#e2ddd5] flex items-center justify-center gap-2 text-[11px] text-[#506358]">
          <StitchIcon name="shield" className="text-[15px] text-[#1b382b]" />
          <span>100% Client Confidential • Zero-Retention Privacy Protected</span>
        </div>

      </div>
    </div>
  );
};
