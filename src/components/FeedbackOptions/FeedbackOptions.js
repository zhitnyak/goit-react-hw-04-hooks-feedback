import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((el, idx) => (
    <Fragment key={idx}>
      <button
        className={css.btn}
        onClick={() => onLeaveFeedback(el)}
        type="button"
      >
        {el}
      </button>
    </Fragment>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
