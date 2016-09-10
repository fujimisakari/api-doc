import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from '../components/Root';
import API from '../components/API';
import GetStarted from '../components/GetStarted';
import configureStore from '../store/configureStore';

injectTapEventPlugin();

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={GetStarted} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/api" component={API} />
        <Route path="/api:method" component={API} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
