import React, { useContext } from "react";
import "./Header.scss";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{ color: "white" }}
      >
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-menu menu" : "menu"}>
        <li><a href="#greeting">About</a></li>
        <li><a href="#projects-section">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Work Experience</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {/* <a><ToggleSwitch /></a> */}
        </li>
      </ul>
    </header>
  );
}

export default Header;
