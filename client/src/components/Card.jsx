import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ id, imagen, nombre, generos }) {
  return (
    <Link to={`/home/${id}`} className="card" key={id}>
      <img src={imagen} alt="imagen" className="card__img" />
      <h3 className="card__name">{nombre}</h3>
      <h5 className="card__genres">{generos}</h5>
    </Link>
  );
}

export default Card;
