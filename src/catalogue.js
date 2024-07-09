import React, { useState } from "react";
import "./catalogue.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import img from './mb.jpeg'

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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: "$30.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: "$10.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$20.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
    
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: "$30.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: "$10.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$20.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BD-yGQL6mPjV5ytzpaxKVEiDm-mWn06v6w&s"
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
