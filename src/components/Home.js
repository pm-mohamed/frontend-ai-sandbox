import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to React Routing App</h1>
      <p>Navigate to different sections using the buttons below:</p>
      
      <div className="nav-buttons">
        <Link to="/mcp" className="nav-button">
          MCP Section
        </Link>
        <Link to="/screenshot" className="nav-button">
          Screenshot Section
        </Link>
        <Link to="/about" className="nav-button">
          About Section
        </Link>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <p>This is a simple React application demonstrating routing with React Router.</p>
        <p>Each button above will navigate you to a different route in the application.</p>
      </div>
    </div>
  );
};

export default Home;
