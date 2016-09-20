import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import APIDocument from '../../containers/APIDocument';
import APITester from './APITester';
import { apiContentStyles } from '../../styles';
import { DOCUMENT, TESTER } from '../../constants';

class APIContent extends Component {

  getStyles(props) {
    if (props.tabType === DOCUMENT) {
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
        <h1 style={styles.title}>{this.props.title}</h1>
        <p style={styles.desc}>{this.props.description}</p>
        <Paper style={styles.document} zDepth={1}>
          <Tabs
            value={this.props.tabType}
            onChange={this.props.onTypeChange}
          >
            <Tab style={styles.documentation} label="Documentation" value="DOCUMENT" >
              <APIDocument />
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabType: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default APIContent;
