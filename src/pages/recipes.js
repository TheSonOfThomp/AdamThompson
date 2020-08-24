import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import './recipes.scss'
import { startCase } from "lodash";
import DefaultPage from '../templates/default-page/default-template'

const RecipesPage = () => {

  const query = useStaticQuery(graphql`
  query {
    allMdx(filter: {frontmatter: {section: {eq: "recipes"}}}) {
      nodes {
        frontmatter {
          title
          tags
          image
        }
        fields {
          slug
        }
        excerpt
      }
    }
    allImageSharp {
      nodes {
        fluid {
          originalName
          src
          srcSet
          srcSetWebp
        }
      }
    }
  }
  `)
  const images = query.allImageSharp.nodes.map(node => node.fluid)
  const recipes = query.allMdx.nodes.map(node => {
    return {
      ...node,
      image: images.find(img => img.originalName === node.frontmatter.image)
    }
  })

  return (
    <>
    <DefaultPage title="Recipes">
      <h1>Recipes</h1>

      <p>
        During quarantine, I wanted to try and improve my cooking skills. 
        As I got better and tried new things, I made modifications to existing recipes, and combined different techniques to make it my own.
        This is my collection of recipes that I've modified enough that I needed to write it down somewhere.
        {/* (food recipes, not code "recipes". For that see <a href="/snippets">snippets</a>). */}
      </p>

      <h2>How to read</h2>
      <p>
        These recipes formatted in the style of <a href="http://www.cookingforengineers.com/">Cooking for Engineers</a>—a flowchart that describes when to use and combine each ingredient. 
        I personally find this is the clearest way to read a recipe. Check out the generator on <a href="https://github.com/TheSonOfThomp/recipe-parser">GitHub</a>.
      </p>

      <div className="recipe-cards">
        {
          recipes.sort((a,z) => a.frontmatter.title - z.frontmatter.title).map(recipe => {
          return (
            <Link to={'.'+recipe.fields.slug} className={`recipe-card`} key={recipe.frontmatter.title}>
              <h1 className="recipe-title">{recipe.frontmatter.title}</h1>
              <div className="recipe-tags">
                {
                  recipe.frontmatter.tags.split(',').map(tag => <span className="recipe-tag">{startCase(tag)}</span>)
                }
              </div>
              {recipe.image &&
              <picture className="recipe-image">
                <source srcset={recipe.image.srcSetWebp} type="image/webp"/>
                <source srcset={recipe.image.srcSet} type="image/jpg"/>
                <img className="recipe-image" src={recipe.image.src} alt={recipe.frontmatter.title} />
              </picture> 
              }
            </Link>
          )})
        }
      </div>
    </DefaultPage>
    </>
  )
}

export default RecipesPage