
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import image1 from './assets/download.jpeg';
import image2 from './assets/hatcat.jpeg';
import image3 from './assets/catbowtie.jpeg';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Cat Sweater', price: 19.99, image: image1 },
    { id: 2, name: 'Cat Hat', price: 9.99, image: image2 },
    { id: 3, name: 'Cat Bowtie', price: 4.99, image: image3 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <h1>Pet Cat Wear</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
};

export default App;


