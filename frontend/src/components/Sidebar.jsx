import React from 'react';
import logout from "../assets/logout.png";
import logo from "../assets/logo.png";
import "../styles/Sidebar.css";
import { Link, Route } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <div class="logo">
        <Link to="/admin" style={{textDecoration: 'none' }}>
          <img src={logo} alt="Logo" class="logo1" />
          <span style={{ marginLeft: '10px', fontWeight: 'bold',textDecoration: 'none', color: 'white' }}>ORO HI-Q</span>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "65%",
        }}
      >
        <ul class="menu">
        <Link to="/admin" style={{ textDecoration: 'none' }}>
            <li className="menu-item">Home</li>
        </Link>
        <Link to="/productadmin" style={{ textDecoration: 'none' }}>
            <li className="menu-item">Products</li>
        </Link>
        <Link to="/serviceadmin" style={{ textDecoration: 'none' }}>
            <li className="menu-item">Services</li>
        </Link>
        <Link to="/footeradmin" style={{ textDecoration: 'none' }}>
            <li className="menu-item">Footer</li>
        </Link>
        </ul>
      </div>
      <div class="user-profile">
        <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* User profile info goes here */}
        <img src={logout} alt="Logout"/>
        <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
