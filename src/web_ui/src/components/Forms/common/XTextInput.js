import * as React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import { hasValue } from './inputHelpers';
import { PropTypes } from 'prop-types';

const XTextInput = ({ name, ...props }) => {
  const [field, meta] = useField({ name });
  const error = hasValue(meta.error) ? meta.error : undefined;
  const showError = Boolean(error && meta.touched);
  return (
    <TextField
      {...field}
      {...props}
      margin="normal"
      fullWidth
      error={showError}
      helperText={showError && error}
      value={field.value || ''}
    />
  );
};

XTextInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default XTextInput;
