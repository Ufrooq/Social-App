import React from "react";
import "./styles/nav.scss";
import profile_pic from "../assets/avatar.png";

const NavBar = () => {
  function handleSearch() {}
  return (
    <nav>
      <div className="left-part">
        <h2>Sociomtrix</h2>
        <div className="input-box">
          <input type="text" placeholder="search here" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="right-part">
        <ul className="links">
          <li>
            <i class="fa-solid fa-sun"></i>
          </li>
          <li>
            <i class="fa-solid fa-bell"></i>
          </li>
          <li>
            <i class="fa-brands fa-facebook-messenger"></i>
          </li>
          <li>
            <i class="fa-solid fa-circle-question"></i>
          </li>
        </ul>
        <div className="user-profile" onClick={handleSearch}>
          <img src={profile_pic} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
