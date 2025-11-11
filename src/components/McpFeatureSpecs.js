import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './McpFeatureSpecs.css';

const McpFeatureSpecs = () => {
  return (
    <div className="mcp-feature-specs-page">
      <Header />
      <div className="mcp-feature-specs-content">
        <div className="mcp-feature-specs-center">
          <Link to="/" className="mcp-feature-specs-back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default McpFeatureSpecs;
