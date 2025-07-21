import React from "react";
import "../../styles/App.css";

function Home() {
  return (
    <div className="aetherix-bg">
      {/* Navbar */}
      <nav className="aetherix-navbar">
        <div className="aetherix-brand">Aetherix</div>
      </nav>

      {/* Hero Section */}
      <section className="aetherix-hero">
        <h1 className="aetherix-hero-title">Elevate Your Workflow</h1>
        <p className="aetherix-hero-subtitle">Aetherix brings you seamless, modern solutions for business productivity and growth.</p>
        <button className="aetherix-cta-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="aetherix-features">
        <div className="aetherix-features-inner">
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">⚡</div>
            <h3 className="aetherix-feature-title">Lightning Fast</h3>
            <p className="aetherix-feature-desc">Experience unmatched speed and reliability in every interaction.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🔒</div>
            <h3 className="aetherix-feature-title">Secure by Design</h3>
            <p className="aetherix-feature-desc">Your data is protected with enterprise-grade security at every step.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🌐</div>
            <h3 className="aetherix-feature-title">Global Reach</h3>
            <p className="aetherix-feature-desc">Scale your business with tools built for a connected world.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="aetherix-footer">
        &copy; {new Date().getFullYear()} Aetherix. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;