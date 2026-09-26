import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { parseUploadedFile } from '../../services/documentParser';
import { SAMPLE_DOCUMENTS, SampleDocumentItem } from '../../data/sampleDocuments';
import { formatFileSize } from '../../utils/textSanitizer';

interface DocumentUploaderProps {
  onDocumentLoaded: (docData: {
    fileName: string;
    fileSize: number;
    rawText: string;
    wordCount: number;
    sampleId?: string;
  }) => void;
  isAnalyzing: boolean;
}

export const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  onDocumentLoaded,
  isAnalyzing
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = async (file: File) => {
    setErrorMessage(null);
    try {
      const parsed = await parseUploadedFile(file);
      onDocumentLoaded({
        fileName: parsed.fileName,
        fileSize: parsed.fileSize,
        rawText: parsed.rawText,
        wordCount: parsed.wordCount
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to parse the uploaded document.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSelectSample = (sample: SampleDocumentItem) => {
    setErrorMessage(null);
    const words = sample.content.split(/\s+/).filter(Boolean).length;
    onDocumentLoaded({
      fileName: `${sample.title}.txt`,
      fileSize: new Blob([sample.content]).size,
      rawText: sample.content,
      wordCount: words,
      sampleId: sample.id
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200/80 p-6 md:p-8">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Context-Aware AI Document Analysis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-legal-900 tracking-tight">
          Upload Any Legal Agreement for Instant Clarity
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          AdvoChat parses contracts, extracts key clauses, flags one-sided liabilities, and breaks down complex legalese into plain English.
        </p>
      </div>

      {/* Drag and Drop Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !isAnalyzing && fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
          dragActive
            ? 'border-indigo-500 bg-indigo-50/60 scale-[1.01]'
            : 'border-slate-300 hover:border-indigo-400 bg-slate-50/50 hover:bg-slate-50'
        } ${isAnalyzing ? 'pointer-events-none opacity-60' : ''}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
          onChange={handleFileInputChange}
          className="hidden"
          disabled={isAnalyzing}
        />

        <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto mb-3 shadow-inner">
          <UploadCloud className="w-7 h-7" />
        </div>

        <h3 className="font-semibold text-slate-800 text-base">
          {dragActive ? 'Drop your document here' : 'Click to upload or drag & drop'}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Supports <strong>PDF</strong>, <strong>DOCX (Word)</strong>, and <strong>TXT</strong> files up to 15MB
        </p>

        <div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Untrusted Content Sanitized
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Chunked & Vectorized RAG
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Private & Secure
          </span>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mt-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-800 text-sm">
          <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold">Upload Error:</span> {errorMessage}
          </div>
        </div>
      )}

      {/* 1-Click Sample Documents for Quick Testing */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-700" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Or Try One of Our Realistic Test Contracts:
            </h4>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">1-Click Immediate Analysis</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SAMPLE_DOCUMENTS.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              disabled={isAnalyzing}
              className="group p-3.5 text-left rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/30 shadow-sm transition hover:shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                  {sample.category}
                </span>
                <h5 className="text-xs font-bold text-slate-800 group-hover:text-indigo-700 line-clamp-1">
                  {sample.title}
                </h5>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {sample.description}
                </p>
              </div>
              <div className="mt-2.5 flex items-center text-[11px] font-semibold text-indigo-600 group-hover:text-indigo-800">
                Analyze This Document <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
