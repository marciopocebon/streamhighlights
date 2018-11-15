import {
  SET_CLIPS,
  REQUEST_CLIPS,
  FETCH_CLIPS_SUCCESS,
  requestClips,
  fetchClipsSuccess
} from "./../../actions/clips/index";
import { setSelectedStreamer } from "../../actions/ui";

const initialState = { items: [], fetching: false };

const clips = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIPS:
      return {
        ...state,
        items: action.payload
      };
    case REQUEST_CLIPS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CLIPS_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const fetchClips = (
  userId,
  pageIndex,
  game,
  title,
  automatic,
  time
) => async (dispatch, getState, api) => {
  dispatch(requestClips());
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
  dispatch(fetchClipsSuccess(res.data.clips));
};

// export const fetchClipsByArchive = (archiveId, pageIndex) => {
//   return dispatch => {
//     dispatch(requestClips());
//     axios
//       .get(`/clips/archive/${archiveId}?page=${pageIndex}`)
//       .then(response => {
//         dispatch(fetchClipsSuccess(response.data.clips));
//       })
//       .catch(err => console.log("This should be a dispatched error"));
//   };
// };

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
