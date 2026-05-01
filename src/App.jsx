import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
// Other pages will be imported here
import Collections from './pages/Collections';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import CustomOrders from './pages/CustomOrders';
import VisitStore from './pages/VisitStore';
import Contact from './pages/Contact';

import './index.css';
import './components.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/visit-store" element={<VisitStore />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
