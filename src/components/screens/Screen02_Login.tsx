import { UserProfile } from '../../types/user';
import React, { useState } from 'react';
import { StitchIcon } from '../common/StitchIcon';

interface Screen02LoginProps {
  onLoginSuccess?: (userProfile: UserProfile) => void;
  onGoToSSO?: () => void;
  onBackToSplash?: () => void;
  onNavigate?: (path: string) => void;
}

export const Screen02_Login: React.FC<Screen02LoginProps> = ({
  onLoginSuccess,
  onGoToSSO,
  onBackToSplash,
  onNavigate
}) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  
  // Empty initial inputs for live testing
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  // Live validation & edge case feedback
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const demoPersonas = [
    {
      name: "John Doe",
      role: "Citizen Legal Help Account",
      email: "john@example.com",
      barId: "Client-8841",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=128"
    },
    {
      name: "Eleanor Vance, Esq.",
      role: "Senior Partner, Chancery Practice",
      email: "vance@vancestanding.law",
      barId: "DE-489102",
      avatar: "https://lh3.googleusercontent.com/aida/AEtjO1WlU_rw8DW14ePf9q8MQWTke2j0pNm1YeOMuhBZGVunSymAVfpxgz-yr1chhiSxsKYAYSmR27oadJaQQFRopIikAfqaxn8tvo1M3rXh0l465oXi1f8P4Iolrg_nyEdmVXx7ONK7niyl56GgQl_s35G3QDQL06zg3xtoZchdeCZWMGwkWRJx8LPmSe52dm0CIOgY-ApY7qm1qadIWC-xcxvr2Kar2Qo-F-VzSKc7GalR1mQh97r-2OEtqruR"
    },
    {
      name: "Marcus Chen",
      role: "Tech Contractor & Specialist",
      email: "marcus@chenengineering.com",
      barId: "Client-4412",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128"
    }
  ];

  const handleLogin = (persona: UserProfile) => {
    if (onLoginSuccess) {
      onLoginSuccess(persona);
    } else if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (authMethod === 'email') {
      const emailTrimmed = emailInput.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Edge case 1: Empty input
      if (!emailTrimmed) {
        setErrorMessage("Please enter your email address to continue.");
        return;
      }

      // Edge case 2: Invalid email syntax (Live testing demonstration)
      if (!emailRegex.test(emailTrimmed)) {
        setErrorMessage("Live Test Error: Invalid email format. Please provide a valid address with @ and domain (e.g. john@example.com).");
        return;
      }

      // Edge case 3: Password validation
      if (!passwordInput || passwordInput.length < 6) {
        setErrorMessage("Live Test Error: Password must be at least 6 characters.");
        return;
      }

      // Success case
      const username = emailTrimmed.split('@')[0];
      const displayName = username.charAt(0).toUpperCase() + username.slice(1);
      setSuccessMessage(`Verification Successful! Logging in as ${emailTrimmed}...`);

      setTimeout(() => {
        handleLogin({
          name: displayName + " Doe",
          role: "Citizen Legal Help Account",
          email: emailTrimmed,
          barId: "Client-" + Math.floor(1000 + Math.random() * 9000),
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=128"
        });
      }, 700);

    } else {
      // Phone auth
      if (!phoneInput.trim() || phoneInput.length < 10) {
        setErrorMessage("Please enter a valid 10-digit mobile number.");
        return;
      }
      setSuccessMessage(`Verification Code sent to ${phoneInput}. Logging in...`);
      setTimeout(() => {
        handleLogin(demoPersonas[0]);
      }, 700);
    }
  };

  const handleFillTestCase = (type: 'invalid' | 'valid') => {
    setErrorMessage(null);
    setSuccessMessage(null);
    if (type === 'invalid') {
      setEmailInput('invalid-email-address');
      setPasswordInput('123');
    } else {
      setEmailInput('john@example.com');
      setPasswordInput('password123');
    }
  };

  const handleBack = () => {
    if (onBackToSplash) {
      onBackToSplash();
    } else if (onNavigate) {
      onNavigate('splash');
    }
  };

  const handleSSO = () => {
    if (onGoToSSO) {
      onGoToSSO();
    } else if (onNavigate) {
      onNavigate('sso');
    }
  };

  return (
    <div className="bg-[#f6fbf5] font-sans text-[#181d1a] antialiased min-h-screen flex flex-col justify-between p-4">
      {/* Header */}
      <header className="w-full py-4 flex justify-between items-center max-w-xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-xs text-[#506358] hover:text-[#042217]">
          <StitchIcon name="arrow_back" className="text-[16px]" />
          <span>Back to Splash</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-[#1b382b] text-white flex items-center justify-center font-serif text-xs font-bold">
            ⚖
          </div>
          <span className="font-serif text-lg text-[#042217] font-semibold">AdvoChat</span>
        </div>
      </header>

      {/* Main card */}
      <main className="w-full max-w-[540px] mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#e2ddd5] relative my-auto">
        {/* Top Folio Headpiece */}
        <div className="flex flex-col items-center text-center space-y-2 pb-4">
          <div className="flex items-center justify-between w-full pb-2 border-b border-[#e2ddd5]">
            <span className="text-[11px] font-bold text-[#506358] tracking-widest uppercase flex items-center gap-1.5 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b382b]"></span>
              SECURE COUNSEL GATEWAY
            </span>
            <span className="text-[10px] text-[#042217] bg-[#d2e8d9] px-2 py-0.5 rounded uppercase tracking-wider font-semibold font-mono">
              LIVE DEMO READY
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl text-[#042217] font-semibold tracking-tight pt-2">
            Sign In to AdvoChat
          </h1>
          <p className="text-xs text-[#506358] max-w-md leading-relaxed">
            Enter your email to test authentication live with real-time validation and edge case feedback.
          </p>
        </div>

        {/* Live Test Case Action Strip (Ideal for Live Demo) */}
        <div className="mb-5 p-3 rounded-lg bg-[#f0f5f0] border border-[#e2ddd5] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#042217] uppercase tracking-wider flex items-center gap-1.5">
              <span>🧪</span>
              <span>Live Testing Helpers</span>
            </span>
            <span className="text-[10px] text-[#506358]">Click to populate live test data</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleFillTestCase('invalid')}
              className="flex-1 py-1.5 px-2 bg-white hover:bg-[#fedeb2]/40 text-[#854d0e] border border-[#fde68a] text-[11px] font-semibold rounded transition text-center"
            >
              ⚠️ Test Edge Case: Invalid Email
            </button>
            <button
              type="button"
              onClick={() => handleFillTestCase('valid')}
              className="flex-1 py-1.5 px-2 bg-white hover:bg-[#d2e8d9]/40 text-[#1b382b] border border-[#bbf7d0] text-[11px] font-semibold rounded transition text-center"
            >
              ✅ Test Success: john@example.com
            </button>
          </div>
        </div>

        {/* Live Validation Alert Banners */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2 animate-fadeIn">
            <StitchIcon name="error" className="text-[18px] text-red-600 flex-shrink-0 mt-0.5" />
            <div className="leading-snug font-medium">
              {errorMessage}
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-xs flex items-start gap-2 animate-fadeIn">
            <StitchIcon name="check_circle" className="text-[18px] text-green-600 flex-shrink-0 mt-0.5" />
            <div className="leading-snug font-medium">
              {successMessage}
            </div>
          </div>
        )}

        {/* Segmented Control */}
        <div className="bg-[#f0f5f0] p-1 rounded-lg flex items-center mb-5 border border-[#e2ddd5]">
          <button
            type="button"
            onClick={() => { setAuthMethod('email'); setErrorMessage(null); }}
            className={`flex-1 py-1.5 px-3 text-center rounded text-xs transition flex items-center justify-center gap-1.5 font-semibold ${
              authMethod === 'email'
                ? 'bg-white text-[#042217] shadow-sm'
                : 'text-[#506358] hover:text-[#042217]'
            }`}
          >
            <StitchIcon name="domain" className="text-[16px]" />
            <span>Email Login</span>
          </button>
          <button
            type="button"
            onClick={() => { setAuthMethod('phone'); setErrorMessage(null); }}
            className={`flex-1 py-1.5 px-3 text-center rounded text-xs transition flex items-center justify-center gap-1.5 font-semibold ${
              authMethod === 'phone'
                ? 'bg-white text-[#042217] shadow-sm'
                : 'text-[#506358] hover:text-[#042217]'
            }`}
          >
            <StitchIcon name="smartphone" className="text-[16px]" />
            <span>Direct Telephone</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={validateAndSubmit} className="space-y-4 text-xs">
          {authMethod === 'email' ? (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-bold text-[#181d1a] uppercase tracking-wider text-[11px]">
                  Email Address
                </label>
                <span className="text-[10px] text-[#506358]">Try typing invalid vs. valid</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f5f0] border border-[#c2c8c2] rounded focus-within:border-[#1b382b] focus-within:bg-white transition">
                <StitchIcon name="mail" className="text-[#506358] text-[18px]" />
                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => { setEmailInput(e.target.value); setErrorMessage(null); }}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-transparent text-[#181d1a] placeholder-[#727974] focus:outline-none font-medium"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-bold text-[#181d1a] mb-1 uppercase tracking-wider text-[11px]">
                Registered Telephone Number
              </label>
              <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f5f0] border border-[#c2c8c2] rounded focus-within:border-[#1b382b] focus-within:bg-white transition">
                <StitchIcon name="call" className="text-[#506358] text-[18px]" />
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => { setPhoneInput(e.target.value); setErrorMessage(null); }}
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent text-[#181d1a] placeholder-[#727974] focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-[#181d1a] uppercase tracking-wider text-[11px]">
                Password
              </label>
              <span className="text-[10px] text-[#506358]">Min. 6 characters</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f5f0] border border-[#c2c8c2] rounded focus-within:border-[#1b382b] focus-within:bg-white transition">
              <StitchIcon name="key" className="text-[#506358] text-[18px]" />
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setErrorMessage(null); }}
                placeholder="Enter password..."
                className="w-full bg-transparent text-[#181d1a] focus:outline-none font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1b382b] hover:bg-[#142b21] text-white font-semibold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Sign In to AdvoChat</span>
            <StitchIcon name="arrow_forward" className="text-[16px]" />
          </button>

          <button
            type="button"
            onClick={handleSSO}
            className="w-full py-2.5 px-3 rounded border border-[#c2c8c2] bg-[#f0f5f0] hover:bg-[#e2ddd5] text-[#042217] font-semibold text-xs transition flex items-center justify-center gap-2"
          >
            <StitchIcon name="domain" className="text-[16px]" />
            <span>Institutional SSO / Bar ID Login</span>
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#e2ddd5] flex flex-col gap-3">
          <span className="text-[11px] font-bold text-[#506358] uppercase tracking-wider text-center">
            Or Quick Switch Persona
          </span>
          <div className="grid grid-cols-3 gap-2">
            {demoPersonas.map((persona, idx) => (
              <button
                key={idx}
                onClick={() => handleLogin(persona)}
                className="p-2 rounded border border-[#e2ddd5] bg-[#fbf9f5] hover:bg-[#f0f5f0] text-left transition flex flex-col gap-1"
              >
                <div className="flex items-center gap-1.5">
                  <img src={persona.avatar} alt={persona.name} className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-[11px] font-bold text-[#042217] truncate">{persona.name.split(' ')[0]}</span>
                </div>
                <span className="text-[9px] text-[#506358] truncate">{persona.role}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-xl mx-auto py-3 text-center text-[11px] text-[#506358]">
        AdvoChat • Client Confidential • All data stays in your browser
      </footer>
    </div>
  );
};
