import React from "react"
import monogram from '../../images/monogram-black.svg';
import './portfolio-page-header.scss'

export const PortfolioPageHeader = () => (
  <header className="portfolio-page-header">
    <a href="/">
      <img src={monogram} alt="A.T. monogram"/>
      <h1>Adam Thompson</h1>
    </a>
  </header>
);
