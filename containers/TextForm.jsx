import { connect } from 'react-redux';

import updateForm from '../actions/form';
import TextForm from '../components/TextForm';

function mapStateToProps(state, params) {
  let value = '';
  if (params.name in state.form) {
    value = state.form[params.name];
  }
  return {
    hintText: params.hintText,
    name: params.name,
    value,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onChange: (event, value) => {
    dispatch(updateForm(event.target.name, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextForm);
