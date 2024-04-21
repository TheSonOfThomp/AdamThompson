import React, { ComponentProps } from "react"
import classnames from "classnames"
import SectionHeader from "../../components/section-header/section-header"
import styles from "./section.module.scss"

interface SectionProps extends ComponentProps<"section"> {
  title?: string
}

const Section = ({ title, id, className = "", children }: SectionProps) => {
  const fullClassName = ["section", className].join(" ")
  return (
    <section
      className={classnames(styles.section, className)}
      id={id || title?.toLowerCase()}
    >
      {title && <SectionHeader>{title}</SectionHeader>}
      <div className="content">{children}</div>
    </section>
  )
}

export default Section
