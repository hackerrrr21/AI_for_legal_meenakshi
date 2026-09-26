import { DocumentAnalysisResult } from '../../types/legal';
import React from 'react';
import { ActionChecklist } from '../assistant/ActionChecklist';
import { StitchIcon } from '../common/StitchIcon';

interface Screen10_ActionCenterProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  activeAnalysis?: DocumentAnalysisResult | null;
}

export const Screen10_ActionCenter: React.FC<Screen10_ActionCenterProps> = ({
  onNavigate,
  userProfile: _userProfile,
  activeAnalysis
}) => {
  const defaultChecklist = [
    "Verify landlord's registered ownership title via Encumbrance Certificate or Municipal Property Tax receipt",
    "Ensure security deposit refund clause mandates return within 15 calendar days post handover",
    "Strike down automatic 1-month painting deduction; confirm deduction applies only to damages beyond ordinary wear and tear",
    "Confirm notice period for routine inspection is at least 24 hours prior written intimation",
    "Check dispute escalation seat is designated at local Rent Controller / Civil Court rather than outstation private arbitration"
  ];

  const defaultQuestions = [
    "Can the landlord legally forfeit the entire security deposit under Section 108 of the Transfer of Property Act without contractor bills?",
    "If the landlord refuses to sign the rent agreement registration, how does that affect my tenant protection under Model Tenancy laws?",
    "Is the 18% annual interest rate charged on delayed rent legally enforceable or considered a statutory penalty under Section 74 of the Indian Contract Act?",
    "How can I formally issue a 15-day statutory notice under Section 106 of the Transfer of Property Act to terminate tenancy peacefully?"
  ];

  const checklist = activeAnalysis?.actionChecklist || defaultChecklist;
  const questions = activeAnalysis?.suggestedLawyerQuestions || defaultQuestions;
  const docTitle = activeAnalysis?.documentType || "Residential Tenancy Agreement (Standard 11-Month Lease)";

  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen pt-4 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between text-xs text-[#506358] border-b border-[#e2ddd5] pb-3">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('dashboard')} className="hover:underline font-medium">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('ai-assistant')} className="hover:underline font-medium">Understand</button>
            <span>/</span>
            <span className="font-semibold text-[#1b382b]">Checklists, Next Steps &amp; Lawyer Prep (PS Use Cases 5, 6 &amp; 7)</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#f0f5f0] text-[#1b382b] font-medium text-[11px] border border-[#e2ddd5]">
            <StitchIcon name="checklist" className="text-[14px]" />
            <span>Problem Statement Use Cases 5, 6 &amp; 7</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActionChecklist
          checklist={checklist}
          suggestedLawyerQuestions={questions}
          docTitle={docTitle}
        />
      </div>
    </div>
  );
};
