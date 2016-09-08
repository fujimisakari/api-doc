import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import spacing from 'material-ui/styles/spacing';

class MainHead extends Component {

  render() {
    const styles = {
      main: {
        backgroundColor: '#545454',
        color: '#fff',
        display: 'flex',
        height: '57px',
        paddingLeft: spacing.desktopGutter / 2,
        paddingRight: spacing.desktopGutter,
        position: 'relative',
        width: '100%',
        zIndex: 1000,
      },
    };

    return (
      <Paper
        id="mainHead"
        rounded={false}
        style={styles.main}
        zDepth={1}
      >
        <div id="topicPath">
          <ol>
            <li>Document</li>
            {this.props.topics.map(topic => <li>{topic}</li>)}
          </ol>
        </div>
      </Paper>
    );
  }
}

MainHead.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default MainHead;
