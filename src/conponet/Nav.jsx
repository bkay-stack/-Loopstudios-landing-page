import React from "react";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-wrap">
        <div className="logo-wrap">
          <h1>loopstudio</h1>
        </div>
        <div className="off-screen-menu">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Event</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
