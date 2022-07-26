import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame, getGenres, getPlatforms } from "../actions";
import "../styles/Post.css";

function Post() {
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const initialState = {
    nombre: "",
    descripcion: "",
    lanzamiento: "",
    rating: "",
    imagen: "",
    generos: [],
    plataformas: [],
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState({});

  const handleValidate = (inputs) => {
    const errors = {};
    if (!inputs.nombre) {
      errors.nombre = "Debe escribirle un nombre al videojuego";
    }
    if (!inputs.descripcion) {
      errors.descripcion = "Debe describir el videojuego";
    }
    if (!inputs.lanzamiento) {
      errors.lanzamiento = "Escriba la fecha de lanzamiento";
    }
    if (!inputs.rating) {
      errors.rating = "Debe escribir el rating del videojuego";
    }
    if (!inputs.imagen) {
      errors.imagen = "Debe agregar el link de una imagen";
    }
    if (inputs.generos.length === 0) {
      errors.generos = "Debe elegir al menos un genero del videojuego";
    }
    if (inputs.generos.length === 0) {
      errors.plataformas = "Debe elegir al menos una plataforma para el juego";
    }
    return errors;
  };

  const handleSelectGeneros = (e) => {
    setForm({
      ...form,
      generos: [...form.generos, e.target.value],
    });
  };
  const handleSelectPlataformas = (e) => {
    setForm({
      ...form,
      plataformas: [...form.generos, e.target.value],
    });
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      handleValidate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError(handleValidate(form));
    setForm(true);

    dispatch(postVideogame(form));
    alert("El juego fue posteado exitosamente");
    setForm(initialState);
  };

  return (
    <div className="post">
      <div className="inputs">
        <label>Nombre:</label>
        <input
          name="nombre"
          value={form.nombre}
          type="text"
          onChange={(e) => handleOnChange(e)}
        />
        <p className="error">{error.nombre}</p>
      </div>
      <div className="inputs">
        <label>Descripcion:</label>
        <textarea
          className="descripcion"
          name="descripcion"
          value={form.descripcion}
          type="text"
          onChange={(e) => handleOnChange(e)}
        />
        <p className="error">{error.descripcion}</p>
      </div>
      <div className="inputs">
        <label>Fecha de Lanzamiento:</label>
        <input
          name="lanzamiento"
          value={form.lanzamiento}
          type="text"
          onChange={(e) => handleOnChange(e)}
        />
        <p className="error">{error.lanzamiento}</p>
      </div>
      <div className="inputs">
        <label>Rating:</label>
        <input
          name="rating"
          value={form.rating}
          type="text"
          onChange={(e) => handleOnChange(e)}
        />
        <p className="error">{error.rating}</p>
      </div>
      <div className="inputs">
        <label>Imagen:</label>
        <input
          name="imagen"
          value={form.imagen}
          type="text"
          onChange={(e) => handleOnChange(e)}
        />
        <p className="error">{error.imagen}</p>
      </div>

      <div className="inputs">
        <label>Plataformas:</label>
        <select>
          {platforms.map((e) => {
            return (
              <option
                key={e.id}
                value={form.plataformas}
                onChange={(e) => {
                  handleSelectPlataformas(e);
                }}
              >
                {e.name}
              </option>
            );
          })}
        </select>
        <p className="error">{error.plataformas}</p>
        <ul className="lista">
          <li>{form.plataformas.map((r) => `${r}, `)}</li>
        </ul>
      </div>

      <div className="inputs">
        <label>Generos:</label>
        <select>
          {genres.map((e) => {
            return (
              <option
                key={e.id}
                value={form.generos}
                onChange={(e) => {
                  handleSelectGeneros(e);
                }}
              >
                {e.name}
              </option>
            );
          })}
        </select>
        <p className="error">{error.generos}</p>
        <ul className="lista">
          <li>{form.generos.map((r) => `${r}, `)}</li>
        </ul>
      </div>

      <button
        onClick={(e) => handleOnSubmit(e)}
        className="button__create"
        type="submit"
      >
        Postear
      </button>
    </div>
  );
}
export default Post;
