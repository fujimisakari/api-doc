import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

const mapStateToProps = (state) => {
  if (state.apiSchema.hasData) {
    return { urlGroupList: state.apiSchema.apiURLs };
  }
  return { urlGroupList: [{ name: '', urls: [] }] };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviMenu);
