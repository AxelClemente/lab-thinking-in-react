import React, { useState } from 'react';

function SearchBar(props) {
  const {searchProduct} = props

  const handleSearch = (e) => {
    searchProduct(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search for products..." />
      <div>
          <input type="checkbox" />
          <p>Only show products in stock</p>   
      </div>
    </div>
    
  )
}

export default SearchBar;