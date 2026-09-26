/**
 * Document parser service supporting PDF, DOCX, and TXT files
 * with strict format and size validation.
 */
import mammoth from 'mammoth';
import { cleanDocumentText } from '../utils/textSanitizer';

// Dynamically load pdfjs to keep bundle flexible
interface PDFTextItem {
  str?: string;
  [key: string]: unknown;
}

interface PDFPageProxy {
  getTextContent(): Promise<{ items: (PDFTextItem | unknown)[] }>;
}

interface PDFDocumentProxy {
  numPages: number;
  getPage(pageNumber: number): Promise<PDFPageProxy>;
}

interface PDFJSStatic {
  GlobalWorkerOptions?: { workerSrc?: string };
  version?: string;
  getDocument(src: { data: ArrayBuffer }): { promise: Promise<PDFDocumentProxy> };
}

let pdfjsLib: PDFJSStatic | null = null;

async function getPdfJs() {
  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist');
    // Set standard worker source
    if (pdfjsLib.GlobalWorkerOptions && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '3.11.174'}/pdf.worker.min.js`;
    }
  }
  return pdfjsLib;
}

export interface ParsedDocument {
  fileName: string;
  fileSize: number;
  rawText: string;
  pageCount?: number;
  wordCount: number;
}

export const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15MB

export async function parseUploadedFile(file: File): Promise<ParsedDocument> {
  if (!file) {
    throw new Error('No file provided.');
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new Error(`File exceeds maximum permitted size of 15MB (File size: ${(file.size / (1024 * 1024)).toFixed(1)}MB).`);
  }

  const nameLower = file.name.toLowerCase();
  let extractedText = '';
  let pageCount: number | undefined = undefined;

  if (nameLower.endsWith('.txt') || file.type === 'text/plain') {
    extractedText = await file.text();
  } else if (nameLower.endsWith('.docx') || file.type.includes('wordprocessingml')) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    extractedText = result.value;
  } else if (nameLower.endsWith('.pdf') || file.type === 'application/pdf') {
    try {
      const pdfjs = await getPdfJs();
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      pageCount = pdf.numPages;

      const pageTexts: string[] = [];
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageString = textContent.items
          .map((item: unknown) => (typeof item === 'object' && item !== null && 'str' in item ? String((item as { str: string }).str) : ''))
          .join(' ');
        pageTexts.push(pageString);
      }
      extractedText = pageTexts.join('\n\n--- Page Break ---\n\n');
    } catch (pdfErr: unknown) {
      console.warn('PDF.js worker extraction fallback:', pdfErr);
      // Fallback: extract plaintext strings from buffer if worker failed
      const buffer = await file.arrayBuffer();
      const decoder = new TextDecoder('utf-8', { fatal: false });
      const rawDecoded = decoder.decode(buffer);
      // Extract printable ascii/utf8 blocks
      const printable = rawDecoded.replace(/[\x00-\x08\x0E-\x1F\x7F-\x9F]/g, ' ');
      extractedText = printable.length > 50 ? printable : 'Unable to parse text content from this PDF. Please try a text or docx export.';
    }
  } else {
    throw new Error('Unsupported file format. Please upload a PDF (.pdf), Microsoft Word (.docx), or Plain Text (.txt) file.');
  }

  const cleaned = cleanDocumentText(extractedText);
  if (!cleaned || cleaned.length < 20) {
    throw new Error('The document appears empty or could not be converted into readable text.');
  }

  const words = cleaned.split(/\s+/).filter(Boolean).length;

  return {
    fileName: file.name,
    fileSize: file.size,
    rawText: cleaned,
    pageCount,
    wordCount: words
  };
}
