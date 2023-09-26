import React from "react";
import "./styles/signup.scss";
import illustration_image from "../assets/undraw_welcoming_re_x0qo.svg";

const Signup = () => {
  return (
    <div className="signup_page">
      <div className="signup_form">
        <form>
          <h1>Signup Page</h1>
          <input type="text" placeholder="enter fistname" required />
          <input type="text" placeholder="enter lastname" required />
          <input type="email" placeholder="enter email" required />
          <input type="password" placeholder="enter password" required />
          <span>
            signup<i class="fa-solid fa-right-to-bracket"></i>
          </span>
        </form>
      </div>
      <div className="illustration">
        <img src={illustration_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Signup;
