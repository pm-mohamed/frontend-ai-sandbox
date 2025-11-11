import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MCP from './components/MCP';
import Screenshot from './components/Screenshot';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcp" element={<MCP />} />
          <Route path="/screenshot" element={<Screenshot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
