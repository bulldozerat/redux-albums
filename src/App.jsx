import React from 'react';

// Store
import { Provider } from 'react-redux';
import store from './redux/store';

// Other
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Albums from './pages/albums';
import AlbumCatalogue from './pages/album-catalogue';

function App() {
  return (
    <Provider store={store}>
      <div className='site-wrapper'>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Albums />
            </Route>
            <Route path='/album-catalogue'>
              <AlbumCatalogue />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
