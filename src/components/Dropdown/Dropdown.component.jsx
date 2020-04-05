import React from "react";

const DropDown = () => {
  return (
    <ul className="dropdown-ul">
      <li>
        <p className="dropdown-ul__text">
          <span class="dropdown-ul__vertical-line-green" /> By Gender
        </p>
      </li>
      <li>
        <select className="dropdown-ul__select">
          <option value="female">Female</option>
        </select>
      </li>
      <li>
        <select className="dropdown-ul__select">
          <option value="individuals">Individuals</option>
        </select>
      </li>
      <li>
        <p className="dropdown-ul__text dropdown-ul--font">102</p>
      </li>
    </ul>
  );
};

export default DropDown;
