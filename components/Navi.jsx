import React from 'react';

import NaviList from './NaviList';
import { naviStyles as styles } from '../styles';

export default class Navi extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    return (
      <div id="navi" style={styles.frame}>
        <NaviList />
      </div>
    );
  }
}
