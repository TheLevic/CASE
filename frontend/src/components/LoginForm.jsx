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
        localStorage.setItem("jwt", response.data.token);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="w-4/5 h-screen bg-gradient-to-t from-green-700 to-green-400 "></div>
        <div className="col-span-2 ">
          <form
            onSubmit={whenSubmit}
            className="flex flex-col pt-4 m-4 align-middle md:p-4 md:m-4 md:align-middle "
          >
            <h1 className="text-lg font-bold text-green-500 md:text-3xl">
              Welcome To Case
            </h1>
            <input
              className="text-md p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
              type="email"
              placeholder="Enter email"
              onChange={updateEmail}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={updatePassword}
              className="text-sm p-2 m-2 border-green-400 border-2 rounded-lg w-full md:w-full"
            />
            <button className=" p-2 m-2 rounded-lg bg-green-400 text-white font-bold w-full ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
