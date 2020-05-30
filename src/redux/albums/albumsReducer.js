import {
  FETCH_ALBUMS_BEGIN,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
  CHANGE_SELECTED_ALBUM,
  ADD_TO_FAVOURITES
} from './albumsTypes';

const initialState = {
  albumsData: [],
  favouritesData: [],
  loading: false,
  error: null,
  selectedAlbum: null
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
        albumsData: action.payload
      };

    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        albumsData: []
      };

    case CHANGE_SELECTED_ALBUM:
      return {
        ...state,
        selectedAlbum: action.payload
      };

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouritesData: [...state.favouritesData, action.payload]
      };

    default:
      return state;
  }
};

export default albumsReducer;
