import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Heart, Award, Cpu, 
  Sliders, HeartHandshake, Phone, Calendar, Star, MapPin, 
  Clock, CheckCircle, ExternalLink, MessageCircle, ChevronRight 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';
import { TREATMENTS } from '../data/treatments';
import LiveClinicStatus from '../components/LiveClinicStatus';

export default function HomePage({ 
  onOpenBooking, 
  onSelectTreatment, 
  onOpenGalleryItem, 
  setActivePage,
  onSelectCategory 
}) {
  const featuredTreatments = TREATMENTS.filter(t => t.featured);
  const [activeFaq, setActiveFaq] = useState(0);

  const homeFaqs = [
    {
      q: 'Do I need a prior appointment before visiting Skin Rewind Aesthetic in Bhilai?',
      a: 'Yes, we operate by scheduled appointments to ensure that cosmetologist Aarti Hiwanj can dedicate uninterrupted time for your skin evaluation, patch testing, and personalized procedure.'
    },
    {
      q: 'Are your instruments sterilized between patients?',
      a: 'Absolutely. We follow stringent hospital-grade infection control standards. Metal implements undergo high-pressure autoclave sterilization, while suction tips, microblading needles, and syringes are strictly single-use and opened in your presence.'
    },
    {
      q: 'How do I know which treatment is right for my skin concerns?',
      a: 'During your initial consultation, we perform a magnified skin/scalp analysis to examine your epidermal barrier, pigment layers, and follicular health. Based on your specific baseline and goals, we design a customized treatment roadmap.'
    },
    {
      q: 'What are the clinic timings?',
      a: 'Our clinic in Kohka, Bhilai is open Monday and Wednesday through Sunday from 10:30 AM to 7:30 PM. We are closed every Tuesday.'
    }
  ];

  return (
    <div>
      {/* =========================================================
          A. HERO SECTION
          ========================================================= */}
      <section className="hero-section" id="home">
        {/* Subtle Decorative Floating Orbs */}
        <div style={{
          position: 'absolute',
          top: '12%',
          left: '5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 184, 174, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185, 151, 105, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }} />

        <div className="container hero-grid">
          {/* Hero Content Column */}
          <div className="hero-content">
            {/* Live Status & Clinic Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <LiveClinicStatus />
              <span className="badge-pill">Bhilai, Chhattisgarh</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Glow Younger with <br />
              <span className="serif-italic text-gold-gradient">Skin Rewind</span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-description">
              Deeply hydrate and rejuvenate for glowing, revitalized skin. Experience world-class cosmetology, advanced laser protocols, and bespoke skincare led by certified cosmetologist Aarti Hiwanj.
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group">
              <button 
                className="btn btn-primary btn-lg"
                onClick={onOpenBooking}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => {
                  setActivePage('treatments');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Explore Treatments</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Verified Trust Stats */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-val">6</span>
                <span className="trust-lbl">Treatment Domains</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'var(--border-subtle)' }} />
              <div className="trust-item">
                <span className="trust-val">30+</span>
                <span className="trust-lbl">Clinical Services</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'var(--border-subtle)' }} />
              <div className="trust-item">
                <span className="trust-val">IICTN</span>
                <span className="trust-lbl">Mumbai Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Media Column */}
          <div className="hero-media-wrap">
            <div className="hero-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85" 
                alt="Radiant glowing skin model at Skin Rewind Aesthetic" 
                className="hero-image"
              />
            </div>

            {/* Floating Editorial Badge 1 */}
            <div className="hero-floating-card-1 floating-elem-1">
              <div className="floating-icon-bubble">
                <Sparkles size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', fontWeight: '600' }}>
                  Signature Ritual
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-espresso)' }}>
                  HydraFacial MD®
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge 2 */}
            <div className="hero-floating-card-2 floating-elem-2">
              <div className="floating-icon-bubble floating-icon-bubble-gold">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold-light)', fontWeight: '600' }}>
                  Clinical Lead
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '600', color: '#FFFFFF' }}>
                  Aarti Hiwanj
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          B. ABOUT SKIN REWIND (TWO-COLUMN INTRO)
          ========================================================= */}
      <section className="section" id="about-intro">
        <div className="container">
          <div className="split-grid">
            {/* Image Stack */}
            <div className="split-image-stack">
              <div className="image-stack-main">
                <img 
                  src="https://images.unsplash.com/photo-1512290900672-1f413994e4ae?auto=format&fit=crop&w=1000&q=80" 
                  alt="Skin Rewind Aesthetic clinical suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-stack-sub">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80" 
                  alt="Korean Glass Skin glow" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="experience-badge">
                <div className="experience-num">IICTN</div>
                <div className="experience-txt">Mumbai Certified</div>
              </div>
            </div>

            {/* Text Description */}
            <div>
              <span className="eyebrow">Bhilai's Cosmetology Center</span>
              <h2 className="section-title">
                Rewind the Years <br />
                <span className="serif-italic text-gold">Gracefully &amp; Naturally</span>
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Skin Rewind Aesthetic is a premier cosmetology and skin wellness clinic situated in Vivekanand Nagar, Kohka, Bhilai. We specialize in advanced, evidence-based aesthetic therapies that revitalize your natural beauty without harsh or unnatural alterations.
              </p>
              <p style={{ marginBottom: '1.75rem' }}>
                Under the expert clinical direction of founder Aarti Hiwanj, our center offers comprehensive care encompassing medical facials, Korean Glass Skin rituals, platelet-rich plasma (PRP/GFC) rejuvenation, triple-wavelength laser hair reduction, non-surgical body contouring, eyebrow microblading, and luxury nail services.
              </p>

              {/* Service Badges Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Korean Glass Skin',
                  'HydraFacial MD®',
                  'Laser Hair Reduction',
                  'PRP / GFC Hair Restoration',
                  'Cryolipolysis (Fat Freezing)',
                  'Eyebrow Microblading',
                  'Targeted Acne & Melasma',
                  'Gel Nail Extensions'
                ].map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--color-espresso)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--color-gold-dark)', flexShrink: 0 }} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span>Learn About Aarti Hiwanj</span>
                  <ArrowRight size={16} />
                </button>

                <a 
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
                  className="btn btn-secondary"
                >
                  <Phone size={15} style={{ color: 'var(--color-gold-dark)' }} />
                  <span>Call: {CLINIC_INFO.contact.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          C. FEATURED TREATMENTS (INTERACTIVE CARDS)
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Signature Clinical Protocols</span>
            <h2 className="section-title">Featured Aesthetic Treatments</h2>
            <p className="section-subtitle">
              Carefully designed protocols combining medical-grade technology, pure actives, and personalized attention.
            </p>
          </div>

          <div className="treatments-grid">
            {featuredTreatments.map((treatment) => (
              <div key={treatment.id} className="treatment-card">
                <div className="treatment-card-media">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="treatment-card-img"
                  />
                  {treatment.badge && (
                    <span className="treatment-card-badge">{treatment.badge}</span>
                  )}
                  <span className="treatment-card-category">{treatment.category}</span>
                </div>

                <div className="treatment-card-body">
                  <div className="treatment-card-meta">
                    <span><Clock size={13} /> {treatment.duration}</span>
                    <span>•</span>
                    <span><ShieldCheck size={13} /> {treatment.downtime}</span>
                  </div>

                  <h3 className="treatment-card-title">{treatment.name}</h3>
                  <p className="treatment-card-desc">{treatment.shortDesc}</p>

                  <div className="treatment-card-tags">
                    {treatment.idealFor.slice(0, 2).map((item, i) => (
                      <span key={i} className="treatment-card-tag">{item}</span>
                    ))}
                  </div>

                  <div className="treatment-card-footer">
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => onSelectTreatment(treatment)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </button>

                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenBooking(treatment)}
                    >
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Treatments Banner */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              className="btn btn-dark btn-lg"
              onClick={() => {
                setActivePage('treatments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Explore All 30+ Treatments Across 6 Categories</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          D. WHY CHOOSE US
          ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Clinical Standards</span>
            <h2 className="section-title">Why Choose Skin Rewind</h2>
            <p className="section-subtitle">
              We uphold uncompromising standards of clinical hygiene, personalized skin analysis, and evidence-based aesthetic care.
            </p>
          </div>

          <div className="features-grid">
            {CLINIC_INFO.whyChooseUs.map((feature) => {
              const iconMap = {
                Sliders: Sliders,
                Cpu: Cpu,
                Award: Award,
                HeartHandshake: HeartHandshake,
                ShieldCheck: ShieldCheck,
                Sparkles: Sparkles
              };
              const IconComp = iconMap[feature.icon] || Sparkles;

              return (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          E. ABOUT THE FOUNDER (AARTI HIWANJ)
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--color-blush-soft)' }}>
        <div className="container">
          <div className="founder-card">
            <div className="founder-grid">
              {/* Founder Portrait */}
              <div className="founder-image-col">
                <img 
                  src={CLINIC_INFO.founder.portraitImage} 
                  alt="Aarti Hiwanj, Founder & Cosmetologist of Skin Rewind Aesthetic" 
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

              {/* Founder Bio */}
              <div className="founder-content-col">
                <span className="eyebrow text-left">Meet The Founder &amp; Cosmetologist</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.5rem' }}>
                  Aarti Hiwanj
                </h2>
                <div style={{ color: 'var(--color-gold-dark)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Founder &amp; Clinical Cosmetologist • Skin Rewind Aesthetic
                </div>

                <div className="founder-quote-box">
                  "{CLINIC_INFO.founder.mission}"
                </div>

                <p style={{ marginBottom: '1rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {CLINIC_INFO.founder.bio[0]}
                </p>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {CLINIC_INFO.founder.bio[1]}
                </p>

                {/* Specialties */}
                <div>
                  <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-muted)', fontWeight: '700' }}>
                    Key Clinical Focus Areas:
                  </span>
                  <div className="specialties-chips">
                    {CLINIC_INFO.founder.specialties.map((spec, i) => (
                      <span key={i} className="specialty-chip">
                        <Sparkles size={12} style={{ color: 'var(--color-gold-dark)' }} />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={onOpenBooking}
                  >
                    <Calendar size={16} />
                    <span>Consult Aarti Hiwanj</span>
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>Read Full Story</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          F. THE SKIN REWIND DIFFERENCE & PATIENT JOURNEY
          ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patient Experience</span>
            <h2 className="section-title">The Skin Rewind Journey</h2>
            <p className="section-subtitle">
              Every client experiences a structured, comfortable four-step pathway to radiant dermal health.
            </p>
          </div>

          <div className="journey-grid">
            {CLINIC_INFO.patientJourney.map((j) => (
              <div key={j.step} className="journey-card">
                <div className="journey-step-num">{j.step}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{j.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: '1.6' }}>
                  {j.description}
                </p>
              </div>
            ))}
          </div>

          {/* Difference Points Cards */}
          <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {CLINIC_INFO.differencePoints.map((dp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--color-gold-dark)' }} />
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{dp.title}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: '1.6' }}>
                  {dp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          G. GALLERY SECTION (WITH LIGHTBOX)
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Visual Sanctuary</span>
            <h2 className="section-title">Clinic Spaces &amp; Artistry</h2>
            <p className="section-subtitle">
              Take a visual tour of our treatment suites, advanced laser equipment, and tranquil aesthetics in Bhilai.
            </p>
          </div>

          <div className="gallery-grid">
            {CLINIC_INFO.gallery.slice(0, 6).map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => onOpenGalleryItem(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-thumb"
                />
                <div className="gallery-overlay">
                  <span className="gallery-item-cat">{item.category}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setActivePage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View Full Clinic Gallery</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS SECTION
          ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patient Feedback</span>
            <h2 className="section-title">Experiences at Skin Rewind</h2>
            <p className="section-subtitle">
              Authentic patient feedback from residents across Bhilai, Durg, and Raipur.
            </p>
          </div>

          <div className="testimonials-grid">
            {CLINIC_INFO.testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-gold)" />
                  ))}
                </div>

                <p className="testimonial-quote">"{t.quote}"</p>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div className="testimonial-meta">
                    <h5>{t.name}</h5>
                    <p>{t.treatment} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.76rem', color: 'var(--color-muted)', marginTop: '2rem', fontStyle: 'italic' }}>
            *Disclaimer: Patient experiences represent individual clinical outcomes. Results vary according to specific skin type and condition.
          </p>
        </div>
      </section>

      {/* =========================================================
          H. HIGH-IMPACT APPOINTMENT CTA BANNER
          ========================================================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <span className="eyebrow eyebrow-dark">Begin Your Transformation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Your Journey to Radiant Skin <br />
              <span className="serif-italic text-gold-gradient">Starts Here</span>
            </h2>
            <p>
              Book an in-depth clinical consultation with certified cosmetologist Aarti Hiwanj at our Bhilai clinic. Personalized care, advanced treatments, and honest guidance.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary btn-lg"
                onClick={onOpenBooking}
              >
                <Calendar size={18} />
                <span>Book Your Appointment</span>
              </button>
              
              <a 
                href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encodeURIComponent('Hello Skin Rewind Aesthetic, I would like to book a consultation in Bhilai.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold btn-lg"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          I. CLINIC CONTACT & LOCATION OVERVIEW
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-warm)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info & Action Buttons */}
            <div>
              <span className="eyebrow text-left">Visit Our Clinic</span>
              <h2 className="section-title">
                Find Skin Rewind in <br />
                <span className="serif-italic text-gold">Kohka, Bhilai</span>
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                Conveniently located on Junwani Road in Kohka Housing Board, Bhilai. We offer a serene, hygienic, private sanctuary with dedicated treatment rooms.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-espresso)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Address</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-espresso-soft)', margin: 0 }}>
                      {CLINIC_INFO.contact.address.full}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-espresso)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Phone Numbers</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-espresso-soft)', margin: 0 }}>
                      <a href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`} style={{ fontWeight: '600', color: 'var(--color-gold-dark)' }}>
                        {CLINIC_INFO.contact.primaryPhone}
                      </a>
                      {' '} / {' '}
                      <a href={`tel:${CLINIC_INFO.contact.secondaryPhoneClean}`}>
                        {CLINIC_INFO.contact.secondaryPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-espresso)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Clinic Hours</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-espresso-soft)', margin: 0 }}>
                      Mon, Wed–Sun: 10:30 AM – 7:30 PM <br />
                      <strong style={{ color: '#B94A4A' }}>Tuesday: Closed (Weekly Off)</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={CLINIC_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={16} />
                  <span>Get Driving Directions</span>
                  <ExternalLink size={14} />
                </a>

                <a 
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
                  className="btn btn-secondary"
                >
                  <Phone size={16} style={{ color: 'var(--color-gold-dark)' }} />
                  <span>Call Primary Line</span>
                </a>
              </div>
            </div>

            {/* Right: Opening Hours Table Card */}
            <div className="contact-card-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem' }}>Weekly Clinic Schedule</h3>
                <LiveClinicStatus />
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Consultations and procedures are arranged by prior slot reservation to avoid waiting.
              </p>

              <ul className="hours-list">
                {CLINIC_INFO.hours.map((h, i) => {
                  const todayIndex = new Date().getDay();
                  // Days: Sunday=0, Monday=1, Tuesday=2, Wednesday=3, Thursday=4, Friday=5, Saturday=6
                  const dayMap = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
                  const isToday = dayMap[h.day] === todayIndex;

                  return (
                    <li 
                      key={i} 
                      className={`hours-row ${isToday ? 'is-today' : ''} ${!h.isOpen ? 'is-closed' : ''}`}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {isToday && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)' }} />}
                        {h.day}
                      </span>
                      <span>{h.time}</span>
                    </li>
                  );
                })}
              </ul>

              <div style={{ marginTop: '1.75rem', padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-blush-soft)', border: '1px solid var(--border-gold)', fontSize: '0.82rem', color: 'var(--color-espresso)' }}>
                <strong>Visiting Tip:</strong> For facial peels, laser hair reduction, or PRP treatments, avoid sun tanning or harsh exfoliating scrubs 48 hours prior to your appointment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION
          ========================================================= */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-head">
            <span className="eyebrow">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about visiting Skin Rewind Aesthetic in Bhilai.
            </p>
          </div>

          <div className="faq-accordion">
            {homeFaqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
                <button 
                  className="faq-trigger"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={18} style={{ transform: activeFaq === index ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {activeFaq === index && (
                  <div className="faq-content">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
