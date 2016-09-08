import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import { colors } from 'material-ui/styles';

import { DOCUMENTATION, TESTER } from '../constants/TabTypes';
import Documentation from './Documentation';
import Tester from './Tester';

class MainContent extends Component {

  getStyles(props) {
    const styles = {
      frame: {
        margin: '40px auto',
        textAlign: 'left',
        width: '78%',
        minWidth: '650px',
      },
      title: {
        fontSize: '40px',
        lineHeight: '50px',
        marginTop: '-5px',
        marginBottom: '25px',
        color: '#333',
        fontWeight: 'normal',
        fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
      },
      desc: {
        fontSize: '18px',
        lineHeight: '30px',
        marginTop: '-6px',
        fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
      },
      document: {
        paddingBottom: '35px',
      },
      active: {
        backgroundColor: colors.grey700,
      },
      inactive: {
        backgroundColor: colors.grey500,
      },
    };

    if (props.tabType === DOCUMENTATION) {
      styles.documentation = styles.active;
      styles.tester = styles.tester;
    } else if (props.tabType === TESTER) {
      styles.documentation = styles.tester;
      styles.tester = styles.active;
    }

    return styles;
  }

  render() {
    const styles = this.getStyles(this.props);
    return (
      <div id="mainCotent" style={styles.frame}>
        <h1 style={styles.title}>REST API reference</h1>
        <p style={styles.desc}>REST APIs can be used from your application. This page explains how each API is called.</p>
        <Paper style={styles.document} zDepth={1}>
          <Tabs
            value={this.props.tabType}
            onChange={this.props.onTypeChange}
          >
            <Tab style={styles.documentation} label="Documentation" value="DOCUMENTATION" >
              <Documentation />
            </Tab>
            <Tab style={styles.tester} label="Tester" value="TESTER">
              <Tester />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

MainContent.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
  tabType: PropTypes.string.isRequired,
};

export default MainContent;
