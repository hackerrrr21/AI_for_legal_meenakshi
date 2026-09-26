import React, { useState } from 'react';
import { 
  Scale, 
  Flame, 
  Zap, 
  User, 
  Menu, 
  X, 
  BookOpen, 
  MessageSquare, 
  Search, 
  FileText, 
  Home,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export type ActiveTab = 'home' | 'assistant' | 'learn' | 'lawyers' | 'articles';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userXP: number;
  streakDays: number;
  currentProfile: {
    name: string;
    role: string;
    avatar: string;
  };
  onSwitchProfile: (profile: { name: string; role: string; avatar: string }) => void;
  hasAnalyzedDoc: boolean;
}

export const USER_PROFILES = [
  {
    name: 'Alex Rivera',
    role: 'Tenant & Small Business Owner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=128'
  },
  {
    name: 'Marcus Chen',
    role: 'Independent Tech Freelancer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128'
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Employee & Consumer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=128'
  },
  {
    name: 'Guest Evaluator',
    role: 'Hackathon Judge Mode',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=128'
  }
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userXP,
  streakDays,
  currentProfile,
  onSwitchProfile,
  hasAnalyzedDoc
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const getWorkflowStep = () => {
    switch (activeTab) {
      case 'home': return 'Home';
      case 'assistant': return 'Understand';
      case 'learn': return 'Learn';
      case 'lawyers': 
      case 'articles': return 'Act';
      default: return 'Home';
    }
  };

  const currentStep = getWorkflowStep();

  return (
    <header className="sticky top-0 z-40 bg-legal-900 border-b border-legal-700 text-white shadow-trust">
      {/* Top bar: Core Workflow Indicator */}
      <div className="bg-legal-950/80 px-4 py-1 text-[11px] border-b border-legal-800 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-400 font-medium">Core Workflow:</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-emerald-400 flex items-center gap-0.5"><CheckCircle2 className="w-3 h-3" /> Login</span>
              <span className="text-slate-600">→</span>
              <span className={currentStep === 'Home' ? 'text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded' : 'text-emerald-400'}>Home</span>
              <span className="text-slate-600">→</span>
              <span className={currentStep === 'Understand' ? 'text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded' : hasAnalyzedDoc ? 'text-emerald-400' : 'text-slate-400'}>Understand</span>
              <span className="text-slate-600">→</span>
              <span className={currentStep === 'Learn' ? 'text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded' : userXP > 0 ? 'text-emerald-400' : 'text-slate-400'}>Learn</span>
              <span className="text-slate-600">→</span>
              <span className={currentStep === 'Act' ? 'text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded' : 'text-slate-400'}>Act</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <div className="flex items-center gap-1.5 text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full font-semibold" title="Daily Learning Streak">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-500 animate-pulse" />
              <span>{streakDays} Day Streak</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full font-semibold" title="Experience Points">
              <Zap className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
              <span>{userXP} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
              aria-label="AdvoChat Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-legal-900 font-bold">
                <Scale className="w-5 h-5 text-legal-950" />
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                  Advo<span className="text-amber-400">Chat</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 -mt-1">
                  Legal AI Assistant
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'home'
                  ? 'bg-legal-800 text-amber-300 shadow-sm border border-legal-600'
                  : 'text-slate-300 hover:text-white hover:bg-legal-800/60'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => setActiveTab('assistant')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'assistant'
                  ? 'bg-legal-800 text-amber-300 shadow-sm border border-legal-600'
                  : 'text-slate-300 hover:text-white hover:bg-legal-800/60'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>AI Legal Assistant</span>
              {hasAnalyzedDoc && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" title="Active document loaded" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('learn')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'learn'
                  ? 'bg-legal-800 text-amber-300 shadow-sm border border-legal-600'
                  : 'text-slate-300 hover:text-white hover:bg-legal-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Learn Law</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                Duolingo-style
              </span>
            </button>

            <button
              onClick={() => setActiveTab('lawyers')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'lawyers'
                  ? 'bg-legal-800 text-amber-300 shadow-sm border border-legal-600'
                  : 'text-slate-300 hover:text-white hover:bg-legal-800/60'
              }`}
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Find Lawyers</span>
            </button>

            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'articles'
                  ? 'bg-legal-800 text-amber-300 shadow-sm border border-legal-600'
                  : 'text-slate-300 hover:text-white hover:bg-legal-800/60'
              }`}
            >
              <FileText className="w-4 h-4 text-rose-400" />
              <span>Articles & Updates</span>
            </button>
          </div>

          {/* User Profile Switcher */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-2.5 rounded-full bg-legal-800 hover:bg-legal-700/80 border border-legal-600/70 text-left transition focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-haspopup="true"
              aria-expanded={profileDropdownOpen}
              aria-label="User profile switcher"
            >
              <img
                src={currentProfile.avatar}
                alt={currentProfile.name}
                className="w-7 h-7 rounded-full object-cover ring-2 ring-amber-400/40"
              />
              <div className="hidden lg:block text-xs leading-tight">
                <span className="font-semibold text-slate-100 block">{currentProfile.name}</span>
                <span className="text-[10px] text-slate-400 block truncate max-w-[130px]">{currentProfile.role}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-legal-850 rounded-xl shadow-2xl border border-legal-700 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 border-b border-legal-700 text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Switch Demo Persona</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Test AdvoChat from different legal perspectives</p>
                </div>
                <div className="p-1 space-y-1">
                  {USER_PROFILES.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => {
                        onSwitchProfile(p);
                        setProfileDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs transition ${
                        currentProfile.name === p.name
                          ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30 font-semibold'
                          : 'text-slate-300 hover:bg-legal-800 hover:text-white'
                      }`}
                    >
                      <img src={p.avatar} alt={p.name} className="w-7 h-7 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <div className="truncate font-medium">{p.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{p.role}</div>
                      </div>
                      {currentProfile.name === p.name && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-legal-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-legal-800 space-y-1">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'home' ? 'bg-legal-800 text-amber-300 font-bold' : 'text-slate-300'
              }`}
            >
              <Home className="w-4 h-4" /> Home Dashboard
            </button>
            <button
              onClick={() => { setActiveTab('assistant'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'assistant' ? 'bg-legal-800 text-amber-300 font-bold' : 'text-slate-300'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" /> AI Legal Assistant
            </button>
            <button
              onClick={() => { setActiveTab('learn'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'learn' ? 'bg-legal-800 text-amber-300 font-bold' : 'text-slate-300'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" /> Learn Law (Duolingo-style)
            </button>
            <button
              onClick={() => { setActiveTab('lawyers'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'lawyers' ? 'bg-legal-800 text-amber-300 font-bold' : 'text-slate-300'
              }`}
            >
              <Search className="w-4 h-4 text-cyan-400" /> Find Lawyers Nearby
            </button>
            <button
              onClick={() => { setActiveTab('articles'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'articles' ? 'bg-legal-800 text-amber-300 font-bold' : 'text-slate-300'
              }`}
            >
              <FileText className="w-4 h-4 text-rose-400" /> Legal Articles & Updates
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
