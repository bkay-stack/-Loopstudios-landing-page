import React from "react";
import "./picturegrid.styles.css";
import PicturesGrid from "../picturesgrid/PicturesGrid";
const PictureGrid = () => {
  return (
    <div className="picture-grid-item">
      <h1 className="creation-header">our creation</h1>
      <div className="grid-pictures"></div>
      <PicturesGrid />
      <button className="see-ll">Sell All</button>
    </div>
  );
};

export default PictureGrid;
