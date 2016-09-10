import React from 'react';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

const styles = {
  groupStyle: {
    marginBottom: '15px',
  },
  parentList: {
    fontSize: '14px',
    paddingLeft: 15,
    // height: '38px',
    // lineHeight: '38px',
  },
  childList: {
    paddingLeft: 15,
    fontSize: '13px',
  },
  innerDivStyle: {
    padding: '10px',
  },
  subHeaderStyle: {
    padding: '0 25px',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    height: '38px',
    lineHeight: '38px',
  },
};

const isRounded = true;

const NaviList = () => (
  <div>
    <List>
      <div style={styles.groupStyle}>
        <Link to="/get-started">
          <ListItem
            style={styles.parentList}
            primaryText="Get Started"
            innerDivStyle={styles.innerDivStyle}
            href="#/get-started"
          />
        </Link>
        <ListItem
          style={styles.parentList}
          primaryText="Overview"
          innerDivStyle={styles.innerDivStyle}
        />
      </div>
      <Subheader style={styles.subHeaderStyle}>APIs</Subheader>
      <ListItem
        style={styles.parentList}
        primaryText="Member APIs1"
        primaryTogglesNestedList={isRounded}
        innerDivStyle={styles.innerDivStyle}
        className="naviList"
        nestedItems={[
          <Link to="/api">
            <ListItem
              style={styles.childList}
              primaryText="api"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>,
          <Link to="/api">
            <ListItem
              style={styles.childList}
              primaryText="Installation"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>,
          <Link to="/api">
            <ListItem
              style={styles.childList}
              primaryText="Usage"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>,
          <Link to="/api">
            <ListItem
              style={styles.childList}
              primaryText="Server Rendering"
              href="#/api/server-rendering"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>,
          <Link to="/api">
            <ListItem
              style={styles.childList}
              primaryText="Examples"
              href="#/api/examples"
              innerDivStyle={styles.innerDivStyle}
            />
          </Link>,
        ]}
      />
      <ListItem
        style={styles.parentList}
        primaryText="Member APIs2"
        primaryTogglesNestedList={isRounded}
        innerDivStyle={styles.innerDivStyle}
        className="naviList"
        nestedItems={[
          <ListItem
            style={styles.childList}
            primaryText="Prerequisites"
            value="/get-started/prerequisites"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Installation"
            value="/get-started/installation"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Usage"
            value="/get-started/usage"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Server Rendering"
            value="/get-started/server-rendering"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Examples"
            value="/get-started/examples"
            innerDivStyle={styles.innerDivStyle}
          />,
        ]}
      />
      <ListItem
        style={styles.parentList}
        primaryText="Member APIs3"
        primaryTogglesNestedList={isRounded}
        innerDivStyle={styles.innerDivStyle}
        className="naviList"
        nestedItems={[
          <ListItem
            style={styles.childList}
            primaryText="Prerequisites"
            value="/get-started/prerequisites"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Installation"
            value="/get-started/installation"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Usage"
            value="/get-started/usage"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Server Rendering"
            value="/get-started/server-rendering"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Examples"
            value="/get-started/examples"
            innerDivStyle={styles.innerDivStyle}
          />,
        ]}
      />
      <ListItem
        style={styles.parentList}
        primaryText="Member APIs4"
        primaryTogglesNestedList={isRounded}
        innerDivStyle={styles.innerDivStyle}
        className="naviList"
        nestedItems={[
          <ListItem
            style={styles.childList}
            primaryText="Prerequisites"
            value="/get-started/prerequisites"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Installation"
            value="/get-started/installation"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Usage"
            value="/get-started/usage"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Server Rendering"
            value="/get-started/server-rendering"
            innerDivStyle={styles.innerDivStyle}
          />,
          <ListItem
            style={styles.childList}
            primaryText="Examples"
            value="/get-started/examples"
            innerDivStyle={styles.innerDivStyle}
          />,
        ]}
      />
    </List>
  </div>
);

export default NaviList;
