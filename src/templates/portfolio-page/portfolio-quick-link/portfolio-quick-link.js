import React from "react"
import {Link} from 'gatsby';

import './portfolio-quick-link.scss'

const PortfolioQuickLink = ({post, direction}) => {
  const link = post ? post.fields.slug : '/'
  const label = post ? post.frontmatter.title : 'Home'
  const id = (direction === 'next') 
    ? 'next-link' 
    : (direction === 'prev')
      ? 'prev-link'
      : ''
  
  return (
    <Link to={link} className={`${label.replace(' ', '').toLowerCase()} quick-link`} id={id}>
      <div>Next</div>
      <span>{label}</span>
    </Link>
  )
}

export default PortfolioQuickLink