import React, { useState } from 'react';
import { Sparkles, Camera, Eye, ArrowRight, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function GalleryPage({ onOpenGalleryItem, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Clinic Ambiance', 'Skin Care', 'Laser Suite', 'Semi-Permanent Makeup', 'Nails & Beauty', 'Hair Treatments'];

  const filteredImages = CLINIC_INFO.gallery.filter(item => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Visual Tour &amp; Treatment Ambiance</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Clinic Spaces &amp; <span className="serif-italic text-gold-gradient">Aesthetic Suites</span>
            </h1>
            <p className="section-subtitle">
              Explore our tranquil consultation suites, clinical treatment beds, high-precision laser equipment, and restorative spaces in Kohka, Bhilai.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-tabs-wrapper">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" style={{ marginTop: '2rem' }}>
            {filteredImages.map((item) => {
              // Find index in master gallery array for lightbox
              const masterIndex = CLINIC_INFO.gallery.findIndex(g => g.id === item.id);

              return (
                <div 
                  key={item.id} 
                  className="gallery-item"
                  onClick={() => onOpenGalleryItem(masterIndex)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-thumb"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-item-cat">{item.category}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-light)', fontSize: '0.78rem', marginTop: '4px' }}>
                      <Eye size={13} />
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer Labeling */}
          <div style={{
            marginTop: '3.5rem',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-cream)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--color-muted)'
          }}>
            <strong>Photography Note:</strong> Imagery represents aesthetic suite visual representations and equipment ambiance. To maintain absolute patient confidentiality, clinical case results are shared privately during in-person consultations with Aarti Hiwanj.
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button 
              className="btn btn-primary btn-lg"
              onClick={onOpenBooking}
            >
              <Calendar size={18} />
              <span>Book Your Visit to Skin Rewind</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
