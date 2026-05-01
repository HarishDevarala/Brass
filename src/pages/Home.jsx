import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/dummyData';
import heroBg from '../assets/hero_bg.png';
import './Home.css';

const Home = () => {
  // Get best sellers (just taking the first 4 products for now)
  const bestSellers = products.slice(0, 4);

  return (
    <div className="home-page animate-fade-up">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroBg} alt="Premium Brass Decor" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-text-reveal">Timeless Brass Elegance for Every Space</h1>
            <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Premium Brass Idols, Décor & Furniture in Nellore
            </p>
            <div className="hero-cta animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/collections" className="btn btn-primary">Explore Collections</Link>
              <Link to="/visit-store" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Visit Store</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title text-gradient-gold">Featured Collections</h2>
          <p className="section-subtitle">Discover our handpicked premium categories</p>
          
          <div className="collections-grid">
            {categories.slice(0, 3).map((category) => (
              <Link to={category.link} key={category.id} className="collection-card hover-lift">
                <img src={category.image} alt={category.title} className="collection-image" />
                <div className="collection-overlay">
                  <h3 className="collection-title">{category.title}</h3>
                  <span className="flex items-center gap-2 text-sm text-gold">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">Our most loved heritage pieces</p>
          
          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12" style={{ marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">The Praseeda Promise</h2>
          <p className="section-subtitle">Why we are Nellore's finest brass destination</p>
          
          <div className="features-grid">
            <div className="feature-item glass-panel">
              <div className="feature-icon"><Star size={28} /></div>
              <h4 className="feature-title">Premium Quality</h4>
              <p className="feature-desc">Handpicked brass items with the highest purity and exquisite detailing.</p>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon"><Shield size={28} /></div>
              <h4 className="feature-title">Heritage Craftsmanship</h4>
              <p className="feature-desc">Authentic traditional designs crafted by skilled Indian artisans.</p>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon"><Truck size={28} /></div>
              <h4 className="feature-title">Secure Delivery</h4>
              <p className="feature-desc">Safe and insured shipping for all your premium brass orders.</p>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon"><Clock size={28} /></div>
              <h4 className="feature-title">Timeless Durability</h4>
              <p className="feature-desc">Pieces designed to last generations, maintaining their royal glow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
