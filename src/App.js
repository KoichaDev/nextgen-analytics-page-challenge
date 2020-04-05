import React from "react";
import "./assets/css/core.css";

/* Components */
import NavBar from "./components/Navbar/Navbar.component";
import AnalyticsHeader from "./components/Analytics-header/Analytics-header.component";
import GraphMenu from "./components/Graph-menu/Graph-menu.component";
import SideBar from "./components/Sidebar/Sidebar.component";
import GraphLine from "./components/Graph/GraphLine.component";
import GraphDoughNut from "./components/Graph/GraphDoughnut.component";
import DropDown from "./components/Dropdown/Dropdown.component";
import SignupNewsFeed from './components/Signup-news-feed/Signup-news-feed.component';

function App() {
  return (
    <div className="grid-container">
      <header className="navbar">
        <NavBar />
      </header>
      <div className="analytics-header">
        <AnalyticsHeader />
      </div>
      <div className="graph-menu">
        <GraphMenu />
      </div>
      <div className="aside">
        <SideBar />
      </div>
      <div className="graph-individuals">
        <GraphLine
          title="Individuals"
          label="Companies"
          displayLegend={false}
          bgColor="#1A2E4B"
        />
      </div>
      <div className="graph-companies">
        <GraphLine
          title="Companies"
          label="Companies"
          displayLegend={false}
          bgColor="#251E42"
        />
      </div>
      <div className="graph-doughnut">
        <h1 className="graph-doughnut__h1">Total Signups</h1>
        <p className="graph-doughnut__p">648</p>
        <GraphDoughNut
          title="Total Signups"
          label="Companies"
          displayLegend={true}
          bgColor="#1D1B39"
        />
      </div>
      <div className="dropdown-window">
        <DropDown />
      </div>
      <div className="latest-signups">
        <SignupNewsFeed />
      </div>
    </div>
  );
}

export default App;
