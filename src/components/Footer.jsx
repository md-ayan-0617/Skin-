import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Heart, Sparkles 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';
import { TREATMENT_CATEGORIES } from '../data/treatments';

export default function Footer({ setActivePage, onOpenBooking, onSelectCategory }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page, cat = null) => {
    setActivePage(page);
    if (cat && onSelectCategory) {
      onSelectCategory(cat);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="brand-link" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-monogram" style={{ background: '#221815', borderColor: 'var(--color-gold)' }}>
                SR
              </div>
              <div className="brand-text-wrap">
                <span className="brand-title" style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>Skin Rewind</span>
                <span className="brand-sub" style={{ color: 'var(--color-gold-light)' }}>Aesthetic • Bhilai</span>
              </div>
            </div>
            
            <p style={{ color: 'var(--color-rose-taupe)', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '340px' }}>
              Bhilai’s premier skin, hair, and cosmetology clinic founded by Aarti Hiwanj (IICTN Mumbai). Combining scientific precision, state-of-the-art technology, and bespoke care.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.5rem 0.9rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(185, 151, 105, 0.15)',
              border: '1px solid rgba(185, 151, 105, 0.35)',
              color: 'var(--color-gold-light)',
              fontSize: '0.78rem'
            }}>
              <ShieldCheck size={16} />
              <span>Certified Cosmetologist (IICTN Mumbai)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
                  <ArrowRight size={13} /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>
                  <ArrowRight size={13} /> About Founder
                </a>
              </li>
              <li>
                <a href="#treatments" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('treatments', 'all'); }}>
                  <ArrowRight size={13} /> All Treatments (30+)
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('gallery'); }}>
                  <ArrowRight size={13} /> Clinic Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
                  <ArrowRight size={13} /> Contact &amp; Directions
                </a>
              </li>
              <li>
                <button 
                  className="footer-link" 
                  onClick={onOpenBooking}
                  style={{ color: 'var(--color-gold-light)', fontWeight: '600' }}
                >
                  <Sparkles size={13} /> Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatment Categories */}
          <div>
            <h4 className="footer-col-title">Treatments</h4>
            <ul className="footer-links">
              {TREATMENT_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <a 
                    href={`#treatment-${cat.id}`} 
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); handleNav('treatments', cat.id); }}
                  >
                    <ArrowRight size={13} /> {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Visit & Timings */}
          <div>
            <h4 className="footer-col-title">Visit The Clinic</h4>
            
            <div className="footer-contact-item">
              <MapPin size={17} className="footer-contact-icon" />
              <span>
                1st Floor, St. No. 13, Plot No. 1911/3, Junwani Road, Vivekanand Nagar, Kohka Housing Board, Kohka, Bhilai, CG 490020
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={17} className="footer-contact-icon" />
              <div>
                <a href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`} style={{ color: 'var(--color-cream)', fontWeight: '600', display: 'block' }}>
                  {CLINIC_INFO.contact.primaryPhone}
                </a>
                <a href={`tel:${CLINIC_INFO.contact.secondaryPhoneClean}`} style={{ color: 'var(--color-rose-taupe)', fontSize: '0.8rem', display: 'block' }}>
                  {CLINIC_INFO.contact.secondaryPhone}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={17} className="footer-contact-icon" />
              <a href={`mailto:${CLINIC_INFO.contact.email}`} style={{ color: 'var(--color-rose-taupe)' }}>
                {CLINIC_INFO.contact.email}
              </a>
            </div>

            <div className="footer-contact-item">
              <Clock size={17} className="footer-contact-icon" />
              <div>
                <span style={{ display: 'block', color: 'var(--color-gold-light)', fontWeight: '600' }}>
                  Mon, Wed–Sun: 10:30 AM – 7:30 PM
                </span>
                <span style={{ display: 'block', color: '#E58A8A', fontSize: '0.8rem' }}>
                  Tuesday: Closed (Weekly Off)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <div style={{
          padding: '1.5rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.75rem',
          lineHeight: '1.6',
          color: 'rgba(217, 184, 174, 0.65)',
          textAlign: 'center'
        }}>
          <strong>Clinical Notice:</strong> Treatments at Skin Rewind Aesthetic are individualized cosmetic and aesthetic care protocols conducted under certified cosmetology practices by Aarti Hiwanj (IICTN Mumbai). Results vary depending on personal skin biology, age, lifestyle, and post-care routine. The clinic does not guarantee uniform medical or miraculous results.
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Skin Rewind Aesthetic. All rights reserved. Bhilai, Chhattisgarh, India.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('about')}>About Aarti Hiwanj</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('contact')}>Location &amp; Hours</span>
            <span style={{ cursor: 'pointer' }} onClick={onOpenBooking}>Online Enquiry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
