import React from "react";
import LinkButton from "./LinkButton";

function HeaderNotLoggedIn() {
  return (
    <div className="bg-gray-100 grid grid-cols-2 mx-2 my-1">
      <a
        href="/"
        className="text-green-400 self-middle text-3xl md:text-6xl font-bold "
      >
        CASE
      </a>
      <div className="flex flex-row justify-end items-center m-1 gap-2 lg:gap-6 w-full">
        <LinkButton text="Sign Up" path="/register" />
        <LinkButton text="Login" path="/login" />
      </div>
      <div className="border-b-4 pt-1 border-gray-400 col-span-full"></div>
    </div>
  );
}

export default HeaderNotLoggedIn;
