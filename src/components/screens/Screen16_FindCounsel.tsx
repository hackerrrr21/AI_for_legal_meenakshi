import React from 'react';
import { FindLawyers } from '../lawyers/FindLawyers';
import { StitchIcon } from '../common/StitchIcon';

interface Screen16_FindCounselProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  initialPracticeArea?: string;
  onClearInitialArea?: () => void;
}

export const Screen16_FindCounsel: React.FC<Screen16_FindCounselProps> = ({
  onNavigate,
  userProfile,
  initialPracticeArea,
  onClearInitialArea
}) => {
  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen pt-4 pb-12">
      {/* Sub-header Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between text-xs text-[#506358] border-b border-[#e2ddd5] pb-3">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('dashboard')} className="hover:underline font-medium">Home</button>
            <span>/</span>
            <span className="font-semibold text-[#1b382b]">Find Lawyers Nearby (Act)</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#f0f5f0] text-[#1b382b] font-medium text-[11px] border border-[#e2ddd5]">
            <StitchIcon name="verified_user" className="text-[14px]" />
            <span>Bar Council of India Verified Enrolments</span>
          </div>
        </div>
      </div>

      {/* Main Find Lawyers Location-Based Discovery Engine */}
      <FindLawyers
        initialPracticeArea={initialPracticeArea}
        onClearInitialArea={onClearInitialArea}
      />
    </div>
  );
};
