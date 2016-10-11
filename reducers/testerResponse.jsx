import { TESTER_RESPONSE } from '../constants';

export default function testerResponse(state = { requestURL: '', data: {} }, action) {
  switch (action.type) {
    case TESTER_RESPONSE:
      return Object.assign({}, state, { requestURL: action.requestURL, data: action.resoponseData });
    default:
      return { requestURL: '', data: {} };
  }
}
