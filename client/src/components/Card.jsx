import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ id, imagen, nombre, generos }) {
  return (
    <Link to={`/home/${id}`} className="card" key={id}>
      <img src={imagen} alt="imagen" className="card__img" />
      <h3 className="card__name">{nombre}</h3>
      <ul className="card__genres">
        {generos.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </Link>
  );
}

export default Card;
