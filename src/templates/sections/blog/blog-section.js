import React from "react"
import axios from 'axios';
import Section from "templates/section/section";

import { useStaticQuery, graphql } from 'gatsby';
import './blog-section.scss';

class BlogSection extends React.Component {
  state = {
    mediumArticles: undefined
  }
  constructor(){
    super()
  }

  componentDidMount(){
      const request = axios
      .get('https://medium.com/feed/@thesonofthomp')
      .then(resp => {
        console.log(resp)
      })
  }

  render(){
    return (
      <Section title="Writing">
      </Section>
    )
  }
}

export default BlogSection
