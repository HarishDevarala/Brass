import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="product-card hover-lift">
      <Link to={`/products/${product.id}`} className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-badge">Premium</div>
      </Link>
      
      <button 
        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setIsWishlisted(!isWishlisted);
        }}
      >
        <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
      </button>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/products/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        
        <div className="product-price-row">
          <span className="product-price">₹{product.offerPrice.toLocaleString()}</span>
          <span className="product-original-price">₹{product.price.toLocaleString()}</span>
        </div>
        
        <div className="product-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button 
            className="btn btn-outline"
            style={{ padding: '10px' }}
            onClick={(e) => {
              e.preventDefault();
              // In a real app this might open a modal, but for now we'll just link or keep it dummy
            }}
          >
            Quick View
          </button>
          <button 
            className="btn btn-primary"
            style={{ padding: '10px' }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
