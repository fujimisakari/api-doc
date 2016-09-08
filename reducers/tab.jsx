import { DOCUMENTATION, SET_TAB_TYPE } from '../constants/TabTypes';

export default function tab(state, action) {
  switch (action.type) {
    case SET_TAB_TYPE:
      return action.tabType;
    default:
      return DOCUMENTATION;
  }
}
