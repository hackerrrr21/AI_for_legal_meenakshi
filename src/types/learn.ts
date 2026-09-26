export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  scenario: string;
  options: QuizOption[];
  xpReward: number;
}

export interface LawSection {
  id: string;
  sectionNumber: string;
  title: string;
  originalLegalText: string;
  simplifiedMeaning: string;
  whyItMatters: string;
  realWorldExample: {
    situation: string;
    outcome: string;
    keyTakeaway: string;
  };
  quiz: QuizQuestion;
  completed?: boolean;
}

export interface LawChapter {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  sections: LawSection[];
  iconName: string;
}

export interface LawTrack {
  id: string;
  title: string;
  category: 'Tenancy' | 'Employment' | 'Consumer' | 'Data Privacy' | 'Constitutional' | 'Criminal' | 'Commercial' | string;
  shortDescription: string;
  icon: string;
  color: string;
  totalXP: number;
  chapters: LawChapter[];
}

export interface TimeComparison {
  id: string;
  lawName: string;
  category: string;
  historicalPeriod: string;
  historicalProvision: string;
  amendmentReason: string;
  currentPeriod: string;
  currentProvision: string;
  practicalImpactOnYou: string;
}

export interface UserProgress {
  totalXP: number;
  streakDays: number;
  lastActiveDate: string;
  completedSectionIds: string[];
  unlockedBadges: {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt: string;
  }[];
}
