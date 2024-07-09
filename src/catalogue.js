import React, { useState } from "react";
import "./catalogue.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import img from './mb_img.jpg'

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: "$10.00",
    image: img
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$20.00",
    image: img
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: "$30.00",
    image: img
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of Product 1",
    price: "$10.00",
    image: img
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description of Product 2",
    price: "$20.00",
    image:img
    
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description of Product 3",
    price: "$30.00",
    image:img
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description of Product 1",
    price: "$10.00",
    image: img
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description of Product 2",
    price: "$20.00",
    image:img
  },
 
  // Add more products as needed
];

const Catalogue = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className="catalog-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Catalogue;
