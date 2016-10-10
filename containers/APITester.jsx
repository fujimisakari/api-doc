import { connect } from 'react-redux';

import request from '../actions/requestTester';
import APITester from '../components/API/APITester';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let requestData = {};
  let response = {};
  let requestURL = '';
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    requestData = schemaData.request;
    response = state.testerResponse.data;
    requestURL = state.testerResponse.requestURL;
  }
  return {
    method: url,
    request: requestData,
    response,
    requestURL,
    hasData: state.apiSchema.hasData,
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
