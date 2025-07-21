// ProductItem.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from "../assets/washmachine.jpg"
// import img from '../assets/bottle.jpg';
import { Link, useNavigate } from 'react-router-dom';


function ProductItem({ product, isAdmin, openDeleteModal, openEditModal }) {
  const navigate = useNavigate();

  const handleDetailsClick = (product) => {
    navigate('/product_details', { state: { product } });
    window.location.reload();
    window.scrollTo(0, 0);
  };

  // const handleInquireClick = () => {
  //   const message = `Hello! I Would like to inquire about ${product.productName}.`;
  //   console.log('Inquire button clicked. Sending message:', message);
  //   sendMessage(message);
  // };
  
  return (
    <div className="card center-card h-80 shadow rounded-4" style={{ width: '15rem', border: 'none'}} key={product.id}>
      <img src={product.image} className="card-img-top" alt="bottle" />
      <div className="card-body">
        <h5 style={{ fontWeight: 'bold' }}>{product.productName}</h5>
        <p className="card-text">{product.category.name}</p>
        {isAdmin && (
            <div className="buttons mt-5 my-3 d-flex justify-content-evenly">
            <button
              className='btn btn-outline-dark rounded-pill px-4'
              type="button"
              onClick={() => openEditModal(product)}
            >
              Edit
            </button>
            <button
              className='btn btn-outline-danger rounded-pill px-4'
              type="button"
              onClick={() => openDeleteModal(product.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      {!isAdmin && (
        <div className="buttons my-3 d-flex justify-content-evenly">
            {/* <button onClick={handleInquireClick} className="btn btn-outline-dark rounded-pill px-4">
              Inquire
            </button> */}
            <button onClick={() => handleDetailsClick(product)} className="btn btn-blue rounded-pill px-4">
              Details
            </button>
        </div>

      )}
    </div>

  );
}

export default ProductItem;