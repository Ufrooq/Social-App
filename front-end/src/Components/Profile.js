import React from "react";
import "./styles/prof.scss";
import profile_image from "../assets/avatar.png";

const Profile = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="profile">
          <img src={profile_image} alt="" srcset="" />
          <div>
            <p>Umar Farooq</p>
            <span>2 friends</span>
          </div>
        </div>
        <i class="fa-solid fa-user-plus"></i>
      </div>
      <hr />
      <div className="address">
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <span>Bahawalnagar,punjab,Pakistan</span>
        </div>
        <div className="organization">
          <i class="fa-solid fa-suitcase"></i>
          <span>Capital Technologies,E-11,Islamabad</span>
        </div>
      </div>
      <hr />
      <div className="views">
        <div className="viewers">
          <p>Who views your profile </p>
          <span>3434</span>
        </div>
        <div className="impression">Impressions of your posts</div>
        <span>563476</span>
      </div>
      <div className="socials">
        <div className="link">
          <div className="profile">
            <i class="fa-brands fa-linkedin"></i>
            <div>
              <p>Linkdin</p>
              <span>Network Platform</span>
            </div>
          </div>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="link">
          <div className="profile">
            <i class="fa-brands fa-linkedin"></i>
            <div>
              <p>Linkdin</p>
              <span>Network Platform</span>
            </div>
          </div>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Profile;
