import { connect } from 'react-redux';

import request from '../actions/requestTester';
import APITester from '../components/API/APITester';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let requestSchema = {};
  let response = {};
  let requestURL = '';
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    requestSchema = schemaData.requestSchema;
    response = state.testerResponse.data;
    requestURL = state.testerResponse.requestURL;
  }
  return {
    hasAPISchemaData: state.apiSchema.hasData,
    requestSchema,
    response,
    requestURL,
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
