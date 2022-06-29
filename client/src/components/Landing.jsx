import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing">
        <div className="landing__container">
          <h2 className="h2">¡Bienvenido a Mundo Gamer!</h2>
            <Link to={"/home"}>
              <button className="landing__button"></button>
            </Link>
          <p className="p">
            Si amas el mundo gamer, este es tu lugar.
          </p>
        </div>
    </div>
  );
}
