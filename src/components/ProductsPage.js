import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  function searchProduct(pro) {
    const filteredProduct = products.filter((product) => {
      return product.name.toLowerCase().includes(pro.toLowerCase())
    })
    setFilteredProducts(filteredProduct)
  }
  
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchProduct={searchProduct} />
        <ProductsTable products={filteredProducts} />
      </div>    
  )
}

export default ProductsPage;

