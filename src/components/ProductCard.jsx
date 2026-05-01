import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

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
        
        <div className="product-actions">
          <button className="btn btn-outline btn-full">Quick View</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
