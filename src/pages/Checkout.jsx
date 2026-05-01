import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert('Order Placed Successfully! We will contact you for confirmation.');
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <h1 className="section-title text-left mb-10">Secure Checkout</h1>
        
        <div className="checkout-grid">
          {/* Form Section */}
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit}>
              <div className="checkout-panel glass-panel">
                <h3 className="checkout-panel-title">1. Shipping Details</h3>
                <div className="form-row">
                  <div className="form-group half">
                    <label>First Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group half">
                    <label>Last Name</label>
                    <input type="text" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number (WhatsApp preferred)</label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>Street Address</label>
                  <input type="text" required />
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>City</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group half">
                    <label>PIN Code</label>
                    <input type="text" required />
                  </div>
                </div>
              </div>

              <div className="checkout-panel glass-panel">
                <h3 className="checkout-panel-title">2. Payment Method</h3>
                <div className="payment-options">
                  <label className="payment-option">
                    <input type="radio" name="payment" value="upi" defaultChecked />
                    <span>UPI (Google Pay, PhonePe, Paytm)</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" value="card" />
                    <span>Credit / Debit Card</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" value="cod" />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                </div>
                
                <div className="trust-badges mt-4" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><ShieldCheck size={16} className="text-gold" /> 256-bit Encrypted</span>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full place-order-btn"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order • ₹${cartTotal.toLocaleString()}`}
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="checkout-summary-section">
            <div className="checkout-panel glass-panel summary-panel">
              <h3 className="checkout-panel-title">Order Summary</h3>
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-img-wrapper">
                      <img src={item.image} alt={item.title} />
                      <span className="summary-item-qty">{item.quantity}</span>
                    </div>
                    <div className="summary-item-info">
                      <h4>{item.title}</h4>
                      <p className="text-secondary text-sm">{item.category}</p>
                    </div>
                    <div className="summary-item-price">
                      ₹{(item.offerPrice * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="text-gold">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-secondary" style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Truck size={16} /> Free insured delivery across India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
