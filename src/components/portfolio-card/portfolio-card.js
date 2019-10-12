import React from "react"
import './portfolio-card.scss';
import { Link } from "gatsby";

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {
  const id = title.toLowerCase().replace(/( )+/g, '-')
  const highlighted_card = 'new-visions'
  const isHighlightedCard = id === highlighted_card;
  return (
  <Link to={link} className={`${isHighlightedCard ? 'double-wide' : ''}`}>
    <div 
      className={`portfolio-card clickable`}
      id={id}
    >
      <div className="portfolio-card-text">
        <h2>{title}</h2>
        <br/>
        <span>{tagline}</span>
      </div>
        <div class="portfolio-card-image" style={{backgroundImage: `url(${imgSrc})`}} >
        {/* <img src={imgSrc} alt={title}/> */}
      </div>
    </div>
  </Link>
  )
}

export default PortfolioCard
