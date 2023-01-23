import React from "react";
import "./css/header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="heading-logo">
          <a href="/#" className="logo-heading">
            Case
          </a>
        </div>
        <ul>
          <li>
            <button className="button-heading">Videos</button>
          </li>
          <li>
            <button className="button-heading">Images</button>
          </li>
          <li>
            <input type="text" placeholder="Search" className="search-box" />
          </li>
          <li>
            <button className="button-heading">Search</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
