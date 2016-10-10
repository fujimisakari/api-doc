import makeRequest from './request';
import { FETCH_API_SCHEMA, RECEIVE_API_SCHEMA } from '../constants';

function fetchAPISchema() {
  return {
    type: FETCH_API_SCHEMA,
  };
}

function requestCallback(responseData) {
  return {
    type: RECEIVE_API_SCHEMA,
    responseData,
  };
}

function getAPISchema() {
  return dispatch => {
    dispatch(fetchAPISchema());
    return makeRequest('get', '/document')
      .then(response => dispatch(requestCallback(response.data)))
      .catch(error => console.log(error));
  };
}

export default function getAPISchemaIfNeeded() {
  return (dispatch, state) => {
    if (state.isFetching) {
      return Promise.resolve();
    }
    return dispatch(getAPISchema());
  };
}
