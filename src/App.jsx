// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Routes and Route are imported
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import IntegratedSolutions from './pages/integratedSolutions';
import PageUnderConstruction from './pages/PageUnderConstruction';

import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar visible on all pages */}
        <div className="content">
          <Routes> {/* Routes correctly imported */}
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/about" element={<About />} /> {/* About Page */}
            <Route path="/services" element={<PageUnderConstruction />} /> {/* Services Page */}
            <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
            <Route path="/integratedsolutions" element={<PageUnderConstruction />} /> {/* IntegratedSolutions Page */}
            <Route path="/project" element={<PageUnderConstruction />} /> {/* IntegratedSolutions Page */}
            <Route path="/career" element={<PageUnderConstruction />} /> {/* IntegratedSolutions Page */}
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
