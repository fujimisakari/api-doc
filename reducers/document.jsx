import { FETCH_DOCUMENT, RECEIVE_DOCUMENT } from '../constants';

export default function document(state = { hasData: false, isFetching: false, data: {} }, action) {
  switch (action.type) {
    case FETCH_DOCUMENT:
      return Object.assign({}, state, { hasData: false, isFetching: true });
    case RECEIVE_DOCUMENT:
      return Object.assign({}, state, { hasData: true, isFetching: false, data: action.data });
    default:
      return state;
  }
}
