import React from "react";
import Friend from "./Friend";
import "./styles/friends.scss";

const Friends = () => {
  return (
    <div className="friends-card">
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

export default Friends;
