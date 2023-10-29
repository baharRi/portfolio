import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { AboutMe } from "./Components/AboutMe.js";
import { Projects } from "./Components/Projects.js";
import { DropDownMenu } from "./DropDownMenu.js";

function App() {
  const [open, setOpen] = useState(false);

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
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p>button</p>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            The Kiet
            <br />
            <span>Website Designer</span>
          </h3>
          <ul>
            <DropdownItem text={"My Profile"} />
            <DropdownItem text={"Edit Profile"} />
            <DropdownItem text={"Inbox"} />
            <DropdownItem text={"Settings"} />
            <DropdownItem text={"Helps"} />
            <DropdownItem text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;
