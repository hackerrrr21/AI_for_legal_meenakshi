import React from 'react';
import { LegalArticles } from '../articles/LegalArticles';
import { StitchIcon } from '../common/StitchIcon';

interface Screen18_LegalUpdatesProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  initialTopic?: string;
}

export const Screen18_LegalUpdates: React.FC<Screen18_LegalUpdatesProps> = ({
  onNavigate,
  userProfile: _userProfile,
  initialTopic
}) => {
  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen pt-4 pb-12">
      {/* Sub-header Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between text-xs text-[#506358] border-b border-[#e2ddd5] pb-3">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('dashboard')} className="hover:underline font-medium">Home</button>
            <span>/</span>
            <span className="font-semibold text-[#1b382b]">Legal Articles &amp; Updates (Act)</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#f0f5f0] text-[#1b382b] font-medium text-[11px] border border-[#e2ddd5]">
            <StitchIcon name="menu_book" className="text-[14px]" />
            <span>Official Statutes &amp; Supreme Court Precedents</span>
          </div>
        </div>
      </div>

      {/* Main Legal Articles Component */}
      <LegalArticles initialTopic={initialTopic} />
    </div>
  );
};
