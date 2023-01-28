import React from "react";
import LinkButton from "./LinkButton";
function HeaderLoggedIn() {
  return (
    <div>
      <header className=" bg-gray-100 grid grid-cols-2">
        <a
          href="/"
          className="text-green-400 self-middle text-3xl md:text-6xl p-1 font-bold "
        >
          CASE
        </a>
        <div className="flex flex-row justify-end items-center m-1 gap-2 lg:gap-6 w-full">
          <LinkButton path="/" text="Videos" />
          <LinkButton path="/" text="Images" />

          <input
            type="text"
            className="hidden sm:block w-full p-1 md:p-2 font-medium lg:text-2xl rounded-lg"
            placeholder="Search"
          />
          <button className="hidden sm:block bg-green-400 font-medium md:p-2 lg:text-2xl rounded-lg text-white">
            Search
          </button>
        </div>
      </header>
      <div className="border-b-4 pt-1 border-gray-400"></div>
    </div>
  );
}

export default HeaderLoggedIn;
