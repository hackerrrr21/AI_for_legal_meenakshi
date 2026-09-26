import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Flame, 
  Zap, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  HelpCircle, 
  History, 
  Sparkles, 
  Check, 
  X, 
  ChevronRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { LAW_TRACKS } from '../../data/legalKnowledge';
import { LawTrack, LawSection, QuizQuestion, QuizOption } from '../../types/learn';
import { LawThroughTime } from './LawThroughTime';

interface LearnLawProps {
  userXP: number;
  onAddXP: (xp: number) => void;
  streakDays: number;
}

export const LearnLaw: React.FC<LearnLawProps> = ({
  userXP,
  onAddXP,
  streakDays
}) => {
  const [activeTrackId, setActiveTrackId] = useState<string>(LAW_TRACKS[0].id);
  const [selectedSection, setSelectedSection] = useState<LawSection | null>(null);
  const [lessonStep, setLessonStep] = useState<number>(1);
  const [selectedQuizOption, setSelectedQuizOption] = useState<QuizOption | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [completedSectionIds, setCompletedSectionIds] = useState<string[]>(['sec-deposit-limits']);
  const [showLawThroughTime, setShowLawThroughTime] = useState<boolean>(false);

  const activeTrack = LAW_TRACKS.find(t => t.id === activeTrackId) || LAW_TRACKS[0];

  const handleStartLesson = (section: LawSection) => {
    setSelectedSection(section);
    setLessonStep(1);
    setSelectedQuizOption(null);
    setIsQuizSubmitted(false);
  };

  const handleQuizSubmit = () => {
    if (!selectedQuizOption) return;
    setIsQuizSubmitted(true);
    if (selectedQuizOption.isCorrect && selectedSection) {
      if (!completedSectionIds.includes(selectedSection.id)) {
        onAddXP(selectedSection.quiz.xpReward);
        setCompletedSectionIds(prev => [...prev, selectedSection.id]);
      }
    }
  };

  const handleFinishLesson = () => {
    setSelectedSection(null);
    setLessonStep(1);
  };

  if (showLawThroughTime) {
    return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        <button
          onClick={() => setShowLawThroughTime(false)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Interactive Curriculum
        </button>
        <LawThroughTime />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header & Gamification Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-trust border border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              Duolingo-Style Legal Mastery
            </span>
            <span className="text-xs text-slate-500">• 5-Minute Micro-Lessons</span>
          </div>
          <h2 className="text-2xl font-bold text-legal-900 tracking-tight">
            Learn Law: Rights Every Citizen Should Know
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Bite-sized interactive lessons covering tenancy rights, non-competes, consumer protections, and digital privacy.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl text-amber-900 font-bold text-sm">
            <Flame className="w-5 h-5 fill-amber-500 text-amber-600 animate-bounce" />
            <div>
              <div className="text-[10px] text-amber-700 uppercase tracking-wider font-semibold">Streak</div>
              <div>{streakDays} Days</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3 py-2 rounded-xl text-cyan-900 font-bold text-sm">
            <Zap className="w-5 h-5 fill-cyan-500 text-cyan-600" />
            <div>
              <div className="text-[10px] text-cyan-700 uppercase tracking-wider font-semibold">Total XP</div>
              <div>{userXP} XP</div>
            </div>
          </div>

          <button
            onClick={() => setShowLawThroughTime(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold shadow-sm transition"
          >
            <History className="w-4 h-4" />
            <span>Law Through Time</span>
          </button>
        </div>
      </div>

      {/* Track Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {LAW_TRACKS.map((track) => {
          const isSelected = track.id === activeTrackId;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`p-4 rounded-xl border text-left transition flex items-start gap-3.5 ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/40 shadow-sm ring-1 ring-indigo-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2 rounded-lg text-white font-bold bg-gradient-to-tr ${track.color}`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                  {track.category}
                </span>
                <h4 className="text-sm font-bold text-slate-800 truncate">{track.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{track.shortDescription}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Curriculum Chapters and Section Path */}
      <div className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 md:p-8 space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
            Active Learning Track
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{activeTrack.title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">{activeTrack.shortDescription}</p>
        </div>

        {activeTrack.chapters.map((chapter) => (
          <div key={chapter.id} className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Chapter {chapter.chapterNumber}
                </span>
                <h4 className="text-lg font-bold text-slate-800">{chapter.title}</h4>
                <p className="text-xs text-slate-500">{chapter.description}</p>
              </div>
            </div>

            {/* Duolingo style section nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {chapter.sections.map((section) => {
                const isCompleted = completedSectionIds.includes(section.id);
                return (
                  <div
                    key={section.id}
                    onClick={() => handleStartLesson(section)}
                    className="group p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 bg-slate-50/50 hover:bg-indigo-50/20 cursor-pointer transition shadow-sm hover:shadow flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm ${
                      isCompleted 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-indigo-600 text-white'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                          {section.sectionNumber}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Mastered
                          </span>
                        )}
                      </div>

                      <h5 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 group-hover:text-indigo-700">
                        {section.title}
                      </h5>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {section.simplifiedMeaning}
                      </p>

                      <div className="mt-3 flex items-center justify-between text-xs font-semibold text-indigo-600">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Zap className="w-3.5 h-3.5 text-cyan-500" /> +{section.quiz.xpReward} XP
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          {isCompleted ? 'Review Lesson' : 'Start Lesson'} <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Step-by-Step Interactive Lesson Modal */}
      {selectedSection && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8">
            {/* Top progress stepper */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                  {selectedSection.sectionNumber}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{selectedSection.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">Step {lessonStep} of 5</span>
                <button
                  onClick={() => setSelectedSection(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                  aria-label="Close lesson"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Step 1: Original text */}
            {lessonStep === 1 && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                  <Scale className="w-3.5 h-3.5" /> 1. The Statutory Language
                </div>
                <h4 className="text-xl font-bold text-slate-900">How the Law is Written in the Books</h4>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-serif text-slate-800 text-sm leading-relaxed italic">
                  "{selectedSection.originalLegalText}"
                </div>
                <p className="text-xs text-slate-500">
                  Legal statutes are often packed with archaic phrases. Click next to see what this actually means in plain English!
                </p>
              </div>
            )}

            {/* Step 2: Simplified meaning */}
            {lessonStep === 2 && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 2. Plain-English Meaning
                </div>
                <h4 className="text-xl font-bold text-slate-900">What This Means For Everyday Citizens</h4>
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-slate-800 text-sm sm:text-base leading-relaxed">
                  {selectedSection.simplifiedMeaning}
                </div>
              </div>
            )}

            {/* Step 3: Why it matters */}
            {lessonStep === 3 && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> 3. Why It Matters
                </div>
                <h4 className="text-xl font-bold text-slate-900">Why You Must Know This Right</h4>
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-slate-800 text-sm sm:text-base leading-relaxed">
                  {selectedSection.whyItMatters}
                </div>
              </div>
            )}

            {/* Step 4: Real-world example */}
            {lessonStep === 4 && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" /> 4. Real-World Case Scenario
                </div>
                <h4 className="text-xl font-bold text-slate-900">Practical Situation</h4>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <strong>The Situation:</strong> {selectedSection.realWorldExample.situation}
                </div>
                <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 text-xs sm:text-sm text-indigo-950 space-y-2">
                  <strong>The Legal Outcome:</strong> {selectedSection.realWorldExample.outcome}
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold">
                  💡 Key Takeaway: {selectedSection.realWorldExample.keyTakeaway}
                </div>
              </div>
            )}

            {/* Step 5: Interactive Quiz */}
            {lessonStep === 5 && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                  <HelpCircle className="w-3.5 h-3.5" /> 5. Micro-Quiz: Test Your Understanding
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {selectedSection.quiz.prompt}
                </h4>
                <p className="text-xs text-slate-500 italic">
                  Scenario: {selectedSection.quiz.scenario}
                </p>

                <div className="space-y-2.5 pt-2">
                  {selectedSection.quiz.options.map((option) => {
                    const isSelected = selectedQuizOption?.id === option.id;
                    let style = 'border-slate-200 hover:border-indigo-400 bg-white';
                    if (isQuizSubmitted) {
                      if (option.isCorrect) {
                        style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                      } else if (isSelected && !option.isCorrect) {
                        style = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-500';
                      }
                    } else if (isSelected) {
                      style = 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-500';
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => !isQuizSubmitted && setSelectedQuizOption(option)}
                        disabled={isQuizSubmitted}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-start gap-3 ${style}`}
                      >
                        <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{option.text}</div>
                          {isQuizSubmitted && (
                            <div className="text-xs mt-1.5 font-normal text-slate-600">
                              {option.explanation}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isQuizSubmitted && (
                  <div className={`p-4 rounded-xl border text-center space-y-1 ${
                    selectedQuizOption?.isCorrect
                      ? 'bg-emerald-100/70 border-emerald-300 text-emerald-900'
                      : 'bg-rose-100/70 border-rose-300 text-rose-900'
                  }`}>
                    <div className="font-bold text-sm">
                      {selectedQuizOption?.isCorrect ? '🎉 Correct Answer! +25 XP Earned!' : 'Not quite right. Review the explanation above.'}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                onClick={() => setLessonStep(prev => Math.max(1, prev - 1))}
                disabled={lessonStep === 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>

              {lessonStep < 5 && (
                <button
                  onClick={() => setLessonStep(prev => prev + 1)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {lessonStep === 5 && !isQuizSubmitted && (
                <button
                  onClick={handleQuizSubmit}
                  disabled={!selectedQuizOption}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white shadow-sm transition"
                >
                  Submit Answer
                </button>
              )}

              {lessonStep === 5 && isQuizSubmitted && (
                <button
                  onClick={handleFinishLesson}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-legal-900 hover:bg-legal-800 text-amber-300 shadow-sm transition"
                >
                  Complete Lesson
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
