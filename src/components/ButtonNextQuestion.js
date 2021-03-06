import React from 'react';
import PropTypes from 'prop-types';

class ButtonNextQuestion extends React.Component {
  render() {
    const { disableButton, answered, onClick, index } = this.props;
    return (
      <div>
        {!disableButton && answered ? (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ onClick }
            index={ index }
          >
            Próxima
          </button>)
          : null}
      </div>
    );
  }
}

ButtonNextQuestion.propTypes = {
  disableButton: PropTypes.bool.isRequired,
  answered: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ButtonNextQuestion;
