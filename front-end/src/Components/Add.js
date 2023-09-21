import React from "react";
import add_media from "../assets/product.jpg";

const Add = () => {
  return (
    <div className="card">
      <div className="main">
        <span>Sponsered</span>
        <span>Create Ad</span>
      </div>
      <div className="media">
        <img src={add_media} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Add;
