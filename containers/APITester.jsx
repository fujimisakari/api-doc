import { connect } from 'react-redux';

import request from '../actions/requestTester';
import APITester from '../components/API/APITester';

function getMethod(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const method = getMethod(state);
  let requestData = {};
  let response = {};
  let requestURL = '';
  if (state.document.hasData) {
    const schemaData = state.document.data.schemaData[method];
    requestData = schemaData.request;
    response = state.testerResponse.data;
    requestURL = state.testerResponse.requestURL;
  }
  return {
    method,
    request: requestData,
    response,
    requestURL,
    hasData: state.document.hasData,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onRequestClick: (event) => {
    event.preventDefault();
    dispatch(request());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APITester);
