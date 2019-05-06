import React from "react"
import Card from "components/card/card";
import './portfolio-card.scss';

const PortfolioCard = ({ title, tagline, image }) => (
  <Card>
    <h2>{title}</h2>
    <p>{tagline}</p>
  </Card>
)

export default PortfolioCard
