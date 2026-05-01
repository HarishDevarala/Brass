import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, Star, Shield, Truck } from 'lucide-react';
import { products, storeInfo } from '../data/dummyData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = storeInfo.phone.replace(/[^0-9]/g, '');
    const message = `Hi, I am interested in buying ${product.title} (Price: ₹${product.offerPrice}). Can you share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-detail-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        
        {/* Breadcrumbs */}
        <div className="breadcrumbs" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <Link to="/">Home</Link> &gt; <Link to="/products">Products</Link> &gt; <span className="text-gold">{product.title}</span>
        </div>

        <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', padding: '2rem' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply' }} />
              <button 
                className={`wishlist-btn-large ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--glass-bg)', border: 'none', padding: '10px', borderRadius: '50%', cursor: 'pointer', transition: 'var(--transition)' }}
              >
                <Heart size={24} fill={isWishlisted ? 'var(--accent-gold)' : 'none'} color={isWishlisted ? 'var(--accent-gold)' : 'currentColor'} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-detail">
            <div className="product-category-label" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              {product.category}
            </div>
            <h1 className="product-title-large" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              {product.title}
            </h1>
            
            <div className="product-rating" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
              <div className="stars" style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {product.rating} ({product.reviews} Reviews)
              </span>
            </div>

            <div className="product-pricing" style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', marginBottom: '2rem' }}>
              <span className="price-offer" style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--accent-gold)' }}>
                ₹{product.offerPrice.toLocaleString()}
              </span>
              <span className="price-original" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textDecoration: 'line-through', marginBottom: '5px' }}>
                ₹{product.price.toLocaleString()}
              </span>
            </div>

            <p className="product-description" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              {product.description}
            </p>

            <div className="product-attributes" style={{ marginBottom: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Material:</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{product.material}</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Weight:</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{product.weight}</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Dimensions:</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{product.dimensions}</span>
              </div>
            </div>

            <div className="product-actions-large" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <button className="btn btn-primary" onClick={handleWhatsApp} style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', padding: '16px' }}>
                <MessageCircle size={22} /> Enquire to Buy
              </button>
            </div>

            <div className="product-trust-badges" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={24} className="text-gold" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Premium Quality Guaranteed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={24} className="text-gold" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Safe & Insured Shipping</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
