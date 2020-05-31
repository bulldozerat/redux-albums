// Store
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

// Middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['albums']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(logger, thunk)));
const persistor = persistStore(store);

export { store, persistor };
