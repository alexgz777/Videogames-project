import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Home.css";
import {
  getVideogames,
  filterByOrigin,
  filterByGenre,
  orderByName,
  orderByRating,
  getGenres,
} from "../actions";
import Card from "./Card";
import Pages from "./Pages";

export default function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const genres = useSelector((state) => state.genres);
  const [Order, setOrder] = useState("");
  const [CurrentPage, setCurrentPage] = useState(1);
  const [GamesPerPage, setGamesPerPage] = useState(9);

  const lastGame = CurrentPage * GamesPerPage;
  const firstGame = lastGame - GamesPerPage;
  const currentGames = videogames.slice(firstGame, lastGame);

  const pages = (pages) => {
    setCurrentPage(pages);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideogames());
  }

  function handleFilterOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
  }

  function handleFilterGenre(e) {
    dispatch(filterByGenre(e.target.value));
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  function handleOrderRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  return (
    <>
      <div className="home__filter-page">
        <div className="filters">
          <label>Ordernar alfabeticamente:</label>
          <select onChange={(e) => handleOrderName(e)}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <label>Ordernar por Rating:</label>
          <select onChange={(e) => handleOrderRating(e)}>
            <option value="ascRat">Ascendente</option>
            <option value="descRat">Descendente</option>
          </select>
          <br></br>
          <label>Mostrar videojuegos:</label>
          <select onChange={(e) => handleFilterOrigin(e)}>
            <option value="todos">Todos</option>
            <option value="agregados">Agregados</option>
            <option value="existentes">Existentes</option>
          </select>
          <label>Seleccionar generos:</label>
          <select onChange={(e) => handleFilterGenre(e)}>
            {genres?.map((e) => {
              return <option value="genre">{e.name}</option>;
            })}
          </select>
        </div>
        <div className="refresh__pages">
          <button
            className="home__refresh"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Actualizar
          </button>

          <Pages
            GamesPerPage={GamesPerPage}
            videogames={videogames.length}
            pages={pages}
          />
        </div>
      </div>

      <div className="cards">
        {currentGames?.map((e) => {
          return (
            <Card id={e.id} imagen={e.imagen} nombre={e.nombre} generos={e.generos} />
          );
        })}
      </div>
      <div className="home__filter-page">
        <Pages
          GamesPerPage={GamesPerPage}
          videogames={videogames.length}
          pages={pages}
        />
      </div>
    </>
  );
}
