import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import { breadcrumbsStyles as styles } from '../styles';

const Breadcrumbs = ({ topics }) => (
  <Paper
    id="mainHead"
    rounded={false}
    style={styles.main}
    zDepth={1}
  >
    <div id="topicPath">
      <ol>
        <li>Document</li>
        {topics.map(topic => <li>{topic}</li>)}
      </ol>
    </div>
  </Paper>
);

Breadcrumbs.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default Breadcrumbs;
