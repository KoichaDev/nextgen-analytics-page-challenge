import React from "react";
import "./assets/css/core.css";

/* Components */
import NavBar from "./components/Navbar/Navbar.component";
import AnalyticsHeader from "./components/Analytics-header/Analytics-header.component";
import GraphMenu from "./components/Graph-menu/Graph-menu.component";

function App() {
  return (
    <div class="grid-container">
      <header class="navbar">
        <NavBar />
      </header>
      <div class="analytics-header">
        <AnalyticsHeader />
      </div>
      <div class="graph-menu">
        <GraphMenu />
      </div>
      <div class="total-sign-ups">Total Sign ups</div>
      <div class="graph-individuals">Graph Individual</div>
      <div class="dropdown-window"> Dropdown Window</div>
      <div class="graph-companies">Graph Companies</div>
      <div class="latest-signups">latest-signups</div>
      <div class="analytics-bottom">Analytics Bottom</div>
      <div class="aside">Aside</div>
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
