import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Searchbar from "./Searchbar";
import logo from "../assets/logo.jpg";

function Navbar() {
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
            Postear Juegos
          </Link>
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
