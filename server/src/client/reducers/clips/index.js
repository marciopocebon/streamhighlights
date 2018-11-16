import {
  FETCH_CLIPS,
  REQUEST_CLIPS,
  APPEND_CLIPS,
  requestClips,
  fetchClips,
  appendClips
} from "./../../actions/clips/index";
import { setSelectedStreamer } from "../../actions/ui";

const initialState = { items: [], fetching: false };

const clips = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIPS:
      return {
        ...state,
        items: action.payload
      };
    case REQUEST_CLIPS:
      return {
        ...state,
        fetching: true
      };
    case APPEND_CLIPS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const getClips = (
  userId,
  pageIndex,
  game,
  title,
  automatic,
  time
) => async (dispatch, getState, api) => {
  console.log(
    `/clips/${userId}?page=${pageIndex}` +
      (time ? `&time=${time}` : "&time=week") +
      (game ? `&game=${game}` : "") +
      (title ? `&title=${title}` : "") +
      `&automatic=1`
  );
  const res = await api.get(
    `/clips/${userId}?page=${pageIndex}` +
      (time ? `&time=${time}` : "&time=week") +
      (game ? `&game=${game}` : "") +
      (title ? `&title=${title}` : "") +
      `&automatic=1`
  );
  dispatch(setSelectedStreamer(res.data.streamer));
  dispatch(fetchClips(res.data.clips));
};

export const fetchMoreClips = (
  userId,
  pageIndex,
  game,
  title,
  automatic,
  time
) => async (dispatch, getState, api) => {
  dispatch(requestClips());
  const res = await api.get(
    `/clips/${userId}?page=${pageIndex}` +
      (time ? `&time=${time}` : "&time=week") +
      (game ? `&game=${game}` : "") +
      (title ? `&title=${title}` : "") +
      `&automatic=1`
  );
  dispatch(setSelectedStreamer(res.data.streamer));
  dispatch(appendClips(res.data.clips));
};

export const getClipsByArchive = (archiveId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.get(`/clips/archive/${archiveId}?page=${pageIndex}`);
  dispatch(fetchClips(res.data.clips));
};

export const fetchMoreClipsByArchive = (archiveId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestClips());
  const res = await api.get(`/clips/archive/${archiveId}?page=${pageIndex}`);
  dispatch(appendClips(res.data.clips));
};

// export const fetchClipsByGame = (
//   gameId,
//   pageIndex,
//   streamer,
//   title,
//   automatic
// ) => {
//   return dispatch => {
//     dispatch(requestClips());
//     axios
//       .get(
//         `/clips/game/${gameId}?page=${pageIndex}` +
//           (streamer ? `&streamer=${streamer}` : "") +
//           (title ? `&title=${title}` : "") +
//           `&automatic=1`
//       )
//       .then(response => {
//         dispatch(setSelectedGame(response.data.game));
//         dispatch(fetchClipsSuccess(response.data.clips));
//       })
//       .catch(err => console.log("This should be a dispatched error"));
//   };
// };

export default clips;
