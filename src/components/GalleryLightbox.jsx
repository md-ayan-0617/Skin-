import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || currentIndex < 0 || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div 
      className="lightbox-overlay" 
      role="dialog" 
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button 
        onClick={onClose} 
        aria-label="Close image lightbox"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          zIndex: 2010
        }}
      >
        <X size={22} />
      </button>

      {/* Prev / Next Buttons */}
      <button 
        onClick={onPrev}
        aria-label="Previous image"
        style={{
          position: 'absolute',
          left: '24px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          zIndex: 2010
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={onNext}
        aria-label="Next image"
        style={{
          position: 'absolute',
          right: '24px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          zIndex: 2010
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Image Frame */}
      <div style={{ maxWidth: '90vw', maxHeight: '80vh', position: 'relative' }}>
        <img 
          src={currentItem.image} 
          alt={currentItem.title}
          className="lightbox-img" 
        />
      </div>

      {/* Caption & Category */}
      <div className="lightbox-caption">
        <span style={{ 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em', 
          color: 'var(--color-gold-light)',
          display: 'block',
          marginBottom: '4px'
        }}>
          {currentItem.category} • {currentIndex + 1} of {images.length}
        </span>
        <h4 style={{ color: '#FFFFFF', fontWeight: '500', fontSize: '1.25rem', margin: 0 }}>
          {currentItem.title}
        </h4>
        {currentItem.caption && (
          <p style={{ color: 'var(--color-rose-taupe)', fontSize: '0.9rem', marginTop: '4px', maxWidth: '600px' }}>
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
}
