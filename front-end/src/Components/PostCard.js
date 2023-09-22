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
            <p>Same Steven</p>
            <span>San Francs, USA</span>
          </div>
        </div>
        <i class="fa-solid fa-user-plus"></i>
      </div>
      <p className="captions">sunest on its peak</p>
      <div className="post_media">
        <img src={media_src} alt="" />
      </div>
      <div className="interactions">
        <div className="like_comment">
          <div className="impress">
            <i class="fa-regular fa-heart"></i>
            <span>3</span>
          </div>
          <div className="impress">
            <i class="fa-regular fa-comment"></i>
            <span>5</span>
          </div>
        </div>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
};

export default PostCard;
