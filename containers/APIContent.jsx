import { connect } from 'react-redux';

import setTabType from '../actions/tab';
import APIContent from '../components/API/APIContent';

const mapStateToProps = (state) => ({
  tabType: state.tab,
});

function mapDispatchToProps(dispatch) {
  return {
    onTypeChange: (tabType) => {
      dispatch(setTabType(tabType));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APIContent);
