import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import APIDocument from '../../containers/APIDocument';
import APITester from '../../containers/APITester';
import { apiContentStyles } from '../../styles';
import { DOCUMENT, TESTER } from '../../constants';

class APIContent extends Component {

  getStyles(props) {
    if (props.tabType === DOCUMENT) {
      apiContentStyles.document = apiContentStyles.active;
      apiContentStyles.tester = apiContentStyles.tester;
    } else if (props.tabType === TESTER) {
      apiContentStyles.document = apiContentStyles.tester;
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
        <Paper style={styles.tab} zDepth={1}>
          <Tabs value={this.props.tabType}>
            <Tab style={styles.document} label="Document" value="DOCUMENT" onActive={this.props.onTypeChange}>
              <APIDocument />
            </Tab>
            <Tab style={styles.tester} label="Tester" value="TESTER" onActive={this.props.onTypeChange}>
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
