import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchGameName } from "../actions";
import "../styles/Searchbar.css";

export default function BarraSearch() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    dispatch(searchGameName(name));
  }

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="¿Que juegos buscas?"
        onChange={(e) => handleInput(e)}
      />
      <button className="btn" type="submit" onClick={(e) => handleSearch(e)}>
        BUSCAR
      </button>
    </div>
  );
}
