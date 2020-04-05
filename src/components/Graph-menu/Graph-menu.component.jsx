import React from "react";

const GraphMenu = () => {
  return (
    <ul className="graph-menu-ul">
      <li>
        <p className="graph-menu-ul__li__active">Signups</p>
      </li>
      <li>
        <p>Investments</p>
      </li>
      <li>
        <p>Revenue</p>
      </li>
      <li>
        <p>Exits</p>
      </li>
      <li>
        <p>Trades</p>
      </li>
    </ul>
  );
};

export default GraphMenu;
