import { FETCH_DOCUMENT, RECEIVE_DOCUMENT } from '../constants';

const initialData = {
  isFetching: false,
  data: {},
};

export default function document(state, action) {
  switch (action.type) {
    case FETCH_DOCUMENT:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_DOCUMENT:
      return Object.assign({}, state, { isFetching: false, data: action.data });
    default:
      return initialData;
  }
}
