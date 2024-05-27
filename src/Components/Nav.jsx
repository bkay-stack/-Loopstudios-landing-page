import React, { useState } from "react";
import header from "../assets/mobile/image-hero.jpg";
const Nav = () => {
  return (
    <header className="header show">
      <div className="hero">
        <div className="hader-img">
          <img src={header} alt="" />
        </div>
        <nav className="logo">
          <div class="off-screen-menu">
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="logo-header">
            <h2>Loopstudios</h2>
          </div>
          <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
