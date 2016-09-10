import React, { PropTypes, Component } from 'react';

import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { typography, colors } from 'material-ui/styles';

import customRawTheme from '../src/customTheme';
import Navi from './Navi';
import Breadcrumbs from '../containers/Breadcrumbs';


class Root extends Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(customRawTheme) };
  }

  getStyles() {
    const styles = {
      appBar: {
        backgroundColor: colors.deepPurpleA200,
        top: 0,
      },
      appBarTitle: {
        fontSize: 24,
        color: typography.textFullWhite,
        fontWeight: typography.fontWeightLight,
      },
      contents: {
        // float: 'right',
        marginLeft: '270px',
        backgroundColor: '#f8f8f8',
      },
    };
    return styles;
  }

  render() {
    const styles = this.getStyles();

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
