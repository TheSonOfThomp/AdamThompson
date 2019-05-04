import React from "react"
// import { Link } from "gatsby"
import './social-link.scss';

const SocialLink = ({name, url, color}) => (
  <a 
    className={color || 'white'}
    className="social-link"
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
  >
    <i className='fa' aria-hidden="true">
      {name}
    </i>
  </a>
)

export default SocialLink
