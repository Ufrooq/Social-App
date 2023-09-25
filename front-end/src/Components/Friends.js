import React from "react";
import Friend from "./Friend";
import "./styles/friends.scss";

const Friends = () => {
  return (
    <div className="friends-card">
      <h1>Friends List</h1>
      <Friend />
      <div className="line"></div>
      <Friend />
      <div className="line"></div>
      <Friend />
      <div className="line"></div>
      <Friend />
      <div className="line"></div>
      <Friend />
    </div>
  );
};

export default Friends;
