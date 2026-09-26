import React, { useState } from 'react';
import { StitchHeader } from './components/common/StitchHeader';
import { StitchFooter } from './components/common/StitchFooter';
import { UserFlowBar, SCREEN_FLOW } from './components/common/UserFlowBar';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { AccessibilityToolbar } from './components/common/AccessibilityToolbar';
import { UserProfile } from './types/user';

import { Screen01_Splash } from './components/screens/Screen01_Splash';
import { Screen02_Login } from './components/screens/Screen02_Login';
import { Screen03_SSO } from './components/screens/Screen03_SSO';
import { Screen04_Dashboard } from './components/screens/Screen04_Dashboard';
import { Screen05_DocumentVault } from './components/screens/Screen05_DocumentVault';
import { Screen06_AIAssistant } from './components/screens/Screen06_AIAssistant';
import { Screen07_DocumentAnalysis } from './components/screens/Screen07_DocumentAnalysis';
import { Screen08_ClauseInspector } from './components/screens/Screen08_ClauseInspector';
import { Screen09_DocumentComparison } from './components/screens/Screen09_DocumentComparison';
import { Screen10_ActionCenter } from './components/screens/Screen10_ActionCenter';
import { Screen11_DocumentArchive } from './components/screens/Screen11_DocumentArchive';
import { Screen12_LawLibrary } from './components/screens/Screen12_LawLibrary';
import { Screen13_LawChapter } from './components/screens/Screen13_LawChapter';
import { Screen14_LawLesson } from './components/screens/Screen14_LawLesson';
import { Screen15_DoctrinalQuiz } from './components/screens/Screen15_DoctrinalQuiz';
import { Screen16_FindCounsel } from './components/screens/Screen16_FindCounsel';
import { Screen17_LawyerProfile } from './components/screens/Screen17_LawyerProfile';
import { Screen18_LegalUpdates } from './components/screens/Screen18_LegalUpdates';
import { Screen19_ArticleDetails } from './components/screens/Screen19_ArticleDetails';
import { Screen20_UserProfile } from './components/screens/Screen20_UserProfile';
import { Screen21_Settings } from './components/screens/Screen21_Settings';
import { Screen22_TermsCovenant } from './components/screens/Screen22_TermsCovenant';
import { Screen23_LegalDisclaimer } from './components/screens/Screen23_LegalDisclaimer';

import { SAMPLE_DOCUMENTS } from './data/sampleDocuments';
import { analyzeDocument } from './services/aiService';
import { chunkLegalDocument } from './services/ragService';
import { DocumentAnalysisResult, RAGChunk } from './types/legal';

