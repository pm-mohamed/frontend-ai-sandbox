import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to React Routing App</h1>
      <p>Navigate to different sections using the buttons below:</p>
      
      <div className="home-nav-buttons">
        <Link to="/mcp" className="home-nav-button">
          MCP Section
        </Link>
        <Link to="/screenshot" className="home-nav-button">
          Screenshot Section
        </Link>
      </div>
    </div>
  );
};

export default Home;
