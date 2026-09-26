import React from 'react';
import { DocumentComparisonView } from '../assistant/DocumentComparisonView';
import { SAMPLE_DOCUMENTS } from '../../data/sampleDocuments';
import { StitchIcon } from '../common/StitchIcon';

interface Screen09_DocumentComparisonProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  activeDocText?: string;
  activeDocTitle?: string;
  [key: string]: any;
}

export const Screen09_DocumentComparison: React.FC<Screen09_DocumentComparisonProps> = ({
  onNavigate,
  userProfile,
  activeDocText = SAMPLE_DOCUMENTS[0].content,
  activeDocTitle = SAMPLE_DOCUMENTS[0].title
}) => {
  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen pt-4 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between text-xs text-[#506358] border-b border-[#e2ddd5] pb-3">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('dashboard')} className="hover:underline font-medium">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('ai-assistant')} className="hover:underline font-medium">Understand</button>
            <span>/</span>
            <span className="font-semibold text-[#1b382b]">Document Comparison &amp; Redline Diff</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#f0f5f0] text-[#1b382b] font-medium text-[11px] border border-[#e2ddd5]">
            <StitchIcon name="compare_arrows" className="text-[14px]" />
            <span>Automated Contract Delta Detection</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DocumentComparisonView
          currentDocTitle={activeDocTitle}
          currentDocText={activeDocText}
        />
      </div>
    </div>
  );
};
