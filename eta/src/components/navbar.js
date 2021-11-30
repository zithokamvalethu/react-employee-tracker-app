import React from "react";
import { Link } from "react-router-dom";
const navbar = (props) => {
    return (
      <div className="topnav">
        <Link to="./">HOME</Link>
        <Link to="./add">ADD DATA</Link>
        <Link to="./view">VIEW LIST</Link>
        <Link to="./edit">EDIT DATA</Link>
      </div>
    );
}
export default navbar;