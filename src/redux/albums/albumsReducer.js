import { FETCH_ALBUMS_BEGIN, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE } from './albumsTypes';

const initialState = {
  albums: [],
  loading: false,
  error: null
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload
      };

    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        albums: []
      };

    default:
      return state;
  }
};

export default albumsReducer;
