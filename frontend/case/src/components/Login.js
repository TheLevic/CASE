import React from "react";
import "./styles/login.css";

function Login() {
  return (
    <div className="login-box">
      <div className="textbox">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default Login;
