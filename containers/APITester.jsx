import { connect } from 'react-redux';

import request from '../actions/requestTester';
import APITester from '../components/API/APITester';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let httpMethod = '';
  let requestSchema = {};
  let response = {};
  let requestURL = '';
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    httpMethod = schemaData.method;
    requestSchema = schemaData.requestSchema;
    response = state.testerResponse.data;
    requestURL = state.testerResponse.requestURL;
  }
  return {
    httpMethod,
    requestSchema,
    response,
    requestURL,
    hasAPISchemaData: state.apiSchema.hasData,
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
