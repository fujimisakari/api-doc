import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import API from '../components/API';
import Overview from '../components/Overview';
import Root from '../containers/Root';

import configureStore from '../store/configureStore';

injectTapEventPlugin();

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={Overview} />
        <Route path="/overview" component={Overview} />
        <Route path="/api/*.*" component={API} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
