import React from 'react';
import { Link } from 'react-router-dom';
import './Screenshot.css';

const Screenshot = () => {
  return (
    <div className="screenshot-page">
      <div className="screenshot-center">
        <Link to="/" className="screenshot-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Screenshot;
