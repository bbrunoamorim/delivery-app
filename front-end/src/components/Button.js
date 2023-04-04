import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, onClick, testId, disabled, nameBtn, id } = props;
  return (
    <button
      type="button"
      className={ className }
      onClick={ onClick }
      // onSubmit={ onSubmit }
      data-testid={ testId }
      disabled={ disabled }
      id={ id }
    >
      {nameBtn}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  nameBtn: PropTypes.string.isRequired,
};

export default Button;
