import React from "react";
import logo from "../assets/myLogo.svg"; // make sure logo.png is in src/assets/

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
