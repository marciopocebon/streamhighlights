export const FETCH_STREAMERS = "FETCH_STREAMERS";
export const APPEND_STREAMERS = "APPEND_STREAMERS";
export const REQUEST_STREAMERS = "REQUEST_STREAMERS";

export const fetchStreamers = streamers => {
  return {
    type: FETCH_STREAMERS,
    payload: streamers
  };
};

export const requestStreamers = () => {
    return {
      type: REQUEST_STREAMERS
    };
  };

export const appendStreamers = streamers => {
  return {
    type: APPEND_STREAMERS,
    payload: streamers
  };
};
