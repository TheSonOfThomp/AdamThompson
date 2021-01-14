import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuoteSection.module.scss';

const QuoteSection = (props) => (
  <section className={styles.quote_section}>
    <blockquote className={styles.quote}>
      {props.children}
    </blockquote>
    <em className={styles.quote_attribution}>{props.attribution}</em>
  </section>
);

QuoteSection.propTypes = {
  attribution: PropTypes.string,
};

export default QuoteSection;
