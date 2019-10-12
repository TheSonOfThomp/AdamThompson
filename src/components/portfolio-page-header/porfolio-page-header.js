import React from "react"
import monogram from '../../images/monogram-black.svg';
import './porfolio-page-header.scss'

export const PortfolioPageHeader = () => (
  <header className="porfolio-page-header">
    <a href="/">
      <img src={monogram} alt="monogram"/>
      <h3>Adam Thompson</h3>
    </a>
  </header>
);
