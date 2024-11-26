import React from "react"
import styles from "./Quote.module.scss"

interface QuoteProps {
  quote: string
  attribution?: string
}

export const Quote = ({ quote, attribution }: QuoteProps) => {
  return (
    <>
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution && (
        <em className={styles.quote_attribution}>{attribution}</em>
      )}
    </>
  )
}
