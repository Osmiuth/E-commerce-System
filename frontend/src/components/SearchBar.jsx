import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="search border rounded-pill py-0 d-flex justify-content-between flex-fill h-50">
            <input 
                id="search-bar" 
                className="form-control rounded-pill py-0 pe-sm-5 me-4 ms-0 fs-5" 
                style={{border: "none"}} 
                type="search" 
                placeholder="🔍 Search Item" 
                aria-label="Search" 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <button 
                className="btn px-sm-4 my-2 mx-2 rounded-pill btn-dark"
                onClick={() => onSearchChange({searchTerm})}>Search
            </button>
        </div>
    );
}

export default SearchBar;
