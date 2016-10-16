import apiSchema from '../../reducers/apiSchema';
import { FETCH_API_SCHEMA, RECEIVE_API_SCHEMA } from '../../constants';

describe('apiSchema reducer Test >', () => {

  const initialState = {
    hasData: false,
    isFetching: false,
  };

  it('No paramater', () => {
    expect(
      apiSchema(undefined, {})
    ).to.eql({
      hasData: false,
      isFetching: false,
    });
  });

  it('FETCH_API_SCHEMA', () => {
    expect(
      apiSchema(initialState, {
        type: FETCH_API_SCHEMA,
      })
    ).to.eql({
      hasData: false,
      isFetching: true,
    });
  });

  it('RECEIVE_API_SCHEMA', () => {
    expect(
      apiSchema(initialState, {
        type: RECEIVE_API_SCHEMA,
        responseData: { test: 'REQUEST SUCCESS TEST' },
      })
    ).to.eql({
      hasData: true,
      isFetching: false,
      test: 'REQUEST SUCCESS TEST',
    });
  });
});
