import React, { useState } from 'react';
import { StitchIcon } from './StitchIcon';

export interface ScreenDef {
  index: number;
  id: string;
  title: string;
  shortTitle: string;
  category: 'Auth' | 'Workspace' | 'Analysis' | 'Academy' | 'Counsel' | 'Intelligence' | 'Governance';
}

export const SCREEN_FLOW: ScreenDef[] = [
  { index: 1, id: 'splash', title: '1. Welcome', shortTitle: 'Welcome', category: 'Auth' },
  { index: 2, id: 'login', title: '2. Login & Sign In', shortTitle: 'Login', category: 'Auth' },
  { index: 3, id: 'sso', title: '3. Google Fast Sign-in', shortTitle: 'SSO', category: 'Auth' },
  { index: 4, id: 'dashboard', title: '4. Home Dashboard', shortTitle: 'Dashboard', category: 'Workspace' },
  { index: 5, id: 'document-vault', title: '5. Upload Document', shortTitle: 'Upload', category: 'Workspace' },
  { index: 6, id: 'ai-assistant', title: '6. AI Legal Chat', shortTitle: 'AI Chat', category: 'Workspace' },
  { index: 7, id: 'document-analysis', title: '7. Document Summary', shortTitle: 'Summary', category: 'Analysis' },
  { index: 8, id: 'clause-inspector', title: '8. Clause Inspector', shortTitle: 'Clauses', category: 'Analysis' },
  { index: 9, id: 'doc-comparison', title: '9. Compare Documents', shortTitle: 'Compare', category: 'Analysis' },
  { index: 10, id: 'action-center', title: '10. Action Checklist', shortTitle: 'Checklist', category: 'Analysis' },
  { index: 11, id: 'document-archive', title: '11. Saved Documents', shortTitle: 'Saved', category: 'Analysis' },
  { index: 12, id: 'law-library', title: '12. Learn Indian Law', shortTitle: 'Learn Law', category: 'Academy' },
  { index: 13, id: 'law-chapter', title: '13. Law Curriculum', shortTitle: 'Curriculum', category: 'Academy' },
  { index: 14, id: 'law-lesson', title: '14. Interactive Lesson', shortTitle: 'Lesson', category: 'Academy' },
  { index: 15, id: 'doctrinal-quiz', title: '15. Knowledge Quiz', shortTitle: 'Quiz', category: 'Academy' },
  { index: 16, id: 'find-counsel', title: '16. Find Lawyers Nearby', shortTitle: 'Find Lawyers', category: 'Counsel' },
  { index: 17, id: 'lawyer-profile', title: '17. Lawyer Profile', shortTitle: 'Lawyer Profile', category: 'Counsel' },
  { index: 18, id: 'legal-updates', title: '18. Legal News & Guides', shortTitle: 'Legal News', category: 'Intelligence' },
  { index: 19, id: 'article-details', title: '19. Legal Article', shortTitle: 'Article', category: 'Intelligence' },
  { index: 20, id: 'user-profile', title: '20. User Profile', shortTitle: 'Profile', category: 'Governance' },
  { index: 21, id: 'settings', title: '21. Settings', shortTitle: 'Settings', category: 'Governance' },
  { index: 22, id: 'terms-covenant', title: '22. Privacy Terms', shortTitle: 'Terms', category: 'Governance' },
  { index: 23, id: 'legal-disclaimer', title: '23. Help & Disclaimer', shortTitle: 'Disclaimer', category: 'Governance' }
];

interface UserFlowBarProps {
  currentScreenIndex: number;
  onNavigateByIndex: (index: number) => void;
  onNavigateById: (id: string) => void;
}

export const UserFlowBar: React.FC<UserFlowBarProps> = ({
  currentScreenIndex,
  onNavigateByIndex,
  onNavigateById
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const currentScreen = SCREEN_FLOW[currentScreenIndex - 1] || SCREEN_FLOW[3];

  const handlePrev = () => {
    if (currentScreenIndex > 1) {
      onNavigateByIndex(currentScreenIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentScreenIndex < SCREEN_FLOW.length) {
      onNavigateByIndex(currentScreenIndex + 1);
    }
  };

  if (isCollapsed) {
    return (
      <aside 
        aria-label="Screen Flow Navigator Minimized"
        className="fixed bottom-3 right-3 z-50 bg-[#1b382b] text-[#ffffff] px-3 py-1.5 rounded shadow-lg text-xs font-medium flex items-center gap-2 border border-[#82a291]/30 cursor-pointer hover:bg-[#142b21] transition-all"
        onClick={() => setIsCollapsed(false)}
      >
        <StitchIcon name="account_tree" className="text-[16px] text-[#e0c298]" />
        <span>Stitch Flow: {currentScreenIndex}/23 ({currentScreen.shortTitle})</span>
        <StitchIcon name="unfold_more" className="text-[16px]" />
      </aside>
    );
  }

  return (
    <aside 
      aria-label="Stitch Flow Navigator"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1b382b]/95 backdrop-blur-md text-[#ffffff] border-t border-[#82a291]/30 py-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-wrap items-center justify-between gap-3 text-xs"
    >
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#e0c298] animate-pulse"></span>
        <span className="font-semibold tracking-wider text-[#e0c298] uppercase text-[10px]">
          Stitch User Flow
        </span>
        <span className="text-white/40">|</span>
        <span className="font-bold text-white">
          Screen {currentScreen.index} of {SCREEN_FLOW.length}:
        </span>
        <span className="text-[#f6fbf5] hidden sm:inline font-medium">
          {currentScreen.title.replace(/^\d+\.\s*/, '')}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Dropdown jump */}
        <select
          value={currentScreen.id}
          onChange={(e) => onNavigateById(e.target.value)}
          className="bg-[#142b21] text-[#f6fbf5] border border-[#82a291]/40 rounded px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#e0c298]"
        >
          {SCREEN_FLOW.map((s) => (
            <option key={s.id} value={s.id}>
              {s.index}. {s.title.replace(/^\d+\.\s*/, '')} ({s.category})
            </option>
          ))}
        </select>

        {/* Prev / Next buttons */}
        <button
          onClick={handlePrev}
          disabled={currentScreenIndex <= 1}
          className="p-1 px-2 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white flex items-center gap-1 transition"
          title="Previous screen"
        >
          <StitchIcon name="arrow_back" className="text-[14px]" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentScreenIndex >= SCREEN_FLOW.length}
          className="p-1 px-2.5 rounded bg-[#e0c298] hover:bg-[#fedeb2] text-[#1b382b] font-bold flex items-center gap-1 transition"
          title="Next screen"
        >
          <span>Next</span>
          <StitchIcon name="arrow_forward" className="text-[14px]" />
        </button>

        {/* Minimize button */}
        <button
          onClick={() => setIsCollapsed(true)}
          className="p-1 text-white/60 hover:text-white ml-1"
          title="Minimize user flow bar"
        >
          <StitchIcon name="close" className="text-[16px]" />
        </button>
      </div>
    </aside>
  );
};
