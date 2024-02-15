import React, { ComponentPropsWithoutRef } from "react"
import PropTypes from "prop-types"
import { IconButton, IconButtonProps } from "../../IconButton/IconButton"

interface SocialLinkProps
  extends IconButtonProps,
    ComponentPropsWithoutRef<"a"> {
  href: string
}

const SocialLink = ({ href, className, ...rest }: SocialLinkProps) => {
  return (
    <IconButton
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  )
}

SocialLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
}

export default SocialLink
