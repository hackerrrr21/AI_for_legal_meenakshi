import React from 'react';
import { 
  Scale, 
  MessageSquare, 
  Search, 
  FileText, 
  BookOpen, 
  Flame, 
  Zap, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  UploadCloud,
  FileCheck2,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { SAMPLE_DOCUMENTS } from '../data/sampleDocuments';
import { DocumentUploader } from './assistant/DocumentUploader';

interface HomeDashboardProps {
  setActiveTab: (tab: ActiveTab) => void;
  currentProfile: {
    name: string;
    role: string;
    avatar: string;
  };
  userXP: number;
  streakDays: number;
  hasAnalyzedDoc: boolean;
  onQuickLoadSample: (sampleId: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  setActiveTab,
  currentProfile,
  userXP,
  streakDays,
  hasAnalyzedDoc,
  onQuickLoadSample
}) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-r from-legal-900 via-legal-850 to-legal-800 rounded-3xl p-6 sm:p-10 text-white shadow-trust-lg border border-legal-700 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-legal-800/80 border border-legal-600 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Legal Intelligence & Literacy Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Demystify Complex Legal Contracts with <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">AdvoChat</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Welcome back, <strong className="text-white">{currentProfile.name}</strong> ({currentProfile.role}). 
            AdvoChat translates dense legal jargon into plain English, flags one-sided liabilities, empowers you with gamified law micro-lessons, and connects you with verified legal counsel.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('assistant')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-legal-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-legal-950" />
              <span>Launch AI Legal Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('learn')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-legal-800 hover:bg-legal-700/80 border border-legal-600 text-slate-200 text-sm font-semibold transition"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Duolingo-Style Learn Law</span>
            </button>
          </div>
        </div>

        {/* Quick status bar */}
        <div className="mt-8 pt-6 border-t border-legal-700/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
          <div>
            <span className="text-slate-400 block text-[11px]">Active Profile</span>
            <strong className="text-white">{currentProfile.name}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Document Status</span>
            <strong className={hasAnalyzedDoc ? 'text-emerald-400' : 'text-amber-300'}>
              {hasAnalyzedDoc ? 'Document Active' : 'Ready to Analyze'}
            </strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Learning Streak</span>
            <strong className="text-amber-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-amber-400" /> {streakDays} Days
            </strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Knowledge XP</span>
            <strong className="text-cyan-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-cyan-400" /> {userXP} XP
            </strong>
          </div>
        </div>
      </div>

      {/* The Four Main Actions Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-legal-900 tracking-tight">
              Four Core Pillars of Legal Understanding
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Navigate seamlessly from document understanding to education and real-world legal action.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Action 1: AI Legal Assistant */}
          <div
            onClick={() => setActiveTab('assistant')}
            className="group bg-white rounded-2xl p-6 shadow-trust border border-slate-200 hover:border-indigo-500 cursor-pointer transition-all duration-200 flex flex-col justify-between hover:shadow-trust-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                Pillar 1: Understand
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">
                AI Legal Assistant
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Upload PDF/DOCX/TXT contracts. Extract clauses, obligations, financial schedules, and one-sided risks with context-grounded Q&A and Voice STT.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
              <span>{hasAnalyzedDoc ? 'Resume Analysis' : 'Upload Contract'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 2: Find Lawyers Nearby */}
          <div
            onClick={() => setActiveTab('lawyers')}
            className="group bg-white rounded-2xl p-6 shadow-trust border border-slate-200 hover:border-cyan-500 cursor-pointer transition-all duration-200 flex flex-col justify-between hover:shadow-trust-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                Pillar 2: Act & Connect
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition">
                Find Lawyers Nearby
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Location-based discovery with interactive maps. Filter verified advocates by practice area automatically derived from your active contract.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-600">
              <span>Explore Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 3: Legal Articles & Updates */}
          <div
            onClick={() => setActiveTab('articles')}
            className="group bg-white rounded-2xl p-6 shadow-trust border border-slate-200 hover:border-rose-400 cursor-pointer transition-all duration-200 flex flex-col justify-between hover:shadow-trust-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                Pillar 3: Stay Informed
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition">
                Legal Articles & Updates
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Practical guides, landmark Supreme Court rulings, and statutory updates on tenancy, consumer rights, and contractor laws cited with official authorities.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
              <span>Read Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 4: Learn Law */}
          <div
            onClick={() => setActiveTab('learn')}
            className="group bg-white rounded-2xl p-6 shadow-trust border border-slate-200 hover:border-emerald-500 cursor-pointer transition-all duration-200 flex flex-col justify-between hover:shadow-trust-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                Pillar 4: Gamified Education
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">
                Learn Law (Duolingo-style)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Step-by-step interactive micro-lessons: Law → Chapter → Section → Plain English → Scenario → Quiz → XP! Includes historical "Law Through Time".
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Immediate 1-Click Test Contracts Row */}
      <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-legal-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Evaluate AdvoChat Instantly with 1-Click Sample Contracts
            </h3>
            <p className="text-xs text-slate-500">
              No files on hand? Click any realistic scenario below to immediately experience the AI analysis pipeline.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onQuickLoadSample(doc.id)}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 bg-slate-50/50 hover:bg-indigo-50/20 text-left transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                  {doc.category}
                </span>
                <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{doc.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{doc.description}</p>
              </div>
              <div className="mt-3 text-[11px] font-bold text-indigo-600 flex items-center gap-1">
                Load & Analyze <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trust & Architecture Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
        <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block text-xs mb-0.5">Prompt Injection Hardened</strong>
            All user documents are treated as untrusted data with strict XML/delimiter barriers and text sanitation.
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
          <Zap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block text-xs mb-0.5">Chunked RAG & Citations</strong>
            Large agreements are semantically chunked and indexed; answers are grounded with explicit clause citations.
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
          <Scale className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block text-xs mb-0.5">Seamless Workflow</strong>
            From contract comprehension to Duolingo learning and scheduling attorney consultations in 1 click.
          </div>
        </div>
      </div>
    </div>
  );
};
