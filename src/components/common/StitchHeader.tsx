import React, { useState } from 'react';
import { StitchIcon } from './StitchIcon';

interface StitchHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onSwitchProfile?: (profile: any) => void;
}

export const StitchHeader: React.FC<StitchHeaderProps> = ({
  currentPath,
  onNavigate,
  userProfile = {
    name: "Eleanor Vance",
    role: "Legal Help Account",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  }
}) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'ai-assistant', label: 'AI Legal Chat' },
    { path: 'document-vault', label: 'Upload Document' },
    { path: 'find-counsel', label: 'Find Lawyers' },
    { path: 'law-library', label: 'Learn Law' },
    { path: 'legal-updates', label: 'Legal News' },
  ];

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 h-16 z-40 bg-[#f6fbf5]/95 backdrop-blur-xl border-b border-[#e2ddd5] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand & Badge */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="AdvoChat Home"
          >
            <div className="w-8 h-8 rounded-sm bg-[#1b382b] text-[#ffffff] flex items-center justify-center font-serif font-bold text-base shadow-sm">
              ⚖
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#042217] tracking-tight font-semibold">
              AdvoChat
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f0f5f0] text-[#506358] border border-[#e2ddd5]">
            <StitchIcon name="lock" className="text-[15px] text-[#1b382b]" />
            <span className="text-[11px] font-semibold text-[#506358]">
              Private &amp; Secure
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)} aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  isActive
                    ? 'bg-[#1b382b] text-white shadow-sm'
                    : 'text-[#424844] hover:text-[#181d1a] hover:bg-[#e5e9e4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Action Center Shortcut */}
          <button
            onClick={() => onNavigate('action-center')}
            className="p-2 rounded text-[#424844] hover:text-[#181d1a] hover:bg-[#ebefea] transition relative"
            title="Action Center & Execution Command"
          >
            <StitchIcon name="task_alt" className="text-[20px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
          </button>

          {/* Document Archive Shortcut */}
          <button
            onClick={() => onNavigate('document-archive')}
            className="p-2 rounded text-[#424844] hover:text-[#181d1a] hover:bg-[#ebefea] transition"
            title="Evidentiary Archive & Vault"
          >
            <StitchIcon name="folder" className="text-[20px]" />
          </button>

          {/* User Profile Avatar with dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded hover:bg-[#ebefea] transition focus:outline-none"
              aria-label="User account menu" aria-haspopup="menu" aria-expanded={profileOpen}
            >
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-8 h-8 rounded-full object-cover border border-[#c2c8c2]"
              />
              <div className="hidden md:block text-left text-xs leading-tight">
                <span className="font-semibold text-[#181d1a] block truncate max-w-[130px]">{userProfile.name}</span>
                <span className="text-[10px] text-[#506358] block truncate max-w-[130px]">{userProfile.role}</span>
              </div>
              <StitchIcon name="arrow_drop_down" className="text-[18px] text-[#506358]" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[#e2ddd5] py-2 z-50 animate-in fade-in">
                <div className="px-3 py-2 border-b border-[#e2ddd5] text-xs">
                  <div className="font-bold text-[#181d1a]">{userProfile.name}</div>
                  <div className="text-[11px] text-[#506358]">{userProfile.role}</div>
                  <div className="text-[10px] text-[#82a291] font-mono mt-0.5">Bar ID: DE-489102 • Active</div>
                </div>

                <div className="p-1 space-y-0.5 text-xs text-[#181d1a]">
                  <button
                    onClick={() => { onNavigate('user-profile'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#f0f5f0] text-left"
                  >
                    <StitchIcon name="person" className="text-[16px] text-[#506358]" />
                    <span>Counsel Profile & Account</span>
                  </button>
                  <button
                    onClick={() => { onNavigate('settings'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#f0f5f0] text-left"
                  >
                    <StitchIcon name="settings" className="text-[16px] text-[#506358]" />
                    <span>Settings & Governance</span>
                  </button>
                  <button
                    onClick={() => { onNavigate('terms-covenant'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#f0f5f0] text-left"
                  >
                    <StitchIcon name="gavel" className="text-[16px] text-[#506358]" />
                    <span>Terms & Privilege Covenant</span>
                  </button>
                  <button
                    onClick={() => { onNavigate('legal-disclaimer'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#f0f5f0] text-left"
                  >
                    <StitchIcon name="help_outline" className="text-[16px] text-[#506358]" />
                    <span>Help & Legal Disclaimer</span>
                  </button>
                  <div className="border-t border-[#e2ddd5] my-1"></div>
                  <button
                    onClick={() => { onNavigate('login'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#ffdad6] text-[#ba1a1a] text-left font-semibold"
                  >
                    <StitchIcon name="logout" className="text-[16px]" />
                    <span>Switch Persona / Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#424844] hover:bg-[#ebefea]"
            aria-label="Toggle Navigation Menu" aria-expanded={mobileMenuOpen}
          >
            <StitchIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-[24px]" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f6fbf5] border-b border-[#e2ddd5] p-3 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => { onNavigate(item.path); setMobileMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded ${
                currentPath === item.path
                  ? 'bg-[#1b382b] text-white'
                  : 'text-[#424844] hover:bg-[#ebefea]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
