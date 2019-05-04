import React from "react"
import Section from "templates/section/section";
import ResumeCard from "./resume-card/resume-card";

import {StaticQuery, graphql} from 'gatsby';
// import './resume-section.scss';

const ResumeQuery = graphql`
  query ResumeQuery{
    dataJson {
      experience{
        id
        company
        url
        position
        location
        summary
        responsibilities {
          text
        }
      }
    }
  }
`

const ResumeSection = ({data}) => (
  <StaticQuery
    query={ResumeQuery}
    render={
      resume => (
        <Section title="Resume">
        {
          resume.dataJson.experience.map( (node) => (
            <ResumeCard
              data={node}
            ></ResumeCard>
          ))
        }
        </Section>
      )
    }
  />
)

export default ResumeSection

