import React from "react"
import SectionHeader from "../../components/section-header/section-header";
import './section.scss';

const Section = ({title, children}) => (
    <section className="content-section" id={title.toLowerCase()}>
        <SectionHeader>{title}</SectionHeader>
        <content>
            {children}
        </content>
    </section>
)

export default Section
