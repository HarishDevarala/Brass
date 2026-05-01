import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen && cartItems.length === 0) return null; // Small optimization

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <p>Your cart is empty.</p>
              <button 
                className="btn btn-outline" 
                style={{ marginTop: '1.5rem' }}
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <div className="cart-item-price">₹{item.offerPrice.toLocaleString()}</div>
                  <div className="cart-qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Subtotal</span>
              <span className="text-gold">₹{cartTotal.toLocaleString()}</span>
            </div>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
