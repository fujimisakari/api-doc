import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { apiDocumentStyles } from '../../styles';
import { API_URL_DOMAIN, API_URL_PREFIX } from '../../config';

class APIDocument extends Component {

  getStyles() {
    const argumentStyle = { width: '15%', padding: '0 15px' };
    const exampleStyle = { width: '20%', padding: '0 15px' };
    const requiredStyle = { width: '15%', padding: '0 15px' };
    const descriptionStyle = { width: '60%', padding: '0 15px' };

    apiDocumentStyles.argumentHeader = Object.assign({}, apiDocumentStyles.baseHeaderColumn, argumentStyle);
    apiDocumentStyles.exampleHeader = Object.assign({}, apiDocumentStyles.baseHeaderColumn, exampleStyle);
    apiDocumentStyles.requiredHeader = Object.assign({}, apiDocumentStyles.baseHeaderColumn, requiredStyle);
    apiDocumentStyles.descriptionHeader = Object.assign({}, apiDocumentStyles.baseHeaderColumn, descriptionStyle);

    apiDocumentStyles.argumentRow = Object.assign({}, apiDocumentStyles.baseRowColumn, argumentStyle);
    apiDocumentStyles.exampleRow = Object.assign({}, apiDocumentStyles.baseRowColumn, exampleStyle);
    apiDocumentStyles.requiredRow = Object.assign({}, apiDocumentStyles.baseRowColumn, requiredStyle);
    apiDocumentStyles.descriponRow = Object.assign({}, apiDocumentStyles.baseRowColumn, descriptionStyle);

    return apiDocumentStyles;
  }

  render() {
    if (this.props.hasAPISchemaData === false) {
      return (
        <div />
      );
    }

    const styles = this.getStyles();
    const responseJson = JSON.stringify(this.props.responseSchema, null, '    ');
    const url = `${API_URL_DOMAIN}${API_URL_PREFIX}/${this.props.url}`;

    return (
      <div style={styles.frame}>
        <h2 style={styles.headline}>URL</h2>
        <p>
          This method has the URL <code>{url}</code>
        </p>

        <h2 style={styles.headline}>Arguments</h2>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow key={'header'} style={styles.tableRow}>
              <TableHeaderColumn style={styles.argumentHeader}>Argument</TableHeaderColumn>
              <TableHeaderColumn style={styles.exampleHeader}>Example</TableHeaderColumn>
              <TableHeaderColumn style={styles.requiredHeader}>Required</TableHeaderColumn>
              <TableHeaderColumn style={styles.descriptionHeader}>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.requestSchema.arguments.map((data, index) =>
              <TableRow key={index}>
                <TableRowColumn style={styles.argumentRow}><code>{data.name}</code></TableRowColumn>
                <TableRowColumn style={styles.exampleRow}><code>{data.example}</code></TableRowColumn>
                <TableRowColumn style={styles.requiredRow}>{data.required}</TableRowColumn>
                <TableRowColumn style={styles.descriponRow}>{data.description}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <h2 style={styles.headline}>Response</h2>
        <pre>
          {responseJson}
        </pre>
      </div>
    );
  }
}

APIDocument.propTypes = {
  url: React.PropTypes.string.isRequired,
  requestSchema: React.PropTypes.object.isRequired,
  responseSchema: React.PropTypes.object.isRequired,
  hasAPISchemaData: React.PropTypes.bool.isRequired,
};

export default APIDocument;
