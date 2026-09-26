import React, { useState, useRef, useEffect } from 'react';
import { askContextQuestion, getEffectiveGeminiKey, setCustomGeminiKey, cleanLegalText } from '../../services/aiService';
import { DocumentAnalysisResult, RAGChunk } from '../../types/legal';

interface Screen06_AIAssistantProps {
  onNavigate: (path: string) => void;
  userProfile?: {
    name: string;
    role: string;
    avatar: string;
  };
  activeAnalysis?: DocumentAnalysisResult | null;
  activeDocText?: string;
  chunks?: RAGChunk[];
  onQuickLoadSample?: (sampleId: string) => void;
}

interface MessageItem {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  citations?: { title: string; subtitle: string; refNum: string }[];
  isInitialMemorandum?: boolean;
}

/**
 * Clean Formatted Message Renderer.
 * Renders plain text with clean headings, bullets, and numbered points.
 * Completely eliminates raw markdown symbols like ##, **, //, ***, ---.
 */
const CleanMessageRenderer: React.FC<{ text: string }> = ({ text }) => {
  // Strip any accidental markdown symbols
  const cleaned = cleanLegalText(text);
  const paragraphs = cleaned.split('\n\n').filter(p => p.trim().length > 0);

  return (
    <div className="flex flex-col gap-3.5 font-body-md text-body-md text-on-surface leading-relaxed">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split('\n').filter(l => l.trim().length > 0);
        
        // Check if paragraph is a single heading line
        const isHeader = lines.length === 1 && lines[0].length < 90 && (
          lines[0].endsWith(':') || 
          /^(Step|\d+\.|Tenancy|Employment|Non-Compete|Your Rights|Cyber|Constitution|Family|Cheque|What|How|Notice|1\.|2\.|3\.)/i.test(lines[0])
        );

        if (isHeader) {
          return (
            <h4 key={pIdx} className="font-serif text-lg font-bold text-primary mt-1 tracking-tight border-b border-surface-container-high pb-1">
              {lines[0]}
            </h4>
          );
        }

        // Check if paragraph contains bullet or numbered lines
        const hasBullets = lines.some(l => l.startsWith('•') || l.startsWith('-') || /^\d+\./.test(l));

        if (hasBullets) {
          return (
            <div key={pIdx} className="flex flex-col gap-2 pl-0.5">
              {lines.map((line, lIdx) => {
                const trimmed = line.trim();
                const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
                const isNumbered = /^\d+\.\s*/.test(trimmed);

                if (isBullet) {
                  const content = trimmed.replace(/^[•\-]\s*/, '');
                  return (
                    <div key={lIdx} className="flex items-start gap-2.5 text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="flex-1 leading-relaxed">{content}</span>
                    </div>
                  );
                } else if (isNumbered) {
                  const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/);
                  const num = numMatch ? numMatch[1] : '';
                  const content = numMatch ? numMatch[2] : trimmed;
                  return (
                    <div key={lIdx} className="flex items-start gap-2.5 text-on-surface mt-0.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        {num}
                      </span>
                      <span className="flex-1 leading-relaxed font-medium">{content}</span>
                    </div>
                  );
                } else {
                  return (
                    <p key={lIdx} className="text-on-surface font-semibold text-primary/95 mt-1 leading-relaxed">
                      {trimmed}
                    </p>
                  );
                }
              })}
            </div>
          );
        }

        return (
          <p key={pIdx} className="text-on-surface leading-relaxed">
            {para}
          </p>
        );
      })}
    </div>
  );
};

