import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../styles/App.css';
import ProductItem from "../../components/ProductItem.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import filterLogo from "../../assets/filter.png";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";
// import api from "../api";
import Layout from "./Layout.jsx";


function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('https://test-website-1-4oqd.onrender.com/api/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);

    // Function to handle search input change
    const handleSearchChange = (value) => {
        setSearchTerm(value.toLowerCase());
    };

    // Function to handle category change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Filter products based on search term and selected category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.productName.toLowerCase().includes(searchTerm) || 
                              product.category.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory ? product.category.name === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const navigate = useNavigate();

    const handleDetailsClick = (product) => {
      navigate('/product_details', { state: { product } });
    };

    return (
        <>
        <Layout></Layout>
            <div className="container-fluid">
                <div className="container my-5 shadow p-5 rounded-5">
                    <div className="search-area d-lg-flex justify-content-between my-3 flex-nowrap gap-5">
                         <div className="search-title">
                            <h2 className="fw-bold text-center my-2 flex-fill">Find All You Need</h2>
                         </div>

                         <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                    </div>

                    <div
                        className="col-sm-2 text-right px5 bg-ino my-4 mx-1"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <img
                            src={filterLogo}
                            alt="Filter"
                            style={{ marginRight: "3px" }}
                            className="filterpic"
                        />
                        <select 
                            style={{ color: "#0D6EFD" }} 
                            className="filter" 
                            value={selectedCategory} 
                            onChange={handleCategoryChange}
                        >
                            <option value="">Filter</option>
                            <option value="Bottle">Bottle</option>
                            <option value="Lids">Lids</option>
                            <option value="Cups">Cups</option>
                            <option value="Containers">Containers</option>
                        </select>
                    </div>


                    <div className="container-fluid ms-lg-2 ms-xxl-4 prod-center">
                            <div className="row gap-5 px-md-4">
                                {filteredProducts.map((product) => (
                                    <ProductItem product={product} isAdmin={false}></ProductItem>
                            
                                ))}
                            </div>
                    </div>
                    
                </div>
            </div>
                <Footer></Footer>
            
        </>
    );
}

export default Products;