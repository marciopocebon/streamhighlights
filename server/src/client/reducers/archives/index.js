import {
  FETCH_ARCHIVE,
  REQUEST_ARCHIVE,
  APPEND_ARCHIVE,
  requestArchive,
  fetchArchive,
  appendArchive
} from "./../../actions/archives/index";

const initialState = { items: [], fetching: false };

const archives = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARCHIVE:
      return {
        ...state,
        items: action.payload
      };
    case REQUEST_ARCHIVE:
      return {
        ...state,
        fetching: true
      };
    case APPEND_ARCHIVE:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const getArchive = (archiveId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.get(`/archives/${archiveId}?page=${pageIndex}`);
  console.log(res.data.archives);
  dispatch(fetchArchive(res.data.archives));
};

export const getArchiveByStreamerId = (streamerId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  console.log(`/archives/streamer/${streamerId}?page=${pageIndex}`);
  const res = await api.get(
    `/archives/streamer/${streamerId}?page=${pageIndex}`
  );
  console.log(res.data.archives)
  dispatch(fetchArchive(res.data.archives));
};

export const fetchMoreArchiveByStreamer = (streamerId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestArchive());
  const res = await api.get(
    `/archives/streamer/${streamerId}?page=${pageIndex}`
  );
  dispatch(appendArchive(res.data.archives));
};

export const fetchMoreArchive = (archiveId, pageIndex) => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestArchive());
  const res = await api.get(`/archives/${archiveId}?page=${pageIndex}`);
  dispatch(appendArchive(res.data.archives));
};

export default archives;
