/**
 * Voice input (Speech-to-Text) and Audio readout (Text-to-Speech)
 * using the standard Web Speech API with robust fallbacks.
 */

// Define SpeechRecognition interface for TypeScript
interface SpeechRecognitionResultAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultItem {
  isFinal: boolean;
  length: number;
  [index: number]: SpeechRecognitionResultAlternative;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: SpeechRecognitionResultItem;
  };
}

interface SpeechRecognitionErrorEventLike {
  error: string;
  message?: string;
}

interface ISpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionConstructor {
  new (): ISpeechRecognitionInstance;
}

interface IWindow extends Window {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
}

export class SpeechAssistant {
  private recognition: ISpeechRecognitionInstance | null = null;
  private isListening: boolean = false;

  constructor() {
    const win = typeof window !== 'undefined' ? (window as unknown as IWindow) : null;
    if (win) {
      const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        this.recognition = new SpeechRecognitionClass();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
      }
    }
  }

  public isSupported(): boolean {
    return this.recognition !== null;
  }

  public startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (errorMsg: string) => void,
    onEnd: () => void
  ): boolean {
    if (!this.recognition) {
      onError('Speech recognition is not supported in this browser. Please use keyboard input.');
      return false;
    }

    if (this.isListening) {
      this.stopListening();
    }

    this.recognition.onresult = (event: SpeechRecognitionEventLike) => {
      let interim = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      const text = finalTranscript || interim;
      const isFinal = Boolean(finalTranscript);
      onResult(text, isFinal);
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEventLike) => {
      this.isListening = false;
      const errorMap: Record<string, string> = {
        'not-allowed': 'Microphone permission was denied. Please grant permission in your browser settings.',
        'no-speech': 'No speech was detected. Please try speaking again.',
        'network': 'Network error encountered during speech recognition.',
      };
      onError(errorMap[event.error] || `Voice error: ${event.error}`);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      onEnd();
    };

    try {
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (err) {
      onError('Failed to initiate microphone.');
      return false;
    }
  }

  public stopListening(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  public speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void
  ): boolean {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return false;
    }

    // Cancel any existing speech
    window.speechSynthesis.cancel();

    // Clean text of markdown asterisks and URLs for natural speaking
    const cleanSpeech = text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/#{1,6}\s+/g, '')
      .replace(/`{1,3}[^`]*`{1,3}/g, 'code snippet')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
    return true;
  }

  public stopSpeaking(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speechAssistant = new SpeechAssistant();
