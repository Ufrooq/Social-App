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
    setData({ ...data, media: e.target.files });
  }

  async function handlePost(e) {
    e.preventDefault();
    const { caption, media } = data;
    if (caption) {
      try {
        console.log(data);
        const response = await fetch("http://localhost:3001/posts", {
          credentials: "include",
          withCredentials: true,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: caption,
            picturePath: media,
          }),
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
    <form className="action-card" encType="multipart/form-data" action="/posts">
      <div className="my-mind">
        <img src={profile_image} alt="" />
        <input
          type="text"
          name="caption"
          placeholder="what's on your mind ?"
          onChange={(e) => setData({ ...data, caption: e.target.value })}
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
    </form>
  );
};

export default Action;
