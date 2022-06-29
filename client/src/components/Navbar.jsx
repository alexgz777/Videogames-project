import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Searchbar from "./Searchbar";
const logo = require("../assets/logo.jpg");

function BarraNav() {
  return (
    <nav className="navbar">
      <ul className="ul">
        <li className="li">
          <img src={logo} alt="logo" className="logo" />
          <Link to="/" className="navbtn">
            Inicio
          </Link>
          <Link to="/home" className="navbtn">
            Videojuegos
          </Link>
          <Link to="/home/post" className="navbtn">
            Postear videojuegos
          </Link>
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
}

export default BarraNav;
