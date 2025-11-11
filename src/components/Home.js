import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to React Routing App</h1>
      <p>Navigate to different sections using the buttons below:</p>
      
      <div className="home-nav-buttons">
        <Link to="/mcp" className="home-nav-button home-nav-button-pink">
          MCP Section
        </Link>
        <Link to="/screenshot" className="home-nav-button home-nav-button-orange">
          Screenshot Section
        </Link>
        <Link to="/mcp-feature-specs" className="home-nav-button home-nav-button-green">
          MCP Feature Specs Section
        </Link>
      </div>
    </div>
  );
};

export default Home;
