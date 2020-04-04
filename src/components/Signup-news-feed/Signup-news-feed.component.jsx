import React from "react";

const SignupNewsFeed = () => {
  return (
    <>
      <div className="grid-header-container">
        <div class="signups-header-left">
          <h1 className="signups-header__h1">Latest Signups</h1>
          <p>Name</p>
        </div>
        <div class="signups-header-right">
          <p>Scheduled Meeting</p>
        </div>
      </div>
      <div className="grid-body-container">
        <div className="grid-body-container__left">
          <ul>
            <li>
              <p>
                <span class="box-green" />
                David Hansen
              </p>
            </li>
            <li>
              <p>
                <span class="box-purple" />
                Shopify
              </p>
            </li>
            <li>
              <p>
                <span class="box-purple" />
                Arvid, Realtree AB
              </p>
            </li>
          </ul>
        </div>
        <div className="grid-body-container__right">
          <ul>
            <li>
              <p>02-03-2020-2PM</p>
            </li>
            <li>
              <p>05-03-2020-10.30AM</p>
            </li>
            <li>
              <p>05-03-2020-3PM</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SignupNewsFeed;
