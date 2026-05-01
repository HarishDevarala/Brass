import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/dummyData';

const Collections = () => {
  return (
    <div className="collections-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <h1 className="section-title text-gradient-gold">Our Premium Collections</h1>
        <p className="section-subtitle">Explore our handpicked curation of luxury brass</p>
        
        <div className="collections-grid mt-12" style={{ marginTop: '3rem' }}>
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="collection-card hover-lift" style={{ height: '500px' }}>
              <img src={category.image} alt={category.title} className="collection-image" />
              <div className="collection-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)' }}>
                <h3 className="collection-title text-3xl" style={{ fontSize: '2rem' }}>{category.title}</h3>
                <span className="btn btn-outline mt-4" style={{ marginTop: '1rem', display: 'inline-block', borderColor: '#fff', color: '#fff' }}>
                  View Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
