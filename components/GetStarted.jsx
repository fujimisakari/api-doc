import React from 'react';

import { getStartedStyles as styles } from '../styles';

const GetStarted = () => (
  <div id="mainCotent" style={styles.frame}>
    <h1 style={styles.title}>Get Started</h1>
    <p style={styles.desc}>
      Get started with REST APIs can be used from your application.
      This page explains how each API is called.
    </p>
  </div>
);

export default GetStarted;
