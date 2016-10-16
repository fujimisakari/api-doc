import testerResponse from '../../reducers/testerResponse';
import { TESTER_RESPONSE, UPDATE_FORM } from '../../constants';

describe('testerResponse reducer Test >', () => {

  const initialState = {
    requestURL: '',
    data: {},
  };

  it('No paramater', () => {
    expect(
      testerResponse(undefined, {})
    ).to.eql(initialState);
  });

  it('TESTER_RESPONSE', () => {
    expect(
      testerResponse(initialState, {
        type: TESTER_RESPONSE,
        requestURL: 'http://test.com/api',
        resoponseData: { hoge: 'fuge' },
      })
    ).to.eql({
      requestURL: 'http://test.com/api',
      data: { hoge: 'fuge' },
    });
  });

  it('UPDATE_FORM', () => {
    expect(
      testerResponse(initialState, {
        type: UPDATE_FORM,
      })
    ).to.eql(initialState);
  });
});
