import { connect } from 'react-redux';

import MainHead from '../components/MainHead';

const mapStateToProps = () => ({
  topics: ['member', 'member.id'],
});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHead);
