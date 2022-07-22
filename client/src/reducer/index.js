const initialState = {
  videogames: [],
  videogamesFilter: [],
  genres: [],
  platforms: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload,
      };
    case "GET_VIDEOGAME":
      return {
        ...state,
        videogames: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "GET_PLATFORMS":
      return {
        ...state,
        platforms: action.payload,
      };

    case "POST_VIDEOGAME":
      return {
        ...state,
      };

    case "GET_GAME_NAME":
      return {
        ...state,
        videogames: action.payload,
      };

    case "FILTER_ORIGIN":
      const gamesGen = state.videogamesFilter;
      let filteredGen = gamesGen;

      if (action.payload === "agregados") {
        filteredGen = gamesGen.filter((e) => e.fromDb === true);
      } else if (action.payload === "existentes") {
        filteredGen = gamesGen.filter((e) => e.fromDb === false);
      }

      return {
        ...state,
        videogames: filteredGen,
      };

    case "FILTER_GENRE":
      const games = state.videogamesFilter;
      let filtered = games.filter((e) =>
        e.generos.includes(action.payload.toString())
      );
      console.log(games.map(t=>t.generos))
console.log(action.payload)
console.log(filtered)

return {
        ...state,
        videogames: filtered,
      };

    case "ORDER_NAME":
      let ordered =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.nombre > b.nombre) return 1;
              if (a.nombre < b.nombre) return -1;
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.nombre > b.nombre) return -1;
              if (a.nombre < b.nombre) return 1;
              return 0;
            });
      return {
        ...state,
        videogames: ordered,
      };

    case "ORDER_RATING":
      let orderedRating =
        action.payload === "ascRat"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) return -1;
              if (a.rating < b.rating) return 1;
              return 0;
            });
      return {
        ...state,
        videogames: orderedRating,
      };
    case "RESET":
      return {
        ...state,
        videogames: [],
        videogamesFilter: [],
      };
    default:
      return state;
  }
};
