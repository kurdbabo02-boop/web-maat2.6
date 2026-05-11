import { Component, type ErrorInfo, type ReactNode } from 'react';

interface DevErrorBoundaryProps {
  children: ReactNode;
}

interface DevErrorBoundaryState {
  error: Error | null;
}

class DevErrorBoundary extends Component<DevErrorBoundaryProps, DevErrorBoundaryState> {
  state: DevErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): DevErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Runtime error in route tree', {
        route: window.location.pathname,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      });
    }
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    if (!import.meta.env.DEV) {
      return this.props.children;
    }

    return (
      <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
        <div className="mx-auto max-w-3xl rounded-3xl border border-red-400/30 bg-slate-900/90 p-6 shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
            Dev runtime error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white">
            De pagina crashte tijdens renderen.
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Route: <span className="font-mono text-slate-100">{window.location.pathname}</span>
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Foutmelding: <span className="font-mono text-slate-100">{this.state.error.message}</span>
          </p>
          {this.state.error.stack && (
            <pre className="mt-5 overflow-x-auto rounded-2xl bg-black/30 p-4 text-xs leading-relaxed text-slate-200">
              {this.state.error.stack}
            </pre>
          )}
        </div>
      </div>
    );
  }
}

export default DevErrorBoundary;
