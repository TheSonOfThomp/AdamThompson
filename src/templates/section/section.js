import React from "react"
import SectionHeader from "../../components/section-header/section-header";
import './section.scss';

const Section = ({title, id, className = "", children}) => {
const fullClassName = ['section', className].join(' ')
  return (
  <section className={fullClassName} id={id || title.toLowerCase()} >
    <SectionHeader>{title}</SectionHeader>
    <div className="content">
      {children}
    </div>
  </section>
  )
}

export default Section
