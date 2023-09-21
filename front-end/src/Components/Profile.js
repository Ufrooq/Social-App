import React from "react";
import "./styles/prof.scss";
import profile_image from "../assets/avatar.png";

const Profile = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="profile">
          <img src={profile_image} alt="" srcset="" />
          <div className="details">
            <p>Umar Farooq</p>
            <span>2 friends</span>
          </div>
        </div>
        <i class="fa-solid fa-user-plus"></i>
      </div>
      <div className="line" />
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
      <div className="line" />
      <div className="views">
        <div className="viewers">
          <p>Who views your profile </p>
          <span>3434</span>
        </div>
        <div className="impression">
          <p>Impressions of your posts</p>
          <span>563476</span>
        </div>
      </div>
      <div className="line" />
      <div className="socials">
        <span id="sos">Social Profiles</span>
        <div className="link">
          <div className="profile">
            <i class="fa-solid fa-hashtag"></i>
            <div className="details">
              <p>Twitter</p>
              <span>Socail Network</span>
            </div>
          </div>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="link">
          <div className="profile">
            <i class="fa-brands fa-linkedin"></i>
            <div className="details">
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
