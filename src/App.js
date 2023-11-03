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
import Navbar from "./Navbar.js";
import { Footer } from "./Footer.js";

function App() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
