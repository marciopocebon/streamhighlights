export const FETCH_ACTIVITY = "FETCH_ACTIVITY";
export const APPEND_ACTIVITY = "APPEND_ACTIVITY";
export const REQUEST_ACTIVITY = "REQUEST_ACTIVITY";

export const fetchActivity = activity => {
  return {
    type: FETCH_ACTIVITY,
    payload: activity
  };
};

export const requestActivity = () => {
  return {
    type: REQUEST_ACTIVITY
  };
};

export const appendActivity = activity => {
  return {
    type: APPEND_STREAMERS,
    payload: activity
  };
};