export const App: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState<number>(1); // Start on Screen 1 (Splash Screen)
  const [currentScreenId, setCurrentScreenId] = useState<string>('splash');
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Eleanor Vance, Esq.",
    email: "vance@vancestanding.law",
    role: "Senior Partner, Chancery Practice",
    avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
  });

  const [userXP, setUserXP] = useState<number>(450);
  const [streakDays] = useState<number>(5);
  const [activeAnalysis, setActiveAnalysis] = useState<DocumentAnalysisResult | null>(null);
  const [activeDocText, setActiveDocText] = useState<string>('');
  const [chunks, setChunks] = useState<RAGChunk[]>([]);

  const navigateTo = (pathOrId: string) => {
    const aliasMap: Record<string, string> = {
      'home': 'dashboard',
      'vault': 'document-vault',
      'assistant': 'ai-assistant',
      'analysis': 'document-analysis',
      'inspector': 'clause-inspector',
      'compare': 'doc-comparison',
      'actions': 'action-center',
      'archive': 'document-archive',
      'library': 'law-library',
      'learn': 'law-library',
      'chapter': 'law-chapter',
      'lesson': 'law-lesson',
      'quiz': 'doctrinal-quiz',
      'counsel': 'find-counsel',
      'lawyers': 'find-counsel',
      'lawyer': 'lawyer-profile',
      'updates': 'legal-updates',
      'articles': 'legal-updates',
      'article': 'article-details',
      'profile': 'user-profile',
      'account': 'user-profile',
      'terms': 'terms-covenant',
      'disclaimer': 'legal-disclaimer',
      'help': 'legal-disclaimer'
    };

    const targetId = aliasMap[pathOrId] || pathOrId;
    const match = SCREEN_FLOW.find(s => s.id === targetId);
    if (match) {
      setCurrentScreenIndex(match.index);
      setCurrentScreenId(match.id);
    } else {
      const idx = parseInt(pathOrId, 10);
      if (!isNaN(idx) && idx >= 1 && idx <= SCREEN_FLOW.length) {
        setCurrentScreenIndex(idx);
        setCurrentScreenId(SCREEN_FLOW[idx - 1].id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateByIndex = (index: number) => {
    if (index >= 1 && index <= SCREEN_FLOW.length) {
      setCurrentScreenIndex(index);
      setCurrentScreenId(SCREEN_FLOW[index - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuickLoadSample = async (sampleId: string) => {
    const sample = SAMPLE_DOCUMENTS.find(s => s.id === sampleId) || SAMPLE_DOCUMENTS[0];
    const text = sample.content;
    const docChunks = chunkLegalDocument(text);
    setActiveDocText(text);
    setChunks(docChunks);

    const result = await analyzeDocument(text, `${sample.title}.txt`, new Blob([text]).size);
    setActiveAnalysis(result);
    navigateTo('document-analysis');
  };

  const handleCustomDocument = async (title: string, text: string) => {
    const docChunks = chunkLegalDocument(text);
    setActiveDocText(text);
    setChunks(docChunks);

    const result = await analyzeDocument(text, `${title}.txt`, new Blob([text]).size);
    setActiveAnalysis(result);
    navigateTo('document-analysis');
  };

  const isAuthScreen = currentScreenIndex <= 3;

  return (
    <div className="min-h-screen flex flex-col bg-[#f6fbf5] text-[#181d1a] font-sans selection:bg-[#1b382b] selection:text-white pb-20">
      {/* Skip to Main Content Link for Keyboard and Screen Reader Users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1b382b] focus:text-white focus:font-semibold focus:rounded focus:shadow-xl focus:ring-2 focus:ring-amber-400"
      >
        Skip to main content
      </a>

      {/* Floating Inclusive Accessibility Toolbar */}
      <AccessibilityToolbar />
      {/* 1. Counsel Editorial Top Header (on post-auth screens) */}
      {!isAuthScreen && (
        <StitchHeader
          currentPath={currentScreenId}
          onNavigate={navigateTo}
          userProfile={userProfile}
          onSwitchProfile={setUserProfile}
        />
      )}

      {/* 2. Active Screen In Numbered Flow */}
      <main className="flex-1 w-full" id="main-content">
        <ErrorBoundary>
        {currentScreenId === 'splash' && (
          <Screen01_Splash
            onNavigate={navigateTo}
            onProceed={() => navigateTo('login')}
            onDirectLogin={() => navigateTo('dashboard')}
          />
        )}
        {currentScreenId === 'login' && (
          <Screen02_Login
            onNavigate={navigateTo}
            onLoginSuccess={(p) => { setUserProfile(p); navigateTo('dashboard'); }}
            onGoToSSO={() => navigateTo('sso')}
            onBackToSplash={() => navigateTo('splash')}
          />
        )}
        {currentScreenId === 'sso' && (
          <Screen03_SSO
            onNavigate={navigateTo}
            onConfirmSSO={() => navigateTo('dashboard')}
            onCancelSSO={() => navigateTo('login')}
          />
        )}
        {currentScreenId === 'dashboard' && (
          <Screen04_Dashboard
            onNavigate={navigateTo}
            userProfile={userProfile}
            onQuickLoadSample={handleQuickLoadSample}
          />
        )}
        {currentScreenId === 'document-vault' && (
          <Screen05_DocumentVault
            onNavigate={navigateTo}
            userProfile={userProfile}
            onQuickLoadSample={handleQuickLoadSample}
            onCustomDocument={handleCustomDocument}
          />
        )}
        {currentScreenId === 'ai-assistant' && (
          <Screen06_AIAssistant
            onNavigate={navigateTo}
            userProfile={userProfile}
            activeAnalysis={activeAnalysis}
            activeDocText={activeDocText}
            chunks={chunks}
          />
        )}
        {currentScreenId === 'document-analysis' && (
          <Screen07_DocumentAnalysis
            onNavigate={navigateTo}
            userProfile={userProfile}
            activeAnalysis={activeAnalysis}
          />
        )}
        {currentScreenId === 'clause-inspector' && (
          <Screen08_ClauseInspector
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'doc-comparison' && (
          <Screen09_DocumentComparison
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'action-center' && (
          <Screen10_ActionCenter
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'document-archive' && (
          <Screen11_DocumentArchive
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'law-library' && (
          <Screen12_LawLibrary
            onNavigate={navigateTo}
            userProfile={userProfile}
            userXP={userXP}
            streakDays={streakDays}
          />
        )}
        {currentScreenId === 'law-chapter' && (
          <Screen13_LawChapter
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'law-lesson' && (
          <Screen14_LawLesson
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'doctrinal-quiz' && (
          <Screen15_DoctrinalQuiz
            onNavigate={navigateTo}
            userProfile={userProfile}
            onAddXP={(xp: number) => setUserXP(prev => prev + xp)}
          />
        )}
        {currentScreenId === 'find-counsel' && (
          <Screen16_FindCounsel
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'lawyer-profile' && (
          <Screen17_LawyerProfile
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'legal-updates' && (
          <Screen18_LegalUpdates
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'article-details' && (
          <Screen19_ArticleDetails
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'user-profile' && (
          <Screen20_UserProfile
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'settings' && (
          <Screen21_Settings
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'terms-covenant' && (
          <Screen22_TermsCovenant
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
        {currentScreenId === 'legal-disclaimer' && (
          <Screen23_LegalDisclaimer
            onNavigate={navigateTo}
            userProfile={userProfile}
          />
        )}
              </ErrorBoundary>
      </main>

      {/* 3. Counsel Editorial Institutional Footer */}
      {!isAuthScreen && (
        <StitchFooter onNavigate={navigateTo} />
      )}

      {/* 4. Numbered User Flow Controller Bar (All 23 Stitch Screens) */}
      <UserFlowBar
        currentScreenIndex={currentScreenIndex}
        onNavigateByIndex={navigateByIndex}
        onNavigateById={navigateTo}
      />
    </div>
  );
};

export default App;
