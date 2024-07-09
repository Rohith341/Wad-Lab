import React from "react";
import "./about.css";
import aboutImage from "./image"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="top-section">
        <div className="left-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae libero in tellus vehicula fermentum. Nullam commodo dui nec
            tincidunt interdum. Fusce eu ligula eros. Sed tincidunt fermentum
            mi, eu feugiat felis viverra eu. Aenean malesuada, ante ac hendrerit
            pharetra, tellus mauris interdum lacus, in hendrerit lacus urna id
            turpis. Nullam hendrerit magna non leo pellentesque eleifend. Sed
            nec diam quis purus ultrices gravida.
          </p>
        </div>
        <div className="right-image">
          <img src={aboutImage} alt="About Us" />
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

export default AboutUs;
