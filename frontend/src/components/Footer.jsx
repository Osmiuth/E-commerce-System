import React from 'react';
import "../styles/Sidebar.css";
import { Link, Route } from "react-router-dom";
import { sendMessage } from './sendMessage';


function Footer(){

    const handleChatClick = () => {
        const message = `Hello! I Would like to inquire.`;
        console.log('Inquire button clicked. Sending message:', message);
        sendMessage(message);
      };
    return(
        <>
            <footer className="footer">
                <div className="container-fluid py-5">
                    <div className="container row gap-4 mx-auto align-items-center">
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold text-yellow mb-3" style={{letterSpacing:'2px', lineHeight: '1.5em'}}>Let’s make something great together</h1>
                            <p className="lh-base text-white-50" style={{maxWidth: '32ch'}}>Contact us for innovative packaging and water treatment solutions tailored to your needs.</p>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-end">
                            <div className="d-flex gap-3 mb-4">
                                <a href="#" className="btn btn-yellow-outline d-flex align-items-center gap-2" style={{minWidth: '120px'}}>
                                    <span style={{fontSize: '1.2em'}}>📘</span> Facebook
                                </a>
                                <a href="#" className="btn btn-yellow-outline d-flex align-items-center gap-2" style={{minWidth: '120px'}}>
                                    <span style={{fontSize: '1.2em'}}>🛒</span> Shopee
                                </a>
                            </div>
                            <button className="btn btn-blue" onClick={handleChatClick} style={{minWidth: '180px'}}>Chat Now 💬</button>
                        </div>
                    </div>
                    <div className="copyright mt-5 pt-3" style={{borderTop:"1px solid #ffffff22"}}>
                        <p className="text-center mb-0" style={{color:'#fff', opacity:0.8}}>&copy; 2024 Oro Hi-Q. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;