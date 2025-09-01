import './App.css';
import React from 'react';
import ProductList from './components/ProductList.js';
import ProductCard from './components/ProductCard.js';
import {products as productData} from './data/products.js';

function App() {
  const [products, setProducts] = React.useState(productData);
  const [favorites, setFavorites] = React.useState([]);
  const [whishlist, setWishlist] = React.useState([]);
  
  const handleOnPurchase = (productId, stockCount) => {
    setProducts((prevProducts)=> 
      prevProducts.map((product)=> product.id === productId ? {...product, stockCount}: product)
    );
  }

  const handleOnFavorite = (productId) => {
    if(favorites.includes(productId)) {
       setFavorites((prevFavorites)=> prevFavorites.filter((id)=> id !== productId));
       setWishlist((prevWishlist)=> prevWishlist.filter((item)=> item.id !== productId));
    } else {
      setFavorites((prevFavorites)=> [...prevFavorites, productId]);
      const product = products.find((product)=> product.id === productId);
      setWishlist((prevWishlist)=> [...prevWishlist, product]);
    }
  }
  
  return (
    <div className="App">
      <ProductList>
        {products.map((product)=> (
          <ProductCard 
            key={product.id}
            product={product}
            onPurchase={handleOnPurchase}
            isFavorite={favorites.includes(product.id)}
            onFavorite={handleOnFavorite}
          />
        ))}
      </ProductList>

      <h2>Products filtered by price</h2>
    </div>
  );
}

export default App;
