import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, nameButton, onClick, testId } = props;
  return (
    <button
      type="button"
      className={ className }
      onClick={ onClick }
      data-testid={ testId }
    >
      {nameButton}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  nameButton: PropTypes.node.isRequired,
  testId: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
