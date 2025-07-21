import { Outlet, Link, Route, Routes } from "react-router-dom";
import React from "react";
import '../../styles/App.css';
import logo from "../../assets/logo.png"
import { sendMessage } from '../../components/sendMessage';




function Layout(){

    const handleChatClick = () => {
        const message = `Hello! I Would like to inquire.`;
        console.log('Inquire button clicked. Sending message:', message);
        sendMessage(message);
      };

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow sticky-top fw-bold py-3">
                <div class="container-fluid d-flex flex">
                    <Link to='/' class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                        ORO HI-Q
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline fs-5">
                        <li class="nav-item">
                        <Link to='/aboutUs' activeClassName="active" className="nav-link nav-about" aria-current="page">About Us</Link>
                        </li>

                        <li class="nav-item">
                        <Link to='/products' class="nav-link nav-prod" href="#">Products</Link>
                        </li>

                        <li class="nav-item">
                        <Link to='/services' class="nav-link nav-services" href="#">Services</Link>
                        </li>
                    </ul>

                    <button class="btn btn-blue-outline bg-transparent px-4" onClick={handleChatClick}  style={{borderRadius: "20px"}}>Chat Now 💬</button>

                    </div>
                </div>
            </nav>
        <Outlet />
        </div>
    )
}

export default Layout;