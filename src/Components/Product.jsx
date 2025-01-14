import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
