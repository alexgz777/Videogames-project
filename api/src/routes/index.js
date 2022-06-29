const { Router } = require("express");
const router = Router();

const {
  getAllVideogames,
  getIdVideogames,
  getGenres,
  postVideogame,
  getPlatforms,
} = require("../controllers/index.js");

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  const getAll = await getAllVideogames();

  if (name) {
    const getName = getAll.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    getName.length
      ? res.status(200).send(getName)
      : res.status(400).send(`El videojuego ${name} no ha sido encontrado`);
  } else {
    getAll
      ? res.status(200).send(getAll)
      : res.status(400).send(`Los videojuegos no han sido encontrados`);
  }
});

router.get("/videogames/:id", async (req, res) => {
  const { id } = req.params;
  const getId = await getIdVideogames(id);
  getId
    ? res.status(200).send(getId)
    : res.status(400).send(`El videojuego con id ${id} no ha sido encontrado`);
});

router.get("/genres", async (req, res) => {
  const getGenre = await getGenres();
  getGenre
    ? res.status(200).send(getGenre)
    : res.status(400).send(`Los generos no han sido encontrados`);
});
router.get("/platforms", async (req, res) => {
  const getPlataform = await getPlatforms();
  getPlataform
    ? res.status(200).send(getPlataform)
    : res.status(400).send(`Las plataformas no han sido encontradas`);
});
router.post("/videogames", async (req, res) => {
  const {
    nombre,
    descripcion,
    lanzamiento,
    rating,
    imagen,
    plataformas,
    generos,
  } = req.body;

  const postGame = await postVideogame(
    nombre,
    descripcion,
    lanzamiento,
    rating,
    imagen,
    plataformas,
    generos
  );

  res.status(200).send(postGame);
});

module.exports = router;
