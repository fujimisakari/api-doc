import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import { breadcrumbsStyles as styles } from '../styles';

const Breadcrumbs = ({ topics }) => (
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

Breadcrumbs.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default Breadcrumbs;
