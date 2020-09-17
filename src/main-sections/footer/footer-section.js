import React from "react"
import './footer-section.scss';

const FooterSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <span>© {year} Adam Thompson. Built with Gatsby</span>
      </div>
    </footer>
  )
}

export default FooterSection
