import React from "react"
import styles from './footer-section.module.scss';

const FooterSection = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <span>© Adam Thompson. Built with Next.js</span>
    </div>
  </footer>
)

export default FooterSection
