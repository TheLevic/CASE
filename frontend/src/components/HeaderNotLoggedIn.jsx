import React from "react";
import LinkButton from "./LinkButton";

function HeaderNotLoggedIn() {
  return (
    <div className="grid grid-cols-2">
      <a
        href="/"
        className="text-green-400 self-middle text-3xl md:text-6xl p-1 font-bold "
      >
        CASE
      </a>
      <div className="flex flex-row justify-end items-center m-1 gap-4 lg:gap-6">
        <LinkButton link="/" text="Sign Up" />
        <LinkButton link="/" text="Login" />
      </div>
      <div className="border-b-4 pt-1 border-gray-400 col-span-2"></div>
    </div>
  );
}

export default HeaderNotLoggedIn;
