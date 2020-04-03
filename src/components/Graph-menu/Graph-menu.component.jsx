import React from 'react';

const GraphMenu = () => {
    return (
      <>
        <ul className="graph-menu-ul">
          <li>
            <p className="graph-menu-ul__li__active">Sign ups</p>
          </li>
          <li>Investments</li>
          <li>Revenue</li>
          <li>Exits</li>
        </ul>
      </>
    );
}

export default GraphMenu;

