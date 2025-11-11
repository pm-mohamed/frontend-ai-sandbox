import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page">
      <h1>About Section</h1>
      <p>Learn more about this React routing application.</p>
      
      <div style={{ margin: '40px 0' }}>
        <h2>Application Overview</h2>
        <p>
          This is a simple React application that demonstrates routing functionality 
          using React Router. The app consists of multiple pages that you can navigate 
          between using the navigation buttons.
        </p>
        
        <h3>Technologies Used:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>React 19.2.0</li>
          <li>React Router DOM 7.9.5</li>
          <li>React Scripts 5.0.1</li>
          <li>Modern CSS styling</li>
        </ul>
        
        <h3>Available Routes:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li><code>/</code> - Home page with navigation buttons</li>
          <li><code>/mcp</code> - MCP (Model Context Protocol) information</li>
          <li><code>/screenshot</code> - Screenshot functionality section</li>
          <li><code>/about</code> - This about page</li>
        </ul>
      </div>
      
      <Link to="/" className="nav-button">
        Back to Home
      </Link>
    </div>
  );
};

export default About;
