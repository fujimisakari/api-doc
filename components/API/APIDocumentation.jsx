import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { apiDocumentationStyles } from '../../styles';
import { SERVER_DOMAIN } from '../../constants';


class APIDocumentation extends Component {

  getStyles() {
    const argumentStyle = { width: '15%', padding: '0 15px' };
    const exampleStyle = { width: '20%', padding: '0 15px' };
    const requiredStyle = { width: '15%', padding: '0 15px' };
    const descriptionStyle = { width: '60%', padding: '0 15px' };

    apiDocumentationStyles.argumentHeader = Object.assign({}, apiDocumentationStyles.baseHeaderColumn, argumentStyle);
    apiDocumentationStyles.exampleHeader = Object.assign({}, apiDocumentationStyles.baseHeaderColumn, exampleStyle);
    apiDocumentationStyles.requiredHeader = Object.assign({}, apiDocumentationStyles.baseHeaderColumn, requiredStyle);
    apiDocumentationStyles.descriptionHeader = Object.assign({}, apiDocumentationStyles.baseHeaderColumn, descriptionStyle);

    apiDocumentationStyles.argumentRow = Object.assign({}, apiDocumentationStyles.baseRowColumn, argumentStyle);
    apiDocumentationStyles.exampleRow = Object.assign({}, apiDocumentationStyles.baseRowColumn, exampleStyle);
    apiDocumentationStyles.requiredRow = Object.assign({}, apiDocumentationStyles.baseRowColumn, requiredStyle);
    apiDocumentationStyles.descriponRow = Object.assign({}, apiDocumentationStyles.baseRowColumn, descriptionStyle);

    return apiDocumentationStyles;
  }


  render() {
    const styles = this.getStyles();
    const testDataList = [
      { argument: 'token',
        example: 'xxxx-xxxx-xxxx',
        required: 'Required',
        description: 'Authentication token (Requires scope: channels:write)' },
      { argument: 'name',
        example: 'mychannel',
        required: 'Required',
        description: 'Name of channel to create' },
    ];

    const text = '{"aaa":"ccc", "bbb":[{"ddd":1,"eee":2},{"ddd":3,"eee":4}]}';
    const jsonBefore = JSON.parse(text);
    const json = JSON.stringify(jsonBefore, null, '    ');

    return (
      <div style={styles.frame}>
        <h2 style={styles.headline}>URL</h2>
        <p>
          This method has the URL <code>{SERVER_DOMAIN}/api/channels.join</code>
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
            {testDataList.map((data, index) =>
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
          {json}
        </pre>
      </div>
    );
  }
}

export default APIDocumentation;
