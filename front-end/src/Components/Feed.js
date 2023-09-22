import React from "react";
import PostCard from "./PostCard";
import img_1 from "../assets/post_1.jpg";
import img_2 from "../assets/post_2.jpg";
import img_3 from "../assets/post_3.jpg";
import img_4 from "../assets/post_4.jpg";
import img_5 from "../assets/post_5.jpg";

const Feed = () => {
  const src = [img_1, img_2, img_3, img_4, img_5];
  return (
    <div>
      <h1>Posts</h1>
      <PostCard media_src={src[0]} />
    </div>
  );
};

export default Feed;
