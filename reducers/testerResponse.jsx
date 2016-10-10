import { TESTER_RESPONSE } from '../constants';

export default function testerResponse(state = {}, action) {
  switch (action.type) {
    case TESTER_RESPONSE:
      return 'responseData';
    default:
      return state;
  }
}
