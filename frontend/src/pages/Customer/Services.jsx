import React from "react";
import Layout from "./Layout";
import "../../styles/App.css";

function Services() {
  return (
    <Layout>
      <section className="aetherix-hero" style={{paddingTop: '3em', paddingBottom: '2em'}}>
        <h1 className="aetherix-hero-title">Our Services</h1>
        <p className="aetherix-hero-subtitle" style={{maxWidth: 600, margin: '0 auto'}}>
          Aetherix offers a suite of services to help your business grow, adapt, and succeed in a digital world.
        </p>
      </section>
      <section className="aetherix-features" style={{paddingTop: 0}}>
        <div className="aetherix-features-inner">
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🛠️</div>
            <h3 className="aetherix-feature-title">Custom Integrations</h3>
            <p className="aetherix-feature-desc">Tailored solutions that connect your tools and automate your workflow.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">📊</div>
            <h3 className="aetherix-feature-title">Analytics & Insights</h3>
            <p className="aetherix-feature-desc">Actionable data to help you make smarter, faster business decisions.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">☁️</div>
            <h3 className="aetherix-feature-title">Cloud Solutions</h3>
            <p className="aetherix-feature-desc">Reliable, scalable cloud infrastructure to power your growth.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services;