import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Bahar</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">About Me</a>
        <a href="/">Contact me</a>
      </div>
      <div
        className={`nav-toggle${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
