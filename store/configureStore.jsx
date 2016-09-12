import { createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(devTools) {
  return createStore(
    rootReducer,
    devTools.instrument()
  );
}
