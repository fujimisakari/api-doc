import { connect } from 'react-redux';

import APIDocument from '../components/API/APIDocument';

function getURL(state) {
  const pathList = state.routing.locationBeforeTransitions.pathname.split('/');
  return pathList.slice(3).join('/');
}

function mapStateToProps(state) {
  const url = getURL(state);
  let httpMethod = '';
  let requestSchema = {};
  let responseSchema = {};
  if (state.apiSchema.hasData) {
    const schemaData = state.apiSchema.schemaData[url];
    httpMethod = schemaData.method;
    requestSchema = schemaData.requestSchema;
    responseSchema = schemaData.responseSchema;
  }
  return {
    url,
    httpMethod,
    requestSchema,
    responseSchema,
    hasAPISchemaData: state.apiSchema.hasData,
  };
}

export default connect(
  mapStateToProps
)(APIDocument);
