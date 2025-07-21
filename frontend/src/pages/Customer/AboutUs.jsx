import React from "react";
import Layout from "./Layout";
import "../../styles/App.css";

function AboutUs() {
  return (
    <Layout>
      <section className="aetherix-hero" style={{paddingTop: '3em', paddingBottom: '2em'}}>
        <h1 className="aetherix-hero-title">About Aetherix</h1>
        <p className="aetherix-hero-subtitle" style={{maxWidth: 600, margin: '0 auto'}}>
          Aetherix is dedicated to empowering businesses with seamless, secure, and scalable digital solutions. Our mission is to help you achieve more, faster.
        </p>
      </section>
      <section className="aetherix-features" style={{paddingTop: 0}}>
        <div className="aetherix-features-inner">
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🚀</div>
            <h3 className="aetherix-feature-title">Innovation</h3>
            <p className="aetherix-feature-desc">We constantly push boundaries to deliver cutting-edge solutions for modern businesses.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🤝</div>
            <h3 className="aetherix-feature-title">Partnership</h3>
            <p className="aetherix-feature-desc">We believe in building lasting relationships and growing together with our clients.</p>
          </div>
          <div className="aetherix-feature-card">
            <div className="aetherix-feature-icon">🌱</div>
            <h3 className="aetherix-feature-title">Sustainability</h3>
            <p className="aetherix-feature-desc">Our solutions are designed to scale with you, supporting sustainable growth at every stage.</p>
          </div>
        </div>
      </section>
      <section style={{background: '#fff', padding: '3em 0'}}>
        <div style={{maxWidth: 700, margin: '0 auto', textAlign: 'center'}}>
          <h2 className="aetherix-hero-title" style={{fontSize: '2em'}}>Our Mission</h2>
          <p className="aetherix-hero-subtitle" style={{marginBottom: '2em'}}>To empower organizations with technology that is fast, secure, and easy to use—enabling them to reach new heights.</p>
          <h2 className="aetherix-hero-title" style={{fontSize: '2em'}}>Our Vision</h2>
          <p className="aetherix-hero-subtitle">To be the world’s most trusted partner for digital transformation and business growth.</p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutUs;