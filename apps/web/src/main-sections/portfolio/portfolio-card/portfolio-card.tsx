import React from "react"
import classnames from "classnames"
import { useCustomProps } from "../../../hooks/useCustomProperty"
import styles from "./portfolio-card.module.scss"
const HIGHLIGHT = "new-visions"

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {
  const imgWebp = imgSrc.replace(".png", ".webp")

  const id = title.toLowerCase().replace(/( )+/g, "-")
  const isHighlightedCard = id === HIGHLIGHT
  const cardRef = useCustomProps<HTMLAnchorElement>({
    "--color-portfolio": color,
  })

  return (
    <a
      ref={cardRef}
      href={link}
      id={id}
      className={classnames(
        styles.portfolio_card,
        styles.clickable,
        isHighlightedCard ? styles.featured : ""
      )}
    >
      <div className={styles.portfolio_card_text}>
        <h2 className={styles.portfolio_card_title}>{title}</h2>
        <br />
        <span className={styles.portfolio_card_tagline}>{tagline}</span>
      </div>
      <div className={styles.portfolio_card_image_wrapper}>
        <picture className={styles.portfolio_card_picture}>
          <source srcSet={imgWebp} type="image/webp" />
          <img
            className={styles.portfolio_card_image}
            src={imgSrc}
            alt={`${title}`}
            width={300}
            height={200}
          />
        </picture>
      </div>
    </a>
  )
}

export default PortfolioCard
