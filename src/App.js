import "./App.css";
import React, { useState } from "react";
import { Homepage } from "./Components/Homepage.js";
import { Projects } from "./Components/Projects.js";
import { DropDownMenu } from "./DropDownMenu.js";

function App() {
  const [activeTab, setActiveTab] = useState("Homepage");
  const [homeActive, setHomeActive] = useState(true);
  const [projActive, setProjActive] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);

  const handleHover = () => {
    setDropDownActive(true);
  };
  const handleNoHover = () => {
    setDropDownActive(false);
  };

  const openTab = (tabName) => {
    if (tabName == "Homepage") {
      setHomeActive(true);
      setProjActive(false);
      setActiveTab("Homepage");
    }
    if (tabName == "Projects") {
      setProjActive(true);
      setHomeActive(false);
      setActiveTab("Projects");
    }
  };
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <nav className="TabNav">
        <img src={"./images/newLogoVariant.sv"} />

        <div className="tabButtons">
          <button
            className={`tablinks ${activeTab === "Homepage" ? "active" : ""}`}
            onClick={() => openTab("Homepage")}
            onMouseEnter={handleHover}
            onMouseLeave={handleNoHover}
          >
            <span class="material-icons">dashboard</span> Homepage
          </button>
          <button
            className={`tablinks ${activeTab === "Projects" ? "active" : ""}`}
            onClick={() => openTab("Projects")}
          >
            <span class="material-icons">assignment</span> My projects
          </button>
        </div>
      </nav>
      <div className="navDetails">{dropDownActive && <DropDownMenu />}</div>

      <header className="App-header">
        <h1>
          Hello. I'm <br />
          <span className="type">Bahar</span>&nbsp;
        </h1>
      </header>
      <div>{homeActive && <Homepage />}</div>
      <div>{projActive && <Projects />}</div>
    </div>
  );
}

export default App;
