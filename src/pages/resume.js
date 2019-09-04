import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import '../style/resume.scss'

const ResumePage = () => (
  <div className="resume-container">
    <SEO title="Resume" />
    <div className="resume-page">
      <div className="resume-header">
        <h1>Adam Thompson</h1>
        <div id="contacts">
          <a id="website">thesonofthomp.com</a>
          <a id="email">adam.m.thompson@icloud.com</a>
          <a id="phone">+1-332-333-5780</a>
        </div>
      </div>

      <div id="experience">
        {/* <h2>Experience</h2> */}
        <div className="job" id="nv">
          <div className="job-header">
            <h3>UX Engineer</h3>
            <strong>New Visions for Public Schools</strong>
            <span className="location">July 2019 - present | NYC</span>
          </div>
          <div className="job-bullets">
            <ul>
              <li>Pioneered design-system driven development to improve visual consistency throughout the app. This includes building, publishing, managing and maintaining an Angular component library with Storybook and Chromatic, contributing to and maintaining a Sketch library, creating and maintaining component and UI pattern documentation, and facilitating closer cross-departmental collaboration between design and engineering. </li>
              <li>Developed a data model using Airtable to defines how to render the dashboard UI in different use cases. The model defines parameters such as which student attributes should be presented as a dashboard tile, how to render the graph, and what filter and grouping options are available for the given attribute.</li>
              <li>Architected, built and maintained a prototype Vue app, used to quickly design and test new components and interactions, and to fully design features that involve complex interactions or multi-step workflows too complex for traditional testing platforms.</li>
            </ul>
          </div>
        </div>

        <div className="job" id="music-group">
          <div className="job-header">
            <h3>Assistant Customer Solutions Manager</h3>
            <strong>TC Helicon</strong>
            <span className="location">Jan 2018. - Apr. 2018 | Kitchener</span>
          </div>
          <div className="job-bullets">
            <ul>
              <li>Identified business opportunities and customer needs, and defined product specifications for the GO line of accessories and mobile music making products based on insights uncovered through market and customer research.</li>
              <li>Developed a process and tool in Excel/VBA, now used across the organization in 13 countries, to allow solutions managers to quickly evaluate Go/No-Go decisions for products based on ROI and time-to market, and allow portfolio managers to create product portfolios based on this information.</li>
              <li>Worked closely with director of product design on process, higher level product vision, business case development and customer centric strategies, and collaborated with customers, senior management, engineering, industrial design, sales and marketing to define product story, experience, design and functionality.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </div>
)

export default ResumePage
