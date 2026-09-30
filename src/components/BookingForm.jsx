import React, { useState } from 'react';
import { 
  Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, 
  AlertCircle, MessageCircle, ArrowRight, Sparkles, MapPin, X 
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function BookingForm({ initialTreatment = null, isModal = false, onClose = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatmentId: initialTreatment ? initialTreatment.id : 'hydrafacial',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Time slot options within 10:30 AM to 7:00 PM
  const timeSlots = [
    '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM',
    '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM',
    '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  // Helper to format today's date for input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    // Phone validation (accepts 10 digits Indian or with +91)
    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^\d{10,12}$/.test(phoneClean)) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // Email validation
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    // Date validation
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred appointment date.';
    } else {
      const selected = new Date(formData.preferredDate);
      // getUTCDay or getDay
      const dayOfWeek = selected.getUTCDay();
      // Tuesday is Closed
      if (dayOfWeek === 2) {
        errs.preferredDate = 'Skin Rewind is closed on Tuesdays. Please choose Monday or Wednesday–Sunday.';
      }
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please select a preferred consultation time.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const getSelectedTreatmentObj = () => {
    return TREATMENTS.find(t => t.id === formData.treatmentId) || { name: 'Custom Aesthetic Consultation' };
  };

  // Direct WhatsApp Submission Flow
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const treatmentObj = getSelectedTreatmentObj();
    const message = 
      `*New Appointment Enquiry - Skin Rewind Aesthetic, Bhilai*\n` +
      `───────────────────────\n` +
      `*Patient Name:* ${formData.fullName.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Email:* ${formData.email.trim()}\n` +
      `*Treatment:* ${treatmentObj.name}\n` +
      `*Requested Date:* ${formData.preferredDate}\n` +
      `*Preferred Slot:* ${formData.preferredTime}\n` +
      (formData.notes ? `*Skin Concerns / Notes:* ${formData.notes.trim()}\n` : '') +
      `───────────────────────\n` +
      `Enquiry via skinrewind.in website`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encoded}`, '_blank');

    // Also record client confirmation view
    const refCode = 'SR-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedBooking({
      ref: refCode,
      ...formData,
      treatmentName: treatmentObj.name,
      channel: 'WhatsApp & Online Request'
    });
  };

  // Online Demo Reservation Request
  const handleSubmitOnline = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const treatmentObj = getSelectedTreatmentObj();
      const refCode = 'SR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        ref: refCode,
        ...formData,
        treatmentName: treatmentObj.name,
        channel: 'Online Request'
      });
    }, 700);
  };

  // Confirmation view after submission
  if (submittedBooking) {
    return (
      <div className={`booking-card ${isModal ? 'modal-sheet' : ''}`} style={{ textAlign: 'center', padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {isModal && onClose && (
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}

        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(37, 211, 102, 0.12)',
          color: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          border: '1px solid rgba(37, 211, 102, 0.3)'
        }}>
          <CheckCircle2 size={38} />
        </div>

        <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
          Enquiry Received
        </span>

        <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--color-espresso)', marginBottom: '0.5rem' }}>
          Thank You, {submittedBooking.fullName}!
        </h3>

        <p style={{ color: 'var(--color-muted)', maxWidth: '520px', margin: '0 auto 2rem auto', fontSize: '0.96rem' }}>
          Your appointment enquiry for <strong>{submittedBooking.treatmentName}</strong> has been logged with reference number:
        </p>

        <div style={{
          display: 'inline-block',
          padding: '0.75rem 1.75rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-ivory-warm)',
          border: '1px dashed var(--color-gold)',
          fontFamily: 'monospace',
          fontSize: '1.25rem',
          fontWeight: '700',
          color: 'var(--color-espresso)',
          marginBottom: '2rem'
        }}>
          {submittedBooking.ref}
        </div>

        <div style={{
          background: 'var(--color-cream)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          maxWidth: '560px',
          margin: '0 auto 2rem auto',
          textAlign: 'left'
        }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--color-espresso)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} style={{ color: 'var(--color-gold-dark)' }} /> Appointment Summary
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Preferred Date</span>
              <strong style={{ color: 'var(--color-espresso)' }}>{submittedBooking.preferredDate}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Time Slot</span>
              <strong style={{ color: 'var(--color-espresso)' }}>{submittedBooking.preferredTime}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Contact Phone</span>
              <strong style={{ color: 'var(--color-espresso)' }}>{submittedBooking.phone}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Clinic Lead</span>
              <strong style={{ color: 'var(--color-espresso)' }}>Aarti Hiwanj</strong>
            </div>
          </div>
        </div>

        <div style={{
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(185, 151, 105, 0.1)',
          border: '1px solid var(--border-gold)',
          maxWidth: '560px',
          margin: '0 auto 2rem auto',
          fontSize: '0.82rem',
          color: 'var(--color-espresso)',
          lineHeight: '1.6'
        }}>
          <strong>Clinic Verification Notice:</strong> Because Skin Rewind Aesthetic operates with dedicated one-on-one treatment rooms and personalized patch evaluations, our coordinator will phone/WhatsApp you to verify slot availability before final confirmation.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${encodeURIComponent(
              `Hello Skin Rewind Aesthetic, I submitted appointment request #${submittedBooking.ref} for ${submittedBooking.treatmentName} on ${submittedBooking.preferredDate}. Please confirm my slot.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={16} />
            <span>Confirm Now via WhatsApp</span>
          </a>

          <button 
            className="btn btn-secondary"
            onClick={() => {
              setSubmittedBooking(null);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                treatmentId: 'hydrafacial',
                preferredDate: '',
                preferredTime: '11:00 AM',
                notes: ''
              });
              if (onClose) onClose();
            }}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`booking-card ${isModal ? 'modal-sheet' : ''}`}>
      {isModal && onClose && (
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
      )}

      <div style={{ marginBottom: '1.75rem' }}>
        <span className="eyebrow">Personalized Aesthetic Care</span>
        <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: 'var(--color-espresso)', marginBottom: '0.5rem' }}>
          Book Your Clinical Consultation
        </h3>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem' }}>
          Meet certified cosmetologist Aarti Hiwanj at our Kohka, Bhilai clinic. Tuesday is our weekly off.
        </p>
      </div>

      <form noValidate>
        <div className="form-grid">
          {/* Full Name */}
          <div>
            <label className="form-label" htmlFor="fullName">
              Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g. Aarti Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control"
                style={{ borderColor: errors.fullName ? '#C0392B' : undefined }}
              />
            </div>
            {errors.fullName && <div className="form-error">{errors.fullName}</div>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="form-label" htmlFor="phone">
              Contact Phone (Mobile) *
            </label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. 91090 05395"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: errors.phone ? '#C0392B' : undefined }}
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          {/* Email Address */}
          <div>
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="e.g. name@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: errors.email ? '#C0392B' : undefined }}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          {/* Preferred Treatment */}
          <div>
            <label className="form-label" htmlFor="treatmentId">
              Preferred Service / Treatment *
            </label>
            <select
              id="treatmentId"
              name="treatmentId"
              value={formData.treatmentId}
              onChange={handleChange}
              className="form-control"
              style={{ cursor: 'pointer' }}
            >
              <optgroup label="Face Treatments">
                {TREATMENTS.filter(t => t.categorySlug === 'face').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
              <optgroup label="Hair Treatments">
                {TREATMENTS.filter(t => t.categorySlug === 'hair').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
              <optgroup label="Laser Treatments">
                {TREATMENTS.filter(t => t.categorySlug === 'laser').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
              <optgroup label="Body Treatments">
                {TREATMENTS.filter(t => t.categorySlug === 'body').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
              <optgroup label="Semi-Permanent Makeup">
                {TREATMENTS.filter(t => t.categorySlug === 'spmu').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
              <optgroup label="Nails & Other Services">
                {TREATMENTS.filter(t => t.categorySlug === 'other').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="form-label" htmlFor="preferredDate">
              Preferred Date * (Tuesday Closed)
            </label>
            <input 
              type="date"
              id="preferredDate"
              name="preferredDate"
              min={todayStr}
              value={formData.preferredDate}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: errors.preferredDate ? '#C0392B' : undefined, cursor: 'pointer' }}
            />
            {errors.preferredDate && <div className="form-error">{errors.preferredDate}</div>}
          </div>

          {/* Preferred Time Slot */}
          <div>
            <label className="form-label" htmlFor="preferredTime">
              Preferred Time Slot *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="form-control"
              style={{ cursor: 'pointer' }}
            >
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.preferredTime && <div className="form-error">{errors.preferredTime}</div>}
          </div>

          {/* Message / Additional Details */}
          <div className="form-group-full">
            <label className="form-label" htmlFor="notes">
              Skin Concerns or Notes (Optional)
            </label>
            <textarea 
              id="notes"
              name="notes"
              rows={3}
              placeholder="Tell us about your skin or hair goals, past treatments, or specific concerns..."
              value={formData.notes}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {/* WhatsApp Direct Submission Button */}
          <button 
            type="button"
            onClick={handleWhatsAppBooking}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', background: 'linear-gradient(135deg, #1EBE5D 0%, #159346 100%)' }}
          >
            <MessageCircle size={18} />
            <span>Instant Booking via WhatsApp</span>
          </button>

          {/* Online Submission Request */}
          <button 
            type="button"
            onClick={handleSubmitOnline}
            disabled={isSubmitting}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            {isSubmitting ? (
              <span>Registering Consultation Request...</span>
            ) : (
              <>
                <Calendar size={16} />
                <span>Submit Online Enquiry (Clinic Coordinator Follow-Up)</span>
              </>
            )}
          </button>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.76rem', color: 'var(--color-muted)', marginTop: '1.25rem' }}>
          🔒 Your privacy is strictly protected. We never share patient information.
        </p>
      </form>
    </div>
  );
}
