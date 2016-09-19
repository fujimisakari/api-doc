import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tab from './tab';
import document from './document';

const rootReducer = combineReducers({
  tab,
  document,
  routing: routerReducer,
});

export default rootReducer;
