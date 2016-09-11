import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import { naviStyles as styles } from '../styles';

const isRounded = true;

//
// Improve for below issue
// warning: Unknown prop `nestedLevel` on <a> tag. Remove this prop from the element. For details,
//
const NestedListWrapper = ({ children, nestedLevel }) => (
  <div className={`nestedLevel${nestedLevel}`}>
    {children}
  </div>
);

NestedListWrapper.propTypes = {
  nestedLevel: PropTypes.number,
  children: PropTypes.node,
};

const NaviMenu = ({ methodInfoList, pathname }) => {
  const apiMethodList = methodInfoList.map(methodInfo => (
    <ListItem
      key={methodInfo.methodGroup}
      style={styles.parentList}
      primaryText={methodInfo.methodGroup}
      primaryTogglesNestedList={isRounded}
      innerDivStyle={styles.innerDivStyle}
      className="naviItemList"
      nestedItems={methodInfo.methodItems.map(method =>
        <NestedListWrapper key={method}>
          <Link to={`/api/${method}`}>
            <ListItem
              style={(pathname === `/api/${method}`) ? styles.activeChildList : styles.childList}
              primaryText={method}
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>
        </NestedListWrapper>
      )}
    />
  ));

  return (
    <div id="naviMenu" style={styles.frame}>
      <List>
        <div style={styles.groupStyle}>
          <Link key={'Overview'} to="/overview">
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
