import React, {useEffect} from "react";
import "./style.css";
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldVirus,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const onNavClick = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  useEffect(() => {
    onNavClick()
  },[])
  return (
    <>
      <div className="topnav" id="myTopnav">
        <NavLink to="/" activeClassName={"selected"}>
        <FontAwesomeIcon icon={faShieldVirus} /> &nbsp; Home
        </NavLink>
        <NavLink to="/add-availability" activeClassName={"selected"}>
        <FontAwesomeIcon icon={faPlusCircle} /> &nbsp;Add Resource
        </NavLink>
        {/* <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
        <a href="javascript:void(0);" className="icon" onClick={onNavClick}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  );
};

export default Header;
