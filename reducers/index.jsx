import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import apiSchema from './apiSchema';
import form from './form';
import tab from './tab';
import testerResponse from './testerResponse';

const rootReducer = combineReducers({
  tab,
  form,
  apiSchema,
  testerResponse,
  routing: routerReducer,
});

export default rootReducer;
