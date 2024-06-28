import React, { useContext } from "react";
import "./showcase.styles.css";
import ArticlePic from "../../assets/mobile/image-interactive.jpg";
import { AppContext } from "../../context/global-context";
const Showcase = () => {
  const { isActive } = useContext(AppContext);
  return (
    <div className={`showcase ${isActive ? "active" : ""}`}>
      <div className="article-note">
        <h1>The leader in interactive VR</h1>
        <p>
          {" "}
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
      <div className="artilce-pic">
        <img src={ArticlePic} alt="" />
      </div>
    </div>
  );
};

export default Showcase;
