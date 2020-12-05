import React from 'react';
import PropTypes from 'prop-types';
import './QuoteSection.scss';

const QuoteSection = (props) => (
  <section className="quote-section">
    <blockquote className="quote">
      {props.children}
    </blockquote>
    <em className="quote-attribution">{props.attribution}</em>
  </section>
);

QuoteSection.propTypes = {
  attribution: PropTypes.string,
};

export default QuoteSection;
