import React from "react";
import Action from "./Action";
import Feed from "./Feed";
import "./styles/mySide.scss";

const Me = () => {
  return (
    <div className="my-side">
      <Action />
      <Feed />
    </div>
  );
};

export default Me;
