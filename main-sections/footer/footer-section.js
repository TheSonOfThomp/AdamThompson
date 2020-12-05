import React from "react"
import styles from './footer-section.module.scss';

const FooterSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer>
      <div className={styles.footer_content}>
        <span>© {year} Adam Thompson. Built with Gatsby</span>
      </div>
    </footer>
  )
}

export default FooterSection
