import { connect } from 'react-redux';

import setTabType from '../actions/tab';
import APIContent from '../components/API/APIContent';

function getMethod(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const method = getMethod(state);
  let title = '';
  let description = '';
  if (state.document.hasData) {
    const schemaData = state.document.data.schemaData[method];
    title = schemaData.title;
    description = schemaData.description;
  }

  return {
    title,
    description,
    tabType: state.tab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTypeChange: (tabType) => {
      dispatch(setTabType(tabType));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APIContent);
