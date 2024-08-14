import React, { ComponentProps } from "react"
import PropTypes from "prop-types"
import styles from "./QuoteSection.module.scss"
import { Quote } from "../../components/Quote"

interface QuoteSectionProps extends ComponentProps<"section"> {
  attribution?: string
}
const QuoteSection = ({ children, attribution }) => (
  <section className={styles.quote_section}>
    <Quote quote={children} attribution={attribution} />
  </section>
)

QuoteSection.propTypes = {
  attribution: PropTypes.string,
}

export default QuoteSection
