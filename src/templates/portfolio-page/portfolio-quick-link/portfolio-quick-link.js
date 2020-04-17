import React from "react"
import {Link} from 'gatsby';
import { upperFirst } from 'lodash'
import './portfolio-quick-link.scss'

const PortfolioQuickLink = ({to, direction}) => {
  const link = to ? to.path : '/'
  const label = to ? to.context.frontmatter.title : 'Home'
  const linkClass = label.replace(' ', '').toLowerCase()
  
  return (
    <Link to={link} className={`${linkClass} quick-link`} id={`${direction}-link`}>
      <span className="quick-link-direction">{upperFirst(direction)}</span>
      <span className="quick-link-label">{label}</span>
    </Link>
  )
}

export default PortfolioQuickLink