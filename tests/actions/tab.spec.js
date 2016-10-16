import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import setTabType from '../../actions/tab';
import rootReducer from '../../reducers';
import { DOCUMENT, TESTER } from '../../constants';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

describe('tab action Test >', () => {

  it('setTabType DOCUMENT', () => {
    store.dispatch(setTabType(DOCUMENT));
    expect(store.getState().tab).to.eql(DOCUMENT);
  });

  it('setTabType TESTER', () => {
    store.dispatch(setTabType(TESTER));
    expect(store.getState().tab).to.eql(TESTER);
  });
});
