import React from "react"
import SectionHeader from "../../components/section-header/section-header";
import './section.scss';

const Section = ({title, id, children}) => {

    // const Header = title ? <SectionHeader>{title}</SectionHeader> : null

    return (
        <section className="section" id={id || title.toLowerCase()}>
            <SectionHeader>{title}</SectionHeader>
            <content>
                {children}
            </content>
        </section>
    )
}

export default Section
