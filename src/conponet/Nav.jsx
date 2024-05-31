import React from "react";
import { useState } from "react";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="nav-bar">
      <div className="nav-wrap">
        <div className="logo-wrap">
          <h1>loopstudio</h1>
        </div>
        <div className={`off-screen-menu ${isActive ? "visible" : ""}`}>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Event</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
        </div>

        <div
          className={`ham-menu ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
