import React from 'react';
import { 
  Calendar, Clock, ShieldCheck, MapPin, Phone, 
  MessageCircle, Sparkles, CheckCircle2 
} from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { CLINIC_INFO } from '../data/clinicInfo';
import LiveClinicStatus from '../components/LiveClinicStatus';

export default function BookingPage({ initialTreatment = null }) {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Personalized Aesthetic Care</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Schedule Your <span className="serif-italic text-gold-gradient">Consultation</span>
            </h1>
            <p className="section-subtitle">
              Meet certified cosmetologist Aarti Hiwanj at Skin Rewind Aesthetic in Kohka, Bhilai for thorough skin analysis and tailored treatments.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start'
          }}>
            {/* Left: The Interactive Booking Form */}
            <div>
              <BookingForm initialTreatment={initialTreatment} isModal={false} />
            </div>

            {/* Right: Clinic Details, Visiting Tips & Consultation Standards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Quick Status Card */}
              <div className="glass-card" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Clinic Hours &amp; Status</h4>
                  <LiveClinicStatus />
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-soft)', lineHeight: '1.7' }}>
                  <div><strong>Monday:</strong> 10:30 AM – 7:30 PM</div>
                  <div style={{ color: '#B94A4A', fontWeight: '600' }}>Tuesday: Closed (Weekly Off)</div>
                  <div><strong>Wed – Sun:</strong> 10:30 AM – 7:30 PM</div>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encodeURIComponent('Hello Skin Rewind Aesthetic, I have an appointment enquiry.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <MessageCircle size={15} style={{ color: '#25D366' }} />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Phone size={15} style={{ color: 'var(--color-gold-dark)' }} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Consultation Journey Checklist */}
              <div className="glass-card" style={{ padding: '1.8rem' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} style={{ color: 'var(--color-gold-dark)' }} />
                  What to Expect at Your Visit
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', flexShrink: 0 }}>
                      1
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.88rem', display: 'block', color: 'var(--color-espresso)' }}>One-on-One Evaluation</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>Detailed discussion of concerns, routine, and medical history with Aarti Hiwanj.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', flexShrink: 0 }}>
                      2
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.88rem', display: 'block', color: 'var(--color-espresso)' }}>Magnified Skin &amp; Scalp Scans</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>Polarized imaging to assess sebum, UV pigmentation depth, and root density.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', flexShrink: 0 }}>
                      3
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.88rem', display: 'block', color: 'var(--color-espresso)' }}>Patch Testing &amp; Protocol</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>Safety-first patch evaluation before performing chemical peels or laser settings.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Location Reminder */}
              <div className="glass-card" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPin size={22} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>Clinic Address</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-espresso-soft)', lineHeight: '1.6', margin: 0 }}>
                      {CLINIC_INFO.contact.address.full}
                    </p>
                    <a 
                      href={CLINIC_INFO.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-gold-dark)', textDecoration: 'underline' }}
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
