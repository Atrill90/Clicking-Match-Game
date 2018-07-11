import React from "react";
import "./Navbar.css";
import logo from  "../../img/league.png"


const Navbar = props => (
<nav className="navbar navbar-expand-lg bg-dark">
  <a className="navbar-brand" >
  <img id="leagueLogo"src={logo}/>
  </a>
  <h4 id = "appTitle"> Memory Test! </h4>
  <ul className = "navbar-nav scoreSpot">
  <li className ="nav-item active guessFeedback">
      <p className = "nav-link feedbackText"> {props.feedback} </p>
      </li> 
  </ul>
    <ul className="navbar-nav scoreArea">
      <li className="nav-item active">
        <p className="nav-link userScore">Score {props.score}<span className="sr-only">(current)</span></p>
      </li>
      <li className="nav-item active highScore">
        <p className="nav-link" >High Score {props.highScore}</p>
      </li>
      </ul>
    </nav>
)

export default Navbar;