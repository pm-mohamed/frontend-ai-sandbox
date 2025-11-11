import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileNavLevel, setMobileNavLevel] = useState(0);
  const [mobileNavStack, setMobileNavStack] = useState([]);
  
  const megaMenuRef = useRef(null);
  const headerRef = useRef(null);

  // Navigation data structure
  const navigationData = {
    'Solutions': {
      'E-Commerce': {
        title: 'E-Commerce Solutions',
        description: 'Comprehensive online shop solutions with payment integration',
        items: [
          { title: 'Online Shop', description: 'Complete e-commerce platform setup' },
          { title: 'Payment Integration', description: 'Secure payment gateway solutions' },
          { title: 'Inventory Management', description: 'Real-time stock tracking systems' }
        ]
      },
      'Digital Experience': {
        title: 'Digital Experience',
        description: 'User-centered digital transformation services',
        items: [
          { title: 'UX/UI Design', description: 'Modern interface design and optimization' },
          { title: 'Customer Journey', description: 'End-to-end customer experience mapping' },
          { title: 'Digital Strategy', description: 'Comprehensive digital transformation planning' }
        ]
      }
    },
    'KI & Daten': {
      'Data Analytics': {
        title: 'Data Analytics',
        description: 'Advanced data analysis and business intelligence',
        items: [
          { title: 'Business Intelligence', description: 'Data-driven decision making tools' },
          { title: 'Predictive Analytics', description: 'AI-powered forecasting solutions' },
          { title: 'Real-time Dashboards', description: 'Live data visualization and monitoring' }
        ]
      },
      'AI Solutions': {
        title: 'AI Solutions', 
        description: 'Artificial intelligence and machine learning services',
        items: [
          { title: 'Machine Learning', description: 'Custom ML model development and deployment' },
          { title: 'Natural Language Processing', description: 'Text analysis and chatbot solutions' },
          { title: 'Computer Vision', description: 'Image and video analysis capabilities' }
        ]
      }
    },
    'E-Commerce': {
      'Platform Solutions': {
        title: 'Platform Solutions',
        description: 'Complete e-commerce platform implementations',
        items: [
          { title: 'Shopify Plus', description: 'Enterprise Shopify solutions' },
          { title: 'Magento Commerce', description: 'Advanced Magento development' },
          { title: 'Custom Platforms', description: 'Tailored e-commerce solutions' }
        ]
      }
    },
    'Digital Experience': {
      'Web Development': {
        title: 'Web Development',
        description: 'Modern web application development',
        items: [
          { title: 'Frontend Development', description: 'React, Vue.js, and modern frameworks' },
          { title: 'Backend Development', description: 'Scalable server-side solutions' },
          { title: 'Full-Stack Solutions', description: 'End-to-end web development' }
        ]
      }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveMegaMenu(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const handleNavItemHover = (item) => {
    if (window.innerWidth >= 1024) {
      setActiveMegaMenu(item);
      setActiveSubmenu(null);
    }
  };

  const handleNavItemLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveMegaMenu(null);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuHover = (submenu) => {
    if (window.innerWidth >= 1024) {
      setActiveSubmenu(submenu);
    }
  };

  const handleMobileNavClick = (item, level) => {
    if (navigationData[item]) {
      setMobileNavStack([...mobileNavStack, { item, level }]);
      setMobileNavLevel(level + 1);
    }
  };

  const handleMobileBackClick = () => {
    if (mobileNavLevel > 0) {
      const newStack = [...mobileNavStack];
      newStack.pop();
      setMobileNavStack(newStack);
      setMobileNavLevel(mobileNavLevel - 1);
    }
  };

  const renderMobileNavContent = () => {
    if (mobileNavLevel === 0) {
      // Primary level
      return (
        <div className="mobile-nav-primary">
          {Object.keys(navigationData).map((item) => (
            <button
              key={item}
              className="mobile-nav-item"
              onClick={() => handleMobileNavClick(item, 0)}
            >
              {item}
              <svg className="mobile-nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          ))}
        </div>
      );
    } else if (mobileNavLevel === 1) {
      // Secondary level
      const currentItem = mobileNavStack[mobileNavStack.length - 1]?.item;
      const categories = navigationData[currentItem];
      
      return (
        <div className="mobile-nav-secondary">
          <button className="mobile-nav-back" onClick={handleMobileBackClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Back
          </button>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className="mobile-nav-item"
              onClick={() => handleMobileNavClick(category, 1)}
            >
              {category}
              <svg className="mobile-nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          ))}
        </div>
      );
    } else if (mobileNavLevel === 2) {
      // Tertiary level with descriptions
      const currentCategory = mobileNavStack[mobileNavStack.length - 1]?.item;
      const parentItem = mobileNavStack[mobileNavStack.length - 2]?.item;
      const submenuData = navigationData[parentItem][currentCategory];
      
      return (
        <div className="mobile-nav-tertiary">
          <button className="mobile-nav-back" onClick={handleMobileBackClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Back
          </button>
          <div className="mobile-nav-submenu-header">
            <h3>{submenuData.title}</h3>
            <p>{submenuData.description}</p>
          </div>
          {submenuData.items?.map((item, index) => (
            <div key={index} className="mobile-nav-submenu-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src="/logo.svg" alt="P&M Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {Object.keys(navigationData).map((item) => (
              <li
                key={item}
                className="nav-item"
                onMouseEnter={() => handleNavItemHover(item)}
                onMouseLeave={handleNavItemLeave}
              >
                <button className="nav-link" aria-haspopup="true" aria-expanded={activeMegaMenu === item}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <button className="header-cta">
          Kontakt aufnehmen
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      {activeMegaMenu && (
        <div 
          className="mega-menu"
          ref={megaMenuRef}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleNavItemLeave}
        >
          <div className="mega-menu-container">
            <div className="mega-menu-content">
              {/* Left Column - Menu Items */}
              <div className="mega-menu-left">
                {Object.keys(navigationData[activeMegaMenu]).map((category) => (
                  <div
                    key={category}
                    className={`mega-menu-item ${activeSubmenu === category ? 'active' : ''}`}
                    onMouseEnter={() => handleSubmenuHover(category)}
                  >
                    <span className="mega-menu-item-text">{category}</span>
                    <svg className="mega-menu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </div>
                ))}
              </div>

              {/* Right Column - Submenu Content */}
              <div className="mega-menu-right">
                {activeSubmenu && navigationData[activeMegaMenu][activeSubmenu] && (
                  <div className="submenu-content">
                    <h3 className="submenu-title">
                      {navigationData[activeMegaMenu][activeSubmenu].title}
                    </h3>
                    <p className="submenu-description">
                      {navigationData[activeMegaMenu][activeSubmenu].description}
                    </p>
                    <div className="submenu-items">
                      {navigationData[activeMegaMenu][activeSubmenu].items?.map((item, index) => (
                        <div key={index} className="submenu-item">
                          <h4 className="submenu-item-title">{item.title}</h4>
                          <p className="submenu-item-description">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <img src="/logo.svg" alt="P&M Logo" className="mobile-logo" />
              <button
                className="mobile-menu-close"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setMobileNavLevel(0);
                  setMobileNavStack([]);
                }}
                aria-label="Close mobile menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="mobile-menu-nav">
              {renderMobileNavContent()}
            </div>

            <button className="mobile-cta">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
