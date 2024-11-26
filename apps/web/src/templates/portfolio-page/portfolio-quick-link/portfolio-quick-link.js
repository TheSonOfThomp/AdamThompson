import React from "react"

;
import { upperFirst } from 'lodash'
import styles from './portfolio-quick-link.module.scss'

const PortfolioQuickLink = ({to, direction}) => {
  const link = to ? to.path : '/'
  const label = to ? to.context.frontmatter.title : 'Home'
  const linkClass = label.replace(' ', '').toLowerCase()
  
  return (
    <Link to={link} className={`${linkClass} quick-link`} id={`${direction}-link`}>
      <span className={styles.quick_link_direction}>{upperFirst(direction)}</span>
      <span className={styles.quick_link_label}>{label}</span>
    </Link>
  )
}

export default PortfolioQuickLink