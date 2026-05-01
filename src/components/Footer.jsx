import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { storeInfo } from '../data/dummyData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">{storeInfo.name}</div>
          <p className="footer-text">
            Elegantly curated collection of brass idols and décor. 
            Timeless craftsmanship for your premium spaces.
          </p>
          <div className="flex gap-4">
            <a href="#" className="nav-icon">IG</a>
            <a href="#" className="nav-icon">FB</a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/collections" className="footer-link">Our Collections</Link>
            <Link to="/custom-orders" className="footer-link">Custom & Bulk Orders</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Customer Care</h4>
          <div className="footer-links">
            <Link to="#" className="footer-link">Shipping Policy</Link>
            <Link to="#" className="footer-link">Returns & Exchanges</Link>
            <Link to="#" className="footer-link">Care Instructions</Link>
            <Link to="#" className="footer-link">Track Order</Link>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-links">
            <div className="flex items-start gap-2 footer-text">
              <MapPin size={20} className="text-gold shrink-0 mt-1" />
              <span>{storeInfo.address}</span>
            </div>
            <div className="flex items-center gap-2 footer-text">
              <Phone size={20} className="text-gold shrink-0" />
              <span>{storeInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 footer-text">
              <Mail size={20} className="text-gold shrink-0" />
              <span>{storeInfo.email}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {storeInfo.name}. All rights reserved. Premium Handcrafted Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
