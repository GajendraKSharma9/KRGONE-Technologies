import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a1128] text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-lg w-full bg-[#152238] border border-amber-500/30 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-xl font-black tracking-tight text-white mb-2">
              KRG ONE Platform Notice
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              A temporary display glitch was intercepted. Please click below to reload and continue seamlessly.
            </p>
            {this.state.error && (
              <div className="mb-6 p-3 bg-black/50 border border-rose-500/30 rounded-lg text-left text-rose-300 font-mono text-[11px] overflow-auto max-h-32">
                {this.state.error.message || this.state.error.toString()}
              </div>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Try Again
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] to-[#b38f25] hover:brightness-110 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset & Reload</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
