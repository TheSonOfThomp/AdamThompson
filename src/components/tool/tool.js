import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import './tool.scss';

const T = ({children}) => {
  const id = children.toLowerCase();
  const data = useStaticQuery(graphql`
    query{
      allImageSharp{
        nodes{
          fluid {
            src
            originalName
          }
        }
      }
    }`)

  const img = data.allImageSharp.nodes.find(img => {
    return img.fluid.originalName === `${id}.png`
  })

  const imgSrc = img ? img.fluid.src : 'undefined'

  console.log(data, children)


  return (
    <div className="tool" id={id}>
      <img alt={`${id}`} rc={imgSrc}/>
      {children}
    </div>
)};

export default T