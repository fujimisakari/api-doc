import React from 'react';
import ReactDOM from 'react-dom';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import API from './components/API';
import GetStarted from './components/GetStarted';
import Overview from './components/Overview';
import Root from './components/Root';
import configureStore from './store/configureStore';

injectTapEventPlugin();

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const store = configureStore(DevTools);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Root}>
          <IndexRoute component={GetStarted} />
          <Route path="/overview" component={Overview} />
          <Route path="/api/*/*" component={API} />
        </Route>
      </Router>
      {/* <DevTools /> */}
    </div>
  </Provider>,
  document.getElementById('root')
);
