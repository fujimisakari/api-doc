import { UPDATE_FORM, TESTER_RESPONSE } from '../constants';

export default function form(state = {}, action) {
  switch (action.type) {
    case UPDATE_FORM: {
      const newState = Object.assign({}, state);
      newState[action.name] = action.value;
      return newState;
    }
    case TESTER_RESPONSE:
      return state;
    default:
      return {};
  }
}
