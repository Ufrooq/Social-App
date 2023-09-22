import React from "react";
import profile_image from "../assets/avatar.png";
import "./styles/post.scss";

const PostCard = ({ media_src }) => {
  return (
    <div className="post-card">
      <div className="post-info">
        <div className="profile">
          <img src={profile_image} alt="" srcset="" />
          <div className="details">
            <p>Same</p>
            <span>San Francs, USA</span>
          </div>
        </div>
      </div>
      <div className="captions">sunest on its peak</div>
      <div className="post_media">
        <img src={media_src} alt="" />
      </div>
    </div>
  );
};

export default PostCard;
