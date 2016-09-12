import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import { breadcrumbsStyles as styles } from '../styles';

const Breadcrumbs = ({ pathname }) => {
  const pathList = pathname.split('/');
  const topics = [];
  if (pathList[1] === '') {
    topics.push('Get Started');
  } else {
    for (let i = 1; i < pathList.length; i++) {
      if (pathList[i] === 'api') {
        topics.push(pathList[i].toUpperCase());
      } else {
        topics.push(pathList[i].charAt(0).toUpperCase() + pathList[i].slice(1));
      }
    }
  }

  return (
    <Paper
      id="breadcrumbs"
      rounded={false}
      style={styles.frame}
      zDepth={1}
    >
      <div id="topicPath">
        <ol>
          <li key={'Document'}>Document</li>
          {topics.map(topic => <li key={topic}>{topic}</li>)}
        </ol>
      </div>
    </Paper>
  );
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
