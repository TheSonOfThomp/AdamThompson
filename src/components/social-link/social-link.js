import React from "react"
import './social-link.scss';

const SocialLink = ({name, url, color, children}) => (
    <a 
      className={`social-link ${[color || 'white']}`}
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer" 
    >
      {children}
    </a>
)

export default SocialLink
