import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

const mapStateToProps = (state) => {
  if (state.apiSchema.hasData) {
    return { urlGroups: state.apiSchema.urlGroups };
  }
  return { urlGroups: [{ name: '', urls: [] }] };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviMenu);
