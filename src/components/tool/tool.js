import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import './tool.scss';

const T = ({children}) => {
  const id = children.toLowerCase();
  const data = useStaticQuery(graphql`
    query{
      allImageSharp{
        nodes{
          resize {
            src
            originalName
          }
        }
      }
    }`)

  const img = data.allImageSharp.nodes.find(img => {
    return img.resize.originalName === `${id}.png`
  })

  const imgSrc = img ? img.resize.src : 'undefined'

  console.log(data, children)


  return (
    <div className="tool" id={id}>
      <img src={imgSrc}/>
      {children}
    </div>
)};

export default T