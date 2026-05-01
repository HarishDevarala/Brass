import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/dummyData';

const ProductListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="product-listing-page animate-fade-up pb-20">
      <div className="container mt-12" style={{ marginTop: '3rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10" style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 className="section-title text-left mb-2" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Our Products</h1>
            <p className="text-secondary">Explore {filteredProducts.length} premium handcrafted items</p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0" style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={18} /> Filters
            </button>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Sort By <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <div className="category-pills mb-10" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
          <button 
            className={`btn ${activeCategory === 'All' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveCategory('All')}
            style={{ borderRadius: '30px', padding: '8px 20px', whiteSpace: 'nowrap' }}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`btn ${activeCategory === cat.title ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveCategory(cat.title)}
              style={{ borderRadius: '30px', padding: '8px 20px', whiteSpace: 'nowrap' }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
