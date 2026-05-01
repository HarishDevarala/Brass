import React from 'react';
import { storeInfo } from '../data/dummyData';
import heroBg from '../assets/hero_bg.png';

const AboutUs = () => {
  return (
    <div className="about-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <h1 className="section-title text-gradient-gold">Our Heritage Story</h1>
        <p className="section-subtitle">A legacy of premium brass craftsmanship in Nellore</p>
        
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '4rem', alignItems: 'center' }}>
          <div className="about-image-wrapper" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <img src={heroBg} alt="Our Craftsmanship" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '1.5rem' }}>Trusted Since Years</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Bringing royal elegance to modern homes.</p>
            </div>
          </div>

          <div className="about-content">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              The Art of Timeless Brass
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At <strong>{storeInfo.name}</strong>, we believe that true luxury lies in the details. Located in the heart of Nellore, we curate the finest handcrafted brass idols, traditional pooja essentials, and premium heritage furniture pieces.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Every piece in our collection is thoughtfully selected, ensuring it carries the legacy of Indian craftsmanship while complementing modern, high-end interiors. Whether you are looking for a divine idol for your home temple, or a royal accent piece for your living room, our showroom offers an unmatched selection.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>5.0</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Google Rating</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>1000+</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
