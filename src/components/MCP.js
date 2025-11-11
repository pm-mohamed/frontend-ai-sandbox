import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MCP.css';

const MCP = () => {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    referenzen: false,
    unternehmen: false,
    uberPM: false
  });

  const toggleDropdown = (menu) => {
    setDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="mcp-page">
      <header className="mcp-header">
        <div className="mcp-header-container">
          {/* Logo */}
          <div className="mcp-logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="8" fill="#667eea"/>
              <text x="22" y="29" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">PM</text>
            </svg>
          </div>

          {/* Navigation Menu */}
          <nav className="mcp-nav">
            <div className="mcp-menu-item">
              <button 
                className="mcp-menu-button"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 16 16" className="mcp-chevron">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              {dropdowns.services && (
                <div className="mcp-dropdown">
                  <a href="#service1">Web Development</a>
                  <a href="#service2">Design</a>
                  <a href="#service3">Consulting</a>
                </div>
              )}
            </div>

            <div className="mcp-menu-item">
              <button 
                className="mcp-menu-button"
                onClick={() => toggleDropdown('referenzen')}
              >
                Referenzen
                <svg width="16" height="16" viewBox="0 0 16 16" className="mcp-chevron">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              {dropdowns.referenzen && (
                <div className="mcp-dropdown">
                  <a href="#ref1">Project 1</a>
                  <a href="#ref2">Project 2</a>
                  <a href="#ref3">Project 3</a>
                </div>
              )}
            </div>

            <div className="mcp-menu-item">
              <button 
                className="mcp-menu-button"
                onClick={() => toggleDropdown('unternehmen')}
              >
                Unternehmen
                <svg width="16" height="16" viewBox="0 0 16 16" className="mcp-chevron">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              {dropdowns.unternehmen && (
                <div className="mcp-dropdown">
                  <a href="#company1">About</a>
                  <a href="#company2">Team</a>
                  <a href="#company3">Careers</a>
                </div>
              )}
            </div>

            <div className="mcp-menu-item">
              <button 
                className="mcp-menu-button"
                onClick={() => toggleDropdown('uberPM')}
              >
                Über P&M
                <svg width="16" height="16" viewBox="0 0 16 16" className="mcp-chevron">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              {dropdowns.uberPM && (
                <div className="mcp-dropdown">
                  <a href="#about1">History</a>
                  <a href="#about2">Mission</a>
                  <a href="#about3">Values</a>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button */}
          <button className="mcp-contact-button">
            Contact us
          </button>
        </div>
      </header>

      <div className="mcp-center">
        <Link to="/" className="mcp-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MCP;
