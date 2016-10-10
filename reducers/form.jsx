import { UPDATE_FORM } from '../constants';

export default function form(state = {}, action) {
  switch (action.type) {
    case UPDATE_FORM:
      state[action.name] = action.value;
      return state;
    default:
      return state;
  }
}
