import {
  FETCH_GAMES,
  REQUEST_GAMES,
  fetchGames,
  requestGames,
  appendGames
} from "../../actions/games";
import { APPEND_GAMES } from "./../../actions/games/index";

const initialState = { items: [], fetching: false };

const games = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES: {
      return {
        ...state,
        items: action.payload
      };
    }
    case REQUEST_GAMES:
      return {
        ...state,
        fetching: true
      };
    case APPEND_GAMES:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const getGames = (pageIndex, gameFilter) => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.get(
    `/games?page=${pageIndex}` + (gameFilter ? `&q=${gameFilter}` : "")
  );
  // Error handling maybe?
  dispatch(fetchGames(res.data.games));
};

export const fetchMoreGames = (pageIndex, gameFilter) => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestGames());
  console.log(`/games?page=${pageIndex}` + (gameFilter ? `&q=${gameFilter}` : ""))
  const res = await api.get(
    `/games?page=${pageIndex}` + (gameFilter ? `&q=${gameFilter}` : "")
  );
  dispatch(appendGames(res.data.games));
};

export default games;
