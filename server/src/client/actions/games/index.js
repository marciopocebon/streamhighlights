export const REQUEST_GAMES = "REQUEST_GAMES";
export const FETCH_GAMES = "FETCH_GAMES";
export const APPEND_GAMES = "APPEND_GAMES";

export const requestGames = () => {
  return {
    type: REQUEST_GAMES
  };
};

export const fetchGames = games => {
  return {
    type: FETCH_GAMES,
    payload: games
  };
};

export const appendGames = games => {
  return {
    type: APPEND_GAMES,
    payload: games
  };
};
