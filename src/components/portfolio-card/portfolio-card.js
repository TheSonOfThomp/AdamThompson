import React from "react"
import './portfolio-card.scss';
import { Link } from "gatsby";

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {
  const id = title.toLowerCase().replace(/( )+/g, '-')
  const highlighted_card = 'new-visions'
  const isHighlightedCard = id === highlighted_card;
  return (
    <Link to={link} id={id} className={`portfolio-card clickable ${isHighlightedCard ? 'double-wide' : ''}`}>
      <div className="portfolio-card-text">
        <h2>{title}</h2>
        <br/>
        <span>{tagline}</span>
      </div>
        <div class="portfolio-card-image using-img-tag"  >
          <img src={imgSrc} alt={`Image of ${title}`}/>
      </div>
  </Link>
  )
}

export default PortfolioCard
