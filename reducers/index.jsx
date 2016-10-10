import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import document from './document';
import form from './form';
import tab from './tab';
import testerResponse from './testerResponse';

const rootReducer = combineReducers({
  tab,
  form,
  document,
  testerResponse,
  routing: routerReducer,
});

export default rootReducer;
