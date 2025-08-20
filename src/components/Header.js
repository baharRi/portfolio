import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/myLogo.svg"; // make sure logo.png is in src/assets/

function Header() { // link projects to home/projects
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <a href="#projects">Projects</a> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
