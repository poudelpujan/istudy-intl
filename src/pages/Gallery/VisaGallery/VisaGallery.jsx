import React from "react";
import { visaData } from "./Data/Data";

const VisaGallery = () => {
  return (
    <>
      <div className="wrapper container">
        {visaData.map((data, index) => (
          <div className="card" key={data.id}>
            <div className="poster">
              <img src={data.image} id={data.id} alt={data.alt} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VisaGallery;
