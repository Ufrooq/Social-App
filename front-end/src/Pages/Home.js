import React from "react";
import Profile from "../Components/Profile";
import "./styles/style.scss";
import Add from "../Components/Add";

const Home = () => {
  return (
    <div className="home-page">
      <Profile />
      <Add />
    </div>
  );
};

export default Home;
