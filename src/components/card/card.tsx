// import PropTypes from "prop-types"
import React, {
  ComponentProps,
  PropsWithChildren,
  ReactComponentElement,
} from "react"
import classnames from "classnames"
import styles from "./card.module.scss"
import {
  Polymorph,
  Polymorphic,
  PolymorphicAs,
} from "@leafygreen-ui/polymorphic"

interface CardProps extends ComponentProps<"div"> {
  as?: string | React.ComponentType<any>
  clickable?: boolean
}

// Polymorphic<MyProps>(({ as, ...rest }) => {
//   const { Component, ref } = usePolymorphic(as);
//   return <Component ref={ref} {...rest} />;
// });
export const Card = Polymorphic<CardProps>(
  ({
    id,
    className,
    style,
    as: asProp = "div",
    clickable,
    children,
    ...rest
  }: CardProps) => {
    const isClickable =
      clickable ??
      (typeof asProp === "string" && ["a", "button"].includes(asProp))
    const cardClass = isClickable ? styles.clickableCard : styles.card

    return (
      <Polymorph as={asProp as PolymorphicAs} {...rest}>
        <div id={id} style={style} className={classnames(cardClass, className)}>
          {children}
        </div>
      </Polymorph>
    )
  }
)

export default Card
