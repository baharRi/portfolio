import "./Navbar.css";
import { IntroPage } from "./Components/IntroPage.js";
import { AboutMe } from "./Components/AboutMe.js";
import { Projects } from "./Components/Projects.js";
import React, { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Intro");
  const [homeActive, setHomeActive] = useState(false);
  const [projActive, setProjActive] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  const openTab = (tabName) => {
    if (tabName === "AboutMe") {
      setHomeActive(true);
      setIntroActive(false);
      setProjActive(false);
      setActiveTab("AboutMe");
    }
    if (tabName === "Projects") {
      setProjActive(true);
      setHomeActive(false);
      setIntroActive(false);
      setActiveTab("Projects");
    }
    if (tabName === "Intro") {
      setProjActive(false);
      setHomeActive(false);
      setIntroActive(true);
      setActiveTab("Intro");
    }
  };
  return (
    <>
      <nav className="navbar">
        <button
          className={`tablinks ${activeTab === "Intro" ? "active" : ""}`}
          onClick={() => openTab("Intro")}
        >
          Bahar
        </button>
        <div className="right-side">
          <div className="dropdown">
            <button
              className={`dropbtn ${activeTab === "AboutMe" ? "active" : ""}`}
              onClick={() => openTab("AboutMe")}
            >
              About Me
            </button>
            <div className="dropdown-content">
              <ul>
                <a
                  className={`${activeTab === "AboutMe" ? "active" : ""}`}
                  onClick={() => openTab("AboutMe")}
                  href="#skills"
                >
                  Values and skills
                </a>
                <a
                  className={`${activeTab === "AboutMe" ? "active" : ""}`}
                  onClick={() => openTab("AboutMe")}
                  href="#education"
                >
                  Background and education
                </a>
              </ul>
              <a href="#contactMe">Contact Me</a>
            </div>
          </div>
          <button
            onClick={() => openTab("Projects")}
            className={`tablinks ${activeTab === "Projects" ? "active" : ""}`}
          >
            My Projects
          </button>
        </div>
      </nav>
      <section className="App-tab">
        <div>
          {introActive && <IntroPage />}
          {homeActive && <AboutMe />}
          {projActive && <Projects />}
        </div>
      </section>
    </>
  );
}
