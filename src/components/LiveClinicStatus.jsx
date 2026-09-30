import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function LiveClinicStatus() {
  const [status, setStatus] = useState({ isOpen: false, text: 'Checking clinic hours...' });

  useEffect(() => {
    function calculateStatus() {
      // Calculate India Standard Time (UTC + 5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 is Sunday, 2 is Tuesday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      // Tuesday is Closed (day === 2)
      if (day === 2) {
        setStatus({
          isOpen: false,
          text: 'Tuesday Closed • Opens Wednesday at 10:30 AM',
          color: '#B94A4A'
        });
        return;
      }

      // Clinic hours: 10:30 AM (630 mins) to 7:30 PM (1170 mins)
      const openTime = 10 * 60 + 30; // 630
      const closeTime = 19 * 60 + 30; // 1170

      if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
        setStatus({
          isOpen: true,
          text: 'Clinic Open Today until 7:30 PM',
          color: '#25D366'
        });
      } else if (timeInMinutes < openTime) {
        setStatus({
          isOpen: false,
          text: 'Opens Today at 10:30 AM',
          color: '#E5A53D'
        });
      } else {
        const nextDayText = day === 1 ? 'Opens Wednesday at 10:30 AM' : 'Opens Tomorrow at 10:30 AM';
        setStatus({
          isOpen: false,
          text: `Closed for the day • ${nextDayText}`,
          color: '#8C6B3F'
        });
      }
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0.4rem 0.95rem',
      borderRadius: '9999px',
      background: 'rgba(255, 255, 255, 0.88)',
      border: '1px solid var(--border-gold)',
      fontSize: '0.78rem',
      fontWeight: '600',
      color: 'var(--color-espresso)',
      backdropFilter: 'blur(8px)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: status.color,
        boxShadow: status.isOpen ? '0 0 0 3px rgba(37, 211, 102, 0.25)' : 'none',
        display: 'inline-block'
      }}></span>
      <Clock size={13} style={{ color: 'var(--color-gold-dark)' }} />
      <span>{status.text}</span>
    </div>
  );
}
