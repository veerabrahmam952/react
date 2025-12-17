import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
import React, {useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product)=> {
    console.log("Adding to cart:", product);
     setCart((prevCart)=> 
      prevCart.some((item)=> item.id === product.id) 
        ? prevCart 
        : [...prevCart, product]);
    console.log(cart);
  };

  return (
    <>
    <Header />
    <Routes>
      <Route index element={<DashBoard onAddToCart={handleAddToCart} />}></Route>
      <Route path='/cart' element={<Cart items={cart}/>} />
    </Routes>
    </>
  );
}

export default App;
