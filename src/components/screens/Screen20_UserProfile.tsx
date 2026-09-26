import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen20_UserProfileProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  onQuickLoadSample?: (sampleId: string) => void;
}

export const Screen20_UserProfile: React.FC<Screen20_UserProfileProps> = ({
  onNavigate,
  userProfile = {
    name: "Julian Vance, Esq.",
    role: "Corporate Counsel & Senior VP Regulatory Affairs",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1VZ6niDg1iYJjzr8mamLG9LUlOY0DheFbkbsj_qFZ_em-hwpS5pR8HxexUHNsxBUU1KbvoavawfJL7Kqr2SGC8nvYMB8p59tFnVkvnMjxP9m-dFrwqWag5quL6TKHeF9gLmB4Wjv_lgfjRu7ikPMOxecC93rpNQMrES01oEIGgdvp3ZatJuZXkL_LW-DVh1rWd3hPSNvL5uJH5h2Xn8HBhTSGpaLeYgjNGwiZXPZXqP_ZCroml37gUCOw9i"
  },
  onQuickLoadSample: _onQuickLoadSample}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'credentials' | 'activity'>('profile');
  const [showComplianceDetails, setShowComplianceDetails] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // Editable Profile State
  const [profileData, setProfileData] = useState({
    name: userProfile.name || "Julian Vance, Esq.",
    title: "Corporate Counsel & Senior VP Regulatory Affairs",
    organization: "Meridian Technologies",
    barNumber: "Bar #48102 (Delaware Supreme Court)",
    email: "j.vance@meridiancorp-law.com",
    phone: "+1 (302) 884-2900",
    location: "Wilmington, Delaware",
    avatar: userProfile.avatar || "https://lh3.googleusercontent.com/aida/AEtjO1VZ6niDg1iYJjzr8mamLG9LUlOY0DheFbkbsj_qFZ_em-hwpS5pR8HxexUHNsxBUU1KbvoavawfJL7Kqr2SGC8nvYMB8p59tFnVkvnMjxP9m-dFrwqWag5quL6TKHeF9gLmB4Wjv_lgfjRu7ikPMOxecC93rpNQMrES01oEIGgdvp3ZatJuZXkL_LW-DVh1rWd3hPSNvL5uJH5h2Xn8HBhTSGpaLeYgjNGwiZXPZXqP_ZCroml37gUCOw9i"
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData({ ...editForm });
    setShowEditModal(false);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-[#181d1a] antialiased min-h-screen">
      {/* LEFT NAVIGATION DRAWER (Uncluttered & Clean) */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 hidden lg:flex bg-[#f6fbf5] border-r border-[#e2ddd5] z-40 flex flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold">
              Counsel Profile
            </span>
            <div className="font-serif text-base text-[#042217] font-semibold mt-1 truncate">
              {profileData.name}
            </div>
            <div className="text-xs text-[#506358] mt-0.5 truncate">
              {profileData.organization}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#506358] font-bold px-2 mb-1">
              Navigation
            </span>
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => onNavigate('dashboard')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="space_dashboard" className="text-[18px]" />
                <span>Dashboard</span>
              </button>
              <button 
                onClick={() => onNavigate('ai-assistant')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="chat" className="text-[18px]" />
                <span>AI Legal Chat</span>
              </button>
              <button 
                onClick={() => onNavigate('document-vault')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="upload_file" className="text-[18px]" />
                <span>Upload Document</span>
              </button>
              <button 
                onClick={() => onNavigate('document-analysis')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="description" className="text-[18px]" />
                <span>Document Summary</span>
              </button>
              <button 
                onClick={() => onNavigate('law-library')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="menu_book" className="text-[18px]" />
                <span>Learn Indian Law</span>
              </button>
              <button 
                onClick={() => onNavigate('find-counsel')} 
                className="flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold text-[#424844] hover:bg-[#ebefea] transition text-left"
              >
                <StitchIcon name="groups" className="text-[18px]" />
                <span>Find a Lawyer</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-3 rounded bg-white border border-[#e2ddd5]">
          <div className="flex items-center gap-1.5 text-[#1b382b] font-bold text-xs">
            <StitchIcon name="lock" className="text-[16px]" />
            <span>Private &amp; Secure Profile</span>
          </div>
          <div className="text-[11px] text-[#506358] leading-tight">
            Client-confidential legal workspace.
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-[#fbf9f5]">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#506358]">
              <button onClick={() => onNavigate('dashboard')} className="hover:text-[#1b382b] transition">Home</button>
              <span>/</span>
              <span>Counsel</span>
              <span>/</span>
              <span className="text-[#1b382b]">Profile</span>
            </div>

            {/* COMPACT PROFESSIONAL PROFILE HEADER */}
            <section className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-[#e2ddd5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                {/* Photo & Identity */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-sm border border-[#e2ddd5] bg-[#f0f5f0] flex-shrink-0">
                      <img 
                        src={profileData.avatar} 
                        alt={profileData.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#1b382b] text-white flex items-center justify-center shadow-sm" title="Verified Legal Practitioner">
                      <StitchIcon name="check" className="text-[14px]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] font-semibold tracking-tight">
                        {profileData.name}
                      </h1>
                      <span className="px-2.5 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[11px] font-semibold">
                        {profileData.barNumber}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-[#424844] font-medium mt-0.5">
                      {profileData.title} • <span className="text-[#042217] font-semibold">{profileData.organization}</span>
                    </div>

                    {/* Metadata Contacts */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#506358] mt-2">
                      <span className="flex items-center gap-1.5">
                        <StitchIcon name="mail" className="text-[15px] text-[#1b382b]" />
                        <span>{profileData.email}</span>
                      </span>
                      <span className="hidden sm:inline text-[#e2ddd5]">•</span>
                      <span className="flex items-center gap-1.5">
                        <StitchIcon name="call" className="text-[15px] text-[#1b382b]" />
                        <span>{profileData.phone}</span>
                      </span>
                      <span className="hidden sm:inline text-[#e2ddd5]">•</span>
                      <span className="flex items-center gap-1.5">
                        <StitchIcon name="location_on" className="text-[15px] text-[#1b382b]" />
                        <span>{profileData.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Single Primary Action: Edit Profile */}
                <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-end">
                  <button
                    onClick={() => {
                      setEditForm({ ...profileData });
                      setShowEditModal(true);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <StitchIcon name="edit" className="text-[16px]" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </section>

            {/* THREE SIMPLE SECTIONS: TABS */}
            <nav className="flex items-center gap-2 border-b border-[#e2ddd5] pb-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'profile'
                    ? 'bg-[#1b382b] text-white shadow-sm'
                    : 'text-[#506358] hover:text-[#042217] hover:bg-[#ebefea]'
                }`}
              >
                <StitchIcon name="person" className="text-[16px]" />
                <span>Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('credentials')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'credentials'
                    ? 'bg-[#1b382b] text-white shadow-sm'
                    : 'text-[#506358] hover:text-[#042217] hover:bg-[#ebefea]'
                }`}
              >
                <StitchIcon name="verified" className="text-[16px]" />
                <span>Credentials &amp; Compliance</span>
              </button>

              <button
                onClick={() => setActiveTab('activity')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'activity'
                    ? 'bg-[#1b382b] text-white shadow-sm'
                    : 'text-[#506358] hover:text-[#042217] hover:bg-[#ebefea]'
                }`}
              >
                <StitchIcon name="description" className="text-[16px]" />
                <span>Activity &amp; Documents</span>
              </button>
            </nav>

            {/* TAB 1: PROFILE (TWO-COLUMN CLEAN LAYOUT) */}
            {activeTab === 'profile' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT COLUMN: Professional Information (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  {/* Professional Summary */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-3">
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Professional Background
                    </h3>
                    <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                      Senior corporate legal counsel with over 16 years of experience advising technology enterprises, executive boards, and institutional investors on commercial transactions, corporate governance, and restrictive covenant dispute resolution.
                    </p>
                    <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                      Specializes in Delaware Court of Chancery practice, executive employment disputes, non-compete enforceability, and cross-border regulatory compliance.
                    </p>
                  </div>

                  {/* Core Practice Areas */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-3">
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Core Practice Areas
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        "Corporate Governance & Board Advisory",
                        "Commercial Agreements & Contracts",
                        "Restrictive Covenants & Non-Competes",
                        "Delaware Court of Chancery Litigation",
                        "Technology Licensing & Escrow",
                        "Employment & Severance Covenants"
                      ].map((area, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-[#f0f5f0] text-[#042217] text-xs font-medium border border-[#e2ddd5]">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education & Admissions */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-3">
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Education &amp; Bar Admissions
                    </h3>
                    <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#424844]">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-[#042217]">Harvard Law School</div>
                          <div className="text-xs text-[#506358]">Juris Doctor (J.D.) • Magna Cum Laude</div>
                        </div>
                        <span className="text-xs text-[#506358]">Class of 2008</span>
                      </div>
                      <div className="border-t border-[#e2ddd5]/60 pt-2 flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-[#042217]">Columbia University</div>
                          <div className="text-xs text-[#506358]">B.A. in Political Science &amp; Economics</div>
                        </div>
                        <span className="text-xs text-[#506358]">Class of 2005</span>
                      </div>
                      <div className="border-t border-[#e2ddd5]/60 pt-2 flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-[#042217]">Delaware State Bar Association</div>
                          <div className="text-xs text-[#506358]">Bar Admission #48102 • Active &amp; In Good Standing</div>
                        </div>
                        <span className="text-xs text-[#1b382b] font-semibold">Admitted 2008</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Current Matter / Practice Information (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Current Active Matter */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#e2ddd5]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1b382b]"></span>
                        <span className="text-xs uppercase tracking-wider text-[#506358] font-bold">
                          Current Active Matter
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#1b382b]">Priority</span>
                    </div>

                    <div>
                      <h4 className="font-serif text-base text-[#042217] font-semibold">
                        Meridian Corp vs. Vantage BioCapital
                      </h4>
                      <p className="text-xs text-[#506358] mt-0.5">
                        Delaware Court of Chancery • Docket #2024-CV-88219
                      </p>
                    </div>

                    <p className="text-xs text-[#424844] leading-relaxed">
                      Lead Advisory Counsel advising on Clause 4.2 Non-Compete Carve-out, stock purchase warranties, and equity forfeiture terms under Delaware law.
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={() => onNavigate('clause-inspector')}
                        className="w-full py-2 px-3 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1.5"
                      >
                        <StitchIcon name="find_in_page" className="text-[16px]" />
                        <span>Inspect Flagged Clause 4.2</span>
                      </button>
                      <button
                        onClick={() => onNavigate('document-analysis')}
                        className="w-full py-2 px-3 bg-[#f0f5f0] hover:bg-[#ebefea] text-[#042217] text-xs font-semibold rounded-lg border border-[#e2ddd5] transition flex items-center justify-center gap-1.5"
                      >
                        <StitchIcon name="description" className="text-[16px]" />
                        <span>View Matter Document Summary</span>
                      </button>
                    </div>
                  </div>

                  {/* Office & Chambers Information */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-3">
                    <h4 className="font-serif text-base text-[#042217] font-semibold">
                      Chambers &amp; Contact Details
                    </h4>
                    <div className="space-y-2 text-xs text-[#424844]">
                      <div className="flex items-start gap-2">
                        <StitchIcon name="apartment" className="text-[16px] text-[#1b382b] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#042217]">Meridian Technologies Legal Chambers</div>
                          <div className="text-[#506358]">1201 North Market Street, Suite 1500, Wilmington, DE</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-1">
                        <StitchIcon name="schedule" className="text-[16px] text-[#1b382b] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#042217]">Consultation Hours</div>
                          <div className="text-[#506358]">Monday – Friday • 9:00 AM – 6:00 PM EST</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security & Compliance (Expandable Card) */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StitchIcon name="shield" className="text-[18px] text-[#1b382b]" />
                        <h4 className="font-serif text-sm font-semibold text-[#042217]">
                          Security &amp; Compliance Standards
                        </h4>
                      </div>
                      <button
                        onClick={() => setShowComplianceDetails(!showComplianceDetails)}
                        className="text-xs font-semibold text-[#1b382b] hover:underline"
                      >
                        {showComplianceDetails ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>

                    <p className="text-xs text-[#506358] leading-relaxed">
                      Private, zero-retention environment compliant with Bar standards and digital privilege safeguards.
                    </p>

                    {showComplianceDetails && (
                      <div className="pt-3 border-t border-[#e2ddd5] space-y-2 text-xs text-[#424844]">
                        <div className="flex items-center justify-between py-1 border-b border-[#e2ddd5]/60">
                          <span>ABA Model Rule 1.6 &amp; Formal Opinion 477R</span>
                          <span className="font-semibold text-[#1b382b]">Verified</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[#e2ddd5]/60">
                          <span>256-Bit Hardware Enclave Encryption</span>
                          <span className="font-semibold text-[#1b382b]">AES-256</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[#e2ddd5]/60">
                          <span>SOC-2 Type II Zero-Retention Guard</span>
                          <span className="font-semibold text-[#1b382b]">Active</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span>Delaware Supreme Court Rule 64 Standards</span>
                          <span className="font-semibold text-[#1b382b]">Compliant</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* TAB 2: CREDENTIALS & COMPLIANCE */}
            {activeTab === 'credentials' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bar Admissions */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#e2ddd5]">
                    <StitchIcon name="workspace_premium" className="text-[20px] text-[#1b382b]" />
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Bar Admissions &amp; Licenses
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#424844]">
                    <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#042217]">Delaware State Bar Association</span>
                        <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">ACTIVE</span>
                      </div>
                      <div className="text-xs text-[#506358] mt-1">Bar ID #48102 • Admitted October 2008</div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#042217]">U.S. District Court (Dist. of Delaware)</span>
                        <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">ACTIVE</span>
                      </div>
                      <div className="text-xs text-[#506358] mt-1">Federal Bar Admission • Admitted May 2009</div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#042217]">New York State Bar Association</span>
                        <span className="px-2 py-0.5 rounded bg-[#d2e8d9] text-[#042217] text-[10px] font-bold">RECIPROCAL</span>
                      </div>
                      <div className="text-xs text-[#506358] mt-1">Reciprocal Admission • Corporate Counsel</div>
                    </div>
                  </div>
                </div>

                {/* Certifications & CLE Progress */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#e2ddd5]">
                    <StitchIcon name="school" className="text-[20px] text-[#1b382b]" />
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Certifications &amp; Continuing Education
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#424844]">
                    <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                      <div className="font-semibold text-[#042217]">Delaware Chancery Evaluator (Tier 1)</div>
                      <div className="text-xs text-[#506358] mt-0.5">Specialized certification in Chancery equity jurisprudence.</div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#042217]">Mandatory CLE Credits (2024–2025)</span>
                        <span className="text-xs font-bold text-[#1b382b]">4.5 / 12.0 Hours</span>
                      </div>
                      <div className="w-full bg-[#e2ddd5] h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#1b382b] h-full rounded-full" style={{ width: '37.5%' }}></div>
                      </div>
                      <div className="text-[11px] text-[#506358] mt-1">Ethics &amp; Professional Responsibility hours completed.</div>
                    </div>
                  </div>

                  {/* Security Protocol Box */}
                  <div className="p-4 rounded-lg bg-[#f0f5f0] border border-[#e2ddd5] space-y-1.5 text-xs">
                    <div className="font-semibold text-[#042217] flex items-center gap-1.5">
                      <StitchIcon name="lock" className="text-[15px] text-[#1b382b]" />
                      <span>Security &amp; Client Privilege Compliance</span>
                    </div>
                    <p className="text-[#506358] leading-relaxed">
                      Complies with Bar Council rules and ABA Formal Opinion 477R regarding encryption and electronic transmission of client confidential communications.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ACTIVITY & DOCUMENTS */}
            {activeTab === 'activity' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2ddd5] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#e2ddd5]">
                  <div>
                    <h3 className="font-serif text-lg text-[#042217] font-semibold">
                      Matter Documents &amp; Files
                    </h3>
                    <p className="text-xs text-[#506358]">
                      Documents associated with Julian Vance's active legal advisory matters.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('document-vault')}
                    className="text-xs font-semibold text-[#1b382b] hover:underline flex items-center gap-1"
                  >
                    <span>Upload Document</span>
                    <StitchIcon name="arrow_forward" className="text-[14px]" />
                  </button>
                </div>

                <div className="divide-y divide-[#e2ddd5]">
                  {[
                    {
                      name: "Meridian Corp vs. Vantage — Stock Purchase & Restrictive Covenant",
                      type: "Stock Purchase Agreement",
                      status: "Flagged: Clause 4.2 Non-Compete",
                      file: "Exec-SPA-2024.pdf",
                      action: "clause-inspector"
                    },
                    {
                      name: "Series B Profit Interests Unit Grant & Forfeiture Addendum",
                      type: "Partnership Agreement",
                      status: "Analyzed",
                      file: "SeriesB-Grant-Addendum.docx",
                      action: "document-analysis"
                    },
                    {
                      name: "Technology Transfer & Cross-Border Escrow Master Agreement",
                      type: "Technology Escrow",
                      status: "In Review",
                      file: "Escrow-TechTransfer-V2.pdf",
                      action: "document-analysis"
                    },
                    {
                      name: "Residential Tenancy Agreement (Standard 11-Month Lease)",
                      type: "Tenancy Lease",
                      status: "30-Day Notice Clause Verified",
                      file: "Residential-Lease-Standard.pdf",
                      action: "document-analysis"
                    }
                  ].map((doc, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#f0f5f0] text-[#1b382b] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <StitchIcon name="description" className="text-[18px]" />
                        </div>
                        <div>
                          <div className="font-serif text-sm font-semibold text-[#042217]">{doc.name}</div>
                          <div className="text-xs text-[#506358] mt-0.5">{doc.type} • <span className="font-mono text-[11px]">{doc.file}</span></div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <span className="px-2 py-0.5 rounded bg-[#f0f5f0] text-[#506358] text-[11px] font-medium">
                          {doc.status}
                        </span>
                        <button
                          onClick={() => onNavigate(doc.action)}
                          className="px-3 py-1.5 rounded bg-[#1b382b] text-white text-xs font-semibold hover:bg-[#142b21] transition shadow-sm"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* EDIT PROFILE MODAL */}
      {showEditModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-profile-title"
          onKeyDown={(e) => { if (e.key === 'Escape') setShowEditModal(false); }}
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-[#e2ddd5]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e2ddd5]">
              <div className="flex items-center gap-2">
                <StitchIcon name="edit" className="text-[20px] text-[#1b382b]" />
                <h3 id="edit-profile-title" className="font-serif text-lg font-bold text-[#042217]">Edit Profile Details</h3>
              </div>
              <button 
                onClick={() => setShowEditModal(false)}
                aria-label="Close edit profile dialog"
                className="text-[#506358] hover:text-[#042217] text-sm p-1 rounded hover:bg-[#f0f5f0] focus-visible:ring-2 focus-visible:ring-[#1b382b]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="mt-4 space-y-3 text-xs">
              <div>
                <label htmlFor="edit-fullname" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                  Full Name &amp; Title
                </label>
                <input
                  id="edit-fullname"
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                />
              </div>

              <div>
                <label htmlFor="edit-title" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                  Role / Designation
                </label>
                <input
                  id="edit-title"
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="edit-org" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                    Organization
                  </label>
                  <input
                    id="edit-org"
                    type="text"
                    value={editForm.organization}
                    onChange={(e) => setEditForm({ ...editForm, organization: e.target.value })}
                    className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                  />
                </div>
                <div>
                  <label htmlFor="edit-bar" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                    Bar Admission
                  </label>
                  <input
                    id="edit-bar"
                    type="text"
                    value={editForm.barNumber}
                    onChange={(e) => setEditForm({ ...editForm, barNumber: e.target.value })}
                    className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="edit-email" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    id="edit-email"
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                  />
                </div>
                <div>
                  <label htmlFor="edit-phone" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                    Phone
                  </label>
                  <input
                    id="edit-phone"
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="edit-location" className="block font-semibold text-[#506358] uppercase tracking-wider mb-1">
                  Office Location
                </label>
                <input
                  id="edit-location"
                  type="text"
                  value={editForm.location}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  className="w-full p-2.5 rounded border border-[#e2ddd5] bg-[#fbf9f5] text-[#181d1a] font-medium focus:outline-none focus:border-[#1b382b]"
                />
              </div>

              <div className="mt-5 flex items-center justify-end gap-2 pt-3 border-t border-[#e2ddd5]">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-3.5 py-1.5 rounded text-xs font-semibold text-[#506358] hover:text-[#042217]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-semibold rounded-lg shadow-sm transition"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
