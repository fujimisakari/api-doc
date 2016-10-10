import { connect } from 'react-redux';

import APIDocument from '../components/API/APIDocument';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let request = {};
  let response = {};
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    request = schemaData.request;
    response = schemaData.response;
  }
  return {
    method: url,
    request,
    response,
    hasData: state.apiSchema.hasData,
  };
}

export default connect(
  mapStateToProps
)(APIDocument);
