import request from 'axios';

import { SERVER_HOST, SERVER_PORT } from '../constants';

export default function makeRequest(method, api, data) {
  const config = { baseURL: `http://${SERVER_HOST}:${SERVER_PORT}/api` };

  if (['delete', 'get', 'head'].indexOf(method) >= 0) {
    return request[method](api, config);
  }
  // post, put, patch
  return request[method](api, data, config);
}
