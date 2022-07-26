import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <h2 className="h2">¡Bienvenido a Mundo Gamer!</h2>
        <Link to={"/home"}>
          <button className="landing__button"></button>
        </Link>
        <p className="p">
          En este sitio te ofrecemos toda la info sobre los ultimos juegos del
          mercado
        </p>
      </div>
    </div>
  );
}
export default Landing;
