export const REQUEST_CLIPS = "REQUEST_CLIPS";
export const FETCH_CLIPS_SUCCESS = "FETCH_CLIPS_SUCCESS";
export const SET_CLIPS = "SET_CLIPS";

export const requestClips = () => {
  return {
    type: REQUEST_CLIPS
  };
};

export const fetchClipsSuccess = json => {
  return {
    type: FETCH_CLIPS_SUCCESS,
    payload: json
  };
};

export const setClips = clips => {
  return {
    type: SET_CLIPS,
    payload: clips
  };
};
