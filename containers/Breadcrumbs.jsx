import { connect } from 'react-redux';

import Breadcrumbs from '../components/Breadcrumbs';

const mapStateToProps = () => ({
  topics: ['member', 'member.id'],
});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);