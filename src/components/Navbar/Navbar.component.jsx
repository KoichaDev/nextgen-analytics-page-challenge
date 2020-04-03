import React from "react";
import InnovasjonLogo from "./../../assets/images/logo.png";
import Avatar from "./../../assets/images/avatar.png";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li style={{alignSelf: 'start'}}>
            <a href="#">
              <img
                className="logo"
                alt="Innovasjon Norge"
                src={InnovasjonLogo}
              />
            </a>
          </li>
          <li>Account</li>
          <li>Charts</li>
          <li>Help</li>
          <li>
            <img src={Avatar} alt="Avatar" />
          </li>
          <li>
            <p>Elise Andersen</p>
          </li>
          <li>
            <p>
              <small>17-02.2020</small>
            </p>
            <p>2.45 PM</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
