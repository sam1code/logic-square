import React from "react";
import "./Nav.css";

const TopNav = () => {
  return (
    <div className="ml-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            class="navbar-brand"
            href="https://www.logic-square.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png"
              class="ls-logo"
              alt="LS Logo"
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="/" className="nav-item nav-link">
                Page Name
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
