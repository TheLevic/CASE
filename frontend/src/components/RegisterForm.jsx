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
      <div className="grid grid-cols-3">
        <div className="w-4/5 h-screen bg-gradient-to-t from-green-700 to-green-400 "></div>
        <div className="col-span-2">
          <form
            className="flex flex-col pt-4 m-4 align-middle md:p-4 md:m-4 md:align-middle"
            onSubmit={onSubmit}
          >
            <h1 className="text-lg font-bold text-green-500 md:text-3xl p-2">
              Welcome To Case
            </h1>
            <input
              className="text-md p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={onChange}
              name="email"
            />
            <input
              className="text-md p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
              type="text"
              placeholder="Create Username"
              value={formData.username}
              onChange={onChange}
              name="username"
            />
            <input
              className="text-md p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
              type="password"
              placeholder="Create password"
            />
            <input
              className="text-md p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
              type="password"
              name="password2"
              placeholder="Confirm Password"
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
            <button className="p-2 m-2 rounded-lg bg-green-400 text-white font-bold w-full ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
