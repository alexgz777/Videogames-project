import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    const request = await axios.get("/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: request.data,
    });
  };
}

export function getVideogameByID(id) {
  return async function (dispatch) {
    const request = await axios.get(`/videogames/${id}`);
    return dispatch({
      type: "GET_VIDEOGAME",
      payload: request.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const request = await axios.get("/genres");
    return dispatch({
      type: "GET_GENRES",
      payload: request.data,
    });
  };
}

export function getPlatforms() {
  return async function (dispatch) {
    const request = await axios.get("/platforms");
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
        `/videogames?name=${name}`
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
  return {
    type: "FILTER_ORIGIN",
    payload,
  };
}

export function filterByGenre(payload) {
  return {
    type: "FILTER_GENRE",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: "ORDER_RATING",
    payload,
  };
}

export function resetFilter() {
  return {
    type: "RESET",
  };
}

export function postVideogame(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "/videogames",
        data
      );
      dispatch({ type: "POST_VIDEOGAME", payload: response });
    } catch (error) {
      console.log(error);
    }
  };
}
