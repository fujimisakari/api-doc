import { DOCUMENT, UPDATE_FORM, TESTER_RESPONSE, SET_TAB_TYPE } from '../constants';

export default function tab(state, action) {
  switch (action.type) {
    case SET_TAB_TYPE:
      return action.tabType;
    case UPDATE_FORM:
      return state;
    case TESTER_RESPONSE:
      return state;
    default:
      return DOCUMENT;
  }
}
