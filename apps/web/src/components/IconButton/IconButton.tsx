import React, { ComponentProps } from "react"
import classNames from "classnames"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import styles from "./IconButton.module.scss"
import {
  Polymorphic,
  usePolymorphic,
  PolymorphicProps,
  PolymorphicAs,
} from "@leafygreen-ui/polymorphic"

export interface IconButtonProps {
  icon: IconDefinition
  size?: FontAwesomeIconProps["size"]
}

export const IconButton = Polymorphic<IconButtonProps>(
  ({ icon, className, as, size, ...rest }) => {
    const { Component } = usePolymorphic(as)

    return (
      <Component
        className={classNames(styles.icon_button, className)}
        {...rest}
      >
        <FontAwesomeIcon icon={icon} size={size} />
      </Component>
    )
  }
)
