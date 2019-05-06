import React from "react"
import Section from "templates/section/section";
import ResumeCard from "./resume-card/resume-card";

import { useStaticQuery, graphql} from 'gatsby';
import './resume-section.scss';

const ResumeSection = ({data}) => {
  const ResumeQuery = useStaticQuery(graphql`
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
  `)
  return(
    <Section title="Resume">
      {
        ResumeQuery.dataJson.experience.map( (node) => (
          <ResumeCard
            key={node.id}
            data={node}
          ></ResumeCard>
        ))
      }
    </Section>
  )
}

export default ResumeSection

