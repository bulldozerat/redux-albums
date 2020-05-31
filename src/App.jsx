import React from 'react';

// Store
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Other
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Albums from './pages/albums';
import AlbumCatalogue from './pages/album-catalogue';
import FavouriteCatalogue from './pages/favourite-catalogue';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='site-wrapper'>
          <Router>
            <Switch>
              <Route path='/' exact>
                <Albums />
              </Route>
              <Route path='/album-catalogue'>
                <AlbumCatalogue />
              </Route>
              <Route path='/favourite-catalogue'>
                <FavouriteCatalogue />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
