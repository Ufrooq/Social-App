import React from "react";
import "./styles/signup.scss";
import illustration_image from "../assets/undraw_welcoming_re_x0qo.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup_page">
      <div className="signup_form">
        <form>
          <h1>Signup Page</h1>
          <div className="name_">
            <input type="text" placeholder="enter fistname" required />
            <input type="text" placeholder="enter lastname" required />
          </div>
          <input type="text" placeholder="enter location" required />
          <input type="text" placeholder="enter occupation" required />
          <input type="file" name="" id="" />
          <input type="email" placeholder="enter email" required />
          <input type="password" placeholder="enter password" required />
          <span>
            signup<i class="fa-solid fa-right-to-bracket"></i>
          </span>
        </form>
        <p className="already_">
          Already have an account ?
          <span>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#0ea5e9" }}
            >
              {" "}
              Login
            </Link>
          </span>
        </p>
      </div>
      <div className="illustration">
        <img src={illustration_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Signup;
