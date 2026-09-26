import { describe, it, expect } from 'vitest';
import { SAMPLE_DOCUMENTS } from '../../src/data/sampleDocuments';
import { LAWYERS_DIRECTORY } from '../../src/data/lawyerDirectory';
import { LAW_TRACKS, TIME_COMPARISONS } from '../../src/data/legalKnowledge';
import { compareLegalDocuments } from '../../src/services/documentComparison';
import { runDeterministicLegalAnalysis } from '../../src/services/aiService';
import { isValidEmail, isValidPhone, sanitizeUserInput } from '../../src/utils/textSanitizer';

describe('End-to-End User Workflows & State Transitions', () => {
  describe('Workflow 1: User Onboarding & Authentication Validation', () => {
    it('validates proper email formats for advocate and citizen registration', () => {
      expect(isValidEmail('counsel.sharma@delhibar.org')).toBe(true);
      expect(isValidEmail('advocate.verma@supremecourt.nic.in')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('@noshard.com')).toBe(false);
      expect(isValidEmail('counsel@')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    it('validates phone number input format', () => {
      expect(isValidPhone('+91 98765 43210')).toBe(true);
      expect(isValidPhone('9876543210')).toBe(true);
      expect(isValidPhone('123')).toBe(false);
      expect(isValidPhone('abcde-phone')).toBe(false);
    });

    it('sanitizes user profile inputs removing dangerous control characters', () => {
      const input = "  Adv. Rahul Mehta <script>alert('xss')</script>  ";
      const clean = sanitizeUserInput(input);
      expect(clean).not.toContain('<script>');
      expect(clean).toContain('Adv. Rahul Mehta');
    });
  });

  describe('Workflow 2: Document Vault Loading & Selection', () => {
    it('provides predefined standard legal templates across multiple practice areas', () => {
      expect(SAMPLE_DOCUMENTS.length).toBeGreaterThanOrEqual(3);
      const categories = SAMPLE_DOCUMENTS.map(d => d.category);
      expect(categories).toContain('Real Estate & Tenancy');
      expect(categories).toContain('Employment & Labor');
      expect(categories).toContain('Intellectual Property');
    });

    it('ensures sample lease agreements have valid counterpart links for comparison', () => {
      const standardLease = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-standard');
      const harshLease = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-harsh');
      
      expect(standardLease).toBeDefined();
      expect(harshLease).toBeDefined();
      expect(standardLease?.comparisonCounterpartId).toBe('sample-lease-harsh');
      expect(harshLease?.comparisonCounterpartId).toBe('sample-lease-standard');
    });
  });

  describe('Workflow 3: AI Document Analysis Pipeline', () => {
    it('performs comprehensive AI risk analysis on residential lease agreement', () => {
      const lease = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-standard');
      expect(lease).toBeDefined();

      const analysis = runDeterministicLegalAnalysis(lease!.content, 'Lease.txt', 1500);
      
      expect(analysis.overallRiskLevel).toBeDefined();
      expect(analysis.clauses.length).toBeGreaterThan(0);
      expect(analysis.summary).toBeDefined();
      expect(analysis.obligations.length).toBeGreaterThan(0);
      expect(analysis.actionChecklist.length).toBeGreaterThan(0);
      expect(analysis.derivedPracticeArea).toBe('Real Estate & Tenancy');
    });

    it('analyzes freelance software contract and identifies restrictive covenant risks', () => {
      const freelance = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-freelance');
      expect(freelance).toBeDefined();

      const analysis = runDeterministicLegalAnalysis(freelance!.content, 'Contractor.txt', 2500);
      const nonCompeteConcern = analysis.concerns.find(c => 
        c.title.toLowerCase().includes('compete') || 
        c.title.toLowerCase().includes('restrictive')
      );
      
      expect(nonCompeteConcern).toBeDefined();
      expect(nonCompeteConcern?.severity).toBe('high');
      expect(analysis.derivedPracticeArea).toBe('Employment & Labor');
    });
  });

  describe('Workflow 4: Document Redline & Counterproposal Comparison', () => {
    it('accurately identifies risk escalation when comparing standard lease with revised draft', () => {
      const standardDoc = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-standard')!;
      const harshDoc = SAMPLE_DOCUMENTS.find(d => d.id === 'sample-lease-harsh')!;

      const diffResult = compareLegalDocuments(
        standardDoc.title,
        standardDoc.content,
        harshDoc.title,
        harshDoc.content
      );

      expect(diffResult.overallRiskImpact).toBe('higher_risk');
      expect(diffResult.differences.length).toBeGreaterThanOrEqual(2);

      // Verify lock-in modification detected
      const lockInDiff = diffResult.differences.find(d => d.clauseTitle.includes('Termination') || d.docBContent.includes('lock-in'));
      expect(lockInDiff).toBeDefined();
      expect(lockInDiff?.riskChange).toBe('increased');

      // Verify unilateral indemnity addition detected
      const indemnityDiff = diffResult.differences.find(d => d.clauseTitle.includes('Indemnif'));
      expect(indemnityDiff).toBeDefined();
      expect(indemnityDiff?.riskChange).toBe('increased');

      // Verify recommendations exist
      expect(diffResult.keyRecommendations.length).toBeGreaterThan(0);
    });
  });

  describe('Workflow 5: Legal Learning Track & Doctrinal Quiz Execution', () => {
    it('loads Constitutional Law track with chapters, sections, and quiz data', () => {
      const constTrack = LAW_TRACKS.find(t => t.id === 'track-constitution');
      expect(constTrack).toBeDefined();
      expect(constTrack?.chapters.length).toBeGreaterThan(0);

      const chapter1 = constTrack?.chapters[0];
      expect(chapter1?.sections.length).toBeGreaterThan(0);

      const sectionWithQuiz = chapter1?.sections.find(s => s.quiz !== undefined);
      expect(sectionWithQuiz).toBeDefined();
      expect(sectionWithQuiz?.quiz?.prompt).toBeDefined();
      expect(sectionWithQuiz?.quiz?.options.length).toBeGreaterThanOrEqual(2);

      // Verify correct option exists with explanation
      const correctOption = sectionWithQuiz?.quiz?.options.find(o => o.isCorrect === true);
      expect(correctOption).toBeDefined();
      expect(correctOption?.explanation).toBeDefined();
    });

    it('verifies timeline comparisons between historical colonial and modern statutes', () => {
      expect(TIME_COMPARISONS.length).toBeGreaterThanOrEqual(4);
      const bnsComp = TIME_COMPARISONS.find(tc => tc.id === 'tc-ipc-bns');
      expect(bnsComp).toBeDefined();
      expect(bnsComp?.historicalPeriod).toContain('IPC 1860');
      expect(bnsComp?.currentPeriod).toContain('BNS');
      expect(bnsComp?.practicalImpactOnYou).toBeDefined();
    });
  });

  describe('Workflow 6: Find Legal Counsel & Lawyer Directory Discovery', () => {
    it('allows searching and filtering advocates by practice area and jurisdiction', () => {
      expect(LAWYERS_DIRECTORY.length).toBeGreaterThan(0);

      const tenancyLawyers = LAWYERS_DIRECTORY.filter(l => 
        l.primaryPracticeArea === 'Real Estate & Tenancy' || 
        l.practiceAreas.includes('Real Estate & Tenancy')
      );
      expect(tenancyLawyers.length).toBeGreaterThan(0);

      const verifiedLawyers = LAWYERS_DIRECTORY.filter(l => l.verifiedBadge === true);
      expect(verifiedLawyers.length).toBeGreaterThan(0);

      // Verify all advocates have bar enrollment numbers
      for (const lawyer of LAWYERS_DIRECTORY) {
        expect(lawyer.barEnrollmentNumber).toBeDefined();
        expect(lawyer.yearsExperience).toBeGreaterThan(0);
        expect(lawyer.contact.email).toBeDefined();
        expect(lawyer.consultationFee.amountText).toBeDefined();
      }
    });
  });
});
