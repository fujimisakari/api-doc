import { connect } from 'react-redux';

import APIDocument from '../components/API/APIDocument';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let requestSchema = {};
  let responseSchema = {};
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    requestSchema = schemaData.request;
    responseSchema = schemaData.response;
  }
  return {
    hasAPISchemaData: state.apiSchema.hasData,
    requestSchema,
    responseSchema,
    url,
  };
}

export default connect(
  mapStateToProps
)(APIDocument);
