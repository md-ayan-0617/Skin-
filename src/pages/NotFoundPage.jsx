import React from 'react';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ setActivePage }) {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'calc(var(--header-height) + 3rem) 1.5rem 4rem 1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '520px' }}>
        <span className="eyebrow" style={{ marginBottom: '1rem' }}>Page Not Found</span>
        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: 'var(--color-espresso)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          This Aesthetic Path Does Not Exist
        </h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
          The page you are looking for may have moved or been updated. Let us guide you back to our treatments and clinic information.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Home size={16} />
            <span>Return to Homepage</span>
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => {
              setActivePage('treatments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Sparkles size={16} />
            <span>Explore Treatments</span>
          </button>
        </div>
      </div>
    </div>
  );
}
