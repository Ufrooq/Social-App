import React from "react";
import profile_image from "../assets/avatar.png";
import "./styles/actionCard.scss";

const Action = () => {
  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input type="text" />
      </div>
      <ul className="actions">
        <li>
          <i class="fa-solid fa-image"></i>
          image
        </li>
        <li>
          <i class="fa-solid fa-video"></i>
          clip
        </li>
        <li>
          <i class="fa-solid fa-paperclip"></i>
          Attachment
        </li>
        <li>
          <i class="fa-solid fa-microphone"></i>
          audio
        </li>
      </ul>
    </div>
  );
};

export default Action;
