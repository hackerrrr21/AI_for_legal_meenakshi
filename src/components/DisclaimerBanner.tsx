import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, ShieldCheck, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-1.5 text-xs text-amber-800 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          Educational Legal Information Platform • Not Formal Attorney Advice
        </span>
        <button 
          onClick={() => setIsDismissed(false)}
          className="text-amber-700 underline font-medium hover:text-amber-900"
          aria-label="Show full legal disclaimer"
        >
          View Disclaimer
        </button>
      </div>
    );
  }

  return (
    <aside 
      className="bg-gradient-to-r from-amber-50 via-amber-100/70 to-amber-50 border-b border-amber-300/80 px-4 py-2.5 text-amber-950 transition-all duration-200"
      aria-label="Legal Disclaimer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs md:text-sm">
        <div className="flex items-start md:items-center gap-2.5">
          <span className="p-1 rounded-full bg-amber-200 text-amber-800 mt-0.5 md:mt-0 flex-shrink-0">
            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
          </span>
          <div>
            <span className="font-semibold text-amber-900">Legal Information & Educational Notice:</span>{' '}
            AdvoChat uses artificial intelligence to help you understand legal terminology and documents.
            AdvoChat is <strong>not a law firm</strong>, does not provide legal representation, and does not replace the counsel of a licensed attorney.
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto flex-shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-medium px-2 py-1 rounded hover:bg-amber-200/50"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Less' : 'Learn More'}
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-amber-700 hover:text-amber-950 rounded hover:bg-amber-200/50"
            title="Minimize disclaimer"
            aria-label="Minimize disclaimer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-amber-200/70 text-xs text-amber-900 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white/60 p-2.5 rounded border border-amber-200">
            <strong className="block text-amber-950 font-semibold mb-1">No Attorney-Client Privilege</strong>
            Interacting with AdvoChat does not create an attorney-client relationship. Your communications are educational inquiries.
          </div>
          <div className="bg-white/60 p-2.5 rounded border border-amber-200">
            <strong className="block text-amber-950 font-semibold mb-1">Jurisdictional Variations</strong>
            Statutory laws, rent caps, and labor doctrines vary by state and municipality. Always verify local jurisdiction codes.
          </div>
          <div className="bg-white/60 p-2.5 rounded border border-amber-200">
            <strong className="block text-amber-950 font-semibold mb-1">Verify Critical Decisions</strong>
            Before signing agreements with significant financial liability, consult a licensed advocate through our lawyer directory.
          </div>
        </div>
      )}
    </aside>
  );
};
