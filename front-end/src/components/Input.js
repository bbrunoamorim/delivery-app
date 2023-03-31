import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    className,
    value,
    onChange,
    placeholder,
    testId,
    id,
    onKeyDown,
  } = props;
  return (
    <input
      type={ type }
      className={ className }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      data-testid={ testId }
      id={ id }
      onKeyDown={ onKeyDown }
    />
  );
}

Input.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Input;
