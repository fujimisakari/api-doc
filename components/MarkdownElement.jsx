import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import highlight from 'highlight.js';

require('../styles/markdown.css');

class MarkdownElement extends Component {

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: (code, lang) => (
        highlight(lang, code).value
      ),
    });
  }

  render() {
    const {
      text,
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    );
    /* eslint-enable */
  }
}

MarkdownElement.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default MarkdownElement;
