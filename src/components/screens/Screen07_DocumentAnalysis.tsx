import { DocumentAnalysisResult } from '../../types/legal';
import React from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen07_DocumentAnalysisProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
  activeAnalysis?: DocumentAnalysisResult | null;
}

export const Screen07_DocumentAnalysis: React.FC<Screen07_DocumentAnalysisProps> = ({
  onNavigate,
  userProfile: _userProfile = {
    name: "Eleanor Vance",
    role: "Legal Help Account",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  },
  onQuickLoadSample: _onQuickLoadSample
}) => {
  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen">
      {/* LEFT NAVIGATION DRAWER */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-[#f6fbf5] border-r border-[#e2ddd5] z-40 flex flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold">
              Document Analysis
            </span>
            <div className="font-serif text-base text-[#042217] font-semibold mt-1">
              Rental Agreement
            </div>
            <div className="text-xs text-[#506358] mt-0.5">
              Explained in Plain English
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold px-2 mb-1">
              Menu
            </span>
            <nav className="flex flex-col gap-1">
              <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="space_dashboard" className="text-[18px]" />
                <span>Dashboard</span>
              </button>
              <button onClick={() => onNavigate('ai-assistant')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="chat" className="text-[18px]" />
                <span>AI Legal Chat</span>
              </button>
              <button onClick={() => onNavigate('document-analysis')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold bg-[#1b382b] text-white shadow-sm text-left">
                <StitchIcon name="description" className="text-[18px]" />
                <span>Document Summary</span>
              </button>
              <button onClick={() => onNavigate('clause-inspector')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="find_in_page" className="text-[18px]" />
                <span>Clause Inspector</span>
              </button>
              <button onClick={() => onNavigate('doc-comparison')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="difference" className="text-[18px]" />
                <span>Compare Versions</span>
              </button>
              <button onClick={() => onNavigate('action-center')} className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left">
                <StitchIcon name="checklist" className="text-[18px]" />
                <span>Action Checklist</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-3 rounded bg-white border border-[#e2ddd5]">
          <div className="flex items-center gap-1.5 text-[#1b382b] font-bold text-xs">
            <StitchIcon name="lock" className="text-[16px]" />
            <span>Private &amp; Secure</span>
          </div>
          <div className="text-[11px] text-[#506358] leading-tight">
            Analysis is generated for your private review.
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-[#fbf9f5]">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
            {/* Breadcrumb & Title */}
            <div className="flex flex-col gap-2 pb-6 border-b border-[#e2ddd5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#506358]">
                <span>Home</span>
                <span>/</span>
                <span>Documents</span>
                <span>/</span>
                <span className="text-[#1b382b]">Summary &amp; Clauses</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">
                      Tenancy Lease
                    </span>
                    <span className="text-xs text-[#506358] font-medium">• 11-Month Term</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] font-semibold mt-1 tracking-tight">
                    Residential Rental Agreement (820 Oak Street)
                  </h1>
                  <p className="text-xs sm:text-sm text-[#424844] mt-1.5 max-w-2xl leading-relaxed">
                    Here is a simple, clear explanation of your rental agreement, what you need to pay, and your legal rights under Indian tenancy laws.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
                  <button
                    onClick={() => onNavigate('ai-assistant')}
                    className="px-4 py-2 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center gap-1.5"
                  >
                    <StitchIcon name="chat" className="text-[18px]" />
                    <span>Ask AI About This Lease</span>
                  </button>
                  <button
                    onClick={() => onNavigate('clause-inspector')}
                    className="px-4 py-2 bg-white hover:bg-[#ebefea] text-[#181d1a] text-xs font-semibold rounded-lg border border-[#e2ddd5] shadow-sm transition flex items-center gap-1.5"
                  >
                    <StitchIcon name="find_in_page" className="text-[18px]" />
                    <span>Inspect Clauses</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">Monthly Rent</span>
                <div className="font-serif text-2xl font-bold text-[#042217] mt-1">₹25,000 / month</div>
                <div className="text-xs text-[#506358] mt-0.5">Due on 1st of each month (5-day grace period)</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">Security Deposit</span>
                <div className="font-serif text-2xl font-bold text-[#042217] mt-1">₹50,000 (2 Months)</div>
                <div className="text-xs text-[#506358] mt-0.5">Refundable within 30 days of moving out</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e2ddd5] shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">Notice to Vacate</span>
                <div className="font-serif text-2xl font-bold text-[#1b382b] mt-1">30 Days Written Notice</div>
                <div className="text-xs text-[#506358] mt-0.5">Under Section 106 Transfer of Property Act</div>
              </div>
            </div>

            {/* Document Summary Section */}
            <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#e2ddd5]">
                <StitchIcon name="summarize" className="text-[20px] text-[#1b382b]" />
                <h3 className="font-serif text-lg text-[#042217] font-semibold">
                  Summary in Simple English
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-[#424844] space-y-3 leading-relaxed">
                <p>
                  This agreement is between <strong>Sterling Properties LLC (Landlord)</strong> and <strong>Alex Rivera (Tenant)</strong> for renting the residential apartment at 820 Oak Street for a period of 11 months.
                </p>
                <p>
                  <strong>Notice requirement:</strong> Either party can end the agreement by giving a 30-day written notice. The landlord cannot ask you to leave immediately or throw your belongings out without proper written notice.
                </p>
                <p>
                  <strong>Maintenance rules:</strong> The landlord is responsible for major structural repairs, plumbing, and electrical wiring. You are responsible for keeping the flat clean and paying monthly electricity and water bills.
                </p>
              </div>
            </div>

            {/* Things to Watch Out For */}
            <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#e2ddd5]">
                <StitchIcon name="warning" className="text-[20px] text-[#c5a880]" />
                <h3 className="font-serif text-lg text-[#042217] font-semibold">
                  Things to Watch Out For
                </h3>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5] flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#042217]">Security Deposit Deductions</h5>
                    <p className="text-xs text-[#506358] mt-0.5 leading-relaxed">
                      Make sure to take clear photos and videos of the apartment when moving in. Under Indian tenancy law, the landlord cannot deduct charges for ordinary wear and tear.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5] flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1b382b] mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#042217]">Landlord Visits &amp; Inspections</h5>
                    <p className="text-xs text-[#506358] mt-0.5 leading-relaxed">
                      The landlord must give at least 24 hours prior notice before coming to inspect the flat. They cannot enter without your permission unless it is an emergency.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5] flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1b382b] mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#042217]">Lock-in Period &amp; Cancellation</h5>
                    <p className="text-xs text-[#506358] mt-0.5 leading-relaxed">
                      Check if there is a mandatory lock-in period. If you need to move out early, ensure the agreement allows 30 days notice after the first 3 or 6 months without losing your deposit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Need to Do (Checklist) */}
            <div className="p-6 rounded-xl bg-white border border-[#e2ddd5] shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#e2ddd5]">
                <StitchIcon name="checklist" className="text-[20px] text-[#1b382b]" />
                <h3 className="font-serif text-lg text-[#042217] font-semibold">
                  What You Need to Do
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#424844]">
                <label className="flex items-start gap-2.5 p-2.5 rounded hover:bg-[#f6fbf5] cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1b382b]" />
                  <span>Verify that your name, address, and the landlord's contact details are spelled correctly.</span>
                </label>
                <label className="flex items-start gap-2.5 p-2.5 rounded hover:bg-[#f6fbf5] cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1b382b]" />
                  <span>Always pay rent via bank transfer or UPI and keep digital receipts.</span>
                </label>
                <label className="flex items-start gap-2.5 p-2.5 rounded hover:bg-[#f6fbf5] cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1b382b]" />
                  <span>Ensure the agreement states 30 days written notice before vacating.</span>
                </label>
                <label className="flex items-start gap-2.5 p-2.5 rounded hover:bg-[#f6fbf5] cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-[#1b382b]" />
                  <span>Get the agreement signed by two independent witnesses and keep a registered copy.</span>
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
