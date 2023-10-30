import profile from "./images/profile.svg";
import email from "./images/email.svg";
import logo from "./images/newLogoVariant.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { AboutMe } from "./Components/AboutMe.js";
import { Projects } from "./Components/Projects.js";
import { IntroPage } from "./Components/IntroPage.js";
import { TypingText } from "./TypingText.js";
import { DropdownItem } from "./DropdownItem.js";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const [homeActive, setHomeActive] = useState(false);
  const [projActive, setProjActive] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const openTab = (tabName) => {
    if (tabName == "AboutMe") {
      setHomeActive(true);
      setIntroActive(false);
      setProjActive(false);
      setActiveTab("AboutMe");
    }
    if (tabName == "Projects") {
      setProjActive(true);
      setHomeActive(false);
      setIntroActive(false);
      setActiveTab("Projects");
    }
    if (tabName == "Intro") {
      setProjActive(false);
      setHomeActive(false);
      setIntroActive(true);
      setActiveTab("Intro");
    }
  };
  const [open, setOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger">
          <a href="/" onClick={() => openTab("Intro")}>
            <img className="logo" src={logo}></img>
          </a>
          <div className="menu-buttons">
            <button
              className={`tablinks ${activeTab === "AboutMe" ? "active" : ""}`}
              onMouseEnter={() => {
                setOpen(true);
              }}
              onMouseLeave={() => {
                setOpen(false);
              }}
              onClick={() => openTab("AboutMe")}
            >
              About Me
            </button>
            <button
              className={`tablinks ${activeTab === "Projects" ? "active" : ""}`}
              onMouseEnter={() => {
                setProjOpen(true);
              }}
              onMouseLeave={() => {
                setProjOpen(false);
              }}
              onClick={() => openTab("Projects")}
            >
              My Projects
            </button>
          </div>
        </div>

        <div
          id="meMenu"
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <ul>
            <DropdownItem img={profile} text={"About Me"} />
            <DropdownItem img={email} text={"Contact Me"} />
          </ul>
        </div>
        <div
          id="projMenu"
          className={`dropdown-menu ${projOpen ? "active" : "inactive"}`}
          onMouseEnter={() => {
            setProjOpen(true);
          }}
          onMouseLeave={() => {
            setProjOpen(false);
          }}
        >
          <ul>
            <DropdownItem text={"Project1"} />
            <DropdownItem text={"Project2"} />
          </ul>
        </div>
      </div>

      <header className="App-header">
        <h1>
          Hello. I'm <br />
          <TypingText />
        </h1>
        <button className="avgButton">See my projects</button>
      </header>
      <section className="App-tab">
        <div>
          {introActive && <IntroPage />}
          {homeActive && <AboutMe />}
          {projActive && <Projects />}
        </div>
      </section>
    </div>
  );
}

export default App;
