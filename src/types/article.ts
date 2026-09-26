export type ArticleCategory =
  | 'Tenant Rights'
  | 'Freelancer & Employment'
  | 'Consumer Rights'
  | 'Data Privacy & AI'
  | 'Contract Basics'
  | 'Court Rulings';

export interface LegalArticle {
  id: string;
  title: string;
  category: ArticleCategory;
  readTimeMinutes: number;
  publishedDate: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  fullBodyMarkdown: string;
  sourceCitations: {
    title: string;
    authorityOrAct: string;
    yearOrDocket: string;
  }[];
  relatedPracticeArea: string;
  isBookmarked?: boolean;
}
