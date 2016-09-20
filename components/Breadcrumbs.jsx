import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import { breadcrumbsStyles as styles } from '../styles';

const Breadcrumbs = ({ pathname }) => {
  const pathList = pathname.split('/');
  const topics = [];
  if (pathList[1] === '') {
    topics.push('Get Started');
  } else if (pathList[1] === 'api') {
    topics.push(pathList[1].toUpperCase());
    topics.push(pathList[2].charAt(0).toUpperCase() + pathList[2].slice(1));
    topics.push(pathList.slice(3).join('/'));
  } else {
    topics.push(pathList[1].charAt(0).toUpperCase() + pathList[1].slice(1));
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
