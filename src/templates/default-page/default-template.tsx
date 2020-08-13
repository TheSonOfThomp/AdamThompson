import React from 'react';
import './default-template.styles.scss';
import Header from '../../components/Header';

type PageProps = { 
  children: React.ReactNode,
  className?: string,
  id?: string
}

const DefaultPage = ({ children, className, id}:PageProps) => (
  <main className={`default-page ${className}`} id={id}>
    <Header color="black"/>
    <article>{children}</article>
  </main>
);

export default DefaultPage;
