import React from "react";
import PageNotFoundImage from "../../assets/svg/page_not_found.svg";

const PageNotFound = () => {
  return (
    <>
      <div className="container">
        <img
          src={PageNotFoundImage}
          alt=""
          style={{
            width: "70vw",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            padding: " 0 4em",
          }}
        />

        <h2>
          Sorry! The Page you're looking <br /> for doesn't exist
        </h2>
      </div>
    </>
  );
};

export default PageNotFound;
