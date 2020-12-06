import React from 'react';
import PropTypes from "prop-types"
import classnames from "classnames"
import Head from "next/head"
import styles from './default-template.module.scss';
import Header from '../../components/Header';

const DefaultPage = ({ children, pageContext, title, className, id, } ) => {
  const pageTitle = title ? title : (pageContext ? pageContext.frontmatter.title : '—')
  className = `${className || ''} ${title || ''} ${pageContext?.frontmatter.section}`
  return (
    <>
      {/* <SEO title={pageTitle} /> */}
      <Head><title>{pageTitle}</title></Head>
      <main className={classnames(styles.default_page, pageTitle, className)} id={id}>
        <Header color="black" />
        <article>{children}</article>
      </main>
    </>
  );
}

DefaultPage.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default DefaultPage;
