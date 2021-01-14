import React from "react"
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from '../Header.module.scss'

// type SocialLinkPropTypes = {
//   name: string,
//   url: string,
//   color: string,
//   children: React.ReactNode
// }

const SocialLink = ({name, url, color, children}) => {

  return (
    <a 
      className={classnames(styles.header_link, styles.social_link)}
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer" 
    >
      {children}
    </a>
  )
}

SocialLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
}

export default SocialLink
