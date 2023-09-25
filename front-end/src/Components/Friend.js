import React from "react";
import "./styles/friend.scss";
import profile_image from "../assets/avatar.png";

const Friend = () => {
  return (
    <div className="header">
      <div className="profile">
        <img src={profile_image} alt="" srcset="" />
        <div className="details">
          <p>Umar Farooq</p>
          <span>2 friends</span>
        </div>
      </div>
      <i class="fa-solid fa-user-plus"></i>
    </div>
  );
};

export default Friend;
