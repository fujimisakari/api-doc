import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { apiDocumentStyles } from '../../styles';
import { API_URL_BASE } from '../../constants';


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
    if (this.props.hasData === false) {
      return (
        <div />
      );
    }

    // const testDataList = [
    //   { argument: 'token',
    //     example: 'xxxx-xxxx-xxxx',
    //     required: 'Required',
    //     description: 'Authentication token (Requires scope: channels:write)' },
    //   { argument: 'name',
    //     example: 'mychannel',
    //     required: 'Required',
    //     description: 'Name of channel to create' },
    // ];

    // const text = '{"aaa":"ccc", "bbb":[{"ddd":1,"eee":2},{"ddd":3,"eee":4}]}';
    // const jsonBefore = JSON.parse(text);

    const styles = this.getStyles();
    const responseJson = JSON.stringify(this.props.response, null, '    ');
    const url = `${API_URL_BASE}/${this.props.method}`;

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
            {this.props.request.arguments.map((data, index) =>
              <TableRow key={index}>
                <TableRowColumn style={styles.argumentRow}><code>{data.argument}</code></TableRowColumn>
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
  method: React.PropTypes.string.isRequired,
  request: React.PropTypes.object.isRequired,
  response: React.PropTypes.object.isRequired,
  hasData: React.PropTypes.bool.isRequired,
};

export default APIDocument;
