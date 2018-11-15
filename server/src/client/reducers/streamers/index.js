import {
  FETCH_STREAMERS,
  fetchStreamers,
  APPEND_STREAMERS,
  appendStreamers
} from "./../../actions/streamers/index";

const initialState = [];

const streamers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STREAMERS:
      return action.payload;
    case APPEND_STREAMERS:
      return [...state, ...action.payload];
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

export const fetchMoreStreamers = (pageIndex, streamerFilter) => async(
    dispatch,
    getState,
    api
) => {
  const res = await api.get(
    `/streamers?page=${pageIndex}` +
      (streamerFilter ? `&q=${streamerFilter}` : "")
  );
  dispatch(appendStreamers(res.data.streamers));
}

export default streamers;
