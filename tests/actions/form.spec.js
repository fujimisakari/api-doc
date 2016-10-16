import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import updateForm from '../../actions/form';
import rootReducer from '../../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

describe('form action Test >', () => {

  it('updateForm', () => {
    store.dispatch(updateForm('userID', 10));
    expect(store.getState().form).to.eql({
      userID: 10,
    });
  });

});
