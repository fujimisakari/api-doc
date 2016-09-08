import React from 'react';
import { fullWhite, grey300 } from 'material-ui/styles/colors';

import NaviList from './NaviList';

export default class Navi extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    const style = {
      backgroundColor: fullWhite,
      width: '269px',
      marginRight: '-270px',
      borderRight: `1px solid ${grey300}`,
      display: 'block',
      float: 'left',
      overflow: 'auto',
      position: 'relative',
      zIndex: 1500,
    };

    return (
      <div id="navi" style={style}>
        <NaviList />
      </div>
    );
  }
}
