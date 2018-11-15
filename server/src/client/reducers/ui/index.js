import {
  SET_SELECTED_STREAMER,
  SET_SELECTED_GAME,
  SET_AUTOMATIC_CHECKBOX,
  SET_TIME_FILTER,
  setAutomaticCheckbox
} from "./../../actions/ui/index";

const initialState = { automaticCheckbox: false, time: "week" };

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_STREAMER:
      return {
        ...state,
        selectedStreamer: action.payload
      };
    case SET_SELECTED_GAME:
      return {
        ...state,
        selectedGame: action.payload
      };
    case SET_AUTOMATIC_CHECKBOX:
      return {
        ...state,
        automaticCheckbox: action.payload
      };
    case SET_TIME_FILTER:
      return {
        ...state,
        time: action.payload
      };
    default:
      return state;
  }
};

export const setAutomaticCheckboxValue = (value) => async (
    dispatch,
    getState,
    api
  ) => {
    dispatch(setAutomaticCheckbox(value))
  };

export default ui;
