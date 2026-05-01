import React from 'react';
import { Send } from 'lucide-react';
import luxuryGifting from '../assets/luxury_gifting.png';

const CustomOrders = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our team will contact you shortly.');
  };

  return (
    <div className="custom-orders-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <h1 className="section-title text-gradient-gold">Custom & Bulk Orders</h1>
        <p className="section-subtitle">Premium corporate gifting, wedding returns, and temple orders</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Submit an Enquiry
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" required style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Phone / WhatsApp</label>
                <input type="tel" required style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Order Type</label>
                <select style={{ width: '100%', padding: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }}>
                  <option>Corporate Gifting</option>
                  <option>Wedding Return Gifts</option>
                  <option>Temple Bulk Orders</option>
                  <option>Customized Name Plates</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Requirements Details</label>
                <textarea rows="4" required style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Send size={18} /> Send Enquiry
              </button>
            </form>
          </div>

          <div>
            <img src={luxuryGifting} alt="Luxury Gifting" style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '400px', marginBottom: '2rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why Choose Us for Bulk?</h3>
            <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> Special wholesale pricing</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> Premium velvet box packaging</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> Custom engraving available</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> Dedicated account manager</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomOrders;
