import axios from "axios";
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords don't match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      axios.post("http://localhost:8000/api/users/register", userData);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 className="title">Register</h1>
          <input
            className="login-input"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={onChange}
            name="email"
          />
          <input
            className="login-input"
            type="text"
            placeholder="Create Username"
            value={formData.username}
            onChange={onChange}
            name="username"
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={onChange}
            name="password"
          />
          <input
            className="login-input"
            type="password"
            placeholder="Confirm password"
            value={formData.password2}
            onChange={onChange}
            name="password2"
          />
          <button className="login-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
