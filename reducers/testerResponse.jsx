import { TESTER_RESPONSE, UPDATE_FORM } from '../constants';

export default function testerResponse(state = { requestURL: '', data: {} }, action) {
  switch (action.type) {
    case TESTER_RESPONSE:
      return Object.assign({}, state, { requestURL: action.requestURL, data: action.resoponseData });
    case UPDATE_FORM:
      return state;
    default:
      return { requestURL: '', data: {} };
  }
}
