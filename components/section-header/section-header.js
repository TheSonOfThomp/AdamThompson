import React from "react"
import styles from './section-header.module.scss';

const SectionHeader = ({children}) => (
    <h1 className={styles.section_header}>
        {children}
    </h1>
)

export default SectionHeader
