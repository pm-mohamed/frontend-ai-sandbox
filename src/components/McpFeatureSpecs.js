import React from 'react';
import { Link } from 'react-router-dom';
import './McpFeatureSpecs.css';

const McpFeatureSpecs = () => {
  return (
    <div className="mcp-feature-specs-page">
      <div className="mcp-feature-specs-center">
        <Link to="/" className="mcp-feature-specs-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default McpFeatureSpecs;
