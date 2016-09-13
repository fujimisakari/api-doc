import React from 'react';

import MarkdownElement from '../MarkdownElement';
import GetStarted from './GetStarted.md';
import { overviewStyles as styles } from '../../styles';

export default () => (
  <div className="content" style={styles.frame}>
    <MarkdownElement text={GetStarted} />
    <h1 style={styles.title}>Get Started</h1>
    <p style={styles.desc}>
      Get started with REST APIs can be used from your application.
      This page explains how each API is called.
    </p>
  </div>
);
