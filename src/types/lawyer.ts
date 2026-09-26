export type LegalPracticeArea =
  | 'Real Estate & Tenancy'
  | 'Employment & Labor'
  | 'Corporate & Contracts'
  | 'Intellectual Property'
  | 'Consumer Protection & Dispute'
  | 'Civil Rights & Litigation'
  | 'Family & Succession';

export interface LawyerProfile {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  barEnrollmentNumber: string;
  yearsExperience: number;
  rating: number;
  reviewCount: number;
  practiceAreas: LegalPracticeArea[];
  primaryPracticeArea: LegalPracticeArea;
  location: {
    city: string;
    state: string;
    area: string;
    distanceKm: number;
    latitude: number;
    longitude: number;
  };
  contact: {
    phone: string;
    email: string;
    officeAddress: string;
  };
  consultationFee: {
    type: 'Free Initial (15 min)' | 'Fixed Rate' | 'Hourly';
    amountText: string;
  };
  verifiedBadge: boolean;
  languages: string[];
  education: string;
  bio: string;
  specializationHighlights: string[];
}

export interface ConsultationRequest {
  lawyerId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  issueSummary: string;
  relatedDocTitle?: string;
  preferredDate: string;
  preferredTime: string;
}
