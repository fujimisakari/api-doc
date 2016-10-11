import { connect } from 'react-redux';

import setTabType from '../actions/tab';
import APIContent from '../components/API/APIContent';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let title = '';
  let description = '';
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
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
    onTypeChange: (tab) => {
      dispatch(setTabType(tab.props.value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APIContent);
