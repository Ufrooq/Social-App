import React from "react";
import Profile from "../Components/Profile";
import "./styles/style.scss";
import Add from "../Components/Add";
import Me from "../Components/Me";

const Home = () => {
  return (
    <div className="home-page">
      <Profile />
      <Me />
      <Add />
    </div>
  );
};

export default Home;
