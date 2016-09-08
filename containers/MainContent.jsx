import { connect } from 'react-redux';

import setTabType from '../actions/tab';
import MainContent from '../components/MainContent';

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
)(MainContent);
