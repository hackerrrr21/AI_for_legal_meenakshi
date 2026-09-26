import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Calendar, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  X,
  ExternalLink,
  Award,
  Navigation
} from 'lucide-react';
import { LAWYERS_DIRECTORY } from '../../data/lawyerDirectory';
import { LawyerProfile, LegalPracticeArea } from '../../types/lawyer';

interface FindLawyersProps {
  initialPracticeArea?: string;
  onClearInitialArea?: () => void;
}

export const FindLawyers: React.FC<FindLawyersProps> = ({
  initialPracticeArea,
  onClearInitialArea
}) => {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>(initialPracticeArea || 'All Practice Areas');
  const [maxDistanceKm, setMaxDistanceKm] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLawyerForBooking, setSelectedLawyerForBooking] = useState<LawyerProfile | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Sync initial derived practice area when coming from document analysis
  useEffect(() => {
    if (initialPracticeArea) {
      setSelectedPracticeArea(initialPracticeArea);
    }
  }, [initialPracticeArea]);

  const practiceAreas: string[] = [
    'All Practice Areas',
    'Real Estate & Tenancy',
    'Employment & Labor',
    'Corporate & Contracts',
    'Intellectual Property',
    'Consumer Protection & Dispute',
    'Civil Rights & Litigation'
  ];

  const filteredLawyers = LAWYERS_DIRECTORY.filter((lawyer) => {
    const matchesArea = selectedPracticeArea === 'All Practice Areas' ||
      lawyer.primaryPracticeArea.toLowerCase().includes(selectedPracticeArea.toLowerCase()) ||
      lawyer.practiceAreas.some(pa => pa.toLowerCase().includes(selectedPracticeArea.toLowerCase()));

    const matchesDistance = lawyer.location.distanceKm <= maxDistanceKm;

    const matchesQuery = searchQuery.trim() === '' ||
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specializationHighlights.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lawyer.location.area.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesArea && matchesDistance && matchesQuery;
  });

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedLawyerForBooking(null);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow-trust border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800">
                Verified Legal Directory
              </span>
              <span className="text-xs text-slate-500">• Bar Council Enrolled Advocates</span>
            </div>
            <h2 className="text-2xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-600" />
              Find Verified Lawyers Nearby
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Connect with vetted legal practitioners specializing in your exact contract or dispute type.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-slate-600">
            <Navigation className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>Current Location: <strong>Metro City Center (Auto-Detected)</strong></span>
          </div>
        </div>

        {/* Smart Context Derived Alert */}
        {initialPracticeArea && (
          <div className="mt-4 p-3 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between text-xs sm:text-sm text-indigo-950">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>
                <strong>Context Derived:</strong> We filtered for <strong>{initialPracticeArea}</strong> lawyers based on your analyzed contract.
              </span>
            </div>
            <button
              onClick={() => {
                setSelectedPracticeArea('All Practice Areas');
                if (onClearInitialArea) onClearInitialArea();
              }}
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline ml-2"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-trust border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search */}
        <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl border border-slate-200 px-3 py-2 text-xs sm:text-sm">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by lawyer name, keyword (e.g. deposit, non-compete), or area..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Practice Area Selector */}
        <div className="flex items-center gap-2">
          <select
            value={selectedPracticeArea}
            onChange={(e) => setSelectedPracticeArea(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {practiceAreas.map((pa) => (
              <option key={pa} value={pa}>
                {pa}
              </option>
            ))}
          </select>

          {/* Distance Radius */}
          <select
            value={maxDistanceKm}
            onChange={(e) => setMaxDistanceKm(Number(e.target.value))}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value={5}>Within 5 km</option>
            <option value={10}>Within 10 km</option>
            <option value={25}>Within 25 km</option>
          </select>
        </div>
      </div>

      {/* Interactive Map Visual + List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Simulated Map View */}
        <div className="lg:col-span-1 bg-slate-900 rounded-2xl shadow-trust border border-slate-800 p-5 text-white flex flex-col justify-between h-[450px] relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Interactive Map Area
              </span>
              <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full text-slate-300">
                {filteredLawyers.length} Advocates Nearby
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Radius: within {maxDistanceKm} km of your location</p>
          </div>

          {/* Graphical Map Representation with pins */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Interactive Simulated Pins */}
          <div className="relative z-10 flex-1 my-6 flex items-center justify-center">
            <div className="relative w-64 h-64 border border-cyan-500/30 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-36 h-36 border border-cyan-500/40 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 flex items-center justify-center text-[8px] font-bold text-slate-950">
                  You
                </div>
              </div>

              {/* Pin 1 */}
              <div className="absolute top-8 right-12 flex flex-col items-center">
                <span className="w-3 h-3 bg-amber-400 rounded-full ring-4 ring-amber-400/30" />
                <span className="text-[9px] bg-slate-900/90 px-1 rounded text-amber-300 mt-0.5 font-bold">2.4 km</span>
              </div>

              {/* Pin 2 */}
              <div className="absolute bottom-10 left-10 flex flex-col items-center">
                <span className="w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-emerald-400/30" />
                <span className="text-[9px] bg-slate-900/90 px-1 rounded text-emerald-300 mt-0.5 font-bold">4.1 km</span>
              </div>

              {/* Pin 3 */}
              <div className="absolute top-16 left-6 flex flex-col items-center">
                <span className="w-3 h-3 bg-indigo-400 rounded-full ring-4 ring-indigo-400/30" />
                <span className="text-[9px] bg-slate-900/90 px-1 rounded text-indigo-300 mt-0.5 font-bold">3.2 km</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[11px] text-slate-400 text-center bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            Click on any lawyer card to schedule a direct consultation.
          </div>
        </div>

        {/* Lawyer List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredLawyers.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
              No lawyers found matching your current filters. Try expanding the distance radius or selecting "All Practice Areas".
            </div>
          ) : (
            filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-white rounded-2xl shadow-trust border border-slate-200 p-5 hover:border-cyan-500 transition space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <img
                      src={lawyer.avatarUrl}
                      alt={lawyer.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-100 flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-base">{lawyer.name}</h4>
                        {lawyer.verifiedBadge && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full" title="Bar Council Verified">
                            <ShieldCheck className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-semibold text-slate-600 mt-0.5">
                        {lawyer.title}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1.5">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          {lawyer.rating} ({lawyer.reviewCount} reviews)
                        </span>
                        <span>•</span>
                        <span>{lawyer.yearsExperience} yrs experience</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {lawyer.location.area} ({lawyer.location.distanceKm} km away)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right sm:self-start">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg block sm:inline-block">
                      {lawyer.consultationFee.type}: {lawyer.consultationFee.amountText}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lawyer.bio}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {lawyer.specializationHighlights.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Footer and Consultation Trigger */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-slate-500">
                    Bar ID: <strong>{lawyer.barEnrollmentNumber}</strong> • Languages: {lawyer.languages.join(', ')}
                  </div>

                  <button
                    onClick={() => setSelectedLawyerForBooking(lawyer)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-legal-900 hover:bg-legal-800 text-white font-semibold shadow-sm transition"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Consultation Booking Modal */}
      {selectedLawyerForBooking && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600">
                  Book Legal Intake
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Schedule with {selectedLawyerForBooking.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLawyerForBooking(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-base">Consultation Request Sent!</h4>
                <p className="text-xs text-emerald-800">
                  {selectedLawyerForBooking.name}'s chamber will confirm your slot via email within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookConsultation} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Alex Rivera"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    defaultValue="alex.rivera@example.com"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Brief Description of Legal Need</label>
                  <textarea
                    rows={3}
                    required
                    defaultValue={`Review unfair clauses and lock-in penalties in ${initialPracticeArea || 'agreement'}.`}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Time Slot</label>
                    <select className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>10:00 AM - 10:30 AM</option>
                      <option>02:00 PM - 02:30 PM</option>
                      <option>05:00 PM - 05:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                  Fee: <strong>{selectedLawyerForBooking.consultationFee.amountText}</strong>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedLawyerForBooking(null)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold shadow-sm transition"
                  >
                    Confirm & Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
