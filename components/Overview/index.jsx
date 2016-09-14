import React from 'react';

import MarkdownElement from '../MarkdownElement';
import Context from './Context.md';
import { contentStyles as styles } from '../../styles';

export default () => (
  <div className="content" style={styles.frame}>
    <MarkdownElement text={Context} />
  </div>
);
