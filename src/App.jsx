import React from 'react';

// Store
import { Provider } from 'react-redux';
import store from './redux/store';

// Other
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Albums from './pages/Albums';

function App() {
  return (
    <Provider store={store}>
      <div className='site-wrapper'>
        <Router>
          <Switch>
            <Route path='/'>
              <Albums />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
