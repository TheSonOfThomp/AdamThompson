import React from "react"

type SocialLinkPropTypes = {
  name: string,
  url: string,
  color: string,
  children: React.ReactNode
}
const SocialLink = ({name, url, color, children}: SocialLinkPropTypes) => {

  return (
    <a 
      className="header-link social-link"
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
