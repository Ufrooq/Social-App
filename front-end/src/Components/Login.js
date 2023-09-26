import React from "react";
import "./styles/login.scss";
import illustration_image from "../assets/undraw_secure_login_pdn4.svg";
const Login = () => {
  return (
    <div className="login_page">
      <div className="login_form">
        <form>
          <input type="email" required />
          <input type="password" required />
        </form>
      </div>
      <div className="illustration">
        <img src={illustration_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Login;
