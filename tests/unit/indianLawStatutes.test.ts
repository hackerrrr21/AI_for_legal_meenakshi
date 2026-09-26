import { describe, it, expect } from 'vitest';
import { 
  INDIAN_KEY_STATUTES, 
  IPC_TO_BNS_MAPPING, 
  INDIAN_LEGAL_TREATISES 
} from '../../src/data/indianLawCorpus';
import { LAW_TRACKS, TIME_COMPARISONS } from '../../src/data/legalKnowledge';
import { askContextQuestion } from '../../src/services/aiService';

describe('Indian Legal Jurisprudence & Statutory Accuracy', () => {
  describe('Constitutional Framework & Part III Fundamental Rights', () => {
    it('verifies Article 21 guarantees life, personal liberty, and Maneka Gandhi fair procedure doctrine', () => {
      const art21 = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle === 'Article 21');
      expect(art21).toBeDefined();
      expect(art21?.title).toContain('Protection of Life and Personal Liberty');
      expect(art21?.plainMeaning).toContain('Maneka Gandhi');
      expect(art21?.plainMeaning).toContain('fair, just, and non-arbitrary');
      expect(art21?.landmarkPrecedents).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Maneka Gandhi v. Union of India'),
          expect.stringContaining('K.S. Puttaswamy v. Union of India')
        ])
      );
    });

    it('verifies Article 19(1)(g) economic liberty and proportionality restrictions under 19(6)', () => {
      const art19 = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle.includes('19(1)(g)'));
      expect(art19).toBeDefined();
      expect(art19?.category).toBe('Constitutional');
      expect(art19?.plainMeaning).toContain('earn their livelihood');
      expect(art19?.landmarkPrecedents).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Modern Dental College')
        ])
      );
    });

    it('verifies Article 32 & 226 Constitutional Writ Remedies', () => {
      const writs = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle.includes('Article 32'));
      expect(writs).toBeDefined();
      expect(writs?.plainMeaning).toContain('Heart and Soul');
      expect(writs?.text).toMatch(/(habeas corpus|mandamus|certiorari|prohibition|quo warranto)/i);
      expect(writs?.landmarkPrecedents).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Kesavananda Bharati'),
          expect.stringContaining('L. Chandra Kumar')
        ])
      );
    });
  });

  describe('Bharatiya Nyaya Sanhita (BNS 2023) vs IPC Re-codification Mappings', () => {
    it('accurately maps IPC 302 (Murder) to BNS 103 with Mob Lynching provision', () => {
      const murder = IPC_TO_BNS_MAPPING.find(m => m.ipcSection.includes('302'));
      expect(murder).toBeDefined();
      expect(murder?.bnsSection).toBe('BNS Section 103(1)');
      expect(murder?.offense).toBe('Murder');
      expect(murder?.keyChanges).toContain('mob lynching');
    });

    it('accurately maps IPC 420 (Cheating) to BNS 318(4) including electronic fund diversion', () => {
      const cheating = IPC_TO_BNS_MAPPING.find(m => m.ipcSection.includes('420'));
      expect(cheating).toBeDefined();
      expect(cheating?.bnsSection).toBe('BNS Section 318(4)');
      expect(cheating?.punishmentComparison).toContain('7 years');
    });

    it('accurately maps IPC 406 (Criminal Breach of Trust) to BNS 316 with increased penalty', () => {
      const cbt = IPC_TO_BNS_MAPPING.find(m => m.ipcSection.includes('406'));
      expect(cbt).toBeDefined();
      expect(cbt?.bnsSection).toBe('BNS Section 316');
      expect(cbt?.punishmentComparison).toContain('5 years');
    });

    it('documents repeal of colonial Sedition (IPC 124A) and replacement with BNS 152', () => {
      const sedition = IPC_TO_BNS_MAPPING.find(m => m.ipcSection.includes('124A'));
      expect(sedition).toBeDefined();
      expect(sedition?.bnsSection).toBe('BNS Section 152');
      expect(sedition?.keyChanges).toContain('Criticism of Government without incitement to violence is protected');
    });

    it('verifies BNS Section 4(f) Community Service as reformative sanction for petty offenses', () => {
      const commService = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle === 'Section 4(f)');
      expect(commService).toBeDefined();
      expect(commService?.title).toContain('Community Service');
      expect(commService?.category).toBe('Criminal (BNS)');
      expect(commService?.plainMeaning).toContain('statutory sentencing alternative');
    });

    it('verifies BNS Section 111 codified definition of Organized Crime', () => {
      const orgCrime = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle === 'Section 111');
      expect(orgCrime).toBeDefined();
      expect(orgCrime?.title).toContain('Organized Crime');
      expect(orgCrime?.plainMeaning).toContain('cyber-fraud cartels');
    });

    it('verifies BNS Section 304 distinct classification of Snatching', () => {
      const snatching = IPC_TO_BNS_MAPPING.find(m => m.bnsSection.includes('304'));
      expect(snatching).toBeDefined();
      expect(snatching?.offense).toBe('Snatching');
    });
  });

  describe('Commercial Law & Indian Contract Act 1872 Doctrines', () => {
    it('verifies Section 27 makes post-employment non-compete covenants void ab initio', () => {
      const sec27 = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle === 'Section 27');
      expect(sec27).toBeDefined();
      expect(sec27?.plainMeaning).toContain('VOID ab initio');
      expect(sec27?.plainMeaning).toContain('DO NOT apply a \'reasonableness test\'');
      expect(sec27?.landmarkPrecedents).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Percept D\'Mark'),
          expect.stringContaining('Zaheer Khan'),
          expect.stringContaining('Niranjan Shankar Golikari')
        ])
      );
    });

    it('verifies Section 73 & 74 distinction between reasonable compensation and penalties', () => {
      const sec74 = INDIAN_KEY_STATUTES.find(s => s.sectionOrArticle.includes('74'));
      expect(sec74).toBeDefined();
      expect(sec74?.plainMeaning).toContain('reasonable compensation');
      expect(sec74?.landmarkPrecedents).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Kailash Nath Associates')
        ])
      );
    });
  });

  describe('Evidence Modernization & Procedural Safeguards (BSA & BNSS 2023)', () => {
    it('verifies BSA Sections 57 & 61 treating electronic records as primary evidence', () => {
      const bsaEvidence = INDIAN_KEY_STATUTES.find(s => s.statute.includes('Sakshya'));
      expect(bsaEvidence).toBeDefined();
      expect(bsaEvidence?.plainMeaning).toContain('primary documentary evidence');
      expect(bsaEvidence?.plainMeaning).toContain('WhatsApp');
    });

    it('verifies BNSS historical comparison includes Zero-FIR and audio-video search recording', () => {
      const bnssComp = TIME_COMPARISONS.find(tc => tc.id === 'tc-crpc-bnss');
      expect(bnssComp).toBeDefined();
      expect(bnssComp?.currentProvision).toContain('Zero-FIR');
      expect(bnssComp?.currentProvision).toContain('audio-video recording');
    });

    it('verifies Consumer Protection Act 2019 provisions for e-Daakhil and product liability', () => {
      const cpaComp = TIME_COMPARISONS.find(tc => tc.id === 'tc-consumer');
      expect(cpaComp).toBeDefined();
      expect(cpaComp?.currentProvision).toContain('e-Daakhil');
      expect(cpaComp?.currentProvision).toContain('product liability');
    });
  });

  describe('Leading Indian Treatises & Academic Authorities', () => {
    it('includes foundational treatises from D.D. Basu, Pollock & Mulla, and Ratanlal & Dhirajlal', () => {
      expect(INDIAN_LEGAL_TREATISES.length).toBeGreaterThanOrEqual(4);
      const authors = INDIAN_LEGAL_TREATISES.map(t => t.author);
      expect(authors.some(a => a.includes('Basu'))).toBe(true);
      expect(authors.some(a => a.includes('Pollock & Mulla'))).toBe(true);
      expect(authors.some(a => a.includes('Ratanlal & Dhirajlal'))).toBe(true);
      expect(authors.some(a => a.includes('Sarkar'))).toBe(true);
    });
  });
});
