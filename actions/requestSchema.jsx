import makeRequest from './request';
import { FETCH_DOCUMENT, RECEIVE_DOCUMENT } from '../constants';

function fetchDocument() {
  return {
    type: FETCH_DOCUMENT,
  };
}

function receiveDocument(document) {
  return {
    type: RECEIVE_DOCUMENT,
    data: document,
  };
}

function getDocument() {
  return dispatch => {
    dispatch(fetchDocument());
    return makeRequest('get', '/document')
      .then(response => dispatch(receiveDocument(response.data)))
      .catch(error => console.log(error));
  };
}

export default function getDocumentIfNeeded() {
  return (dispatch, state) => {
    if (state.isFetching) {
      return Promise.resolve();
    }
    return dispatch(getDocument());
  };
}
