import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen04_DashboardProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen04_Dashboard: React.FC<Screen04_DashboardProps> = ({
  onNavigate,
  userProfile = {
    name: "Eleanor Vance",
    role: "Legal Help Account",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample: _onQuickLoadSample
}) => {
  const [quickQuestion, setQuickQuestion] = useState('');

  const handleAskQuickQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickQuestion.trim()) {
      onNavigate('ai-assistant');
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] font-sans text-[#181d1a] antialiased">
      {/* Top Status Strip */}
      <div className="w-full bg-[#f0f5f0] border-b border-[#e2ddd5] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1b382b] animate-pulse"></span>
            <span className="text-xs font-semibold text-[#042217]">
              AdvoChat Legal Assistant • Indian Law Guidance
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white shadow-sm border border-[#e2ddd5] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b382b]"></span>
              <span className="font-semibold text-[#042217]">AI Chat Ready</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white shadow-sm border border-[#e2ddd5] text-xs">
              <StitchIcon name="lock" className="text-[14px] text-[#1b382b]" />
              <span className="font-bold text-[#042217]">Private &amp; Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 max-w-7xl mx-auto">
        {/* Friendly Greeting Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e2ddd5]">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">
              Simple Legal Help for Everyday People
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#181d1a] font-semibold mt-1 tracking-tight">
              Welcome, {userProfile.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#424844] mt-1.5 max-w-2xl leading-relaxed">
              AdvoChat helps you understand your legal rights in India, review legal documents, and get answers to legal questions in simple, plain English.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              onClick={() => onNavigate('document-vault')}
              className="px-4 py-2 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-semibold rounded shadow-sm transition flex items-center gap-1.5"
            >
              <StitchIcon name="upload_file" className="text-[18px]" />
              <span>Upload Document</span>
            </button>
            <button
              onClick={() => onNavigate('ai-assistant')}
              className="px-4 py-2 bg-white hover:bg-[#ebefea] text-[#181d1a] text-xs font-semibold rounded border border-[#e2ddd5] shadow-sm transition flex items-center gap-1.5"
            >
              <StitchIcon name="chat" className="text-[18px] text-[#1b382b]" />
              <span>Ask AI Chat</span>
            </button>
          </div>
        </div>

        {/* Problem Statement Alignment Ribbon: Understand, Compare, Navigate */}
        <div className="bg-[#f0f5f0] border border-[#d2e2d5] rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-wider text-[#142b21] font-bold flex items-center gap-1.5">
              <StitchIcon name="auto_awesome" className="text-[15px] text-[#1b382b]" />
              <span>GenAI Legal Intelligence: Understand • Compare • Navigate</span>
            </span>
            <span className="text-[11px] text-[#506358] font-medium hidden sm:inline">
              Information &amp; Assistance Platform
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
            <button onClick={() => onNavigate('document-analysis')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="description" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Simplify Docs</span>
            </button>
            <button onClick={() => onNavigate('doc-comparison')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="compare_arrows" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Compare Versions</span>
            </button>
            <button onClick={() => onNavigate('clause-inspector')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="rule" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Highlight Clauses</span>
            </button>
            <button onClick={() => onNavigate('ai-assistant')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="chat" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Answer Questions</span>
            </button>
            <button onClick={() => onNavigate('action-center')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="navigation" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Next Steps</span>
            </button>
            <button onClick={() => onNavigate('action-center')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="checklist" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Checklists</span>
            </button>
            <button onClick={() => onNavigate('find-counsel')} className="p-2 rounded bg-white border border-[#e2ddd5] hover:border-[#1b382b] transition flex flex-col items-center gap-1">
              <StitchIcon name="person_search" className="text-[18px] text-[#1b382b]" />
              <span className="font-semibold text-[#181d1a] text-[11px]">Prepare for Counsel</span>
            </button>
          </div>
        </div>

        {/* Quick Search / Ask AI Question Box */}
        <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-[#e2ddd5]">
          <form onSubmit={handleAskQuickQuestion} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <span className="absolute left-3.5 top-3 text-[#506358]">
                <StitchIcon name="search" className="text-[20px]" />
              </span>
              <input
                type="text"
                value={quickQuestion}
                onChange={(e) => setQuickQuestion(e.target.value)}
                placeholder="Ask any legal question in simple English (e.g. Can my landlord evict me? Can company hold salary?)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#fbf9f5] border border-[#e2ddd5] rounded-lg focus:outline-none focus:border-[#1b382b] transition"
              />
            </div>
            <button
              type="submit"
              onClick={() => onNavigate('ai-assistant')}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <StitchIcon name="smart_toy" className="text-[18px]" />
              <span>Ask AI Assistant</span>
            </button>
          </form>

          <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-[#506358]">
            <span className="font-semibold text-[#181d1a]">Popular questions:</span>
            {[
              "My landlord is asking me to leave immediately",
              "Can company withhold salary or relieving letter?",
              "Lost money in UPI scam — what to do?"
            ].map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onNavigate('ai-assistant')}
                className="px-2.5 py-1 rounded bg-[#f0f5f0] hover:bg-[#ebefea] text-[#1b382b] transition text-[11px] font-medium"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Document Card */}
        <div className="relative overflow-hidden rounded-xl bg-white p-6 sm:p-7 shadow-sm border border-[#e2ddd5]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold uppercase tracking-wider">
                  Sample Document Ready
                </span>
                <span className="text-xs text-[#506358] font-medium">• Residential Rental Agreement</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-[#042217] font-semibold tracking-tight">
                Residential Tenancy Agreement (Standard 11-Month Lease)
              </h2>

              <p className="text-xs sm:text-sm text-[#424844] max-w-3xl leading-relaxed">
                Standard tenancy agreement with 30-day notice and security deposit terms. Click below to see simple, plain-English explanations of all clauses and potential risks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-[#506358] text-xs">
                <div className="flex items-center gap-1">
                  <StitchIcon name="gavel" className="text-[16px] text-[#042217]" />
                  <span>Indian Tenancy Protections</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <StitchIcon name="verified_user" className="text-[16px] text-[#1b382b]" />
                  <span>Plain English Explanations</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-2 min-w-[200px]">
              <button
                onClick={() => onNavigate('document-analysis')}
                className="px-5 py-2.5 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold rounded text-center transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explain This Document</span>
                <StitchIcon name="arrow_forward" className="text-[16px]" />
              </button>
              <button
                onClick={() => onNavigate('clause-inspector')}
                className="px-4 py-2 bg-[#f0f5f0] hover:bg-[#ebefea] text-[#424844] hover:text-[#181d1a] text-xs font-semibold rounded text-center transition border border-[#e2ddd5]"
              >
                Inspect Clauses
              </button>
            </div>
          </div>
        </div>

        {/* The Four Core Pillars */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">
                Main Features
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#181d1a] font-semibold">
                Four Core Actions: Understand, Learn, Act
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Pillar 1: AI Legal Assistant */}
            <div
              onClick={() => onNavigate('ai-assistant')}
              className="flex flex-col justify-between bg-white p-5 rounded-xl border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] hover:shadow-md transition cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#1b382b] text-white flex items-center justify-center shadow-sm">
                  <StitchIcon name="chat" className="text-[22px]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#042217] font-semibold group-hover:text-[#1b382b] transition">
                    1. AI Legal Assistant
                  </h4>
                  <p className="text-xs text-[#424844] mt-1.5 leading-relaxed">
                    Ask any question about your rights, agreements, or legal disputes in simple words. Works with or without documents.
                  </p>
                </div>
                <div className="p-2 rounded bg-[#f0f5f0] border border-[#e2ddd5]">
                  <span className="text-[11px] text-[#506358] flex items-center gap-1.5">
                    <StitchIcon name="mic" className="text-[14px] text-[#1b382b]" />
                    <span>Voice Input &amp; Instant Answers</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                <span>Start Legal Chat</span>
                <StitchIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2: Find Counsel Nearby */}
            <div
              onClick={() => onNavigate('find-counsel')}
              className="flex flex-col justify-between bg-white p-5 rounded-xl border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] hover:shadow-md transition cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#1b382b] text-white flex items-center justify-center shadow-sm">
                  <StitchIcon name="person_search" className="text-[22px]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#042217] font-semibold group-hover:text-[#1b382b] transition">
                    2. Find Lawyers Nearby
                  </h4>
                  <p className="text-xs text-[#424844] mt-1.5 leading-relaxed">
                    Connect with verified advocates in your area for direct consultation on tenancy, employment, or disputes.
                  </p>
                </div>
                <div className="p-2 rounded bg-[#f0f5f0] border border-[#e2ddd5]">
                  <span className="text-[11px] text-[#506358] font-medium flex items-center gap-1">
                    <StitchIcon name="pin_drop" className="text-[14px] text-[#1b382b]" />
                    <span>Verified High Court Advocates</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                <span>Find Advocates</span>
                <StitchIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 3: Legal Articles & Updates */}
            <div
              onClick={() => onNavigate('legal-updates')}
              className="flex flex-col justify-between bg-white p-5 rounded-xl border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] hover:shadow-md transition cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#1b382b] text-white flex items-center justify-center shadow-sm">
                  <StitchIcon name="newspaper" className="text-[22px]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#042217] font-semibold group-hover:text-[#1b382b] transition">
                    3. Legal Articles &amp; Updates
                  </h4>
                  <p className="text-xs text-[#424844] mt-1.5 leading-relaxed">
                    Easy-to-read guides explaining landmark Supreme Court judgments, tenant rights, and workplace laws.
                  </p>
                </div>
                <div className="p-2 rounded bg-[#f0f5f0] border border-[#e2ddd5]">
                  <span className="text-[11px] text-[#506358] font-medium flex items-center gap-1">
                    <StitchIcon name="article" className="text-[14px] text-[#1b382b]" />
                    <span>Plain English Legal Articles</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                <span>Read Articles</span>
                <StitchIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 4: Law Library & Juris Academy */}
            <div
              onClick={() => onNavigate('law-library')}
              className="flex flex-col justify-between bg-white p-5 rounded-xl border border-[#e2ddd5] shadow-sm hover:border-[#1b382b] hover:shadow-md transition cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#1b382b] text-white flex items-center justify-center shadow-sm">
                  <StitchIcon name="school" className="text-[22px]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#042217] font-semibold group-hover:text-[#1b382b] transition">
                    4. Learn Law
                  </h4>
                  <p className="text-xs text-[#424844] mt-1.5 leading-relaxed">
                    Fun, bite-sized lessons explaining the Constitution, police powers, tenant rights, and legal scenarios.
                  </p>
                </div>
                <div className="p-2 rounded bg-[#f0f5f0] border border-[#e2ddd5]">
                  <span className="text-[11px] text-[#506358] font-medium flex items-center gap-1">
                    <StitchIcon name="local_fire_department" className="text-[14px] text-[#c57b28]" />
                    <span>5 Day Streak • Lesson 2.4 Ready</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-[#e2ddd5] flex items-center justify-between text-xs font-semibold text-[#1b382b]">
                <span>Start Learning</span>
                <StitchIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Documents Table */}
        <div className="bg-white rounded-xl border border-[#e2ddd5] p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#e2ddd5]">
            <div>
              <h3 className="font-serif text-lg text-[#181d1a] font-semibold">
                Your Recent Documents
              </h3>
              <p className="text-xs text-[#506358]">
                Click any document to see a simple plain-English breakdown of rules and risks.
              </p>
            </div>
            <button
              onClick={() => onNavigate('document-vault')}
              className="text-xs font-bold text-[#1b382b] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Upload New Document</span>
              <StitchIcon name="arrow_forward" className="text-[14px]" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#e2ddd5] text-[#506358] uppercase font-mono text-[10px]">
                  <th className="py-2.5 px-3">Document Name</th>
                  <th className="py-2.5 px-3">Type</th>
                  <th className="py-2.5 px-3">Risk Assessment</th>
                  <th className="py-2.5 px-3">Parties</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ddd5] text-slate-800">
                <tr className="hover:bg-[#f6fbf5] transition">
                  <td className="py-3 px-3 font-semibold text-[#042217] flex items-center gap-2">
                    <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    <span>Residential Rental Agreement (Standard 11-Month)</span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Tenancy Lease</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">
                      BALANCED: Standard Notice
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Sterling Properties LLC &amp; Alex Rivera</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button
                      onClick={() => onNavigate('document-analysis')}
                      className="px-2.5 py-1 bg-[#1b382b] text-white rounded text-[11px] font-semibold hover:bg-[#142b21] transition"
                    >
                      Explain
                    </button>
                    <button
                      onClick={() => onNavigate('doc-comparison')}
                      className="px-2.5 py-1 bg-[#f0f5f0] text-[#042217] border border-[#e2ddd5] rounded text-[11px] font-semibold hover:bg-[#ebefea] transition"
                    >
                      Compare
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f6fbf5] transition">
                  <td className="py-3 px-3 font-semibold text-[#042217] flex items-center gap-2">
                    <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    <span>Software Development &amp; Freelance Agreement</span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Freelance Contract</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-bold">
                      FLAGGED: Post-job non-compete void in India
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Nexus Tech &amp; Marcus Chen</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button
                      onClick={() => onNavigate('document-analysis')}
                      className="px-2.5 py-1 bg-[#1b382b] text-white rounded text-[11px] font-semibold hover:bg-[#142b21] transition"
                    >
                      Explain
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f6fbf5] transition">
                  <td className="py-3 px-3 font-semibold text-[#042217] flex items-center gap-2">
                    <StitchIcon name="description" className="text-[#1b382b] text-[18px]" />
                    <span>Mutual Non-Disclosure Agreement (NDA)</span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Confidentiality</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">
                      LOW RISK: Balanced Terms
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#506358]">Acme Corp &amp; Partner</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button
                      onClick={() => onNavigate('document-analysis')}
                      className="px-2.5 py-1 bg-[#1b382b] text-white rounded text-[11px] font-semibold hover:bg-[#142b21] transition"
                    >
                      Explain
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
