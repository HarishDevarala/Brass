import React from 'react';
import { storeInfo } from '../data/dummyData';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="contact-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <h1 className="section-title text-gradient-gold">Contact Us</h1>
          <p className="section-subtitle">We would love to hear from you. Reach out for any queries regarding our premium brass collection.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                <Phone size={28} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us directly</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '500' }}>{storeInfo.phone}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                <Mail size={28} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Support</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '500' }}>{storeInfo.email}</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Follow Our Journey</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-secondary)', padding: '12px 20px', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover-lift">
                  <span className="text-gold" style={{ fontWeight: 'bold' }}>IG</span> Instagram
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-secondary)', padding: '12px 20px', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover-lift">
                  <span className="text-gold" style={{ fontWeight: 'bold' }}>FB</span> Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '15px', background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div>
                <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '15px', background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '15px', background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div>
                <textarea placeholder="How can we help you?" rows="4" required style={{ width: '100%', padding: '15px', background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '16px' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
