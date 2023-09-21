import React from "react";
import profile_image from "../assets/avatar.png";

const Action = () => {
  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
      </div>
      <div className="actions"></div>
    </div>
  );
};

export default Action;
