import React, { useState } from "react";
import profile_image from "../assets/avatar.png";
import "./styles/actionCard.scss";

const Action = () => {
  const [action, setAction] = useState("");

  function handleAction(actionValue) {
    setAction(actionValue);
  }

  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input type="text" placeholder="what's on your mind ?" />
      </div>
      <div className="line" />
      <div className="act">
        <input type="file" placeholder="add ima ere" />
      </div>
      <div className="line" />
      <ul className="actions">
        <li onClick={() => handleAction("image")}>
          <i class="fa-solid fa-image"></i>
          image
        </li>
        <li onClick={() => handleAction("video")}>
          <i class="fa-solid fa-video"></i>
          clip
        </li>
        <li onClick={() => handleAction("clip")}>
          <i class="fa-solid fa-paperclip"></i>
          Attachment
        </li>
        <li onClick={() => handleAction("microphone")}>
          <i class="fa-solid fa-microphone"></i>
          audio
        </li>
        <li>
          <button>POST</button>
        </li>
      </ul>
    </div>
  );
};

export default Action;
