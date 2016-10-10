import makeRequest from './request';
import { API_URL_PREFIX } from '../config';
import { TESTER_RESPONSE } from '../constants';

function requestCallback(requestURL, resoponseData) {
  return {
    type: TESTER_RESPONSE,
    requestURL,
    resoponseData,
  };
}

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function createParamData(inputFormData, argumentList) {
  const paramData = {};
  for (const argument of argumentList) {
    if (argument.argument in inputFormData) {
      paramData[argument.argument] = inputFormData[argument.argument];
    } else {
      paramData[argument.argument] = '';
    }
  }
  return paramData;
}

function addQueryDataTo(requestURL, paramData) {
  let query = '';
  for (const key of Object.keys(paramData)) {
    if (query) {
      query = `${query}&${key}=${paramData[key]}`;
    } else {
      query = `${key}=${paramData[key]}`;
    }
  }

  if (query) {
    return `${requestURL}?${query}`;
  }
  return requestURL;
}

export default function request(method = 'get') {
  return (dispatch, getState) => {
    const state = getState();
    const url = getURL(state);
    const schemaData = state.apiSchema.schemaData[url];
    const tmpParammData = createParamData(state.form, schemaData.request.arguments);

    let paramData = {};
    let requestURL = `${API_URL_PREFIX}/${url}`;
    for (const key of Object.keys(tmpParammData)) {
      const re = new RegExp(`:${key}`);
      const newURL = requestURL.replace(re, tmpParammData[key]);
      if (requestURL === newURL) {
        paramData[key] = tmpParammData[key];
      } else {
        requestURL = newURL;
      }
    }

    if (method === 'get') {
      requestURL = addQueryDataTo(requestURL, paramData);
      paramData = {};
    }

    return makeRequest(method, requestURL, paramData)
      .then(response => dispatch(requestCallback(requestURL, response.data)))
      .catch(error => console.log(error));
  };
}
