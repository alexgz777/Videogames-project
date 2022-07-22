const axios = require("axios");

const { Videogame, Genre } = require("../db");

const getApiVideogames = async () => {
  const apiRequest = await axios
    .get(
      `https://api.rawg.io/api/games?key=${process.env.DB_API_KEY}&page=1&page_size=100`
    )
    .then((response) => response.data);

  return apiRequest.results.map((e) => {
    return {
      id: e.id,
      nombre: e.name,
      descripcion: e.description,
      lanzamiento: e.released,
      rating: e.rating,
      imagen: e.background_image,
      plataformas: e.platforms.map((p) => p.platform.name),
      generos: e.genres.map((t) => t.name),
      fromDb: false,
    };
  });
};

const getDbVideogames = async () => {
  const dbRequest = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dbRequest;
};

const getAllVideogames = async () => {
  const api = await getApiVideogames();
  const db = await getDbVideogames();
  return [...api, ...db];
};

const getIdVideogames = async (id) => {
  const apiRequest = await axios
    .get(`https://api.rawg.io/api/games/${id}?key=${process.env.DB_API_KEY}`)
    .then((response) => response.data);
  return apiRequest;
};

const getGenres = async () => {
  const apiRequest = await axios
    .get(`https://api.rawg.io/api/genres?key=${process.env.DB_API_KEY}`)
    .then((response) => response.data.results);

  apiRequest.forEach((genre) => {
    Genre.findOrCreate({
      where: {
        name: genre.name,
      },
    });
  });
  return await Genre.findAll();
};

const getPlatforms = async () => {
  const request = await axios
    .get(
      `https://api.rawg.io/api/platforms/lists/parents?key=${process.env.DB_API_KEY}`
    )
    .then((response) => response.data.results);

  return request.map((e) => {
    return { id: e.id, name: e.name };
  });
};

const postVideogame = async (
  nombre,
  descripcion,
  lanzamiento,
  rating,
  imagen,
  plataformas,
  generos
) => {
  try {
    const newGame = await Videogame.create({
      nombre,
      descripcion,
      lanzamiento,
      rating,
      imagen,
      plataformas,
    });

    const genres = await Genre.findAll({
      where: {
        name: generos,
      },
    });

    newGame.addGenre(genres);

    return "El videojuego ha sido agregado exitosamente";
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllVideogames,
  getIdVideogames,
  getGenres,
  getPlatforms,
  postVideogame,
  getPlatforms,
};
