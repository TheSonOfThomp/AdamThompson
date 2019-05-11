import React from "react"
import Section from "templates/section/section";
import ResumeCard from "./resume-card/resume-card";

import { useStaticQuery, graphql} from 'gatsby';
import './resume-section.scss';

const getBullets = function(node) {
  if (node.responsibilities) {
    return node.responsibilities.map(resp => {
      console.log(node)
      return resp.text
    })
  }
  else if (node.courses) {
    return node.courses.map(crs => {
      console.log(crs.name)
      return crs.name
    })
  }
  else return null
}

const ResumeSection = ({data}) => {
  const resumeQuery = useStaticQuery(graphql`
    query ResumeQuery{
      dataJson {
        experience{
          id
          display
          company
          url
          position
          location
          term
          summary
          logotype
          responsibilities {
            text
          }
        }
        education {
          id
          display
          company
          position
          degree
          minor
          class
          summary
          logotype
          courses {
            name
          }
        }
      }
    }
  `)

  const resumeData = [...resumeQuery.dataJson.experience.filter(e => e.display === true), ...resumeQuery.dataJson.education.filter(e => e.display === true)]
  return(
    <Section title="Experience" id="resume">
      {
        resumeData.map( (node) => (
          <ResumeCard
            key={node.id}
            logo={node.logo || node.logotype}
            title={node.company}
            location={node.location || node.degree}
            term={node.term || node.class}
            position={node.position}
            summary={node.summary}
            bullets={getBullets(node)}
          ></ResumeCard>
        ))
      }
    </Section>
  )
}

export default ResumeSection

