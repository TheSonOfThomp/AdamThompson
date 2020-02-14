import React from "react"
import './section-header.scss';

const SectionHeader = ({children}) => (
    <h1 className="section-header">
        {children}
    </h1>
)

export default SectionHeader
