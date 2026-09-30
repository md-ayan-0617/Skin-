import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  ExternalLink, Send, CheckCircle2, ShieldCheck 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';
import LiveClinicStatus from '../components/LiveClinicStatus';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Consultation Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Aarti ma'am, I am reaching out from your website contact page regarding a consultation at Skin Rewind Aesthetic, Bhilai.`
  );

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>
      {/* Page Header */}
      <section className="section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Connect With Us</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Contact &amp; <span className="serif-italic text-gold-gradient">Location</span>
            </h1>
            <p className="section-subtitle">
              We look forward to welcoming you to Skin Rewind Aesthetic in Kohka, Bhilai. Reach out for appointments, procedure guidance, or directions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start'
          }}>
            {/* Left: Contact Info Cards, Hours & Map Links */}
            <div>
              {/* Quick Communication Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <a 
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: '600' }}>Primary Line</div>
                    <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--color-espresso)' }}>{CLINIC_INFO.contact.primaryPhone}</div>
                  </div>
                </a>

                <a 
                  href={`tel:${CLINIC_INFO.contact.secondaryPhoneClean}`}
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: '600' }}>Secondary Line</div>
                    <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--color-espresso)' }}>{CLINIC_INFO.contact.secondaryPhone}</div>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', background: 'rgba(37, 211, 102, 0.08)', borderColor: 'rgba(37, 211, 102, 0.3)' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#25D366', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: '600' }}>Direct WhatsApp</div>
                    <div style={{ fontWeight: '600', fontSize: '0.92rem', color: '#16803C' }}>Chat with Aarti's Team</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${CLINIC_INFO.contact.email}`}
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-blush)', color: 'var(--color-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: '600' }}>Clinic Email</div>
                    <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--color-espresso)' }}>{CLINIC_INFO.contact.email}</div>
                  </div>
                </a>
              </div>

              {/* Physical Location Details */}
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin size={26} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Clinic Address</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-espresso-soft)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                      {CLINIC_INFO.contact.address.line1}<br />
                      {CLINIC_INFO.contact.address.line2}<br />
                      {CLINIC_INFO.contact.address.line3}<br />
                      {CLINIC_INFO.contact.address.city}, {CLINIC_INFO.contact.address.state} {CLINIC_INFO.contact.address.pincode}, {CLINIC_INFO.contact.address.country}
                    </p>

                    <a 
                      href={CLINIC_INFO.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <MapPin size={15} />
                      <span>Open in Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>Clinic Hours</h3>
                  <LiveClinicStatus />
                </div>
                
                <ul className="hours-list">
                  {CLINIC_INFO.hours.map((h, i) => {
                    const todayIndex = new Date().getDay();
                    const dayMap = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
                    const isToday = dayMap[h.day] === todayIndex;

                    return (
                      <li 
                        key={i} 
                        className={`hours-row ${isToday ? 'is-today' : ''} ${!h.isOpen ? 'is-closed' : ''}`}
                      >
                        <span style={{ fontWeight: isToday ? '700' : '500' }}>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right: Online Enquiry Form */}
            <div className="booking-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-espresso)' }}>
                Send Us a Message
              </h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Have questions regarding treatment compatibility, aftercare, or appointment availability? Drop us a note.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                    Thank you, {formData.name}. Our clinic team in Bhilai will review your query and get in touch with you shortly.
                  </p>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Consultation Inquiry',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        className="form-control"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        className="form-control"
                        placeholder="e.g. 91090 05395"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        className="form-control"
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Area of Interest</label>
                      <select 
                        className="form-control"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Skin Rejuvenation / Korean Glass Skin">Skin Rejuvenation / Korean Glass Skin</option>
                        <option value="HydraFacial MD">HydraFacial MD</option>
                        <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                        <option value="PRP / GFC Hair Restoration">PRP / GFC Hair Restoration</option>
                        <option value="Cryolipolysis (Fat Freezing)">Cryolipolysis (Fat Freezing)</option>
                        <option value="Eyebrow Microblading / SPMU">Eyebrow Microblading / SPMU</option>
                        <option value="Acne or Pigmentation">Acne or Pigmentation</option>
                        <option value="Nails or Other Services">Nails or Other Services</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Message / Details</label>
                      <textarea 
                        rows={4}
                        className="form-control"
                        placeholder="How can Aarti Hiwanj and the team assist you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="btn btn-primary btn-lg"
                      style={{ marginTop: '0.5rem', width: '100%' }}
                    >
                      {submitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message to Skin Rewind</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
