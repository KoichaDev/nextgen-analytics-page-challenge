import React from "react";
import InnovasjonLogo from "./../../assets/images/logo.png";
import Avatar from "./../../assets/images/avatar.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar-grid-container">
        <div class="grid-navbar-container__navbar__left">
          <ul>
            <li>
              <a href="#">
                <img
                  className="logo"
                  alt="Innovasjon Norge"
                  src={InnovasjonLogo}
                />
              </a>
            </li>
            <li>
              <p>ACCOUNT</p>
            </li>
            <li>
              <p>CHARTS</p>
            </li>
            <li>
              <p>HELP</p>
            </li>
          </ul>
        </div>
        <div class="grid-navbar-container__navbar__right">
          <ul>
            <li>
              <img src={Avatar} alt="Avatar" />
            </li>
            <li>
              <p>Elsa Andersen</p>
            </li>
            <li>
              <p>
                <small>17-02.2020</small>
                <br />
                2.45 PM
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
