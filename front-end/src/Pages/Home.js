import React from "react";
import Profile from "../Components/Profile";
import "./styles/style.scss";
import Add from "../Components/Add";
import Feed from "../Components/Feed";
import Friends from "../Components/Friends";

const Home = () => {
  return (
    <div className="home-page">
      <Profile />
      <Feed />
      <div className="right-portion">
        <Add />
        <Friends />
      </div>
    </div>
  );
};

export default Home;
