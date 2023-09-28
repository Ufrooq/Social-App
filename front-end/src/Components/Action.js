import React, { useState } from "react";
import profile_image from "../assets/avatar.png";
import "./styles/actionCard.scss";

const Action = () => {
  const [action, setAction] = useState("");

  function handleAction(actionValue) {
    setAction(actionValue);
  }

  function handlePost() {
    alert("sajasdjasd dasd ");
  }

  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input type="text" placeholder="what's on your mind ?" />
      </div>
      {action != "" && action == "image" ? (
        <div className="act">
          <input type="file" />
          <span>upload image</span>
        </div>
      ) : action == "video" ? (
        <div className="act">
          <input type="file" />
          <span>upload video</span>
        </div>
      ) : action == "clip" ? (
        <div className="act">
          <input type="file" />
          <span>attach docs</span>
        </div>
      ) : action == "micro" ? (
        <div className="act">
          <input type="file" />
          <span>upload audio</span>
        </div>
      ) : null}
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
        <li onClick={() => handleAction("micro")}>
          <i class="fa-solid fa-microphone"></i>
          audio
        </li>
        <li>
          <button onClick={handlePost}>POST</button>
        </li>
      </ul>
    </div>
  );
};

export default Action;
