export const REQUEST_CLIPS = "REQUEST_CLIPS";
export const FETCH_CLIPS = "FETCH_CLIPS";
export const APPEND_CLIPS = "APPEND_CLIPS";

export const requestClips = () => {
  return {
    type: REQUEST_CLIPS
  };
};

export const fetchClips = clips => {
  return {
    type: FETCH_CLIPS,
    payload: clips
  };
};

export const appendClips = clips => {
  return {
    type: APPEND_CLIPS,
    payload: clips
  };
};