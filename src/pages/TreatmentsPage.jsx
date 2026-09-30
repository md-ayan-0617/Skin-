import React, { useState, useMemo } from 'react';
import { 
  Search, Sparkles, Clock, ShieldCheck, ArrowRight, 
  Smile, Layers, Zap, Activity, Eye, Heart, X, Check 
} from 'lucide-react';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';

export default function TreatmentsPage({ 
  onSelectTreatment, 
  onOpenBooking, 
  selectedCategory = 'all', 
  onSelectCategory 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');

  // Sync if parent updates selectedCategory
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
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

  // Filter treatments by category and search query
  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((t) => {
      const matchesCategory = activeCategory === 'all' || t.categorySlug === activeCategory;
      const matchesSearch = 
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.idealFor && t.idealFor.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>
      {/* Header Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Comprehensive Clinical Catalog</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              All Aesthetic <span className="serif-italic text-gold-gradient">Treatments</span>
            </h1>
            <p className="section-subtitle">
              Explore our full spectrum of 30+ medical-grade skin, hair, laser, body contouring, semi-permanent makeup, and nail therapies in Bhilai.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                placeholder="Search by concern, e.g. HydraFacial, acne, hair thinning, laser..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
                style={{
                  paddingLeft: '3rem',
                  paddingRight: searchTerm ? '3rem' : '1.5rem',
                  height: '54px',
                  borderRadius: '9999px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
              <Search 
                size={20} 
                style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }} 
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }}
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="filter-tabs-wrapper">
            {TREATMENT_CATEGORIES.map((cat) => {
              const IconComp = categoryIcons[cat.id] || Sparkles;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`filter-tab ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={15} style={{ color: isActive ? 'var(--color-gold-light)' : 'var(--color-gold-dark)' }} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Result Count and Reset */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-muted)', fontWeight: '500' }}>
              Showing <strong>{filteredTreatments.length}</strong> {filteredTreatments.length === 1 ? 'treatment' : 'treatments'}
            </span>

            {(activeCategory !== 'all' || searchTerm) && (
              <button 
                onClick={() => {
                  handleCategoryChange('all');
                  setSearchTerm('');
                }}
                style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)', fontWeight: '600', textDecoration: 'underline' }}
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Treatments Cards Grid */}
          {filteredTreatments.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--color-cream)',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed var(--border-subtle)'
            }}>
              <Sparkles size={36} style={{ color: 'var(--color-gold)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-espresso)' }}>
                No Treatments Found Matching "{searchTerm}"
              </h3>
              <p style={{ color: 'var(--color-muted)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                We might offer this treatment under a customized protocol. Feel free to contact our cosmetologist Aarti Hiwanj directly.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  handleCategoryChange('all');
                }}
              >
                View All Treatments
              </button>
            </div>
          ) : (
            <div className="treatments-grid">
              {filteredTreatments.map((treatment) => (
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
                      {treatment.idealFor && treatment.idealFor.slice(0, 2).map((item, i) => (
                        <span key={i} className="treatment-card-tag">{item}</span>
                      ))}
                    </div>

                    <div className="treatment-card-footer">
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => onSelectTreatment(treatment)}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={13} />
                      </button>

                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => onOpenBooking(treatment)}
                      >
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Helpful Consultation Note */}
      <section className="section" style={{ backgroundColor: 'var(--color-blush-soft)', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}>
            Unsure Which Treatment Your Skin Needs?
          </h3>
          <p style={{ color: 'var(--color-muted)', maxWidth: '580px', margin: '0 auto 1.75rem auto' }}>
            Schedule an initial consultation and digital skin/scalp analysis with Aarti Hiwanj. We examine your barrier health before curating a custom plan.
          </p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={onOpenBooking}
          >
            <span>Book Clinical Skin Analysis</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
