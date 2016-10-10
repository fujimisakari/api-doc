import { connect } from 'react-redux';
import { testerRequest } from '../actions/request';

import APITester from '../components/API/APITester';

function getMethod(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const method = getMethod(state);
  let request = {};
  let response = {};
  if (state.document.hasData) {
    const schemaData = state.document.data.schemaData[method];
    request = schemaData.request;
    response = state.testerResponse;
  }
  return {
    method,
    request,
    response,
    hasData: state.document.hasData,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onRequestClick: () => {
    dispatch(testerRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APITester);
