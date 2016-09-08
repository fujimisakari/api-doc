import React from 'react';

import MainHead from '../containers/MainHead';
import MainContent from '../containers/MainContent';
import MainFooter from './MainFooter';

const styles = {
  contents: {
    float: 'right',
    marginLeft: '270px',
    backgroundColor: '#f8f8f8',
  },
};

const Main = () => (
  <div style={styles.contents}>
    <MainHead />
    <MainContent />
    <MainFooter />
  </div>
);

export default Main;
