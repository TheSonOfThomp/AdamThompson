import classNames from "classnames"
import Link from "next/link"
import React, { ComponentProps } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./BackLink.module.scss"

type BackLinkProps = ComponentProps<typeof Link>

export const BackLink = ({ className, children, ...rest }: BackLinkProps) => {
  return (
    <Link {...rest} className={classNames(styles.back_link, className)}>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={faChevronLeft} />
      {children}
    </Link>
  )
}
