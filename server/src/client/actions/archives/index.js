export const REQUEST_ARCHIVE = "REQUEST_ARCHIVE";
export const FETCH_ARCHIVE = "FETCH_ARCHIVE";
export const APPEND_ARCHIVE = "APPEND_ARCHIVE";

export const requestArchive = () => {
  return {
    type: REQUEST_ARCHIVE
  };
};

export const fetchArchive = archive => {
  return {
    type: FETCH_ARCHIVE,
    payload: archive
  };
};

export const appendArchive = archive => {
  return {
    type: APPEND_ARCHIVE,
    payload: archive
  };
};
