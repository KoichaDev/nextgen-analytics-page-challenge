import React from "react";

const DropDown = () => {
  return (
    <ul className="dropdown-menu-ul">
      <li>
        <p className="dropdown-menu-ul__text">
          <span class="dropdown-menu-ul__vertical-line-green" /> By Gender
        </p>
      </li>
      <li>
        <select className="dropdown-menu-ul__select">
          <option value="female">Female</option>
        </select>
      </li>
      <li>
        <select className="dropdown-menu-ul__select">
          <option value="individuals">Individuals</option>
        </select>
      </li>
      <li>
        <p className="dropdown-menu-ul__text dropdown-menu-ul--font">102</p>
      </li>
    </ul>
  );
};

export default DropDown;
