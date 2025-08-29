import './App.css';
import React from 'react';
import ProductList from './components/ProductList.js';
import ProductCard from './components/ProductCard.js';
import {products as productData} from './data/products.js';

function App() {
  const [products, setProducts] = React.useState(productData);
  console.log(products);
  return (
    <div className="App">
      <ProductList>
        {products.map((product)=> (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
}

export default App;
