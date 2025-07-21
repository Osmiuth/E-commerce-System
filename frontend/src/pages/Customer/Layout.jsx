import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import '../../styles/App.css';

function AetherixNavbar() {
  const location = useLocation();
  return (
    <nav className="aetherix-navbar">
      <div className="aetherix-brand">Aetherix</div>
      <div className="aetherix-navlinks">
        <Link to="/" className={`aetherix-navlink${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
        <Link to="/aboutUs" className={`aetherix-navlink${location.pathname === '/aboutUs' ? ' active' : ''}`}>About</Link>
        <Link to="/products" className={`aetherix-navlink${location.pathname === '/products' ? ' active' : ''}`}>Products</Link>
        <Link to="/services" className={`aetherix-navlink${location.pathname === '/services' ? ' active' : ''}`}>Services</Link>
      </div>
    </nav>
  );
}

function AetherixFooter() {
  return (
    <footer className="aetherix-footer">
      &copy; {new Date().getFullYear()} Aetherix. All rights reserved.
    </footer>
  );
}

function Layout() {
  return (
    <div className="aetherix-bg" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <AetherixNavbar />
      <main style={{flex: 1}}>
        <Outlet />
      </main>
      <AetherixFooter />
    </div>
  );
}

export default Layout;