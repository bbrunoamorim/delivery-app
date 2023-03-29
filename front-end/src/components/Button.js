import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, onClick, testId, disabled, nameBtn } = props;
  return (
    <button
      type="button"
      className={ className }
      onClick={ onClick }
      data-testid={ testId }
      disabled={ disabled }
    >
      {nameBtn}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  nameBtn: PropTypes.string.isRequired,
};

export default Button;
