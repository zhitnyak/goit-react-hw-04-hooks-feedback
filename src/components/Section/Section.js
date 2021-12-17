import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={css.box}>
    <h1>{title}</h1>
    {children}
  </section>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;
