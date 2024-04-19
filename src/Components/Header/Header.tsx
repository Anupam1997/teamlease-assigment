import React from "react";
import "./style.scss";

function Header() {
  return (
    <header id="navigation">
      <div>
        <h1 className="title">Site name</h1>
      </div>
      <nav className="nav-links">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="nav-link" href="#">
          Page
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="nav-link" href="#">
          Page
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="nav-link" href="#">
          Page
        </a>
        <button className="btn">Page</button>
      </nav>
    </header>
  );
}

export default Header;
