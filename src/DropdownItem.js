import "./App.css";
import React, { useState } from "react";
import { AboutMe } from "./Components/AboutMe.js";
import { Projects } from "./Components/Projects.js";

export function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a href=""> {props.text} </a>
    </li>
  );
}
