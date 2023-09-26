import React from "react";
import "./styles/login.scss";
import illustration_image from "../assets/undraw_secure_login_pdn4.svg";
const Login = () => {
  return (
    <div className="login_page">
      <div className="login_form">
        <form>
          <h1>Login Page</h1>
          <input type="email" placeholder="enter email" required />
          <input type="password" placeholder="enter password" required />
          <span>
            Login<i class="fa-solid fa-right-to-bracket"></i>
          </span>
        </form>
      </div>
      <div className="illustration">
        <img src={illustration_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Login;
