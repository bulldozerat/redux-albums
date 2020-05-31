import { combineReducers } from 'redux';
import albumsReducer from './albums/albumsReducer';

// Redux Persist
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const albumsConfig = {
  key: 'albums',
  storage,
  blacklist: ['albumsData', 'error', 'loading', 'selectedAlbum']
};

const rootReducer = combineReducers({
  albums: persistReducer(albumsConfig, albumsReducer)
});

export default rootReducer;
