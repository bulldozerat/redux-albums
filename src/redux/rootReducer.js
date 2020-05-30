import { combineReducers } from 'redux';
import albumsReducer from './albums/albumsReducer';

const rootReducer = combineReducers({
  albums: albumsReducer
});

export default rootReducer;
