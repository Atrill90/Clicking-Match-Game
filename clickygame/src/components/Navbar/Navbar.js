import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Home</a>
  
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <p className="nav-link text-align">Score {props.score}<span className="sr-only">(current)</span></p>
      </li>
      <li className="nav-item active">
        <p className="nav-link" >Correct Guesses</p>
      </li>
      </ul>
    </nav>
)

export default Navbar;