import React from "react";

export function DropDownMenu() {
  return (
    <div className="dropDownMenu">
      <ul>
        <li>About me</li>
        <ul>
          <li>Skills and views</li>
          <li>Education and background</li>
        </ul>
        <li>Contact me</li>
      </ul>
    </div>
  );
}
