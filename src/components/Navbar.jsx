import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, Moon, Sun } from 'lucide-react';
import { storeInfo } from '../data/dummyData';
import { useCart } from '../context/CartContext';

const Navbar = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Products', path: '/products' },
    { name: 'Custom Orders', path: '/custom-orders' },
    { name: 'About Us', path: '/about' },
    { name: 'Visit Store', path: '/visit-store' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/">{storeInfo.name}</Link>
      </div>
      
      <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <button className="nav-icon" onClick={toggleTheme} style={{ background: 'none', border: 'none' }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Search className="nav-icon" size={20} />
        <Heart className="nav-icon" size={20} />
        <div className="nav-icon" style={{ position: 'relative' }} onClick={() => setIsCartOpen(true)}>
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--accent-gold)', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cartCount}
            </span>
          )}
        </div>
        <div className="mobile-toggle nav-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
