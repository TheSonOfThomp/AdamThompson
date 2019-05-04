import React from "react"
import './section-header.scss';

const SectionHeader = ({children}) => (
    <header className="section-header">
        <h1>
            {children}
        </h1>
    </header>
)

export default SectionHeader
