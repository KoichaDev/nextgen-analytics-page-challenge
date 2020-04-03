import React from "react";

const AnalyticsHeader = () => {
  return (
    <>
      <ul className="analytic-ul">
        <li>
          <select>
            <option value="overview">Overview</option>
          </select>
        </li>
        <li>
          <p>
            <small>Total Signups</small>
          </p>
          <p className="analytics-ul__tertiary__color analytics-ul__total__signups">64B</p>
        </li>
        <li>
          <p>
            <small>Last Week</small>
          </p>
          <p className="analytics-ul__secondary__color analytics-ul__last__week">12</p>
        </li>
        <li>
          <p>
            <small>Total Investments</small>
          </p>
          <p className="analytics-ul__primary__color analytics-ul__total__investment">102</p>
        </li>
        <li>
          <p>
            <small>Average Investments</small>
          </p>
          <p>
            <span class="analytics-ul__tertiary__color analytics-ul__nok">NOK</span>{" "}
            <span class="analytics-ul__tertiary__color analytics-ul__average__investment">345,565</span>
          </p>
        </li>
        <li>
          <p>
            <small>Total exits</small>
          </p>
          <p className="analytics-ul__secondary__color analytics-ul__total-exits">23</p>
        </li>
      </ul>
    </>
  );
};

export default AnalyticsHeader;
