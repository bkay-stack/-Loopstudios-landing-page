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
        <div className="logo-footer">
          <h2>loopstudio</h2>
        </div>
        <div className="links-footer">
          <ul>
            <li> About</li>
            <li> Careers</li>
            <li> Events</li>
            <li> Products</li>
            <li> Support</li>
          </ul>
        </div>
      </div>

      {/* footer-socials  */}

      <div className="footer-socials stack">
        <div className="icons-socials">
          <div className="facebook stack">
            <img src={fbImage} alt="" />
          </div>

          <div className="twiiter stack">
            <img src={xImage} alt="" />
          </div>

          <div className="pinterest stack">
            <img src={pinImage} alt="" />
          </div>

          <div className="instagram-icon stack">
            <img src={instaImage} alt="" />
          </div>
        </div>
        <div className="footer-content-p">
          © 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
