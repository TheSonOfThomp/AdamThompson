import React from "react"
import Monogram from '../../../images/monogram.svg'; // React component using gatsby-plugin-react-svg
import styles from './portfolio-page-header.module.scss'

export const PortfolioPageHeader = () => (
  <header className={styles.portfolio_page_header}>
    <a className={styles.portfolio_page_link} href="/">
      <Monogram className={styles.portfolio_page_logo}/>
      <h1 className={styles.portfolio_page_title}>Adam Thompson</h1>
    </a>
  </header>
);
