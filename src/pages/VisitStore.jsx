import React from 'react';
import { storeInfo } from '../data/dummyData';
import { MapPin, Navigation, Clock } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const VisitStore = () => {
  return (
    <div className="visit-store-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <h1 className="section-title text-gradient-gold">Visit Our Showroom</h1>
        <p className="section-subtitle">Experience the luxury of premium brass in person</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          
          <div className="store-info-card glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Store Details</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{storeInfo.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Working Hours</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{storeInfo.timings}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Closed on Tuesdays</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Navigation size={18} /> Get Directions
              </button>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-gold)' }}>✓</span> Ample Car Parking Available
              </p>
            </div>
          </div>

          <div className="store-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Map Placeholder */}
            <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9181180299665!2d79.975411!3d14.433019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cb1a0391d81%3A0xc3cfce5d72f10b80!2sPraseeda%20Brass!5e0!3m2!1sen!2sin!4v1689230000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Praseeda Brass Location"
                ></iframe>
            </div>

            <div style={{ width: '100%', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img src={heroBg} alt="Store Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisitStore;
