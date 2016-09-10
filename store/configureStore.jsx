import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      rootReducer,
      initialState,
      routing: routerReducer,
    })
  );
  return store;
}
