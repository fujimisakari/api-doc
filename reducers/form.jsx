import { UPDATE_FORM } from '../constants';

export default function form(state = {}, action) {
  switch (action.type) {
    case UPDATE_FORM: {
      const newState = Object.assign({}, state);
      newState[action.name] = action.value;
      return newState;
    }
    default: {
      return state;
    }
  }
}
