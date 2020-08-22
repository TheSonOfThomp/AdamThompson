import React from "react"
import './social-link.scss';

type SocialLinkPropTypes = {
  name: string,
  url: string,
  color: string,
  children: React.ReactNode
}
const SocialLink = ({name, url, color, children}: SocialLinkPropTypes) => {

  return (
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
}

export default SocialLink
