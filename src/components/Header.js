import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/myLogo.svg"; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() { 
const location = useLocation();
const [isOpen, setIsOpen] = useState(false);
const setClose = () => setIsOpen(false);

const isActive = (path) => location.pathname === path;

  return (
    <>
    <div className="headerDiv">
      
    <header className="header">
      <Link to="/" onClick={() => { setClose(); }}><img src={logo} alt="Logo" className="logo"/></Link>

      {/*hamburger menu for mobile*/}

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation menu">{isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" /> }</button>

      <nav className= {`navlinks ${isOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setClose()}>Home</Link>
        
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setClose()}>About</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setClose()}>Contact</Link>
      </nav>
    </header>
    </div>
    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default Header;
