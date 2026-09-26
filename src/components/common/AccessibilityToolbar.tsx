import React, { useState, useEffect } from 'react';
import { StitchIcon } from './StitchIcon';

export interface AccessibilitySettings {
  highContrast: boolean;
  dyslexiaFont: boolean;
  reducedMotion: boolean;
  fontSize: 'default' | 'large' | 'xlarge';
}

export const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('advochat_a11y_settings');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return {
      highContrast: false,
      dyslexiaFont: false,
      reducedMotion: false,
      fontSize: 'default'
    };
  });

  const [announcement, setAnnouncement] = useState<string>('');

  const announce = (msg: string) => {
    setAnnouncement(msg);
    setTimeout(() => setAnnouncement(''), 3000);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;

    // Apply high contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast-mode');
    } else {
      body.classList.remove('high-contrast-mode');
    }

    // Apply dyslexia font
    if (settings.dyslexiaFont) {
      body.classList.add('dyslexia-friendly-mode');
    } else {
      body.classList.remove('dyslexia-friendly-mode');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      body.classList.add('reduce-motion-mode');
    } else {
      body.classList.remove('reduce-motion-mode');
    }

    // Apply font size
    body.classList.remove('text-scale-default', 'text-scale-large', 'text-scale-xlarge');
    if (settings.fontSize === 'large') {
      body.classList.add('text-scale-large');
    } else if (settings.fontSize === 'xlarge') {
      body.classList.add('text-scale-xlarge');
    } else {
      body.classList.add('text-scale-default');
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('advochat_a11y_settings', JSON.stringify(settings));
    }
  }, [settings]);

  // Handle Alt+A to toggle and Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleHighContrast = () => {
    const next = !settings.highContrast;
    setSettings(prev => ({ ...prev, highContrast: next }));
    announce(next ? 'High Contrast mode enabled' : 'High Contrast mode disabled');
  };

  const toggleDyslexiaFont = () => {
    const next = !settings.dyslexiaFont;
    setSettings(prev => ({ ...prev, dyslexiaFont: next }));
    announce(next ? 'Dyslexia-friendly text spacing enabled' : 'Dyslexia-friendly text spacing disabled');
  };

  const toggleReducedMotion = () => {
    const next = !settings.reducedMotion;
    setSettings(prev => ({ ...prev, reducedMotion: next }));
    announce(next ? 'Reduced motion enabled' : 'Reduced motion disabled');
  };

  const setFontSize = (size: 'default' | 'large' | 'xlarge') => {
    setSettings(prev => ({ ...prev, fontSize: size }));
    const labels = { default: 'Standard font size (100%)', large: 'Large font size (115%)', xlarge: 'Extra Large font size (130%)' };
    announce(labels[size]);
  };

  const resetAll = () => {
    setSettings({
      highContrast: false,
      dyslexiaFont: false,
      reducedMotion: false,
      fontSize: 'default'
    });
    announce('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Screen Reader Live Region for Announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Floating Accessibility Trigger Button */}
      <div className="fixed bottom-24 right-4 z-50 sm:bottom-28">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls="accessibility-panel"
          aria-label="Accessibility options menu (High Contrast, Large Text, Screen Reader assistance)"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#1b382b] hover:bg-[#142b21] text-white font-medium text-xs rounded-full shadow-lg border border-[#305c48] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition-transform transform active:scale-95"
        >
          <StitchIcon name="accessibility_new" className="text-[18px]" />
          <span className="hidden sm:inline font-semibold">Accessibility</span>
        </button>

        {/* Accessibility Control Drawer */}
        {isOpen && (
          <div
            id="accessibility-panel"
            role="region"
            aria-label="Accessibility and Inclusive Design Controls"
            className="absolute bottom-12 right-0 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border-2 border-[#1b382b] p-4 text-[#181d1a] z-50 animate-in fade-in"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#e2ddd5]">
              <div className="flex items-center gap-2">
                <StitchIcon name="accessibility_new" className="text-[20px] text-[#1b382b]" />
                <h2 className="font-serif font-bold text-sm text-[#042217]">Accessibility Controls</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-[#506358] hover:text-[#042217] hover:bg-[#f0f5f0] text-xs font-bold"
                aria-label="Close accessibility controls"
              >
                ✕
              </button>
            </div>

            <div className="mt-3 space-y-3.5 text-xs">
              {/* Font Size Scaling */}
              <div>
                <label className="block font-semibold text-[#506358] mb-1.5">
                  Text Size Scaling
                </label>
                <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Text Size Selection">
                  <button
                    onClick={() => setFontSize('default')}
                    className={`py-1.5 px-2 rounded font-semibold border text-center transition-colors ${
                      settings.fontSize === 'default'
                        ? 'bg-[#1b382b] text-white border-[#1b382b]'
                        : 'bg-[#f6fbf5] text-[#181d1a] border-[#e2ddd5] hover:bg-[#e8efe7]'
                    }`}
                    aria-pressed={settings.fontSize === 'default'}
                  >
                    100% (A)
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`py-1.5 px-2 rounded font-semibold border text-center transition-colors ${
                      settings.fontSize === 'large'
                        ? 'bg-[#1b382b] text-white border-[#1b382b]'
                        : 'bg-[#f6fbf5] text-[#181d1a] border-[#e2ddd5] hover:bg-[#e8efe7]'
                    }`}
                    aria-pressed={settings.fontSize === 'large'}
                  >
                    115% (A+)
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`py-1.5 px-2 rounded font-semibold border text-center transition-colors ${
                      settings.fontSize === 'xlarge'
                        ? 'bg-[#1b382b] text-white border-[#1b382b]'
                        : 'bg-[#f6fbf5] text-[#181d1a] border-[#e2ddd5] hover:bg-[#e8efe7]'
                    }`}
                    aria-pressed={settings.fontSize === 'xlarge'}
                  >
                    130% (A++)
                  </button>
                </div>
              </div>

              {/* High Contrast Mode Toggle */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                <div>
                  <div className="font-semibold text-[#181d1a]">High Contrast Mode</div>
                  <div className="text-[11px] text-[#506358]">WCAG AAA 7.0:1+ contrast</div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.highContrast}
                  onClick={toggleHighContrast}
                  className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b382b] ${
                    settings.highContrast ? 'bg-[#1b382b]' : 'bg-[#cbd5e1]'
                  }`}
                  aria-label="Toggle high contrast mode"
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Dyslexia-Friendly Spacing */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                <div>
                  <div className="font-semibold text-[#181d1a]">Dyslexia-Friendly Spacing</div>
                  <div className="text-[11px] text-[#506358]">Wider letter &amp; line spacing</div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.dyslexiaFont}
                  onClick={toggleDyslexiaFont}
                  className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b382b] ${
                    settings.dyslexiaFont ? 'bg-[#1b382b]' : 'bg-[#cbd5e1]'
                  }`}
                  aria-label="Toggle dyslexia-friendly spacing"
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      settings.dyslexiaFont ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#fbf9f5] border border-[#e2ddd5]">
                <div>
                  <div className="font-semibold text-[#181d1a]">Reduced Motion</div>
                  <div className="text-[11px] text-[#506358]">Disables rapid animations</div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  onClick={toggleReducedMotion}
                  className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b382b] ${
                    settings.reducedMotion ? 'bg-[#1b382b]' : 'bg-[#cbd5e1]'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Reset to Default */}
              <div className="pt-2 border-t border-[#e2ddd5] flex items-center justify-between">
                <span className="text-[10px] text-[#506358]">Press Esc to close</span>
                <button
                  onClick={resetAll}
                  className="text-xs font-semibold text-[#ba1a1a] hover:underline"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
