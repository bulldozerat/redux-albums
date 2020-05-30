import { NORMALISE_ALBUMS_DATA } from './albumsTypes';

const initialState = [{}];

const albumsReducer = (state = initialState, action) => {
  console.log('action.payload: ', action.payload);
  console.log('state: ', state);

  switch (action.type) {
    case NORMALISE_ALBUMS_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default albumsReducer;
