import React, { ComponentProps } from "react"
import classnames from "classnames"
import styles from "./card.module.scss"
import {
  Polymorph,
  Polymorphic,
  PolymorphicAs,
} from "@leafygreen-ui/polymorphic"
import { useDarkMode } from "../DarkModeContext/DarkModeContext"

interface CardProps extends ComponentProps<"div"> {
  as?: string | React.ComponentType<any>
  clickable?: boolean
}

export const Card = Polymorphic<CardProps>(
  ({
    id,
    className,
    as: asProp = "div",
    clickable,
    children,
    ...rest
  }: CardProps) => {
    const { theme } = useDarkMode()
    const isClickable =
      clickable ??
      (typeof asProp === "string" && ["a", "button"].includes(asProp))
    const cardClass = isClickable ? styles.clickableCard : styles.card

    return (
      <Polymorph as={asProp as PolymorphicAs} {...rest}>
        <div
          id={id}
          className={classnames(cardClass, styles[theme], className)}
        >
          {children}
        </div>
      </Polymorph>
    )
  }
)

export default Card
