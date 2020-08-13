import React from 'react';
import { PortfolioPageHeader } from "../../components/portfolio-page-header/portfolio-page-header";
import './recipe-page-template.styles.scss';

const RecipePage = ({children}) => {
  return (
    <main className="recipe-page">
      <PortfolioPageHeader />
      <article>
        {children}
      </article>
    </main>
  );
}

export default RecipePage;
