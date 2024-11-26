import React, {useRef} from "react"
import Head from "next/head"
import PortfolioQuickLink from "./portfolio-quick-link/portfolio-quick-link";
import styles from './portfolio-template.module.scss';
import { PortfolioPageHeader } from "./portfolio-page-header/portfolio-page-header";
import { useCustomProps } from "../../hooks/useCustomProperty";

export const PortfolioTemplate = ({ meta, children }) => {
  
  const mainRef = useCustomProps({
    '--brand-color': `var(--color-${meta.brand})`,
    '--brand-color-light': `var(--color-${meta.brand}-light)`,
    '--brand-color-lightest': `var(--color-${meta.brand}-lightest)`,
  }) 

  return (
    <main ref={mainRef} className={styles.portfolio} id={meta.brand} >
      <Head><title>Portfolio | {meta.title}</title></Head>
      <PortfolioPageHeader />
      <div className={styles.portfolio_content_container}>
        <div className={styles.portfolio_content}>{children}</div>
      </div>
      {/* <div className={styles.quick_links_container}>
        <PortfolioQuickLink to={prevPage} direction="prev"></PortfolioQuickLink>
        <PortfolioQuickLink to={nextPage} direction="next"></PortfolioQuickLink>
      </div>  */}
    </main>
  )
}
