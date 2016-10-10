import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

const mapStateToProps = (state) => {
  if (state.apiSchema.hasData) {
    return { methodInfoList: state.apiSchema.apiMethods };
  }
  return { methodInfoList: [{ group: '', methods: [] }] };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviMenu);
