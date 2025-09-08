import './App.css';
import React, { useState } from 'react';
// import ProductList from './components/ProductList.js';
// import ProductCard from './components/ProductCard.js';
// import {products as productData} from './data/products.js';
// import ProductFilter from './components/ProductFilter.js';
import Header from './components/Header.js';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard.js';
import Cart from './components/Cart.js';
import Payment from './components/Payment.js';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product)=> {
     setCart((prevCart)=> 
      prevCart.some((item)=> item.id === product.id) 
        ? prevCart 
        : [...prevCart, product]);
    console.log(cart);
  };
  
  // Calculate total price for passing to payment page
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<DashBoard onAddToCart={handleAddToCart} /> } />
        <Route path='/cart' element={<Cart items={cart}/>} />
        <Route path='/payment' element={<Payment total={totalPrice} />} />
      </Routes>
    </div>
  );
}

export default App;
