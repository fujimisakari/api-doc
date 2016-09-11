import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import { naviStyles as styles } from '../styles';

const isRounded = true;

const NaviMenu = ({ methodInfoList, pathname }) => {
  const apiMethodList = methodInfoList.map(methodInfo => (
    <ListItem
      style={styles.parentList}
      primaryText={methodInfo.methodGroup}
      primaryTogglesNestedList={isRounded}
      innerDivStyle={styles.innerDivStyle}
      className="naviItemList"
      nestedItems={[
        methodInfo.methodItems.map(method =>
          <Link to={`/api/${method}`}>
            <ListItem
              style={(pathname === `/api/${method}`) ? styles.activeChildList : styles.childList}
              primaryText={method}
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>
        ),
      ]}
    />
  ));

  return (
    <div id="naviMenu" style={styles.frame}>
      <List>
        <div style={styles.groupStyle}>
          <Link to="/overview">
            <ListItem
              style={(pathname === '/overview') ? styles.activeParentList : styles.parentList}
              primaryText="Overview"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>
        </div>
        <Subheader style={styles.subHeaderStyle}>APIs</Subheader>
        {apiMethodList}
      </List>
    </div>
  );
};

NaviMenu.propTypes = {
  methodInfoList: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default NaviMenu;
