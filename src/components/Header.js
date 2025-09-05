import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/myLogo.svg"; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() { // link projects to home/projects

const navigate = useNavigate();
const location = useLocation();
const [isOpen, setIsOpen] = useState(false);

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
    setTimeout(scrollToTarget, 100); // wait for home to render
  } else {
    scrollToTarget();
  }
};

  return (
    <div className="headerDiv">
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      {/*hamburger menu for mobile*/}

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation menu">{isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" /> }</button>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <nav className= {`navlinks ${isOpen ? "open" : ""}`}>
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
