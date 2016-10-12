import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { colors } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

import TextForm from '../../containers/TextForm';
import { API_URL_DOMAIN } from '../../config';
import { apiTesterStyles } from '../../styles';

class APITester extends Component {

  getStyles() {
    const argumentStyle = { width: '20%', padding: '0 15px' };
    const requiredStyle = { width: '20%', padding: '0 15px' };
    const valueStyle = { width: '60%', padding: '0 15px' };

    apiTesterStyles.argumentHeader = Object.assign({}, apiTesterStyles.baseHeaderColumn, argumentStyle);
    apiTesterStyles.requiredHeader = Object.assign({}, apiTesterStyles.baseHeaderColumn, requiredStyle);
    apiTesterStyles.descriptionHeader = Object.assign({}, apiTesterStyles.baseHeaderColumn, valueStyle);

    apiTesterStyles.argumentRow = Object.assign({}, apiTesterStyles.baseRowColumn, argumentStyle);
    apiTesterStyles.requiredRow = Object.assign({}, apiTesterStyles.baseRowColumn, requiredStyle);
    apiTesterStyles.valueRow = Object.assign({}, apiTesterStyles.baseRowColumn, valueStyle);

    return apiTesterStyles;
  }

  render() {
    if (this.props.hasAPISchemaData === false) {
      return (
        <div />
      );
    }

    const styles = this.getStyles();
    const disableSelectable = false;

    let responseBlock;
    if (Object.keys(this.props.response).length > 0) {
      const responseJson = JSON.stringify(this.props.response, null, '    ');
      responseBlock = (
        <div>
          <h2 style={styles.headline}>Response</h2>
          <p>
            <code>{this.props.httpMethod}</code> : <code>{API_URL_DOMAIN}{this.props.requestURL}</code>
          </p>
          <pre>
            {responseJson}
          </pre>
        </div>
      );
    }

    return (
      <div style={styles.frame}>

        <h2 style={styles.headline}>Arguments</h2>

        <Table selectable={disableSelectable}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow key={'header'} style={styles.tableRow}>
              <TableHeaderColumn style={styles.argumentHeader}>Argument</TableHeaderColumn>
              <TableHeaderColumn style={styles.requiredHeader} />
              <TableHeaderColumn style={styles.descriptionHeader}>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.requestSchema.arguments.map((data, index) =>
              <TableRow key={index}>
                <TableRowColumn style={styles.argumentRow}><code>{data.name}</code></TableRowColumn>
                <TableRowColumn style={styles.requiredRow}>{data.required}</TableRowColumn>
                <TableRowColumn style={styles.valueRow}>
                  <div>
                    <TextForm hintText={data.example} name={data.name} />
                  </div>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div style={styles.requestBtnDiv}>
          <RaisedButton
            label="Request"
            backgroundColor={colors.deepPurpleA200}
            labelColor={colors.fullWhite}
            labelStyle={styles.labelStyle}
            onClick={this.props.onRequestClick}
          />
        </div>

        {responseBlock}
      </div>
    );
  }
}

APITester.propTypes = {
  requestSchema: React.PropTypes.object.isRequired,
  httpMethod: React.PropTypes.string.isRequired,
  response: React.PropTypes.object.isRequired,
  requestURL: React.PropTypes.string.isRequired,
  hasAPISchemaData: React.PropTypes.bool.isRequired,
  onRequestClick: React.PropTypes.func.isRequired,
};

export default APITester;
