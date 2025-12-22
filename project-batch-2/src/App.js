// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
import React, {useState} from 'react';
import Payment from './components/Payment';

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

  // Calculate total price for passing to payment page
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <>
    <Header />
    <Routes>
      <Route index element={<DashBoard onAddToCart={handleAddToCart} />}></Route>
      <Route path='/cart' element={<Cart items={cart}/>} />
      <Route path='/payment' element={<Payment total={totalPrice} />} />
    </Routes>
    </>
  );
}

export default App;
