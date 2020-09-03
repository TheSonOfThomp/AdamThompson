import React from "react"
import Monogram from '../../../images/monogram-black.svg'; // React component using gatsby-plugin-react-svg
import './portfolio-page-header.scss'

export const PortfolioPageHeader = () => (
  <header className="portfolio-page-header">
    <a className="portfolio-page-link" href="/">
      <Monogram className="portfolio-page-logo"/>
      {/* <img className="portfolio-page-logo" src={monogram} alt="A.T. monogram"/> */}
      <h1 className="portfolio-page-title">Adam Thompson</h1>
    </a>
  </header>
);
