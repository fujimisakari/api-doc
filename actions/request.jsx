import request from 'axios';

import { SERVER_HOST, SERVER_PORT, FETCH_DOCUMENT, RECEIVE_DOCUMENT } from '../constants';

function makeRequest(method, api, id, data) {
  const config = { baseURL: `http://${SERVER_HOST}:${SERVER_PORT}/api` };

  if (['delete', 'get', 'head'].indexOf(method) >= 0) {
    return request[method](api + (id ? `/${id}` : ''), config);
  }
  // post, put, patch
  return request[method](api + (id ? `/${id}` : ''), data, config);
}

export function fetchDocument() {
  return {
    type: FETCH_DOCUMENT,
  };
}

export function receiveDocument(document) {
  return {
    type: RECEIVE_DOCUMENT,
    data: document,
  };
}

export function getDocument() {
  return dispatch => {
    dispatch(fetchDocument());
    return makeRequest('get', '/document')
      .then(response => dispatch(receiveDocument(response.data)))
      .catch(error => console.log(error));
  };
}

export function getDocumentIfNeeded() {
  return (dispatch, state) => {
    if (state.isFetching) {
      return Promise.resolve();
    }
    return dispatch(getDocument());
  };
}
