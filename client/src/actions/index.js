import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    const request = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: request.data,
    });
  };
}

export function getVideogameByID(id) {
  return async function (dispatch) {
    const request = await axios.get(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: "GET_VIDEOGAME",
      payload: request.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const request = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: "GET_GENRES",
      payload: request.data,
    });
  };
}

export function getPlatforms() {
  return async function (dispatch) {
    const request = await axios.get("http://localhost:3001/platforms");
    return dispatch({
      type: "GET_PLATFORMS",
      payload: request.data,
    });
  };
}

export function searchGameName(name) {
  return async function (dispatch) {
    try {
      const request = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch({
        type: "GET_GAME_NAME",
        payload: request.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByOrigin(payload) {
  console.log(payload);
  return {
    type: "FILTER_ORIGIN",
    payload,
  };
}

export function filterByGenre(payload) {
  console.log(payload);
  return {
    type: "FILTER_GENRE",
    payload,
  };
}

export function orderByName(payload) {
  console.log(payload);
  return {
    type: "ORDER_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  console.log(payload);
  return {
    type: "ORDER_RATING",
    payload,
  };
}

export function postVideogame(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/videogames",
        data
      );
      dispatch({ type: "POST_VIDEOGAME", payload: response });
    } catch (error) {
      console.log(error);
    }
  };
}
