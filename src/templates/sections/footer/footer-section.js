import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import './footer-section.scss';

const FooterSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer>
      <div>
        © {year} Adam Thompson. Built with Gatsby
      </div>
    </footer>
  )
}

export default FooterSection
