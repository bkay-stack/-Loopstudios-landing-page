import React from "react";
import "./footer.styles.css";
import fbImage from "../../assets/icons/icon-facebook.svg";
import xImage from "../../assets/icons/icon-twitter.svg";
import pinImage from "../../assets/icons/icon-pinterest.svg";
import instaImage from "../../assets/icons/icon-instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <h2>loopstudio</h2>
        <ul>
          <li> About</li>
          <li> Careers</li>
          <li> Events</li>
          <li> Products</li>
          <li> Support</li>
        </ul>
      </div>

      {/* footer-socials  */}

      <div className="footer-socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fbImage} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={xImage} alt="Twitter" />
        </a>

        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fbImage} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={pinImage} alt="Pinterest" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaImage} alt="Instagram" />
        </a>
      </div>
      <div className="footer-content-p">
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
