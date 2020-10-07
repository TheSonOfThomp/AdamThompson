import React, { 
  useEffect, 
  useState,
  useRef 
} from 'react';
// import * as d3 from "d3";
import DefaultPage from '../templates/default-page/default-template';
import './interactive-resume.scss'
// import resumeData from "../data/interactive-resume.json"
import { useCustomProps } from '../hooks/useCustomProperty';
import { Remarkable } from 'remarkable';
import ResumeSection from '../main-sections/resume/resume-section';
const md = new Remarkable()

const AIRTABLE_BASE_ID = 'appfxcpKhuGdAjXW1'
const AIRTABLE_TABLE_NAME = 'Lifecycle Tasks'
const QUERY_PARAMS = `?baseId=${AIRTABLE_BASE_ID}&tableName=${AIRTABLE_TABLE_NAME}`
const companies = ['New Visions', 'TC Helicon', 'Chameleon', 'Zynga', 'Noom', 'KnowRoaming', 'Sony']

const InteractiveResume = (props) => {
  const [resumeData, setResumeData] = useState([]);
  const [range, setRange] = useState({x: 0, y: 0})

  // Fetch Data from Airtable
  useEffect(() => {
    fetch("/.netlify/functions/airtable/" + QUERY_PARAMS)
      .then(response => response.json())
      .then(result => {
        setResumeData(result.map(r => r.fields))
      })
      .catch(err => console.log(err))
  }, [])

  // Set range based on data
  useEffect(() => {
    if (resumeData.length > 0) {
      console.dir(resumeData)
      setRange({
        x: Math.max(...resumeData.map(d => d.x)),
        y: Math.max(...resumeData.map(d => d.Granularity))
      })
    }
  }, [resumeData])

  const chartRef = useCustomProps({
    '--maxX': range.x,
    '--maxY': range.y
  })
  
  return (
    <DefaultPage title="Interactive Resume">

      <h1>Interactive resume</h1>

      <p>I'm a designer/developer with a wide range of experiences. Thanks to my engineering education and co-op work terms, I have had the opportunity to work at all points of the product lifecycle.</p>

      <p>This range of experiences is hard to communicate in a single page, so I created this interactive chart. Below are tasks in the product lifecycle that I've had a hand in, emphasized based on depth of experience and interest. Hover over a task to read about the specifics of my experiences.</p>

      {
        resumeData && (
          <div className="chart" ref={chartRef}>
            {
              resumeData.map(d => {
                return (
                    <div
                      key={d.Task}
                      className="task"
                      tabIndex="0"
                      style={{
                        '--skill': d.Skill,
                        '--interest': d.Interest,
                        '--rating': (d.Skill + d.Interest),
                        '--column': d.x,
                        '--row': range.y - d.Granularity + 1,
                      }}
                    >
                      <div className="tooltip">
                        <h1>{d.Task}</h1>
                        <div 
                          className="experience" 
                          // dangerouslySetInnerHTML={{ __html: md.render(d.Experience) }}
                        >
                          { companies.map(company => {
                            return (d[company] && d[company].length > 1) ? (
                                <>
                                  <h2>{company}</h2>
                                  <div dangerouslySetInnerHTML={{ __html: md.render(d[company]) }}></div>
                                </>
                              ) : null
                            })
                          }
                        </div>
                      </div>  
                    </div>
                )
              })
            }

            <div className="axis x-axis">
              <div className="x-axis-label" id="discover">
                <h2>Discover</h2>
                <span>what problems need to be solved</span>
              </div>
              <div className="x-axis-label" id="define">
                <h2>Define</h2>
                <span>the problem we've chosen to solve</span>
              </div>
              <div className="x-axis-label" id="design">
                <h2>Design</h2>
                <span>solutions to the chosen problem</span>
              </div>
              <div className="x-axis-label" id="deliver">
                <h2>Deliver</h2>
                <span>the best solution to the problem</span>
              </div>
            </div>

            <div className="axis y-axis">
              <div className="y-axis-label">
                <h3>Details</h3>
                <span>(feature specific)</span>
              </div>
              <h2>Granularity</h2>
              <div className="y-axis-label">
                <h3>Systems</h3>
                <span>(big picture)</span>
              </div>
            </div>
          </div>
        )
      }

      <ResumeSection />
    </DefaultPage>

  )
}


export default InteractiveResume;
