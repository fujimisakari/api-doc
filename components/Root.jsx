import React, { PropTypes, Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Title from 'react-title-component';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Breadcrumbs from '../containers/Breadcrumbs';
import Navi from './Navi';
import customRawTheme from '../src/customTheme';
import { rootStyles as styles } from '../styles';

class Root extends Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(customRawTheme) };
  }

  render() {
    return (
      <div>
        <Title render="API Document" />
        <header className="header">
          <AppBar
            title="API Document"
            style={styles.appBar}
            titleStyle={styles.appBarTitle}
            zDepth={0}
            showMenuIconButton={false}
          />
        </header>
        <div id="wrapper">
          <Navi />
          <div style={styles.contents}>
            <Breadcrumbs />
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.object,
};

Root.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Root;
