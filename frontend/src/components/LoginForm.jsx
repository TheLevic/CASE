import "./css/login.css";
import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const whenSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={whenSubmit}>
          <h1 className="title">Login</h1>
          <input
            className="login-input"
            type="email"
            placeholder="Enter email"
            onChange={updateEmail}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter password"
            onChange={updatePassword}
          />
          <button className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
