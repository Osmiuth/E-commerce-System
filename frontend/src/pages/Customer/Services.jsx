import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Layout from "./Layout";
import service from "../../assets/service.jpg";

function Services(){

    return(
        <>
        <Layout></Layout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 left pt-lg-5">
                        <h1 className="text-blue px-5 text-center">Our <span className="text-yellow">Services</span></h1>
                    </div>
                    <div className="col-lg-6 right py-5 text-center">
                        <p className="fs-4 px-4 text-lg-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>
                    </div>
                </div>

                <div className="services row py-3 my-5">

                    <div className="left-service col-lg-6 mb-5">
                        <div className="row row-cols-1 row-cols-md-1 g-4 px-2">

                            <div className="col mb-4">
                                <div className="card card-custom card-left h-100 p-md-5">
                                    <img src={service} className="card-img-top rounded-5" alt="..." />
                                    <div className="card-body px-lg-4 text-center">
                                        <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                        <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                        <div className="d-flex justify-content-center">
                                            <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col mb-4">
                                <div className="card card-custom card-left h-100 p-md-5">
                                    <img src={service} className="card-img-top rounded-5" alt="..." />
                                    <div className="card-body px-lg-4 text-center">
                                        <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                        <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                        <div className="d-flex justify-content-center">
                                            <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col mb-4">
                                <div className="card card-custom card-left h-100 p-md-5">
                                    <img src={service} className="card-img-top rounded-5" alt="..." />
                                    <div className="card-body px-lg-4 text-center">
                                        <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                        <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                        <div className="d-flex justify-content-center">
                                            <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                
                            
                        </div>
                    </div>

                    <div className="right-service col-lg-6 py-lg-5 mb-5">
                        <div className="row row-cols-1 row-cols-md-1 g-4 px-2">

                                <div className="col mb-4">
                                        <div className="card card-custom card-right h-100 p-md-5">
                                            
                                            <div className="card-body px-lg-5 text-center">
                                                <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                                <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                                <div className="d-flex justify-content-center">
                                                    <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                                </div>
                                            </div>
                                            <img src={service} className="card-img-top rounded-5" alt="..." />
                                        </div>
                                 </div>

                                <div className="col mb-4">
                                        <div className="card card-custom card-right h-100 p-md-5">
                                            
                                            <div className="card-body px-lg-5 text-center">
                                                <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                                <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                                <div className="d-flex justify-content-center">
                                                    <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                                </div>
                                            </div>
                                            <img src={service} className="card-img-top rounded-5" alt="..." />
                                        </div>
                                 </div>

                                <div className="col mb-4">
                                        <div className="card card-custom card-right h-100 p-md-5">
                                            
                                            <div className="card-body px-lg-5 text-center">
                                                <h3 className="card-title text-center py-4">Water Refilling Station</h3>
                                                <p className="card-text text-sm-center px-md-4 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio adipisci repellendus voluptas ratione corrupti eos corporis? Ut veniam numquam autem, iure minima earum voluptatum rem distinctio asperiores minus nostrum ex ipsam labore nobis at nesciunt placeat unde non. Deserunt.</p>

                                                <div className="d-flex justify-content-center">
                                                    <Link className="btn btn-blue px-5 my-3">Learn More</Link>
                                                </div>
                                            </div>
                                            <img src={service} className="card-img-top rounded-5" alt="..." />
                                        </div>
                                 </div>


                            </div>
                    </div>
                </div>



            </div>
                <Footer></Footer>
        </>
    )
}

export default Services;