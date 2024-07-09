import React from "react";
import "./home.css";
import homeImage from "./ec1.jpg"; // Replace with your actual image path

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="left-content">
          <h2>Welcome to Our e-cart Site 23075A0505!</h2>
          <p>
            Shop the best products at the best prices. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla vitae libero in tellus
            vehicula fermentum. Nullam commodo dui nec tincidunt interdum. Fusce
            eu ligula eros. Sed tincidunt fermentum mi, eu feugiat felis viverra
            eu. Aenean malesuada, ante ac hendrerit pharetra, tellus mauris
            interdum lacus, in hendrerit lacus urna id turpis. Nullam hendrerit
            magna non leo pellentesque eleifend. Sed nec diam quis purus ultrices
            gravida.
          </p>
        </div>
        <div className="right-image">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla facilisi. Vivamus tincidunt, sapien
            quis luctus posuere, ligula purus fermentum libero, sed euismod
            dolor justo nec elit. Integer placerat erat vel nunc bibendum, vel
            congue neque convallis. Maecenas nec lectus ultricies, tempus justo
            a, fermentum turpis. Nulla facilisi. Fusce vel egestas turpis, in
            luctus elit. Cras sed dapibus neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
