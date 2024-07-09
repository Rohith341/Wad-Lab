import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h3>&copy; 2024 Rohit Website | Designed by 23075A0505</h3>
        <div className="socials">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
