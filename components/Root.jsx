import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Title from 'react-title-component';

import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import customRawTheme from './customTheme';
import Breadcrumbs from './Breadcrumbs';
import NaviMenu from '../containers/NaviMenu';
import { APP_NAME } from '../config';
import { rootStyles as styles } from '../styles';

require('../styles/main.css');

class Root extends Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(customRawTheme) };
  }

  render() {
    return (
      <div>
        <Title render={`${APP_NAME} API Document`} />
        <header className="header">
          <AppBar
            title={<Link to="/" style={styles.appBarTitle}>{`${APP_NAME} API Document`}</Link>}
            style={styles.appBar}
            zDepth={0}
            showMenuIconButton={false}
          />
        </header>
        <div id="wrapper">
          <NaviMenu pathname={this.props.location.pathname} />
          <div style={styles.contents}>
            <Breadcrumbs pathname={this.props.location.pathname} />
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

Root.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Root;
