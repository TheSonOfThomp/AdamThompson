import React from "react"
import Section from "../../templates/section/section";
import PortfolioCard from "./portfolio-card/portfolio-card";
import styles from './portfolio-section.module.scss';

import {pages} from '../../pages/portfolio/'

const PortfolioSection = ({ data }) => {

  return (
    <Section title="UX Case Studies" className={styles.section} id="portfolio">
      <div className={styles.portfolio_cards_container}>
      {
        pages.map((page) => (
          <PortfolioCard
            key={page.title}
            title={page.title}
            tagline={page.tagline}
            color={page.color}
            cover={`/images/portfolio/cover/${page.cover}`}
            link={`portfolio/${page.brand}`}
            imgSrc={`/images/portfolio/cover/${page.cover}`}
          >
          </PortfolioCard>
        ))
      }
      </div>
    </Section>
  )
}

export default PortfolioSection
