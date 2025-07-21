import React from "react";
import '../../styles/Aboutus.css';
import Footer from "../../components/Footer";
import Layout from "./Layout";


function AboutUs(){

    return(
        <>
        <Layout></Layout>
            <div className="container-fluid row bg-dnger my-5">
                <div className="left col-lg-10 content ps-5 mx-auto">

                        <h1 className="text-blue fw-bold">Producing top of the line products since 2003</h1>
                        <p className="fs-3 py-4">Oro Hi-Q Packaging Corporation (OHQPC) was established in 2003 as a family-owned corporation with a clear vision to become the leading packaging supplier and water treatment supplies in the Philippines. Since its inception, OHQPC has grown steadily, expanding its product lines and establishing a loyal client base. The company's commitment to quality and affordability has earned it a reputation as a reliable partner for businesses of all sizes in the Mindanao region.</p>
                        <p className="fs-3 py-4">Over the years, OHQPC has continued to expand its reach and its product offerings. The company's growth has been fueled by its dedication to innovation and its ability to adapt to the changing needs of its clients. Today, OHQPC is a one-stop-shop for all plastic and paper packaging needs as well as a wide range of other products and services, including water treatment and purification systems, agri-livestock supplies, and tarpaulin and sticker printing.</p>
                        <p className="fs-3 py-4">Despite the challenges of the past years, OHQPC remains committed to its mission of providing quality products at affordable prices. With its experienced and dedicated team, state-of-the-art facilities, and a growing network of branches and depots, the company is well-positioned to continue its impressive growth trajectory. OHQPC is proud of its history and excited about the opportunities that lie ahead, as it continues to provide exceptional service to its clients and contribute to the economic development of the Philippines.</p>

                </div>

                <div className="right-about col-lg ms-lg-5">
                    {/* <div className="right-image img-fluid"></div> */}
                </div>
            </div>

            <div className="portfolio container-fluid py-5 my-5">
                <div className="row py-5">
                    <div className="port-left col-lg-6">
                        <img src="../src/images/hero.jpg" alt="" className="img-fluid h-100"/>
                    </div>

                    <div className="port-right col-lg-6 text-center">
                        <div className="content right-about py-3 mx-auto">
                            <h1 className="title text-blue py- mt-4">Client Portfolio</h1>
                            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam quos quas dolor tempore sequi illo nam facilis, deleniti voluptatibus consectetur, nemo commodi labore dignissimos vel dicta cupiditate! Provident in ratione qui atque labore soluta?</p>
                        </div>

                        {/* <div class="row row-cols-1 row-cols-md-3 g-4">

                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Hotel</span></h4>
                            </div>
                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Restaurant</span></h4>
                            </div>
                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Food & Beverage SME"s</span></h4>
                            </div>
                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Hospitals</span></h4>
                            </div>
                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Clinics</span></h4>
                            </div>
                            <div class="col">
                                <h4><span class="badge text-bg-secondary px-4 py-3">Poultry & Livestock</span></h4>
                            </div>

                        </div> */}
                    </div>

                </div>
            </div>

            <div className="continer text-center p-4">
                <div className="mission py-4 ">
                    <h1 className="title-mission text-blue py-2 my-2 fw-bold">Mission</h1>
                    <p className="mv-text px-md-5 mx-md-5 fs-3">To produce top of the line products at all times, provide competitive rate option to its clients, and maintain a quality of service unequalled by any other in the country.</p>
                </div>

                <div className="vision py-4">
                    <h1 className="title-vision text-blue py-2 my-2 fw-bold">Vision</h1>
                    <p className="mv-text px-md-5 fs-3">The leading plastic and paper packaging manufacturer and supplier in the Visayas and Mindanao area, becoming the by word in the country's packaging industry. The name Oro Hi-Q will be known for its superior quality standards and excellent customer service. Its product lines and trademarks, such as the Golden Glow will become household names, dominating the market.</p>
                </div>

            </div>

            <Footer></Footer>


        </>
    )
}

export default AboutUs;