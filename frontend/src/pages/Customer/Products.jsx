import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../../styles/App.css";
import ProductItem from "../../components/ProductItem.jsx";
import Layout from "./Layout.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('https://test-website-1-4oqd.onrender.com/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.productName.toLowerCase().includes(searchTerm) ||
      product.category.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory ? product.category.name === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="aetherix-hero" style={{paddingTop: '3em', paddingBottom: '2em'}}>
        <h1 className="aetherix-hero-title">Our Products</h1>
        <p className="aetherix-hero-subtitle" style={{maxWidth: 600, margin: '0 auto'}}>
          Discover a curated selection of products designed to help your business thrive.
        </p>
      </section>
      <section style={{background: '#fff', padding: '2em 0'}}>
        <div style={{maxWidth: 900, margin: '0 auto'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1em', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2em'}}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                flex: 1,
                minWidth: 180,
                maxWidth: 300,
                padding: '0.7em 1.2em',
                borderRadius: '2em',
                border: '1.5px solid #e0e0e0',
                fontSize: '1em',
                outline: 'none',
                marginRight: '1em',
                background: '#f6f7fb',
              }}
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                minWidth: 120,
                padding: '0.7em 1.2em',
                borderRadius: '2em',
                border: '1.5px solid #e0e0e0',
                fontSize: '1em',
                outline: 'none',
                background: '#f6f7fb',
              }}
            >
              <option value="">All Categories</option>
              <option value="Bottle">Bottle</option>
              <option value="Lids">Lids</option>
              <option value="Cups">Cups</option>
              <option value="Containers">Containers</option>
            </select>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2em', justifyContent: 'center'}}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={{flex: '1 1 220px', maxWidth: 300, minWidth: 220}}>
                <div className="aetherix-feature-card" style={{alignItems: 'stretch', minHeight: 220}}>
                  <ProductItem product={product} isAdmin={false} />
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div style={{color: '#aaa', fontSize: '1.1em', marginTop: '2em'}}>No products found.</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Products;