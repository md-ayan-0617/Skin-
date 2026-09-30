import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Calendar, Sparkles, Smile, Layers, 
  Zap, Activity, Eye, Heart, Phone, ArrowRight 
} from 'lucide-react';
import { TREATMENT_CATEGORIES } from '../data/treatments';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function Navbar({ activePage, setActivePage, onOpenBooking, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, categorySlug = null) => {
    setActivePage(pageId);
    if (categorySlug && onSelectCategory) {
      onSelectCategory(categorySlug);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryIcons = {
    all: Sparkles,
    face: Smile,
    hair: Layers,
    laser: Zap,
    body: Activity,
    spmu: Eye,
    other: Heart
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo & Wordmark */}
          <a 
            href="#home" 
            className="brand-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            <div className="brand-monogram">
              SR
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">Skin Rewind</span>
              <span className="brand-sub">Aesthetic • Bhilai</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-menu-desktop">
              <li>
                <a 
                  href="#home" 
                  className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                >
                  About Us
                </a>
              </li>
              
              {/* Treatments Dropdown */}
              <li 
                className="nav-item-has-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a 
                  href="#treatments" 
                  className={`nav-link ${activePage === 'treatments' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('treatments', 'all'); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Treatments <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </a>

                <div className="nav-dropdown">
                  <div style={{ padding: '0.4rem 0.8rem 0.6rem 0.8rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-dark)', fontWeight: '700' }}>
                      Clinical Services
                    </span>
                  </div>
                  {TREATMENT_CATEGORIES.map((cat) => {
                    const IconComp = categoryIcons[cat.id] || Sparkles;
                    return (
                      <a
                        key={cat.id}
                        href={`#treatments-${cat.id}`}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('treatments', cat.id);
                        }}
                      >
                        <IconComp size={15} style={{ color: 'var(--color-gold-dark)' }} />
                        <span>{cat.name}</span>
                      </a>
                    );
                  })}
                  <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '0.4rem', paddingTop: '0.4rem' }}>
                    <a
                      href="#all-treatments"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('treatments', 'all');
                      }}
                      style={{ fontWeight: '600', color: 'var(--color-gold-dark)' }}
                    >
                      <span>Explore All 30+ Treatments</span>
                      <ArrowRight size={13} style={{ marginLeft: 'auto' }} />
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <a 
                  href="#gallery" 
                  className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Nav Actions Desktop */}
          <div className="nav-action-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
              className="btn btn-secondary btn-sm"
              title="Call Skin Rewind Clinic"
            >
              <Phone size={14} style={{ color: 'var(--color-gold-dark)' }} />
              <span>Call Us</span>
            </a>

            <button 
              className="btn btn-primary btn-sm"
              onClick={onOpenBooking}
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-head">
          <div className="brand-link">
            <div className="brand-monogram" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}>
              SR
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title" style={{ fontSize: '1.25rem' }}>Skin Rewind</span>
              <span className="brand-sub">Aesthetic • Bhilai</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-espresso)' }}
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li>
            <a 
              href="#home" 
              className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              <span>Home</span>
              <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              <span>About Us</span>
              <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a 
              href="#treatments" 
              className={`mobile-nav-link ${activePage === 'treatments' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('treatments', 'all'); }}
            >
              <span>All Treatments (30+)</span>
              <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className={`mobile-nav-link ${activePage === 'gallery' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
            >
              <span>Clinic Gallery</span>
              <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`mobile-nav-link ${activePage === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              <span>Contact &amp; Location</span>
              <ArrowRight size={16} />
            </a>
          </li>
        </ul>

        {/* Mobile Contact Quick Actions */}
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <button 
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
          </button>

          <a 
            href={`tel:${CLINIC_INFO.contact.primaryPhoneClean}`}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={16} style={{ color: 'var(--color-gold-dark)' }} />
            <span>Call: {CLINIC_INFO.contact.primaryPhone}</span>
          </a>

          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '0.5rem' }}>
            Kohka Housing Board, Junwani Road, Bhilai
          </p>
        </div>
      </div>
    </>
  );
}
