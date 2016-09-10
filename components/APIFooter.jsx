import React from 'react';
import Paper from 'material-ui/Paper';
import { colors } from 'material-ui/styles';

const styles = {
  footer: {
    backgroundColor: '#545454',
    color: '#fff',
    display: 'flex',
    height: '120px',
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    zIndex: 1000,
  },
  a: {
    color: colors.darkWhite,
  },
  p: {
    margin: '0 auto',
    padding: '50px 0',
    color: colors.lightWhite,
  },
  iconButton: {
    color: colors.darkWhite,
  },
};

const APIFooter = () => (
  <Paper
    rounded={false}
    style={styles.footer}
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
