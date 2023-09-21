import React from "react";
import add_media from "../assets/product.jpg";
import "./styles/add.scss";

const Add = () => {
  return (
    <div className="add_card">
      <div className="main">
        <p>Sponsered</p>
        <span>Create Ad</span>
      </div>
      <div className="media">
        <img src={add_media} alt="" />
      </div>
      <div className="details">
        <p>Mika Cosmetics</p>
        <span>mikacosmetics.com</span>
      </div>
      <p id="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia
        sads?
      </p>
    </div>
  );
};

export default Add;
