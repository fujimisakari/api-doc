import form from '../../reducers/form';
import { UPDATE_FORM, TESTER_RESPONSE } from '../../constants';

describe('form reducer Test >', () => {

  const initialState = {
    userID: 1,
  };

  it('No paramater', () => {
    expect(
      form(undefined, {})
    ).to.eql({});
  });

  it('UPDATE_FORM', () => {
    expect(
      form(initialState, {
        type: UPDATE_FORM,
        name: 'userID',
        value: 3,
      })
    ).to.eql({
      userID: 3,
    });
  });

  it('TESTER_RESPONSE', () => {
    expect(
      form(initialState, {
        type: TESTER_RESPONSE,
      })
    ).to.eql(initialState);
  });
});
