import React, { useState } from 'react';
import { 
  CheckSquare, 
  Calendar, 
  DollarSign, 
  AlertCircle, 
  Clock, 
  UserCheck, 
  Building 
} from 'lucide-react';
import { ObligationItem, KeyDateAmountItem } from '../../types/legal';

interface ObligationsTimelineProps {
  obligations: ObligationItem[];
  keyDatesAndAmounts: KeyDateAmountItem[];
  firstPartyName: string;
  secondPartyName: string;
}

export const ObligationsTimeline: React.FC<ObligationsTimelineProps> = ({
  obligations,
  keyDatesAndAmounts,
  firstPartyName,
  secondPartyName
}) => {
  const [filterParty, setFilterParty] = useState<'all' | 'user' | 'counterparty'>('all');

  const filteredObligations = obligations.filter(ob => {
    if (filterParty === 'all') return true;
    return ob.party === filterParty;
  });

  return (
    <div className="space-y-6">
      {/* Key Dates & Financial Amounts Section */}
      <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          Key Financial Amounts & Critical Deadlines
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Itemized schedule of financial commitments, security deposits, and operational notice periods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyDatesAndAmounts.map((item) => {
            const isAmount = item.type === 'amount';
            const isPeriod = item.type === 'period';
            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition ${
                  item.isCritical
                    ? 'border-indigo-200 bg-indigo-50/30'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider">
                    {isAmount ? <DollarSign className="w-3.5 h-3.5 text-emerald-600" /> : <Clock className="w-3.5 h-3.5 text-indigo-600" />}
                    {item.label}
                  </span>
                  {item.isCritical && (
                    <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold">
                      Key Term
                    </span>
                  )}
                </div>

                <div className="text-xl font-bold text-slate-900 mt-1 font-mono">
                  {item.value}
                </div>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {item.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Obligations Matrix Section */}
      <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-indigo-600" />
              Contractual Obligations Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Who is responsible for what, when deliverables are due, and the legal consequences of breach.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="inline-flex rounded-lg bg-slate-100 p-1 text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setFilterParty('all')}
              className={`px-3 py-1.5 rounded-md transition ${
                filterParty === 'all' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600'
              }`}
            >
              All Obligations
            </button>
            <button
              onClick={() => setFilterParty('user')}
              className={`px-3 py-1.5 rounded-md transition ${
                filterParty === 'user' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600'
              }`}
            >
              Your Obligations
            </button>
            <button
              onClick={() => setFilterParty('counterparty')}
              className={`px-3 py-1.5 rounded-md transition ${
                filterParty === 'counterparty' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600'
              }`}
            >
              Counterparty Obligations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredObligations.map((ob) => {
            const isUser = ob.party === 'user';
            return (
              <div
                key={ob.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                    isUser
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {isUser ? <UserCheck className="w-3.5 h-3.5" /> : <Building className="w-3.5 h-3.5" />}
                    Responsible: {ob.partyName}
                  </span>

                  {ob.deadlineOrFrequency && (
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {ob.deadlineOrFrequency}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-800">
                  {ob.description}
                </p>

                {ob.consequenceIfBreached && (
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100 text-xs text-rose-800 flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>If Breached:</strong> {ob.consequenceIfBreached}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
