import "./App.css";
import React, { useState } from "react";
import { Homepage } from "./Components/Homepage.js";
import { Projects } from "./Components/Projects.js";

function App() {
  const [activeTab, setActiveTab] = useState("Homepage");
  const [homeActive, setHomeActive] = useState(true);
  const [projActive, setProjActive] = useState(false);

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
      <nav className="TabNav">
        <img src="images/newLogoVariant.svg" alt="Logo" />

        <div className="tabButtons">
          <button
            className={`tablinks ${activeTab === "Homepage" ? "active" : ""}`}
            onClick={() => openTab("Homepage")}
          >
            Homepage
          </button>
          <button
            className={`tablinks ${activeTab === "Projects" ? "active" : ""}`}
            onClick={() => openTab("Projects")}
          >
            My projects
          </button>
        </div>
      </nav>
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
