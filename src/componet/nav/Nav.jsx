import React from "react";
import { useState } from "react";
import "./nav.styles.css";
import Ham from "../../assets/icons/icon-hamburger.svg";
import Close from "../../assets/icons/icon-close.svg";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={`nav-bar ${isActive ? "active" : ""}`}>
      <div className="container">
        <div className="logo">
          <h1>loopstudio</h1>
        </div>

        <div className="">
          <ul className={`nav-list ${isActive ? "active" : ""}`}>
            <li>About</li>
            <li>Careers</li>
            <li>Event</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
          <div
            className={`ham-menu ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <img
              className={`ham-Img ${isActive ? "hide" : ""}`}
              src={Ham}
              alt="toggle menu"
            />
            <img
              className={`close-Img ${isActive ? "" : "hide"}`}
              src={Close}
              alt="toggle menu"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
