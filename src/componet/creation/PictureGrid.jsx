import React, { useContext, useState } from "react";
import { AppContext } from "../../context/global-context";
import "./picturegrid.styles.css";

const PictureGrid = () => {
  const { isActive } = useContext(AppContext);
  const [picture, setPicture] = useState(false);

  const toggle = () => {
    setPicture(!picture);
    console.log("click me");
  };

  return (
    <div className={`picture-grid-item ${isActive ? "active" : ""}`}>
      <div className="flex">
        <h1 className=" creation-header">OUR CREATIONS</h1>
        <span onClick={toggle} className="see-all hide2">
          SEE ALL
        </span>
      </div>

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
          <h1>The Grid</h1>
        </div>

        {picture && (
          <>
            <div className="above">
              <h1>From Up Above VR</h1>
            </div>
            <div className="pocket">
              <h1>Pocket Borealis</h1>
            </div>
            <div className="curiosity">
              <h1>The Curiosity</h1>
            </div>
            <div className="fisheye">
              <h1>Make It Fisheye</h1>
            </div>
          </>
        )}
      </div>
      <button onClick={toggle} className={"btn hide1"}>
        See ALL
      </button>
    </div>
  );
};

export default PictureGrid;
