import request from 'axios';

import { API_URL_DOMAIN } from '../config';

export default function makeRequest(method, apiURL, data) {
  const config = { baseURL: `${API_URL_DOMAIN}` };

  if (['delete', 'get', 'head'].indexOf(method) >= 0) {
    return request[method](apiURL, config);
  }
  // post, put, patch
  return request[method](apiURL, data, config);
}
