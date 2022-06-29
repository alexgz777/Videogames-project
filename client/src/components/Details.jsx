import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getVideogameByID } from "../actions";
import "../styles/Details.css";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogameByID(id));
  }, [dispatch]);
  
  return (
    <>
      <Link className="button__link" to="/home">
        <button className="button__back">← Back</button>
      </Link>
      {videogames ? (
        <div className="details">
          <h2>{videogames.name}</h2>
          <img
            className="details__image"
            src={videogames.background_image}
            alt="imagen del juego"
          />
          <h3>{`Genero/s: ${videogames.genres.map((f) => ` ${f.name}`)}`}</h3>
          <h3>{`Fecha de Lanzamiento: ${videogames.released}`}</h3>
          <h3>{`Rating: ${videogames.rating}`}</h3>
          <h3>{`Plataformas: ${videogames.platforms.map(
            (t) => ` ${t.platform.name}`
          )}`}</h3>
          <div className="description">{`Descripcion: ${videogames.description_raw}`}</div>
        </div>
      ) : (
        <p className="details__loading">Loading...</p>
      )}
    </>
  );
}
