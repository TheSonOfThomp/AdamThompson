import React from "react"
import {useCustomProps} from '../../../hooks/useCustomProperty';
import styles from './portfolio-card.module.scss';
import { Link } from "gatsby";
const HIGHLIGHT = 'new-visions'

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {

  const id = title.toLowerCase().replace(/( )+/g, '-')
  const isHighlightedCard = id === HIGHLIGHT;
  const cardRef = useCustomProps({
    '--color-portfolio': color
  })

  return (
    <Link 
      ref={cardRef} 
      to={link} 
      id={id} 
      className={`portfolio-card clickable ${isHighlightedCard ? 'double-wide' : ''}`}
    >
      <div className={styles.portfolio_card_text}>
        <h2 className={styles.portfolio_card_title}>{title}</h2>
        <br/>
        <span className={styles.portfolio_card_tagline}>{tagline}</span>
      </div>
      <div className={styles.portfolio_card_image_wrapper} >
        <picture className={styles.portfolio_card_picture}>
          <source srcSet={imgSrc.srcSetWebp} type="image/webp" />
          <source srcSet={imgSrc.srcSet} type="image/png" />
          <img className={styles.portfolio_card_image} src={imgSrc.src} alt={`${title}`} />
        </picture>
      </div>
    </Link>
  )
}

export default PortfolioCard
