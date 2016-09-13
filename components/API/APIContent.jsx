import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import APIDocumentation from './APIDocumentation';
import APITester from './APITester';
import { apiContentStyles } from '../../styles';
import { DOCUMENTATION, TESTER } from '../../constants';

class APIContent extends Component {

  getStyles(props) {
    if (props.tabType === DOCUMENTATION) {
      apiContentStyles.documentation = apiContentStyles.active;
      apiContentStyles.tester = apiContentStyles.tester;
    } else if (props.tabType === TESTER) {
      apiContentStyles.documentation = apiContentStyles.tester;
      apiContentStyles.tester = apiContentStyles.active;
    }
    return apiContentStyles;
  }

  render() {
    const styles = this.getStyles(this.props);

    return (
      <div className="content" style={styles.frame}>
        <h1 style={styles.title}>REST API reference</h1>
        <p style={styles.desc}>REST APIs can be used from your application. This page explains how each API is called.</p>
        <Paper style={styles.document} zDepth={1}>
          <Tabs
            value={this.props.tabType}
            onChange={this.props.onTypeChange}
          >
            <Tab style={styles.documentation} label="Documentation" value="DOCUMENTATION" >
              <APIDocumentation />
            </Tab>
            <Tab style={styles.tester} label="Tester" value="TESTER">
              <APITester />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

APIContent.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
  tabType: PropTypes.string.isRequired,
};

export default APIContent;
