import React from "react";

const Friends = () => {
  return (
    <div className="friends-card">
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
    </div>
  );
};

export default Friends;
