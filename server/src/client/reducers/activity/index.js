import {
  FETCH_ACTIVITY,
  fetchActivity,
  APPEND_ACTIVITY,
  appendActivity,
  requestActivity,
  REQUEST_ACTIVITY
} from "./../../actions/activity/index";

const initialState = { items: [], fetching: false };

const activity = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ACTIVITY:
      return {
        ...state,
        fetching: true
      };
    case FETCH_ACTIVITY:
      return {
        ...state,
        items: action.payload,
        fetching: false
      };
    case APPEND_ACTIVITY:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};

export const getActivity = pageIndex => async (dispatch, getState, api) => {
  const res = await api.get(`/activity/latest?page=${pageIndex}`);
  dispatch(fetchActivity(res.data.clips));
};

export const fetchMoreActivity = pageIndex => async (
  dispatch,
  getState,
  api
) => {
  dispatch(requestActivity());
  const res = await api.get(`/activity/latest?page=${pageIndex}`);
  dispatch(appendActivity(res.data.clips));
};

export default activity;
