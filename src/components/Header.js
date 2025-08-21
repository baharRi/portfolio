import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/myLogo.svg"; // make sure logo.png is in src/assets/

function Header() { // link projects to home/projects

const navigate = useNavigate();
const location = useLocation();

const handleNavClick = (e, targetId = null) => {
  e.preventDefault();

  const scrollToTarget = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(scrollToTarget, 100); // wait for Home to render
  } else {
    scrollToTarget();
  }
};

  return (
    <div className="headerDiv">
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <Link to="/" onClick={(e) => handleNavClick(e)}>Home</Link>
        <Link to="/#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    </div>
  );
}

export default Header;
