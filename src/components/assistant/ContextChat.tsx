import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  AlertCircle,
  CornerDownRight,
  Bot,
  User
} from 'lucide-react';
import { ChatMessage, Citation } from '../../types/chat';
import { DocumentAnalysisResult, RAGChunk } from '../../types/legal';
import { askContextQuestion, cleanLegalText } from '../../services/aiService';
import { speechAssistant } from '../../utils/speechService';

interface ContextChatProps {
  analysis: DocumentAnalysisResult;
  fullText: string;
  chunks: RAGChunk[];
  initialQuestion?: string;
  onClearInitialQuestion?: () => void;
}

export const ContextChat: React.FC<ContextChatProps> = ({
  analysis,
  fullText,
  chunks,
  initialQuestion,
  onClearInitialQuestion
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I have analyzed ${analysis.fileName} (${analysis.documentType}).\n\nYou can ask me anything about your obligations, cancellation terms, fees, or what specific terms mean in simple English. You can also use the microphone to ask with your voice!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedFollowUps: [
        'What are my early termination rights?',
        'Can the landlord/company hold my deposit or fees?',
        'Are there any high-risk clauses in this contract?'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle external trigger (e.g. from Clause Explorer "Ask AI about this clause")
  useEffect(() => {
    if (initialQuestion && initialQuestion.trim().length > 0) {
      sendMessage(initialQuestion);
      if (onClearInitialQuestion) onClearInitialQuestion();
    }
  }, [initialQuestion]);

  const handleVoiceToggle = () => {
    if (isRecording) {
      speechAssistant.stopListening();
      setIsRecording(false);
    } else {
      setVoiceNotice(null);
      const started = speechAssistant.startListening(
        (transcript, isFinal) => {
          setInputValue(transcript);
          if (isFinal) {
            setIsRecording(false);
            // Optionally auto-send
          }
        },
        (error) => {
          setIsRecording(false);
          setVoiceNotice(error);
          setTimeout(() => setVoiceNotice(null), 4000);
        },
        () => {
          setIsRecording(false);
        }
      );
      if (started) {
        setIsRecording(true);
      }
    }
  };

  const handleSpeakMessage = (msgId: string, text: string) => {
    if (activeSpeakingId === msgId) {
      speechAssistant.stopSpeaking();
      setActiveSpeakingId(null);
    } else {
      speechAssistant.speak(
        text,
        () => setActiveSpeakingId(msgId),
        () => setActiveSpeakingId(null)
      );
    }
  };

  const sendMessage = async (textToSend: string, isVoice = false) => {
    const text = textToSend.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isVoiceInput: isVoice
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await askContextQuestion(text, analysis, fullText, chunks, messages);

      const aiMsg: ChatMessage = {
        id: 'msg-ai-' + Date.now(),
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: response.citations,
        suggestedFollowUps: response.suggestedFollowUps
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        {
          id: 'msg-err-' + Date.now(),
          sender: 'assistant',
          text: 'I encountered an error retrieving grounded context for this question. Please try asking in a different way.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="bg-white rounded-2xl shadow-trust border border-slate-200 flex flex-col h-[650px] overflow-hidden">
      {/* Chat header */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              AdvoChat Grounded Q&A Assistant
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </h3>
            <p className="text-[11px] text-slate-500">
              Grounded in <strong>{analysis.fileName}</strong> ({chunks.length} vectorized chunks)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="hidden sm:inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded-full text-[10px]">
            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Prompt Injection Protected
          </span>
        </div>
      </div>

      {/* Voice notice popup if any */}
      {voiceNotice && (
        <div className="bg-amber-50 px-4 py-2 text-xs text-amber-800 border-b border-amber-200 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
          <span>{voiceNotice}</span>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[88%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                isUser ? 'bg-legal-900 text-white' : 'bg-indigo-100 text-indigo-700'
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="space-y-2">
                <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-legal-900 text-white rounded-tr-none'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/80'
                }`}>
                  <div className="whitespace-pre-wrap">{cleanLegalText(msg.text)}</div>

                  {/* Audio Readout Toggle on Assistant messages */}
                  {!isUser && (
                    <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                      <button
                        onClick={() => handleSpeakMessage(msg.id, msg.text)}
                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                        aria-label="Read answer aloud"
                      >
                        {activeSpeakingId === msg.id ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-rose-600" />
                            <span className="text-rose-600">Stop Voice</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Read Aloud</span>
                          </>
                        )}
                      </button>
                      <span>{msg.timestamp}</span>
                    </div>
                  )}
                </div>

                {/* Citations / Grounded Sources */}
                {msg.citations && msg.citations.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1">
                      <FileText className="w-3 h-3 text-indigo-600" /> Grounded In Document Sections:
                    </div>
                    {msg.citations.map((cite, i) => (
                      <div key={i} className="text-slate-600 text-[11px] bg-white/80 p-1.5 rounded border border-indigo-100/60">
                        <strong className="text-indigo-900">{cite.sectionTitle}:</strong> "{cite.snippet}"
                      </div>
                    ))}
                  </div>
                )}

                {/* Suggested follow up chips */}
                {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Suggested Questions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestedFollowUps.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(prompt)}
                          className="text-[11px] bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full text-left transition flex items-center gap-1"
                        >
                          <CornerDownRight className="w-2.5 h-2.5 text-indigo-500" />
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-3 max-w-[80%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 rounded-tl-none flex items-center gap-2 text-xs text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
              <span>Analyzing contract clauses and retrieving grounded context...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-3 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 px-3 py-1.5 shadow-sm">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isRecording ? "Listening to voice input..." : "Ask any question about this document..."}
            className="flex-1 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none py-1"
            disabled={isTyping}
          />

          {/* Voice input mic toggle */}
          <button
            type="button"
            onClick={handleVoiceToggle}
            className={`p-2 rounded-lg transition-colors ${
              isRecording
                ? 'bg-rose-500 text-white animate-pulse'
                : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100'
            }`}
            title={isRecording ? "Stop voice listening" : "Ask with your voice"}
            aria-label="Toggle voice input"
          >
            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Send button */}
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white disabled:text-slate-400 transition"
            aria-label="Send question"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
