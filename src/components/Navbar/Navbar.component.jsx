import React from "react";
import InnovasjonLogo from "./../../assets/images/logo.png";
import Avatar from "./../../assets/images/avatar.png";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-ul">
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
            <p>Account</p>
          </li>
          <li>
            <p>Charts</p>
          </li>
          <li>
            <p>Help</p>
          </li>
          <li>
            <img src={Avatar} alt="Avatar" />
          </li>
          <li>
            <p>Elise Andersen</p>
          </li>
          <li>
            <p>
              <small>17-02.2020</small>
              <br />
              2.45 PM
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
