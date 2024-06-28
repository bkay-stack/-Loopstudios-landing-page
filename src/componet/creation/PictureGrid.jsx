import React from "react";
import "./picturegrid.styles.css";
import { useState } from "react";

const PictureGrid = () => {
  const [picture, setPicture] = useState("false");
  const toggle = () => {
    setPicture(!picture);
    console.log("click me");
  };
  return (
    <div className="picture-grid-item">
      <h1 className="creation-header">our creation</h1>
      {/* grid */}
      <div className="pictures-items">
        <div className="deep">
          <h1>Deep Earth</h1>
        </div>
        <div className="night">
          <h1>Night Arcade</h1>
        </div>
        <div className="soccer">
          <h1>Soccer Team VR</h1>
        </div>
        <div className="grid">
          <h1> The Grid</h1>
        </div>

        {/* See all section */}
        {picture && (
          <>
            <div className="above">
              <h1>From Up Above VR</h1>
            </div>
            <div className="pocket">
              <h1>Pocket BVorealis</h1>
            </div>
            <div className="curiosity">
              <h1> The Curiosity </h1>
            </div>
            <div className="fisheye">
              <h1> Make It Fisheye</h1>
            </div>
          </>
        )}
      </div>
      <div onClick={toggle} className={`btn ${picture ? "active" : ""}`}>
        See ALL
      </div>
    </div>
  );
};

export default PictureGrid;
