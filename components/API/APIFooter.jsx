import React from 'react';
import Paper from 'material-ui/Paper';

import { apiFooterStyles as styles } from '../../styles';

const APIFooter = () => (
  <Paper
    rounded={false}
    style={styles.frame}
    zDepth={1}
  />
);

// <p style={styles.p}>
//   {'Createt by '}
//   <a
//     style={styles.a}
//     href="https://github.com/fujimisakari"
//   >
//     fujimisakari
//   </a>.
// </p>

export default APIFooter;
