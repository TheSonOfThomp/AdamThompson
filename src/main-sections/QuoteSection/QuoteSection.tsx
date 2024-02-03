import React, { ComponentProps } from "react"
import PropTypes from "prop-types"
import styles from "./QuoteSection.module.scss"

interface QuoteSectionProps extends ComponentProps<"section"> {
  attribution?: string
}
const QuoteSection = ({ children, attribution }) => (
  <section className={styles.quote_section}>
    <blockquote className={styles.quote}>{children}</blockquote>
    <em className={styles.quote_attribution}>{attribution}</em>
  </section>
)

QuoteSection.propTypes = {
  attribution: PropTypes.string,
}

export default QuoteSection
