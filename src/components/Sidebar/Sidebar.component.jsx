import React from "react";
import GraphIcon from "./../../assets/icons/Group 174.svg";
import MoneyIcon from "./../../assets/icons/funds.svg";
import ProfileIcon from "./../../assets/icons/Path 188.svg";
import TimeIcon from "./../../assets/icons/history.svg";
import WindowVerifyIcon from "./../../assets/icons/verification-window-button.svg";
import PadLockIcon from "./../../assets/icons/locked-padlock (1).svg";

const SideBar = () => {
  return (
    <>
      <ul className="sidebar-ul">
        <li>
          <a href="#">
            <img src={GraphIcon}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={MoneyIcon}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={ProfileIcon}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={TimeIcon}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={WindowVerifyIcon}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={PadLockIcon}></img>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
