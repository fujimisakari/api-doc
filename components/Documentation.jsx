import React, { Component } from 'react';
import { colors } from 'material-ui/styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { SERVER_DOMAIN } from '../constants/env';


class Documentation extends Component {

  getStyles() {
    const styles = {
      main: {
        padding: '0 20px',
      },
      headline: {
        fontSize: 24,
        margin: '35px 0 12px 0',
        fontWeight: 400,
      },
      tableRow: {
        borderBottom: '2px solid',
        borderColor: colors.deepPurpleA200,
      },
      baseHeaderColumn: {
        color: colors.darkBlack,
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'left',
      },
      baseRowColumn: {
        fontSize: 15,
        whiteSpace: 'normal',
        textOverflow: 'clip',
      },
    };

    const argumentStyle = { width: '15%', padding: '0 15px' };
    const exampleStyle = { width: '20%', padding: '0 15px' };
    const requiredStyle = { width: '15%', padding: '0 15px' };
    const descriptionStyle = { width: '60%', padding: '0 15px' };

    styles.argumentHeader = Object.assign({}, styles.baseHeaderColumn, argumentStyle);
    styles.exampleHeader = Object.assign({}, styles.baseHeaderColumn, exampleStyle);
    styles.requiredHeader = Object.assign({}, styles.baseHeaderColumn, requiredStyle);
    styles.descriptionHeader = Object.assign({}, styles.baseHeaderColumn, descriptionStyle);

    styles.argumentRow = Object.assign({}, styles.baseRowColumn, argumentStyle);
    styles.exampleRow = Object.assign({}, styles.baseRowColumn, exampleStyle);
    styles.requiredRow = Object.assign({}, styles.baseRowColumn, requiredStyle);
    styles.descriponRow = Object.assign({}, styles.baseRowColumn, descriptionStyle);

    return styles;
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

    const text = '{\"aaa\":\"ccc\", \"bbb\":[{\"ddd\":1,\"eee\":2},{\"ddd\":3,\"eee\":4}]}';
    const jsonBefore = JSON.parse(text);
    const json = JSON.stringify(jsonBefore, null, '    ');

    return (
      <div style={styles.main}>
        <h2 style={styles.headline}>URL</h2>
        <p>
          This method has the URL <code>{SERVER_DOMAIN}/api/channels.join</code>
        </p>

        <h2 style={styles.headline}>Arguments</h2>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow style={styles.tableRow}>
              <TableHeaderColumn style={styles.argumentHeader}>Argument</TableHeaderColumn>
              <TableHeaderColumn style={styles.exampleHeader}>Example</TableHeaderColumn>
              <TableHeaderColumn style={styles.requiredHeader}>Required</TableHeaderColumn>
              <TableHeaderColumn style={styles.descriptionHeader}>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {testDataList.map(data =>
              <TableRow>
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

export default Documentation;
