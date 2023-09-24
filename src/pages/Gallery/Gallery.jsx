import React from "react";
import { Link } from "react-router-dom";
import { galleryData } from "./Data/Data";

const Gallery = () => {
  return (
    <>
      <div id="hero-slides">
        <div id="slides-cont">
          <div id="slides">
            {galleryData.map((gData, index) => (
              <div className="slide" key={gData.id}>
                <Link to="/gallery/visa-gallery/" className="link">
                  <div className="poster">
                    <img src={gData.img} alt={gData.alt} />
                  </div>
                  <div className="number">{gData.number}</div>
                  <div className="body">
                    <div className="headline">{gData.headline}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
