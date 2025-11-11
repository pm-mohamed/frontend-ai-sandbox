import React from 'react';
import { Link } from 'react-router-dom';
import './MCP.css';

const MCP = () => {
  return (
    <div className="mcp-page">
      <div className="mcp-center">
        <Link to="/" className="mcp-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MCP;
