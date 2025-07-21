import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from "../../components/Footer";
// import Products from "./Products";
import ProductItem from "../../components/ProductItem";
import Layout from "./Layout";
import "../../styles/App.css";
import water from "../../images/water.jpg";


function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://test-website-1-4oqd.onrender.com/api/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);

    return(
        <>
        <Layout />
        <main>
          {/* Hero Section */}
          <section className="hero d-flex align-items-center justify-content-center flex-column text-center position-relative">
            <div className="hero-content py-5 px-4">
              <h1 className="hero-title mb-3">Your Trusted Partner for Packaging & Water Solutions</h1>
              <p className="hero-text mb-4">Discover a wide range of high-quality packaging products and water treatment solutions designed to help your business grow. Fast shipping, competitive pricing, and expert support—serving the Philippines and beyond.</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/services" className="btn btn-blue px-5">Our Services</Link>
                <Link to="" className="btn btn-blue-outline px-4">Contact Sales</Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section py-5 bg-white">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3">Why Shop with <span className="text-yellow">Oro Hi-Q</span>?</h2>
                  <p className="mb-0">Your one-stop shop for packaging, water treatment, and business essentials</p>
                </div>
              </div>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="feature-card p-4 h-100 text-center shadow-sm rounded-4 bg-light">
                    <div className="mb-3" style={{fontSize:'2.5em'}}>🚚</div>
                    <h5 className="fw-bold mb-2">Fast Nationwide Delivery</h5>
                    <p>Get your orders quickly and reliably, wherever you are in the Philippines. We ship fast so you can keep your business moving.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-card p-4 h-100 text-center shadow-sm rounded-4 bg-light">
                    <div className="mb-3" style={{fontSize:'2.5em'}}>💳</div>
                    <h5 className="fw-bold mb-2">Secure Online Payments</h5>
                    <p>Shop with confidence using our secure checkout. Multiple payment options for your convenience.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-card p-4 h-100 text-center shadow-sm rounded-4 bg-light">
                    <div className="mb-3" style={{fontSize:'2.5em'}}>📦</div>
                    <h5 className="fw-bold mb-2">Bulk & Retail Orders</h5>
                    <p>Whether you need a single item or a full truckload, we cater to both small businesses and large enterprises.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="experience-section py-5 bg-blue-gradient text-white">
            <div className="container d-flex flex-column flex-lg-row align-items-center gap-5">
              <div className="flex-shrink-0 mb-4 mb-lg-0">
                <img src={water} alt="Water treatment" className="img-fluid shadow-lg" style={{borderRadius: '1.5em', maxWidth: '350px'}} />
              </div>
              <div>
                <h2 className="fw-bold mb-3">Over a Decade of Industry Expertise</h2>
                <p className="fs-5 mb-0">Join thousands of satisfied customers who trust Oro Hi-Q for their packaging and water treatment needs. Our team brings years of experience and a commitment to quality service—every order, every time.</p>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="products-section py-5">
            <div className="container">
              <h2 className="section-title text-center mb-3">Featured Products</h2>
              <p className="text-center mb-5">Browse our best-selling packaging supplies, water filters, and more. Quality guaranteed for every business size.</p>
              <div className="row g-4 justify-content-center">
                {products.slice(0, 8).map((product) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={product.id}>
                    <div className="product-card flex-fill p-3 bg-white shadow-sm rounded-4 h-100 d-flex flex-column align-items-center justify-content-between">
                      <ProductItem product={product} isAdmin={false} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Link className="btn btn-blue px-4" to='/products'>Shop All Products</Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        </>
    )
}

export default Home;