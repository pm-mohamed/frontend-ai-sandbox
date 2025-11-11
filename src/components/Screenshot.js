import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Screenshot.css';

const Screenshot = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveSubmenu(null);
  };

  const handleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const handleMegaMenu = (menu) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  return (
    <div className="screenshot-page">
      <header className="screenshot-header">
        {/* Desktop Header */}
        <div className="screenshot-header-container">
          <div className="screenshot-logo">
            <span>P&M</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="screenshot-nav-desktop">
            <div className="screenshot-nav-item">
              <button 
                className="screenshot-nav-button"
                onMouseEnter={() => handleMegaMenu('services')}
                onMouseLeave={() => handleMegaMenu(null)}
              >
                Services
                <svg className="screenshot-chevron" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              {activeMegaMenu === 'services' && (
                <div className="screenshot-mega-menu">
                  <div className="screenshot-mega-content">
                    <div className="screenshot-mega-left">
                      <div className="screenshot-mega-section">
                        <h4>Solutions</h4>
                        <div className="screenshot-service-item active">
                          <span>KI & Daten</span>
                          <svg width="16" height="16" viewBox="0 0 16 16">
                            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="screenshot-service-item">E-Commerce</div>
                        <div className="screenshot-service-item">Digital Experience</div>
                      </div>
                    </div>
                    <div className="screenshot-mega-center">
                      <div className="screenshot-submenu-section">
                        <h5>Submenu</h5>
                        <p>Lorem ipsum dolor sit amet consectetur elite sit dolor ipsum. Elite sit dolor ipsum.</p>
                      </div>
                      <div className="screenshot-submenu-section">
                        <h5>Submenu</h5>
                        <p>Lorem ipsum dolor sit amet consectetur elite sit dolor ipsum. Elite sit dolor ipsum.</p>
                      </div>
                      <div className="screenshot-submenu-section">
                        <h5>Submenu</h5>
                        <p>Lorem ipsum dolor sit amet consectetur elite sit dolor ipsum. Elite sit dolor ipsum.</p>
                      </div>
                      <div className="screenshot-submenu-section">
                        <h5>Submenu</h5>
                        <p>Lorem ipsum dolor sit amet consectetur elite sit dolor ipsum. Elite sit dolor ipsum.</p>
                      </div>
                      <div className="screenshot-submenu-section">
                        <h5>Submenu</h5>
                        <p>Lorem ipsum dolor sit amet consectetur elite sit dolor ipsum. Elite sit dolor ipsum.</p>
                      </div>
                    </div>
                    <div className="screenshot-mega-right">
                      <div className="screenshot-article-card">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" alt="Article" />
                        <div className="screenshot-article-content">
                          <h6>Article Title</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="screenshot-nav-item">
              <button className="screenshot-nav-button">
                Referenzen
                <svg className="screenshot-chevron" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>

            <div className="screenshot-nav-item">
              <button className="screenshot-nav-button">
                Unternehmen
                <svg className="screenshot-chevron" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>

            <div className="screenshot-nav-item">
              <button className="screenshot-nav-button">
                Über P&M
                <svg className="screenshot-chevron" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
          </nav>

          <button className="screenshot-contact-btn">Contact us</button>

          {/* Mobile Menu Button */}
          <button className="screenshot-mobile-toggle" onClick={toggleMobileMenu}>
            <div className="screenshot-hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="screenshot-mobile-menu">
            <div className="screenshot-mobile-header">
              <div className="screenshot-mobile-logo">P&M</div>
              <button className="screenshot-mobile-close" onClick={toggleMobileMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            {!activeSubmenu && (
              <div className="screenshot-mobile-nav">
                <button className="screenshot-mobile-nav-item" onClick={() => handleSubmenu('services')}>
                  Services
                </button>
                <button className="screenshot-mobile-nav-item" onClick={() => handleSubmenu('referenzen')}>
                  Referenzen
                </button>
                <button className="screenshot-mobile-nav-item" onClick={() => handleSubmenu('unternehmen')}>
                  Unternehmen
                </button>
                <button className="screenshot-mobile-nav-item" onClick={() => handleSubmenu('uberpm')}>
                  Über P&M
                </button>
                <button className="screenshot-mobile-contact">Contact us</button>
              </div>
            )}

            {activeSubmenu === 'services' && (
              <div className="screenshot-mobile-submenu">
                <div className="screenshot-mobile-back" onClick={() => setActiveSubmenu(null)}>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Zurück
                </div>
                <div className="screenshot-service-details">
                  <div className="screenshot-service-detail">
                    <h4>KI Workshop</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elite iski dolar ipsum.</p>
                  </div>
                  <div className="screenshot-service-detail">
                    <h4>KI Beratung</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elite iski dolar ipsum.</p>
                  </div>
                  <div className="screenshot-service-detail">
                    <h4>Generative KI Lösungen</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elite iski dolar ipsum.</p>
                  </div>
                  <div className="screenshot-service-detail">
                    <h4>RAG Entwicklung</h4>
                    <p>Lorem ipsum dolor sit amet consectetur elite iski dolar ipsum.</p>
                  </div>
                </div>
                <button className="screenshot-mobile-contact">Contact us</button>
              </div>
            )}
          </div>
        )}
      </header>

      <div className="screenshot-center">
        <Link to="/" className="screenshot-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Screenshot;
