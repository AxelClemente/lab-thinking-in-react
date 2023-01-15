import ProductsRow from './ProductsRow';

function ProductsTable(props) {
  const {products} = props

return(
  <div>

  <table>
      <thead>
          <tr>
              <th>Name</th>
              <th>Price</th>
          </tr>
      </thead>

      <tbody>
           { products.map((product) => {
              return <ProductsRow
                  key={product.id}
                  price={product.price}  
                  name={product.name} 
                  />
           })}
      </tbody>
  </table>
  

</div> 
)
}

export default ProductsTable;