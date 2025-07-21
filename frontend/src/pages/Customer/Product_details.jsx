import washmachine from "../../assets/washmachine.jpg"
import service from "../../assets/service.jpg"
import img from '../../assets/bottle.jpg';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductItem from "../../components/ProductItem.jsx";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer.jsx";
import { sendMessage } from '../../components/sendMessage';
import Layout from "./Layout.jsx";

function Product_details(){
    const location = useLocation();
    const product = location.state?.product;

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(product.category.name);
    const [productID, setProductID] = useState(product.id);


    
    if (!product) {
        return <div>Product not found</div>;
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);


    const filteredProducts = products.filter(product => 
        product.category.name === selectedCategory && product.id !== productID
      );


      const getRandomizedArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };
      
      const randomizedProducts = getRandomizedArray([...filteredProducts]);

      const handleInquireClick = () => {
        const message = `Hello! I Would like to inquire about ${product.productName}.`;
        console.log('Inquire button clicked. Sending message:', message);
        sendMessage(message);
      };
      




    return(
        <>
        <Layout></Layout>
            <div className="container mb-5">
                <div className="my-5 row pt-4 "style={{borderBottom:"1px solid #143447"}}>

                    <div className="left-prod col-lg-6 px-4 mb-5">
                        <h1 className="prod-title fw-bold text-blue"> {product.productName}</h1>
                        <span className="prod-category badge text-bg-secondary px-3 py-2 fs-6">{product.category.name}</span>
                        <p className="prod-desc mt-5 mb-4 fs-5">{product.description}</p>

                        {product.capacity != 0 && (
                            <p>Capacity: {product.capacity}</p>
                        )}

                        {product.material != "none" && (
                            <p>Materials: {product.material}</p>
                            )}


                        <p className="" style={{marginTop: "10em"}}>Do you have questions or inquiry about this product?</p>
                        <a className="btn btn-blue px-5" onClick={handleInquireClick}>Inquire Now!</a>


                    </div>
                    <div className="right-prod col-lg-6 px-4 mb-5">
                        <div className="img-cont img-top">
                            <img src={product.image} alt={product.productName} className="h-100 w-100" />
                        </div>
                    </div>
                </div>

                <div className="my-5 pb-4" style={{borderBottom:"1px solid #143447"}}>
                    <h2>Explore Similar Products</h2>

                </div>

               
                <div className="container row gap-3">
                    <div className="row gap-4 mx-auto px-sm-4">
                        {randomizedProducts.slice(0,4).map((product) => (
                                <ProductItem product={product} isAdmin={false}></ProductItem>
                    
                            ))}
                    </div>
                </div>


                       
                        
                        

              
                    



            </div>
                <Footer></Footer>
        </>
    )
}

export default Product_details;