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
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handlePost() {
    const { caption, media } = data;
    console.log(data);
    console.log(caption, media);
    if (caption != "" && media != "") {
      try {
        const response = await fetch("http://localhost:3001/posts", {
          withCredentials: true,
          crossorigin: true,
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            caption,
            media,
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("fill required fields sdsadasd !!");
    }
  }

  return (
    <div className="action-card">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input
          type="text"
          name="caption"
          placeholder="what's on your mind ?"
          onChange={handleChange}
        />
      </div>
      {action != "" && action == "image" ? (
        <div className="act">
          <input type="file" name="media" onChange={handleChange} />
          <span>upload image</span>
        </div>
      ) : action == "video" ? (
        <div className="act">
          <input type="file" name="media" onChange={handleChange} />
          <span>upload video</span>
        </div>
      ) : action == "pdf" ? (
        <div className="act">
          <input type="file" name="media" onChange={handleChange} />
          <span>attach docs</span>
        </div>
      ) : action == "micro" ? (
        <div className="act">
          <input type="file" name="media" onChange={handleChange} />
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
