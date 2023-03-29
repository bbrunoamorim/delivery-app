import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, className, value, onChange, placeholder, testId } = props;
  return (
    <input
      type={ type }
      className={ className }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      data-testid={ testId }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
};

export default Input;
