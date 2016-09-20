import { connect } from 'react-redux';

import APIDocument from '../components/API/APIDocument';

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
    response = schemaData.response;
  }
  return {
    method,
    request,
    response,
    hasData: state.document.hasData,
  };
}

export default connect(
  mapStateToProps
)(APIDocument);
