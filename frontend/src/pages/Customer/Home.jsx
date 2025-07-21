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
        <><Layout></Layout><body className="container-fluid px-0 mb-5  mx-0">
            <div className="container-fluid hero mb-5 py-5 px-4 d-flex flex-column text-center gap-4 justify-content-center align-items-center">
                <div className="content">
                    <h2 className="fw-bold hero-title text-white my-1 m-4 hero-content">Innovative Plastics and Packaging Solutions for Every Need</h2>
                    <p className=" ls-1 hero-text text-white mt-5 hero-content">At Oro Hi-Q Industries, Inc., we produce top of the line products at all times, provide competitive rate option to its clients, and maintain a quality of service not only in Mindanao, but on the three biggest islands of the Philippines.</p>
                    <div className="d-flex justify-content-evenly hero-content">
                        <Link to="/services" class="btn hero-btn text-white px-5 btn-blue ">Learn More</Link>
                        <Link to="" class="btn hero-btn bg-transparent px-4 btn-blue-outline text-white">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="container left-right d-flex my-5 px-5 pt-5 flex-column justify-content-between">
                <h1 className="fw-bold text-center text-blue mb-4">Your <span className="text-yellow">all in one</span>  water treatment needs</h1>

                <p className="py-3 mt-2 text-center ls-1 my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>
            </div>

            <div className="ad mt-5 gap-5">
                <div className="left px-4">
                    <div className="d-flex flex-column m-0">
                        <div className="d-flex gap-4">
                            <div className="icon-area container bg-dangr relative pb-24 lg:pb-20">
                                <span className="absolute line-span top-24 left-10 bottom-4 -ml-px border border-dashed border-gray-300"></span>

                                <div className="icon-area container text-center bg-info rounded-circle">
                                    <span>svg</span>
                                </div>
                            </div>
                            <div className="text-area col-9">
                                <h3>Top of the line products</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae vero porro sequi dolor? Debitis.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-4">
                            <div className="icon-area container relative pb-24 lg:pb-20">
                                <span className="absolute line-span top-24 left-10 bottom-4 -ml-px border border-dashed border-gray-300"></span>

                                <div className="icon-area container text-center bg-info rounded-circle">
                                    <span>svg</span>
                                </div>
                            </div>
                            <div className="text-area col-9">
                                <h3>Top of the line products</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae vero porro sequi dolor? Debitis.</p>
                            </div>
                        </div>
                        <div className="d-flex gap-4">
                            <div className="icon-area container bg-dangr relative pb-24 lg:pb-20">
                                <span className="absolute line-span top-24 left-10 bottom-4 -ml-px border border-dashed border-gray-300"></span>

                                <div className="icon-area container text-center bg-info rounded-circle">
                                    <span>svg</span>
                                </div>
                            </div>
                            <div className="text-area col-9">
                                <h3>Top of the line products</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae vero porro sequi dolor? Debitis.</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="right px-2 mx-md-5">
                    <div className="card mx-3" style={{ border: 'none' }}>
                        <div className="card-image">
                            <img src={water} className="w-100 img-fluid bg-transparent card-img" style={{ borderRadius: "1em" }} alt="" />
                        </div>

                        <div className="card-badge text-center px-5  py-2 mx-auto text-white fw-medium" style={{ backgroundColor: '#317FAD', borderRadius: '1em' }}>
                            10+ <br />
                            Years of Experience
                        </div>
                    </div>
                </div>
            </div>



            <div className="container py-5 my-3 mt-5">
                <h1 className="text-center text-blue fw-bold fs-1">Products</h1>
                <p className="text-center mb-5">Explore our wide range of high-quality plastic products and packaging solutions.</p>


                <div className="container-fluid row gap-3 ms-2">
                    <div className="center-card">
                        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-2">
                            {products.slice(0, 10).map((product) => (

                                <div className="col center-card">
                                    <ProductItem product={product} isAdmin={false}></ProductItem>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <Link className="btn align-center my-5 btn-blue px-4" to='/products'>View All</Link>
                </div>
            </div>

            <Footer></Footer>

        </body></>
    )
}

export default Home;