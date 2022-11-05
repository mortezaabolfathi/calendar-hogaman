import React from "react";
import "./../../style/navbar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faPlus} />
       <Link to="/upComing">
         <FontAwesomeIcon icon={faGear} /> 
       </Link>
       <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
       </Link>
    </div>
  );
};

export default Navbar;
