import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ProductsContextProvider from './Global/ProductContext';
import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
        <Router>
        <Navbar/>
        {/* <Banner/> */}
          <Routes>
            <Route exact path='/' element={<Products/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider> 
    </div>
  );
}

export default App;
