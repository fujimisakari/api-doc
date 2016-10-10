import request from 'axios';

import { API_URL_BASE } from '../config';

export default function makeRequest(method, api, data) {
  const config = { baseURL: API_URL_BASE };

  if (['delete', 'get', 'head'].indexOf(method) >= 0) {
    return request[method](api, config);
  }
  // post, put, patch
  return request[method](api, data, config);
}
