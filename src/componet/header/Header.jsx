import React from "react";
import Nav from "../nav/Nav";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="hero">
        <h1>Immersive experiences that deliver The leader in interactive VR</h1>
      </div>
    </header>
  );
};

export default Header;
