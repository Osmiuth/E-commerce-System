import React from "react";
import "../../styles/App.css";

function Home() {
  return (
    <div className="apple-hero-bg d-flex align-items-center justify-content-center" style={{minHeight: '100vh', width: '100vw'}}>
      <div className="apple-hero-content text-center">
        <h1 className="apple-hero-title mb-4">Experience Innovation.<br />Experience Oro Hi-Q.</h1>
        <p className="apple-hero-subtitle mb-5">Premium packaging and water solutions, reimagined for your business.</p>
        <button className="apple-hero-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default Home;