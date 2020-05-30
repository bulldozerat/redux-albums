import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import albumsReducer from './albums/albumsReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  albums: albumsReducer
});

export default rootReducer;
