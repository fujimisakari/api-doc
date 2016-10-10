import { FETCH_API_SCHEMA, RECEIVE_API_SCHEMA } from '../constants';

export default function apiSchema(state = { hasData: false, isFetching: false }, action) {
  switch (action.type) {
    case FETCH_API_SCHEMA:
      return Object.assign({}, state, { hasData: false, isFetching: true });
    case RECEIVE_API_SCHEMA:
      return Object.assign({}, state, { hasData: true, isFetching: false }, action.responseData);
    default:
      return state;
  }
}
