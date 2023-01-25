import React from "react";
function Header() {
  return (
    <div>
      <header className=" bg-gray-100 grid grid-cols-2">
        <a
          href="/"
          className="text-green-400 self-middle text-3xl p-1 font-bold "
        >
          CASE
        </a>
        <div className="flex flex-row justify-end items-center m-1 gap-4">
          <a
            href="/"
            className="bg-green-400 rounded-lg p-1 text-white font-semibold"
          >
            Videos
          </a>
          <a
            href="/"
            className="bg-green-400 rounded-lg p-1 text-white font-semibold"
          >
            Images
          </a>
          <input
            type="text"
            className="hidden sm:block w-full p-1 font-semibold rounded-lg"
            placeholder="Search"
          />
          <button className="hidden sm:block bg-green-400 p-1 rounded-lg font-semibold text-white">
            Search
          </button>
        </div>
      </header>
      <div className="border-b-4 pt-1 border-gray-400"></div>
    </div>
  );
}

export default Header;
