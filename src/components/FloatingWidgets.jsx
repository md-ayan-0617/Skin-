import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function FloatingWidgets({ onOpenBooking }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Skin Rewind Aesthetic, I would like to enquire about consultation and treatments with Aarti Hiwanj in Bhilai.'
  );

  return (
    <aside className="floating-actions" aria-label="Quick contact and actions">
      {/* Back to Top Button */}
      {showTopBtn && (
        <button 
          className="floating-btn floating-btn-top"
          onClick={scrollToTop}
          aria-label="Back to top of page"
        >
          <ArrowUp size={20} />
          <span className="floating-tooltip">Back to top</span>
        </button>
      )}

      {/* Floating Appointment Button */}
      <button 
        className="floating-btn floating-btn-appointment"
        onClick={onOpenBooking}
        aria-label="Book an Appointment"
      >
        <Calendar size={20} />
        <span className="floating-tooltip">Book Appointment</span>
      </button>

      {/* Direct Phone Call Button */}
      <a 
        href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
        className="floating-btn floating-btn-call"
        aria-label="Call clinic directly"
      >
        <Phone size={20} />
        <span className="floating-tooltip">Call: {CLINIC_INFO.contact.primaryPhone}</span>
      </a>

      {/* Direct WhatsApp Button */}
      <a 
        href={`https://wa.me/${CLINIC_INFO.contact.whatsappClean}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat on WhatsApp with Skin Rewind Aesthetic"
      >
        <MessageCircle size={22} />
        <span className="floating-tooltip">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
