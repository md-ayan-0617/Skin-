import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import TreatmentModal from './components/TreatmentModal';
import GalleryLightbox from './components/GalleryLightbox';
import BookingForm from './components/BookingForm';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { TREATMENTS } from './data/treatments';
import { CLINIC_INFO } from './data/clinicInfo';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Modals & Overlays
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingTreatmentContext, setBookingTreatmentContext] = useState(null);

  // Sync with URL Hash on Mount and HashChange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setActivePage('home');
      } else if (hash === 'about') {
        setActivePage('about');
      } else if (hash.startsWith('treatments')) {
        setActivePage('treatments');
        const parts = hash.split('-');
        if (parts.length > 1) {
          const catId = parts[1];
          setSelectedCategory(catId);
        }
      } else if (hash.startsWith('treatment/')) {
        const slug = hash.replace('treatment/', '');
        const found = TREATMENTS.find(t => t.id === slug);
        if (found) {
          setSelectedTreatment(found);
          setActivePage('treatments');
        }
      } else if (hash === 'gallery') {
        setActivePage('gallery');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'book') {
        setActivePage('book');
      } else {
        // Unknown hash - could be 404 or home
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage changes from buttons
  const navigateToPage = (pageId, catId = null) => {
    setActivePage(pageId);
    if (catId) {
      setSelectedCategory(catId);
      window.location.hash = `treatments-${catId}`;
    } else {
      window.location.hash = pageId === 'home' ? '' : pageId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (treatment = null) => {
    setBookingTreatmentContext(treatment);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingTreatmentContext(null);
  };

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleCloseTreatmentModal = () => {
    setSelectedTreatment(null);
  };

  const handleOpenGalleryItem = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevGallery = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : CLINIC_INFO.gallery.length - 1));
  };

  const handleNextGallery = () => {
    setLightboxIndex((prev) => (prev < CLINIC_INFO.gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="app-layout">
      {/* Top Header & Sticky Navigation */}
      <Navbar 
        activePage={activePage}
        setActivePage={navigateToPage}
        onOpenBooking={() => handleOpenBooking()}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          navigateToPage('treatments', catId);
        }}
      />

      {/* Main Page Rendering */}
      <main id="main-content">
        {activePage === 'home' && (
          <HomePage 
            onOpenBooking={handleOpenBooking}
            onSelectTreatment={handleSelectTreatment}
            onOpenGalleryItem={handleOpenGalleryItem}
            setActivePage={navigateToPage}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              navigateToPage('treatments', catId);
            }}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage 
            onSelectTreatment={handleSelectTreatment}
            onOpenBooking={handleOpenBooking}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage 
            onOpenGalleryItem={handleOpenGalleryItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'book' && (
          <BookingPage 
            initialTreatment={bookingTreatmentContext}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === '404' && (
          <NotFoundPage 
            setActivePage={navigateToPage}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setActivePage={navigateToPage}
        onOpenBooking={() => handleOpenBooking()}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          navigateToPage('treatments', catId);
        }}
      />

      {/* Persistent Floating Quick Action Bar */}
      <FloatingWidgets 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Treatment Details Modal */}
      {selectedTreatment && (
        <TreatmentModal 
          treatment={selectedTreatment}
          onClose={handleCloseTreatmentModal}
          onBookTreatment={(treatment) => handleOpenBooking(treatment)}
        />
      )}

      {/* Global Image Gallery Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox 
          images={CLINIC_INFO.gallery}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevGallery}
          onNext={handleNextGallery}
        />
      )}

      {/* Global Appointment Booking Modal */}
      {isBookingModalOpen && (
        <div 
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseBooking();
          }}
        >
          <div style={{ maxWidth: '720px', width: '100%', position: 'relative' }}>
            <BookingForm 
              initialTreatment={bookingTreatmentContext}
              isModal={true}
              onClose={handleCloseBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
}
