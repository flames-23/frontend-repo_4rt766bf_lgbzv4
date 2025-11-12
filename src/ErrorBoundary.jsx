import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', background: '#0a0a0a', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'ui-sans-serif, system-ui' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Something went wrong.</h1>
            <p style={{ opacity: 0.85, marginBottom: 16 }}>If you share this error message, I can fix it quickly.</p>
            <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(255,255,255,0.06)', padding: 12, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
{String(this.state.error)}
            </pre>
            <button onClick={() => window.location.reload()} style={{ marginTop: 16, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', color: 'white', padding: '10px 14px', borderRadius: 9999, border: 'none', cursor: 'pointer' }}>
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
