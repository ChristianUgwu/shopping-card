import React from 'react';


const Cart = ({ cartItems, clearCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};


export default Cart;
