import React from 'react';
import './recipe-page-template.styles.scss';

const RecipePage = ({children}) => {
  return (
    <div className="recipe-page-wrapper">
      {children}
    </div>
  );
}

export default RecipePage;
