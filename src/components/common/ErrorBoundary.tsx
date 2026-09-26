import React, { Component, ErrorInfo, ReactNode } from 'react';
import { StitchIcon } from './StitchIcon';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Enterprise React Error Boundary.
 * Catches unhandled runtime rendering errors, presents a dignified recovery UI,
 * and maintains accessibility and WCAG conformance.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AdvoChat Uncaught Application Error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReload = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  private handleDismiss = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert" 
          aria-live="assertive" 
          className="min-h-[400px] w-full flex items-center justify-center p-6 bg-[#fbf9f5] text-[#181d1a]"
        >
          <div className="w-full max-w-lg bg-white rounded-2xl border border-[#e2ddd5] p-8 shadow-lg text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mx-auto text-2xl font-bold border border-amber-200">
              <StitchIcon name="warning" className="text-[28px]" />
            </div>

            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#042217]">
                Application Experience Guard
              </h2>
              <p className="text-xs sm:text-sm text-[#506358] max-w-md mx-auto">
                {this.props.fallbackMessage || 
                  "AdvoChat encountered an unexpected display condition. Your session data and documents remain safe and protected."}
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-lg bg-[#f0f5f0] border border-[#e2ddd5] text-left text-[11px] font-mono text-[#424844] max-h-28 overflow-y-auto">
                <strong>Error:</strong> {this.state.error.message || 'Unknown runtime exception'}
              </div>
            )}

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleDismiss}
                className="px-4 py-2 rounded-lg bg-[#f0f5f0] hover:bg-[#e2ddd5] text-[#042217] text-xs font-semibold border border-[#e2ddd5] transition"
              >
                Dismiss &amp; Continue
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="px-5 py-2 rounded-lg bg-[#1b382b] hover:bg-[#142b21] text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5"
              >
                <StitchIcon name="refresh" className="text-[16px]" />
                <span>Reload Session</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
