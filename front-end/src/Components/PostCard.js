import React from "react";

const PostCard = ({ media_src }) => {
  return (
    <div className="post-card">
      <div className="post-info"></div>
      <div className="captions">sunest on its peak</div>
      <div className="media">
        <img src={media_src} alt="" srcset="" />
      </div>
    </div>
  );
};

export default PostCard;
