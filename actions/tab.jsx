import { SET_TAB_TYPE } from '../constants/TabTypes';

const setTabType = (tabType) => ({
  type: SET_TAB_TYPE,
  tabType,
});

export default setTabType;
