export const SET_SELECTED_STREAMER = "SET_SELECTED_STREAMER";
export const SET_SELECTED_GAME = "SET_SELECTED_GAME";
export const SET_AUTOMATIC_CHECKBOX = "SET_AUTOMATIC_CHECKBOX";
export const SET_TIME_FILTER = "SET_TIME_FILTER";

export const setSelectedGame = game => {
  return {
    type: SET_SELECTED_GAME,
    payload: game
  };
};

export const setSelectedStreamer = streamer => {
  return {
    type: SET_SELECTED_STREAMER,
    payload: streamer
  };
};

export const setAutomaticCheckbox = value => {
  return {
    type: SET_AUTOMATIC_CHECKBOX,
    payload: value
  };
};

export const setTimeFilter = time => {
  return {
    type: SET_TIME_FILTER,
    payload: time
  };
};
