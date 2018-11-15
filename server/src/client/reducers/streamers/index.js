import {
  FETCH_STREAMERS,
  fetchStreamers,
  APPEND_STREAMERS,
  appendStreamers,
  requestStreamers,
  REQUEST_STREAMERS
} from "./../../actions/streamers/index";

const initialState = { items: [], fetching: false };

const streamers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STREAMERS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_STREAMERS:
      return {
        ...state,
        items: action.payload,
        fetching: false
      };
    case APPEND_STREAMERS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const getStreamers = (pageIndex, streamerFilter) => async (
  dispatch,
  getState,
  api
) => {
  console.log(pageIndex, streamerFilter);
  const res = await api.get(
    `/streamers?page=${pageIndex}` +
      (streamerFilter ? `&q=${streamerFilter}` : "")
  );
  dispatch(fetchStreamers(res.data.streamers));
};

export const fetchMoreStreamers = (pageIndex, streamerFilter) => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestStreamers());
  const res = await api.get(
    `/streamers?page=${pageIndex}` +
      (streamerFilter ? `&q=${streamerFilter}` : "")
  );
  dispatch(appendStreamers(res.data.streamers));
};

export default streamers;
