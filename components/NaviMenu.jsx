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

const NaviMenu = ({ urlGroups, pathname }) => {
  let urlGroupName = '';
  const pathList = pathname.split('/');
  if (pathList.length > 1 && pathList[1] === 'api') {
    urlGroupName = pathList[2];
  }

  const apiMethodList = urlGroups.map(urlGroup => (
    <ListItem
      key={urlGroup.name}
      style={styles.parentList}
      primaryText={urlGroup.name.charAt(0).toUpperCase() + urlGroup.name.slice(1)}
      primaryTogglesNestedList={isRounded}
      innerDivStyle={styles.innerDivStyle}
      initiallyOpen={urlGroup.name === urlGroupName}
      className="naviItemList"
      nestedItems={urlGroup.urls.map(url =>
        <NestedListWrapper key={url}>
          <Link to={`/api/${urlGroup.name}/${url}`}>
            <ListItem
              style={(pathname === `/api/${urlGroup.name}/${url}`) ? styles.activeChildList : styles.childList}
              primaryText={url}
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
        <Subheader style={styles.subHeaderStyle}>API</Subheader>
        {apiMethodList}
      </List>
    </div>
  );
};

NaviMenu.propTypes = {
  urlGroups: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default NaviMenu;
