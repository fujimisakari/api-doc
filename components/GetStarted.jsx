import React, { Component } from 'react';

import { colors } from 'material-ui/styles';


class GetStarted extends Component {

  getStyles() {
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
    };

    return styles;
  }

  render() {
    const styles = this.getStyles();
    return (
      <div id="mainCotent" style={styles.frame}>
        <h1 style={styles.title}>Get Started</h1>
        <p style={styles.desc}>
          Get started with REST APIs can be used from your application.
          This page explains how each API is called.
        </p>
      </div>
    );
  }
}

export default GetStarted;
