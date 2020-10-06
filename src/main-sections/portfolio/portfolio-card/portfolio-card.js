import React from "react"
import {useCustomProps} from '../../../hooks/useCustomProperty';
import './portfolio-card.scss';
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
      <div className="portfolio-card-text">
        <h2 className="portfolio-card-title">{title}</h2>
        <br/>
        <span className="portfolio-card-tagline">{tagline}</span>
      </div>
      <div className="portfolio-card-image-wrapper" >
        <picture className="portfolio-card-picture">
          <source srcSet={imgSrc.srcSetWebp} type="image/webp" />
          <source srcSet={imgSrc.srcSet} type="image/png" />
          <img className="portfolio-card-image" src={imgSrc.src} alt={`${title}`} loading="lazy" />
        </picture>
      </div>
    </Link>
  )
}

export default PortfolioCard
