import React from "react"
import monogram from '../../images/monogram-black.svg';
import './portfolio-page-header.scss'

export const PortfolioPageHeader = () => (
  <header className="portfolio-page-header">
    <a className="portfolio-page-link" href="/">
      <img className="portfolio-page-logo" src={monogram} alt="A.T. monogram"/>
      <h1 className="portfolio-page-title">Adam Thompson</h1>
    </a>
  </header>
);
