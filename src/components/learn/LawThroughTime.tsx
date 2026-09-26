import React, { useState } from 'react';
import { History, Sparkles, Scale, Clock } from 'lucide-react';
import { TIME_COMPARISONS } from '../../data/legalKnowledge';

export const LawThroughTime: React.FC = () => {
  const [selectedLawId, setSelectedLawId] = useState<string>(TIME_COMPARISONS[0].id);

  const activeItem = TIME_COMPARISONS.find(t => t.id === selectedLawId) || TIME_COMPARISONS[0];

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-2">
            <History className="w-3.5 h-3.5 text-amber-600" />
            <span>Evolution of Legal Protections</span>
          </div>
          <h2 className="text-2xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
            Law Through Time: Then vs. Now
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            See how outdated colonial laws and legacy acts evolved to protect modern citizens, digital consumers, and tenants.
          </p>
        </div>

        {/* Law selector tabs */}
        <div className="flex flex-wrap gap-2 text-xs">
          {TIME_COMPARISONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedLawId(item.id)}
              className={`px-3 py-1.5 rounded-full font-semibold transition ${
                selectedLawId === item.id
                  ? 'bg-legal-900 text-amber-300 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Card */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Case Study: {activeItem.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-0.5">
            {activeItem.lawName}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {/* Then Column */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> Past Regime
              </span>
              <span className="text-xs font-bold text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded-md">
                {activeItem.historicalPeriod}
              </span>
            </div>

            <h4 className="font-semibold text-slate-800 text-sm">
              How the Law Used to Work:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeItem.historicalProvision}
            </p>
          </div>

          {/* Now Column */}
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Modern Protection
              </span>
              <span className="text-xs font-bold text-emerald-900 bg-emerald-200/60 px-2 py-0.5 rounded-md">
                {activeItem.currentPeriod}
              </span>
            </div>

            <h4 className="font-semibold text-slate-800 text-sm">
              Current Statutory Mandate:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeItem.currentProvision}
            </p>
          </div>
        </div>

        {/* Why the Law was Amended */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
          <strong className="text-slate-900 block font-semibold">
            ⚖️ Why Society Needed This Reform:
          </strong>
          <p className="text-slate-600">
            {activeItem.amendmentReason}
          </p>
        </div>

        {/* Practical everyday impact */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-indigo-50 border border-indigo-200 text-xs sm:text-sm text-indigo-950 flex items-start gap-3">
          <Scale className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="block font-bold text-indigo-900 mb-0.5">
              What This Means For You Today:
            </strong>
            <p>{activeItem.practicalImpactOnYou}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
