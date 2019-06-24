import React from "react"
import SectionHeader from "../../components/section-header/section-header";
import './section.scss';

const Section = ({title, id, className = "", children}) => {
    const fullClassName = ['section', className].join(' ')
    // const Header = title ? <SectionHeader>{title}</SectionHeader> : null

    return (
        <section className={fullClassName} id={id || title.toLowerCase()}>
            <SectionHeader>{title}</SectionHeader>
            <content>
                {children}
            </content>
        </section>
    )
}

export default Section