export const Screen06_AIAssistant: React.FC<Screen06_AIAssistantProps> = ({
  onNavigate,
  userProfile = {
    name: "Priya Sharma",
    role: "Citizen / Legal Consumer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
  },
  activeAnalysis = null,
  activeDocText = '',
  chunks = [],
  onQuickLoadSample: _onQuickLoadSample
}) => {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      timestamp: '10:40 AM',
      isInitialMemorandum: true,
      text: `Welcome to AdvoChat Legal Assistant!

I can help you understand your legal rights in India in simple, everyday words. You can ask me any question directly—no document upload is required.

Here are common legal questions I can help you with:
• Tenancy & Housing: Eviction threats, landlord disputes, recovering your security deposit, or unfair rent hikes.
• Jobs & Workplace: Unpaid salary, sudden termination, notice periods, 2-year job bonds, and non-compete clauses.
• Police & FIR: What to do if police contact you, rights if called to a police station, and how to file a complaint.
• Cyber Fraud & Online Scams: Lost money through UPI or online fraud, reporting immediately to helpline 1930.
• Your Fundamental Rights: Free speech, equality, personal liberty, and privacy under the Indian Constitution.
• Contracts & Agreements: Checking rental agreements, freelance contracts, or service agreements in plain English.

Type your question below or click any of the common situations on the left to start!`,
      citations: [
        { title: "The Constitution of India", subtitle: "Articles 14, 19, 21 (Fundamental Rights)", refNum: "[1]" },
        { title: "Bharatiya Nyaya Sanhita, 2023 (BNS)", subtitle: "Modern Penal Code & Reformative Penology", refNum: "[2]" },
        { title: "Transfer of Property Act, 1882", subtitle: "Section 106 Statutory Tenancy Protections", refNum: "[3]" }
      ]
    }
  ]);

  const [inputText, setInputText] = useState<string>('');
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [apiKeyInput, setApiKeyInput] = useState<string>(getEffectiveGeminiKey());
  const [hasApiKey, setHasApiKey] = useState<boolean>(!!getEffectiveGeminiKey());
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleSaveApiKey = () => {
    setCustomGeminiKey(apiKeyInput);
    setHasApiKey(!!apiKeyInput.trim());
    setShowKeyModal(false);
  };

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || isThinking) return;

    const userMsg: MessageItem = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: textToSend.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInputText('');
    setIsThinking(true);

    try {
      const response = await askContextQuestion(
        textToSend,
        activeAnalysis || null,
        activeDocText,
        chunks,
        messages.map(m => ({
          id: m.id,
          sender: m.sender,
          text: m.text,
          timestamp: m.timestamp
        }))
      );

      const assistantMsg: MessageItem = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: cleanLegalText(response.text),
        citations: response.citations && response.citations.length > 0 
          ? response.citations.map((c, i) => ({
              title: c.sectionTitle || 'Indian Legal Authority',
              subtitle: (c.snippet || '').slice(0, 70) + '...',
              refNum: `[${i + 1}]`
            }))
          : [
              { title: "The Constitution of India", subtitle: "Part III Fundamental Freedoms", refNum: "[1]" },
              { title: "Bharatiya Nyaya Sanhita, 2023", subtitle: "Statutory Penal Protections", refNum: "[2]" },
              { title: "Statutory Law of India", subtitle: "Binding Precedents & Natural Justice", refNum: "[3]" }
            ]
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Error getting AI answer:', err);
      const errorMsg: MessageItem = {
        id: `asst-err-${Date.now()}`,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Under Indian legal principles, please refer directly to The Constitution of India (Articles 14, 19, 21), Bharatiya Nyaya Sanhita (BNS 2023), Transfer of Property Act 1882, and Section 27 of The Indian Contract Act, 1872.'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleCopyText = (text: string, idx: number) => {
    navigator.clipboard.writeText(cleanLegalText(text));
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const suggestedInquiries = [
    "My landlord is asking me to immediately leave the house. What should I do?",
    "Can my employer withhold my salary or relieving letter?",
    "I was defrauded online for 50,000 rupees. What should I do immediately?",
    "Can police arrest me without a warrant under BNS 2023?",
    "Is a 2-year job bond legal in India?"
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
      {/* LEFT GLOBAL DRAWER */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col justify-between border-r border-surface-container-high bg-surface-container-lowest p-space-md lg:flex">
        <div className="flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-sm px-space-xs pt-space-xs">
            <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-serif font-bold text-base shadow-sm">
              ⚖
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-on-surface">AdvoChat</span>
              <span className="text-[11px] text-secondary font-medium">Simple Legal Assistant</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold px-space-xs mb-1">
              Menu
            </span>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('dashboard')} href="javascript:void(0)">
                <span className="material-symbols-outlined text-[18px]">space_dashboard</span><span>Home Dashboard</span>
              </a>
              <a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded font-body-sm text-body-sm" onClick={() => onNavigate('ai-assistant')} href="javascript:void(0)">
                <span className="material-symbols-outlined text-[18px]">chat</span><span>Legal Chat</span>
              </a>
              <a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('document-vault')} href="javascript:void(0)">
                <span className="material-symbols-outlined text-[18px]">upload_file</span><span>Upload Document</span>
              </a>
              <a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('law-library')} href="javascript:void(0)">
                <span className="material-symbols-outlined text-[18px]">menu_book</span><span>Learn Indian Law</span>
              </a>
              <a className="flex items-center gap-space-sm px-space-sm py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm" onClick={() => onNavigate('find-counsel')} href="javascript:void(0)">
                <span className="material-symbols-outlined text-[18px]">groups</span><span>Find a Lawyer</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-3 rounded bg-surface-container-low border border-surface-container-high">
          <div className="flex items-center gap-1.5 text-primary font-semibold text-xs">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>Private &amp; Secure</span>
          </div>
          <div className="text-[11px] text-secondary leading-snug">
            Your conversations stay private and are not shared with third parties.
          </div>
        </div>
      </aside>

      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen">
        <main className="relative pt-16 flex-1 w-full bg-surface">
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-col xl:flex-row min-h-[calc(100vh-8rem)]">

              {/* LEFT PANEL: Quick Topics & Engine Status */}
              <aside className="w-full xl:w-80 flex-shrink-0 bg-surface-container-low flex flex-col justify-between shadow-sm border-r border-surface-container-high">
                <div className="flex flex-col p-space-md">
                  <button 
                    onClick={() => {
                      setMessages([]);
                      setInputText('');
                    }}
                    className="w-full flex items-center justify-center gap-space-xs py-2.5 px-space-md bg-primary text-white rounded font-label-md text-label-md tracking-wide shadow-sm hover:opacity-95 transition-all font-semibold" 
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>New Legal Chat</span>
                  </button>

                  {/* Active Engine Card */}
                  <div className="mt-space-md p-3 rounded bg-surface-container-lowest shadow-sm flex flex-col gap-1 border-l-4 border-primary">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">AI Assistant Status</span>
                      <button 
                        onClick={() => setShowKeyModal(true)}
                        className="text-primary hover:underline font-label-sm text-[11px]"
                      >
                        {hasApiKey ? 'Gemini Key Saved' : '+ Custom Key'}
                      </button>
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface font-semibold">
                      {hasApiKey ? '✨ Gemini 1.5 Flash Connected' : '🇮🇳 Indian Legal Knowledge Base'}
                    </div>
                    <div className="text-[11px] text-secondary">
                      Answers all legal questions in simple, plain English.
                    </div>
                  </div>

                  {/* Quick Topics */}
                  <div className="mt-space-lg flex flex-col gap-space-md overflow-y-auto max-h-[460px] pr-1">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold px-1">Common Questions to Try</span>
                      {[
                        { title: 'My landlord is asking me to immediately leave', time: 'Tenancy', desc: 'Eviction notice rules & legal protections' },
                        { title: 'Employer withholding salary or relieving letter', time: 'Workplace', desc: 'Payment of Wages Act & legal steps' },
                        { title: 'Can employer enforce a 2-year job bond?', time: 'Contracts', desc: 'Section 74 rules on penalty bonds' },
                        { title: 'Online financial scam & UPI fraud help', time: 'Cyber', desc: '1930 helpline & fast account freeze' },
                        { title: 'Police calling to station without notice', time: 'Police', desc: 'Section 35 notice rules & rights' }
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          onClick={() => handleSendMessage(item.title)}
                          className="group p-2.5 rounded hover:bg-surface-container-high transition-colors flex flex-col gap-0.5 cursor-pointer border border-transparent hover:border-surface-container-high"
                        >
                          <div className="font-body-md text-body-md font-medium text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                            <span className="truncate">{item.title}</span>
                            <span className="text-[11px] text-secondary font-label-sm px-1.5 py-0.5 rounded bg-surface-container">{item.time}</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* MAIN CONVERSATION VIEWPORT */}
              <div className="flex-1 flex flex-col justify-between bg-surface min-w-0">
                <div className="p-space-lg flex flex-col gap-space-lg max-w-4xl mx-auto w-full">
                  {messages.map((msg, idx) => (
                    <div key={msg.id} className="w-full">
                      {msg.sender === 'user' ? (
                        <div className="flex gap-space-md items-start justify-end w-full">
                          <div className="flex flex-col items-end gap-1 max-w-2xl">
                            <div className="flex items-center gap-2">
                              <span className="font-label-sm text-label-sm text-secondary">{msg.timestamp}</span>
                              <span className="font-label-md text-label-md text-on-surface font-semibold">{userProfile.name}</span>
                            </div>
                            <div className="p-space-md rounded-2xl rounded-tr-none bg-primary text-white shadow-sm font-body-md text-body-md leading-relaxed">
                              {msg.text}
                            </div>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                            EV
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-space-md items-start w-full">
                          <div className="w-9 h-9 rounded bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                            <span className="material-symbols-outlined text-[20px]">gavel</span>
                          </div>

                          <div className="flex flex-col gap-space-sm w-full min-w-0">
                            <div className="flex items-center gap-2.5">
                              <span className="font-label-md text-label-md text-primary font-bold tracking-tight">AdvoChat Legal Assistant</span>
                              <span className="px-2 py-0.5 rounded bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
                                Plain English Guidance
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary">{msg.timestamp}</span>
                            </div>

                            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                              {/* Clean Message Renderer without raw symbols */}
                              <CleanMessageRenderer text={msg.text} />

                              {/* Verified Citations */}
                              {msg.citations && msg.citations.length > 0 && (
                                <div className="pt-space-sm border-t border-surface-container-high flex flex-col gap-space-xs">
                                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                                    Indian Legal References
                                  </span>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                                    {msg.citations.map((cite, cidx) => (
                                      <div key={cidx} className="p-space-sm rounded bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col justify-between">
                                        <div className="flex items-start gap-1.5">
                                          <span className="font-label-sm text-label-sm font-bold text-primary">{cite.refNum}</span>
                                          <div className="font-body-sm text-body-sm font-semibold text-primary leading-tight">{cite.title}</div>
                                        </div>
                                        <div className="text-[11px] text-secondary font-label-sm mt-1">{cite.subtitle}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Action Toolbar */}
                              <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-secondary border-t border-surface-container-high/60">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <button 
                                    onClick={() => handleCopyText(msg.text, idx)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm font-medium" 
                                    type="button"
                                  >
                                    <span className="material-symbols-outlined text-[16px] text-primary">
                                      {copiedIndex === idx ? 'done' : 'content_copy'}
                                    </span>
                                    <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                                  </button>
                                  <button 
                                    onClick={() => onNavigate('law-library')}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm font-medium" 
                                    type="button"
                                  >
                                    <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span>
                                    <span>Learn Your Rights</span>
                                  </button>
                                  <button 
                                    onClick={() => onNavigate('find-counsel')}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm font-medium" 
                                    type="button"
                                  >
                                    <span className="material-symbols-outlined text-[16px] text-primary">person_search</span>
                                    <span>Talk to a Lawyer</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {isThinking && (
                    <div className="flex gap-space-md items-start w-full">
                      <div className="w-9 h-9 rounded bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-1 animate-pulse">
                        <span className="material-symbols-outlined text-[20px]">gavel</span>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3 text-secondary font-body-sm text-body-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        <span>Finding simple, clear legal guidance under Indian law...</span>
                      </div>
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>

                {/* BOTTOM CONSOLE: Suggested Inquiries & Input */}
                <div className="sticky bottom-0 bg-surface/95 backdrop-blur-md px-gutter pb-space-md pt-space-xs z-20 flex flex-col gap-space-xs shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
                  {/* Suggested Inquiries */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-4xl mx-auto w-full no-scrollbar">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase flex-shrink-0 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">bolt</span>
                      Examples:
                    </span>
                    {[
                      { label: "🧪 Test 1: Landlord Eviction", query: "My landlord is asking me to immediately leave the house and threatening to cut power. What are my rights under Indian law?" },
                      { label: "🧪 Test 2: 2-Year Job Bond", query: "Can my employer enforce a 2-year job bond or withhold my salary if I resign?" },
                      { label: "🧪 Test 3: Cyber UPI Fraud", query: "I was defrauded online for 50,000 rupees in an online UPI scam today. What immediate steps must I take?" }
                    ].map((item, cidx) => (
                      <button
                        key={cidx}
                        onClick={() => handleSendMessage(item.query)}
                        className="px-3 py-1 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface shadow-sm font-label-sm text-label-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0 border border-surface-container-high text-left"
                        type="button"
                        title={item.query}
                      >
                        <span className="font-semibold text-primary">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Input Box Container */}
                  <div className="max-w-4xl mx-auto w-full flex flex-col gap-1.5">
                    <div className="rounded-xl bg-surface-container-lowest shadow-md p-space-sm flex flex-col gap-2 border border-surface-container-high">
                      <div className="flex items-center justify-between px-space-xs pt-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            AdvoChat AI • Ask ANY legal question in plain English
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setShowKeyModal(true)}
                            className="text-secondary hover:text-primary flex items-center gap-1 text-[11px] font-label-sm"
                            title="Configure Gemini API Key"
                          >
                            <span className="material-symbols-outlined text-[14px]">key</span>
                            <span>{hasApiKey ? 'Gemini Key Saved' : 'Set Gemini Key'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 px-space-xs">
                        <span className="text-[10px] uppercase font-bold text-secondary flex-shrink-0">Try asking:</span>
                        {suggestedInquiries.map((inq, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setInputText(inq)}
                            className="px-2 py-0.5 rounded-full bg-surface-container hover:bg-primary hover:text-white text-[11px] text-primary whitespace-nowrap transition-colors flex-shrink-0"
                          >
                            {inq}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-end gap-space-sm px-space-xs">
                        <textarea
                          className="w-full bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md resize-none focus:outline-none py-1"
                          placeholder="Type your legal question here in simple words (e.g., 'My landlord wants me to leave immediately', 'Company holding my salary', 'What is Article 21?')..."
                          rows={2}
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                        />

                        <div className="flex items-center gap-1 flex-shrink-0 pb-1">
                          <button
                            onClick={() => onNavigate('document-vault')}
                            className="p-2 rounded text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                            title="Upload Document for targeted explanation"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">attach_file</span>
                          </button>
                          <button
                            onClick={() => handleSendMessage()}
                            disabled={!inputText.trim() || isThinking}
                            className={`p-2.5 rounded transition-all flex items-center justify-center ${
                              inputText.trim() && !isThinking
                                ? 'bg-primary text-white hover:opacity-95 shadow-sm'
                                : 'bg-surface-container text-outline cursor-not-allowed'
                            }`}
                            title="Send Question"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="px-space-xs text-center md:text-left">
                      <p className="font-label-sm text-label-sm text-secondary leading-tight text-[11px]">
                        <strong>Notice:</strong> AdvoChat provides helpful legal guidance in simple everyday English for educational purposes. It does not replace formal legal advice from an advocate.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>

      {/* GEMINI KEY CONFIGURATION MODAL */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface-container-lowest p-6 shadow-2xl border border-surface-container-high">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">vpn_key</span>
                <h3 className="font-serif text-lg font-bold text-on-surface">Optional Gemini API Key</h3>
              </div>
              <button 
                onClick={() => setShowKeyModal(false)}
                className="text-secondary hover:text-on-surface text-sm"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-body-sm text-on-surface-variant">
              <p>
                AdvoChat already has a <strong>built-in Indian Legal Knowledge Base</strong> that works offline with zero setup.
              </p>
              <p>
                If you prefer to connect your own Google Gemini Flash API key directly, you can enter it below. It is stored securely in your browser's private local storage.
              </p>

              <div className="mt-3">
                <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                  Google Gemini API Key
                </label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full p-2.5 rounded border border-surface-container-high bg-surface text-on-surface font-mono text-xs focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high">
              <button
                onClick={() => {
                  setApiKeyInput('');
                  setCustomGeminiKey('');
                  setHasApiKey(false);
                  setShowKeyModal(false);
                }}
                className="px-3 py-1.5 rounded text-xs font-medium text-secondary hover:text-on-surface"
              >
                Clear Key
              </button>
              <button
                onClick={handleSaveApiKey}
                className="px-4 py-2 rounded bg-primary text-white text-xs font-semibold hover:opacity-95 shadow-sm"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
