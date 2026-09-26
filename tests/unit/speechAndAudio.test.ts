import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SpeechAssistant, speechAssistant } from '../../src/utils/speechService';

describe('Speech & Audio Accessibility Engine', () => {
  it('instantiates SpeechAssistant singleton safely in test environment', () => {
    expect(speechAssistant).toBeDefined();
    expect(typeof speechAssistant.isSupported).toBe('function');
    expect(typeof speechAssistant.speak).toBe('function');
    expect(typeof speechAssistant.stopSpeaking).toBe('function');
  });

  it('returns false from isSupported in Node/headless test environment without window.SpeechRecognition', () => {
    const assistant = new SpeechAssistant();
    // In Node / Vitest without browser speech recognition, isSupported returns false
    expect(assistant.isSupported()).toBe(false);
  });

  it('handles startListening gracefully when speech recognition is not supported', () => {
    const assistant = new SpeechAssistant();
    let errorReceived = '';

    const started = assistant.startListening(
      () => {},
      (err) => { errorReceived = err; },
      () => {}
    );

    expect(started).toBe(false);
    expect(errorReceived).toContain('Speech recognition is not supported');
  });

  it('cleans markdown symbols from text before synthesizing speech', () => {
    // Test cleaning logic by mocking window.speechSynthesis
    const mockSpeak = vi.fn();
    const mockCancel = vi.fn();

    const originalWindow = global.window;
    // Mock SpeechSynthesisUtterance
    class MockSpeechSynthesisUtterance {
      text: string;
      rate: number = 1.0;
      pitch: number = 1.0;
      lang: string = 'en-US';
      constructor(text: string) {
        this.text = text;
      }
    }

    // @ts-ignore
    global.SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;
    // @ts-ignore
    global.window = {
      // @ts-ignore
      speechSynthesis: {
        speak: mockSpeak,
        cancel: mockCancel
      }
    };

    const assistant = new SpeechAssistant();
    const rawMarkdown = "### Legal Notice\n**Tenant** must pay rent. See [details](https://court.gov) or `code snippet`";
    const result = assistant.speak(rawMarkdown);

    expect(result).toBe(true);
    expect(mockCancel).toHaveBeenCalled();
    expect(mockSpeak).toHaveBeenCalled();

    const utteranceArg = mockSpeak.mock.calls[0][0];
    expect(utteranceArg.text).not.toContain('###');
    expect(utteranceArg.text).not.toContain('**');
    expect(utteranceArg.text).not.toContain('https://court.gov');
    expect(utteranceArg.text).toContain('Tenant');

    // Restore
    global.window = originalWindow;
  });

  it('stopSpeaking executes cancel without throwing errors', () => {
    expect(() => speechAssistant.stopSpeaking()).not.toThrow();
  });
});
