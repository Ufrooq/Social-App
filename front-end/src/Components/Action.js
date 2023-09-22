import React from "react";
import profile_image from "../assets/avatar.png";

const Action = () => {
  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input type="text" />
      </div>
      <div className="actions">
        <div>
          <i class="fa-solid fa-image"></i>
          image
        </div>
        <div>
          <i class="fa-solid fa-video"></i>
          clip
        </div>
        <div>
          <i class="fa-solid fa-paperclip"></i>
          Attachment
        </div>
        <div>
          <i class="fa-solid fa-microphone"></i>
          audio
        </div>
      </div>
    </div>
  );
};

export default Action;
