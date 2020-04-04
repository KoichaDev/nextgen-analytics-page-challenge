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
      <div className="total-sign-ups">
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
      <div className="latest-signups">latest-signups</div>
      <div className="analytics-bottom">Analytics Bottom</div>
    </div>

    /* <div className="grid-container">
      <aside>Aside</aside>
      <header>
        <nav>Navbar</nav>
        <div class="analytics-tops">Analtyics tops</div>
        <div class="analytics-bottom">Analytics Bottom</div>
        <menu>
          <div class="graph-menu">Graph Menu</div>
        </menu>
      </header>
      <main>
      <div class="graph-individuals">Graph Individuals</div>
      <div class="graph-companies">Graph Companies</div>
      <div class="total-sign-ups">Total Sign Ups</div>
      <div class="dropdown-window">Dropdown Window</div>
      <div class="latest-signups">Latest Signups</div>

      </main>
    </div> */
  );
}

export default App;
