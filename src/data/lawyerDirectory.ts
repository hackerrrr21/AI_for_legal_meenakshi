import { LawyerProfile } from '../types/lawyer';

export const LAWYERS_DIRECTORY: LawyerProfile[] = [
  {
    id: 'law-1',
    name: 'Adv. Ananya Deshmukh',
    title: 'Senior Advocate - Tenancy & Real Estate Litigation',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
    barEnrollmentNumber: 'BCI/D/2012/4891',
    yearsExperience: 14,
    rating: 4.9,
    reviewCount: 128,
    primaryPracticeArea: 'Real Estate & Tenancy',
    practiceAreas: ['Real Estate & Tenancy', 'Consumer Protection & Dispute', 'Civil Rights & Litigation'],
    location: {
      city: 'Metro City Center',
      state: 'State',
      area: 'Connaught Place / Downtown',
      distanceKm: 2.4,
      latitude: 28.6315,
      longitude: 77.2167
    },
    contact: {
      phone: '+1 (555) 234-8901',
      email: 'ananya.deshmukh@legaladvocates.org',
      officeAddress: 'Chamber 402, High Court Bar Association Complex'
    },
    consultationFee: {
      type: 'Free Initial (15 min)',
      amountText: 'Free 15-min assessment / $45 thereafter'
    },
    verifiedBadge: true,
    languages: ['English', 'Hindi'],
    education: 'LL.M in Real Property & Commercial Law, NLSIU',
    bio: 'Specialized in tenant rights, illegal eviction injunctions, commercial lease disputes, and residential security deposit recovery with over 400 successful resolutions.',
    specializationHighlights: [
      'Unlawful eviction defense',
      'Security deposit recovery & escrow',
      'Lease clause negotiation',
      'Rent tribunal representation'
    ]
  },
  {
    id: 'law-2',
    name: 'Robert Vance, Esq.',
    title: 'Labor & Employment Counsel',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256',
    barEnrollmentNumber: 'NY-BAR-892415',
    yearsExperience: 11,
    rating: 4.8,
    reviewCount: 94,
    primaryPracticeArea: 'Employment & Labor',
    practiceAreas: ['Employment & Labor', 'Corporate & Contracts', 'Intellectual Property'],
    location: {
      city: 'Metro City Center',
      state: 'State',
      area: 'Financial District',
      distanceKm: 4.1,
      latitude: 28.6289,
      longitude: 77.2065
    },
    contact: {
      phone: '+1 (555) 345-6789',
      email: 'rvance@vancelawgroup.com',
      officeAddress: '88 Wall Street, 14th Floor'
    },
    consultationFee: {
      type: 'Fixed Rate',
      amountText: '$60 flat initial review'
    },
    verifiedBadge: true,
    languages: ['English', 'Spanish'],
    education: 'J.D., Columbia Law School',
    bio: 'Dedicated advocate for tech employees, contractors, and freelancers navigating non-compete challenges, severance negotiations, and intellectual property assignments.',
    specializationHighlights: [
      'Non-compete invalidation',
      'Severance & wrongful discharge',
      'Independent contractor misclassification',
      'Freelancer unpaid invoice recovery'
    ]
  },
  {
    id: 'law-3',
    name: 'Adv. Meera Sen',
    title: 'Technology & Intellectual Property Attorney',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256',
    barEnrollmentNumber: 'BCI/MH/2016/9102',
    yearsExperience: 9,
    rating: 4.95,
    reviewCount: 160,
    primaryPracticeArea: 'Intellectual Property',
    practiceAreas: ['Intellectual Property', 'Corporate & Contracts'],
    location: {
      city: 'Metro City Center',
      state: 'State',
      area: 'Cyber Hub / Tech District',
      distanceKm: 6.8,
      latitude: 28.4986,
      longitude: 77.0878
    },
    contact: {
      phone: '+1 (555) 789-0123',
      email: 'meera@sen-iplaw.in',
      officeAddress: 'Tower B, Innovation Park, 6th Floor'
    },
    consultationFee: {
      type: 'Free Initial (15 min)',
      amountText: 'Free 15-min discovery call'
    },
    verifiedBadge: true,
    languages: ['English', 'Bengali', 'Hindi'],
    education: 'B.A. LL.B (Hons), WBNUJS; LL.M in IP Law',
    bio: 'Advises startup founders, software engineers, and digital creators on NDA drafting, IP assignment covenants, and open-source licensing compliance.',
    specializationHighlights: [
      'Software copyright & patent licensing',
      'Mutual NDA drafting & vetting',
      'SaaS Master Services Agreements',
      'Trade secret protection protocols'
    ]
  },
  {
    id: 'law-4',
    name: 'Jonathan K. Sterling, Esq.',
    title: 'Consumer Protection & Dispute Specialist',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
    barEnrollmentNumber: 'CA-BAR-672109',
    yearsExperience: 16,
    rating: 4.75,
    reviewCount: 82,
    primaryPracticeArea: 'Consumer Protection & Dispute',
    practiceAreas: ['Consumer Protection & Dispute', 'Civil Rights & Litigation'],
    location: {
      city: 'Metro City Center',
      state: 'State',
      area: 'Civic Center',
      distanceKm: 3.2,
      latitude: 28.6143,
      longitude: 77.2198
    },
    contact: {
      phone: '+1 (555) 901-2345',
      email: 'jsterling@sterlingconsumerlaw.com',
      officeAddress: '500 Commonwealth Ave, Suite 310'
    },
    consultationFee: {
      type: 'Hourly',
      amountText: '$75 / hour'
    },
    verifiedBadge: true,
    languages: ['English'],
    education: 'J.D., UC Berkeley School of Law',
    bio: 'Championing consumer rights against corporate bad faith, unfair contract clauses, digital privacy violations, and warranty denials.',
    specializationHighlights: [
      'National Consumer Commission appeals',
      'Defective product liability claims',
      'E-commerce dark pattern disputes',
      'Class action advisory'
    ]
  },
  {
    id: 'law-5',
    name: 'Adv. Rajeshwar Rao',
    title: 'Commercial Contracts & Business Advisory',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
    barEnrollmentNumber: 'BCI/KA/2008/1144',
    yearsExperience: 18,
    rating: 4.9,
    reviewCount: 215,
    primaryPracticeArea: 'Corporate & Contracts',
    practiceAreas: ['Corporate & Contracts', 'Real Estate & Tenancy', 'Employment & Labor'],
    location: {
      city: 'Metro City Center',
      state: 'State',
      area: 'Old City Commercial Hub',
      distanceKm: 5.5,
      latitude: 28.6505,
      longitude: 77.2303
    },
    contact: {
      phone: '+1 (555) 456-7890',
      email: 'rao.legal@raochambers.com',
      officeAddress: '12 Chambers Road, Commercial Plaza'
    },
    consultationFee: {
      type: 'Free Initial (15 min)',
      amountText: 'Free initial telephone intake'
    },
    verifiedBadge: true,
    languages: ['English', 'Telugu', 'Hindi'],
    education: 'LL.M in Corporate Jurisprudence',
    bio: 'Over 18 years handling multi-stakeholder contracts, vendor agreements, indemnity risk capping, and commercial dispute mediation.',
    specializationHighlights: [
      'Commercial contract risk audits',
      'Limitation of liability restructuring',
      'Cross-border service agreements',
      'Arbitration & pre-litigation mediation'
    ]
  }
];

export function getLawyersByPracticeArea(area?: string): LawyerProfile[] {
  if (!area || area === 'All Practice Areas') return LAWYERS_DIRECTORY;
  return LAWYERS_DIRECTORY.filter(l => 
    l.primaryPracticeArea.toLowerCase().includes(area.toLowerCase()) ||
    l.practiceAreas.some(pa => pa.toLowerCase().includes(area.toLowerCase()))
  );
}
