import React from "react";
import Profile from "../Components/Profile";
import "./styles/style.scss";
import Add from "../Components/Add";
import Feed from "../Components/Feed";

const Home = () => {
  return (
    <div className="home-page">
      <Profile />
      <Feed />
      <div className="right-portion">
        <Add />
      </div>
    </div>
  );
};

export default Home;
