import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tab from './tab';

const rootReducer = combineReducers({
  tab,
  routing: routerReducer,
});

export default rootReducer;
