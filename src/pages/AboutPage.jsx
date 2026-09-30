import React from 'react';
import { 
  Award, ShieldCheck, Heart, Sparkles, CheckCircle2, 
  MapPin, Calendar, Phone, ArrowRight, MessageCircle 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>
      {/* Editorial Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-head text-left">
            <span className="eyebrow">Our Philosophy &amp; Founder</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Where Science Meets Artistry in <br />
              <span className="serif-italic text-gold-gradient">Clinical Aesthetics</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px' }}>
              Skin Rewind Aesthetic was established to bring metropolitan standards of clinical cosmetology, advanced laser therapies, and individualized skincare to Bhilai, Chhattisgarh.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Editorial Showcase */}
      <section className="section" style={{ paddingTop: '1rem', backgroundColor: 'var(--color-ivory-warm)' }}>
        <div className="container">
          <div className="founder-card" style={{ marginBottom: '4rem' }}>
            <div className="founder-grid">
              <div className="founder-image-col">
                <img 
                  src={CLINIC_INFO.founder.portraitImage} 
                  alt="Aarti Hiwanj, Founder and Cosmetologist" 
                  className="founder-img"
                />
                <div className="founder-credentials-badge">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Award size={18} style={{ color: 'var(--color-gold-light)' }} />
                    <span style={{ fontWeight: '600', fontSize: '0.92rem' }}>
                      {CLINIC_INFO.founder.credentials}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-rose-taupe)', fontSize: '0.78rem', margin: 0 }}>
                    {CLINIC_INFO.founder.experience}
                  </p>
                </div>
              </div>

              <div className="founder-content-col">
                <span className="eyebrow text-left">Founder &amp; Cosmetologist</span>
                <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '0.4rem' }}>
                  Aarti Hiwanj
                </h2>
                <div style={{ color: 'var(--color-gold-dark)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Adv. PG Diploma in Cosmetology (IICTN Mumbai)
                </div>

                <div className="founder-quote-box">
                  "{CLINIC_INFO.founder.mission}"
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-espresso-soft)', fontSize: '0.96rem', lineHeight: '1.75' }}>
                  <p>
                    Aarti Hiwanj is the founder and cosmetologist of <strong>Skin Rewind Aesthetic</strong> in Bhilai, Chhattisgarh. She completed her specialized Advanced Post-Graduation Diploma in Cosmetology from the renowned Indian Institute of Cosmetology, Trichology &amp; Nutrition (IICTN) in Mumbai.
                  </p>
                  <p>
                    With hands-on clinical experience gained in Mumbai’s competitive aesthetic space, Aarti has developed deep expertise across skin rejuvenation, acne protocols, pigmentation correction, scar reduction, hair loss therapies, non-invasive body contouring, and laser treatments.
                  </p>
                  <p>
                    Passionate about staying at the forefront of cosmetology, she consistently attends specialized workshops, hands-on masterclasses, and aesthetic training programs to bring the latest verified techniques home to her clients in Bhilai.
                  </p>
                </div>

                {/* Verified Competencies */}
                <div style={{ marginTop: '1.75rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--color-espresso)' }}>
                    Core Clinical Disciplines:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                    {[
                      'Skin Rejuvenation & Glow Protocols',
                      'Targeted Acne & Scar Reduction',
                      'Melasma & Pigmentation Correction',
                      'PRP / GFC Hair Restoration',
                      'Cryolipolysis Body Contouring',
                      'Laser Hair Reduction & Skin Polish',
                      'Semi-Permanent Makeup Artistry',
                      'Clinical Scalp & Trichology Analysis'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-gold-dark)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={onOpenBooking}
                  >
                    <Calendar size={16} />
                    <span>Book Consultation with Aarti</span>
                  </button>
                  <a 
                    href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encodeURIComponent('Hello Aarti ma’am, I would like to schedule an aesthetic consultation at Skin Rewind in Bhilai.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <MessageCircle size={16} style={{ color: '#25D366' }} />
                    <span>WhatsApp Aarti</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Mission & Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.4rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-dark)', marginBottom: '1.25rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Clinical Mission</h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7', fontSize: '0.94rem' }}>
                To empower men and women in Bhilai and Chhattisgarh to rewind the years gracefully by harmonizing cutting-edge dermatological science, medical-grade technology, and subtle aesthetic artistry.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.4rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-dark)', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Hygiene &amp; Safety Standard</h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7', fontSize: '0.94rem' }}>
                Every tool is sanitized through surgical autoclave standards. All micro-needling cartridges, microblades, and HydraFacial tips are sealed single-use units opened right before your eyes.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.4rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-dark)', marginBottom: '1.25rem' }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Integrity &amp; Realism</h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7', fontSize: '0.94rem' }}>
                We believe in honest consultations. We never prescribe unnecessary packages, nor do we promise overnight miracles. We work with your biological pace to achieve lasting radiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bhilai Chooses Skin Rewind */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-head">
            <span className="eyebrow">Local Commitment</span>
            <h2 className="section-title">Aesthetic Excellence in Bhilai</h2>
            <p className="section-subtitle">
              Bringing metropolitan clinical expertise right here to Vivekanand Nagar, Kohka, Bhilai.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-espresso-soft)', lineHeight: '1.8' }}>
            <p>
              For years, residents of Bhilai and Durg frequently had to travel to metro cities to receive advanced treatments such as genuine vortex HydraFacials, acellular Growth Factor Concentrate (GFC) hair therapies, or calibrated triple-wavelength laser hair reduction.
            </p>
            <p>
              Aarti Hiwanj founded <strong>Skin Rewind Aesthetic</strong> to change that. By investing in modern technology, high-end equipment with contact cooling, and evidence-based active formulations, our clinic provides local clients with personalized, private, and world-class aesthetic care right at their doorstep.
            </p>
          </div>

          {/* Action CTA */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button 
              className="btn btn-primary btn-lg"
              onClick={onOpenBooking}
            >
              <Calendar size={18} />
              <span>Schedule a Personal Consultation with Aarti</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
