import React from "react"
import './social-link.scss';

const SocialLink = ({name, url, color, children}) => (
  <span className="social-link">
    <a 
      className={[color || 'white']}
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer" 
    >
      {children}
    </a>
  </span>
)

export default SocialLink
