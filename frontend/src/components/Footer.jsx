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
            <footer className="bg-blue-gradient text-white">
                <div className="container-fluid py-5">
                    <div className="container row gap-4 mx-auto">
                        <div className="container row col-lg-6 text-center">
                            <h1 className="text-lg-start fw-bold my-4 mx-3 col-lg-10 text-yellow mb-5" style={{letterSpacing:'2px', lineHeight: '1.5em'}}>Lets make something great together</h1>
                        </div>
                        
                       
                        <div className="container col-lg-6">
                            <h6 className="fw-medium text-center lh-base mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur sunt praesentium dolores nam enim, magnam est atque quia dolor.</h6>

                            <div className="container w-80 mt-2 d-flex flex-column gap-4 align-items-start mb-5">
                                <Link to="" class="btn w-100 text-white bg-transparent px-5 btn-yellow-outline" >Facebook</Link>

                                <Link to="" class="btn w-100 text-white bg-transparent px-5 btn-yellow-outline" >Shopee</Link>
                            </div>
                        </div>
                        
                    </div>

                    <div className="copyright" style={{borderTop:"1px solid white"}}>
                        <p className="text-center mt-3">@2024 Oro Hi-Q. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;