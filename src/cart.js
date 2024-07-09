import React, { useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: "$10.00", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$20.00", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30.00", image: "https://via.placeholder.com/150" },
    // Add more sample items as needed
  ]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleBuyNow = () => {
    // Implement action for Buy Now button, e.g., navigate to checkout page
    alert("Buy Now action!");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
