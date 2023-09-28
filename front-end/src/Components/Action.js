import React, { useState } from "react";
import profile_image from "../assets/avatar.png";
import "./styles/actionCard.scss";

const Action = () => {
  const [action, setAction] = useState("");
  const [data, setData] = useState({
    caption: "",
    media: "",
  });
  function handleAction(actionValue) {
    setAction(actionValue);
  }
  function handleChange(e) {
    console.log(e.target.name);
  }

  async function handlePost() {
    // try {
    //   const response = await fetch("http://localhost:3001/posts", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: {
    //       // postData:
    //     },
    //   });
    // } catch (error) {}
  }

  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input type="text" placeholder="what's on your mind ?" />
      </div>
      {action != "" && action == "image" ? (
        <div className="act">
          <input type="file" name="image" onChange={handleChange} />
          <span>upload image</span>
        </div>
      ) : action == "video" ? (
        <div className="act">
          <input type="file" name="video" onChange={handleChange} />
          <span>upload video</span>
        </div>
      ) : action == "pdf" ? (
        <div className="act">
          <input type="file" name="pdf" onChange={handleChange} />
          <span>attach docs</span>
        </div>
      ) : action == "micro" ? (
        <div className="act">
          <input type="file" name="audio" onChange={handleChange} />
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
        <li onClick={() => handleAction("pdf")}>
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
