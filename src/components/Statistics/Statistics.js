import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={css.content}>Good: {good}</p>
    <p className={css.content}>Neutral: {neutral}</p>
    <p className={css.content}>Bad: {bad}</p>
    <p className={css.content}>Total: {total}</p>
    <p className={css.content}>Positive feedback: {positivePercentage}</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default Statistics;
