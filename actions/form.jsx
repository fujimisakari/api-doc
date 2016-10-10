import { UPDATE_FORM } from '../constants';

const updateForm = (name, value) => ({
  type: UPDATE_FORM,
  name,
  value,
});

export default updateForm;
