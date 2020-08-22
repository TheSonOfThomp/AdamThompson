import React from 'react';
import './default-template.styles.scss';
import Header from '../../components/Header';
import SEO from "../../components/seo";

type PageProps = { 
  children: React.ReactNode,
  pageContext: any,
  title?: string,
  className?: string,
  id?: string,
}

const DefaultPage = ({ children, pageContext, title, className, id, }:PageProps) => {
  const pageTitle = title ? title : (pageContext ? pageContext.frontmatter.title : '—')
  return (
    <>
      <SEO title={pageTitle} />
      <main className={`default-page ${className}`} id={id}>
        <Header color="black" />
        <article>{children}</article>
      </main>
    </>
  );
}

export default DefaultPage;
