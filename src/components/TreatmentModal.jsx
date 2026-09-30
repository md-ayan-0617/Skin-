import React, { useState } from 'react';
import { 
  X, CheckCircle, Clock, Shield, MapPin, ChevronDown, ChevronUp, 
  Sparkles, Calendar, MessageCircle 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function TreatmentModal({ treatment, onClose, onBookTreatment }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!treatment) return null;

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  const whatsappInquiryUrl = `https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encodeURIComponent(
    `Hello Aarti ma'am, I am interested in knowing more about the ${treatment.name} at Skin Rewind Aesthetic, Bhilai.`
  )}`;

  return (
    <div 
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-sheet">
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close treatment details"
        >
          <X size={20} />
        </button>

        {/* Hero Media Banner */}
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: 'var(--color-espresso)' }}>
          <img 
            src={treatment.image} 
            alt={treatment.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.88 }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(34, 24, 21, 0.95) 0%, rgba(34, 24, 21, 0.4) 60%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <span className="badge-pill" style={{ background: 'rgba(185, 151, 105, 0.25)', color: 'var(--color-gold-light)' }}>
                {treatment.category}
              </span>
              {treatment.badge && (
                <span className="badge-pill-rose" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', borderColor: 'transparent' }}>
                  {treatment.badge}
                </span>
              )}
            </div>
            <h2 id="treatment-modal-title" style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '600' }}>
              {treatment.name}
            </h2>
            <p style={{ color: 'var(--color-rose-taupe)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              {treatment.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-cream)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={18} style={{ color: 'var(--color-gold-dark)' }} />
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Duration</div>
                <div style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--color-espresso)' }}>{treatment.duration}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={18} style={{ color: 'var(--color-gold-dark)' }} />
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Downtime</div>
                <div style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--color-espresso)' }}>{treatment.downtime}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={18} style={{ color: 'var(--color-gold-dark)' }} />
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Clinical Lead</div>
                <div style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--color-espresso)' }}>Aarti Hiwanj</div>
              </div>
            </div>
          </div>

          {/* Detailed Editorial Overview */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-espresso)' }}>
              Treatment Overview
            </h4>
            <p style={{ color: 'var(--color-espresso-soft)', lineHeight: '1.75', fontSize: '0.98rem' }}>
              {treatment.fullDesc}
            </p>
          </div>

          {/* Potential Benefits */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-espresso)' }}>
              Potential Benefits &amp; Objectives
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '0.75rem', fontStyle: 'italic' }}>
              *Benefits depend on individual physiological baseline, age, and adherence to recommended clinical aftercare.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {treatment.benefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--color-espresso)' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Areas */}
          {treatment.targetAreas && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--color-espresso)' }}>
                Target Treatment Areas
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {treatment.targetAreas.map((area, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: '0.35rem 0.85rem', 
                      borderRadius: 'var(--radius-full)', 
                      background: 'var(--color-blush-soft)', 
                      border: '1px solid var(--border-gold)',
                      fontSize: '0.82rem',
                      fontWeight: '500',
                      color: 'var(--color-espresso)'
                    }}
                  >
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px', color: 'var(--color-gold-dark)' }} />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* General Treatment Process */}
          {treatment.processSteps && treatment.processSteps.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-espresso)' }}>
                General Clinical Process
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {treatment.processSteps.map((s) => (
                  <div 
                    key={s.step} 
                    style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-cream)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-espresso)',
                      color: 'var(--color-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}>
                      {s.step}
                    </div>
                    <div>
                      <h5 style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--color-espresso)', marginBottom: '0.2rem' }}>
                        {s.title}
                      </h5>
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', margin: 0 }}>
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-espresso)' }}>
                Frequently Asked Questions
              </h4>
              <div className="faq-accordion">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                    <button 
                      className="faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaqIndex === idx}
                    >
                      <span>{faq.q}</span>
                      {openFaqIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="faq-content">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation CTA Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-espresso)',
            color: '#FFFFFF'
          }}>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>
                Consult Aarti Hiwanj for {treatment.name}
              </h4>
              <p style={{ color: 'var(--color-rose-taupe)', fontSize: '0.85rem', margin: 0 }}>
                Personalized skin diagnosis &amp; patch testing at our Bhilai clinic.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <MessageCircle size={15} style={{ color: '#25D366' }} />
                <span>WhatsApp Enquiry</span>
              </a>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  onClose();
                  onBookTreatment(treatment);
                }}
              >
                <Calendar size={15} />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
