import React from 'react';

import TextField from 'material-ui/TextField';

const TextForm = ({ hintText, name, value, onChange }) => {
  const enableFullWidth = true;
  return (
    <div>
      <TextField
        hintText={hintText}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={enableFullWidth}
      />
    </div>
  );
};

TextForm.propTypes = {
  hintText: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default TextForm;
