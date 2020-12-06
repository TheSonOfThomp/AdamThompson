import React, { 
  useEffect, 
  useState,
  useRef 
} from 'react';
import classnames from 'classnames'
import DefaultPage from '../templates/default-page/default-template';
import styles from './interactive-resume.module.scss'
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
  const [resumeData, setResumeData] = useState();
  const [range, setRange] = useState({x: 0, y: 0})
  const [rankBy, setRankBy] = useState('overall') // 'overall' | 'interest' | 'experience' | 'skill'

  const htmlFormRef = useRef()

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
    if (resumeData) {
      setRange({
        x: Math.max(...resumeData.map(d => d.x)),
        y: Math.max(...resumeData.map(d => d.Granularity)),
        XP: Math.max(...resumeData.map(d => d.XP))
      })
    }
  }, [resumeData])

  const chartRef = useCustomProps({
    '--maxX': range.x,
    '--maxY': range.y
  })

  const handleRankByChange = (e) => (setRankBy(e.target.value))

  const getOverall = (d) => (getXP(d) + d.Interest * 2) / 2
  const getXP = (d) => Math.round(d.XP / range.XP * 5 + d.Skill)
  
  return (
    <DefaultPage title="Interactive Resume">

      <h1>Interactive resume</h1>

      <p>I'm a designer/developer with a wide range of experiences. Thanks to my engineering education and co-op work terms, I have had the opportunity to work at all points of the product lifecycle.</p>

      <p>This range of experiences is hard to communicate in a single page, so I created this interactive chart. Below are tasks in the product lifecycle that I've had a hand in, emphasized based on depth of experience and interest. Hover over a task to read about the specifics of my experiences.</p>

      <htmlForm ref={htmlFormRef}>
        <h3>Rank tasks by:</h3>
        <input
          type="radio"
          name="rank-by"
          id="rank-by-overall"
          onChange={handleRankByChange}
          value="overall"
          checked={rankBy === 'overall'}
        />
        <label htmlFor="rank-by-overall">Overall</label>
        <input
          type="radio"
          name="rank-by"
          id="rank-by-interest"
          onChange={handleRankByChange}
          value="interest"
          checked={rankBy === 'interest'}
        />
        <label htmlFor="rank-by-interest">Interest</label>
        <input
          type="radio"
          name="rank-by"
          id="rank-by-experience"
          onChange={handleRankByChange}
          value="experience"
          checked={rankBy === 'experience'}
        />
        <label htmlFor="rank-by-experience">Experience</label>
      </htmlForm>

      <div className={classnames(styles.chart, styles[rankBy])} ref={chartRef}>

        <div className={styles.region} id="region-pm">Product/Research</div>
        <div className={styles.region} id="region-ux">UX</div>
        <div className={styles.region} id="region-ui">UI</div>
        <div className={styles.region} id="region-dev">Frontend</div>

        {resumeData && resumeData.map(d => {
          return (
            <div
              key={d.Task}
              className={styles.task}
              tabIndex="0"
              style={{
                '--skill': d.Skill * 2,
                '--interest': d.Interest * 2,
                '--xp': getXP(d),
                '--overall': getOverall(d),
                '--column': d.x,
                '--row': range.y - d.Granularity + 1,
              }}
            >
              <div className={styles.tooltip}>
                <h1>{d.Task}</h1>
                <div 
                  className={styles.experience} 
                >
                  {
                  d.Experience && <div dangerouslySetInnerHTML={{ __html: md.render(d.Experience) }}></div>
                  }
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
        })}

        { resumeData && (
          <>
          <div className={classnames(styles.axis, x_axis)}>
            <div className={styles.x_axis_label} id="label-discover">
              <h2>Discover</h2>
              <span>what problems need to be solved</span>
            </div>
            <div className={styles.x_axis_label} id="label-define">
              <h2>Define</h2>
              <span>the problem we've chosen to solve</span>
            </div>
            <div className={styles.x_axis_label} id="label-design">
              <h2>Design</h2>
              <span>solutions to the chosen problem</span>
            </div>
            <div className={styles.x_axis_label} id="label-deliver">
              <h2>Deliver</h2>
              <span>the best solution to the problem</span>
            </div>
          </div>

          <div className={classnames(styles.axis, styles.y_axis)}>
            <div className={styles.y_axis_label}>
              <h3>Details</h3>
              <span>(feature specific)</span>
            </div>
            <div className={styles.y_axis_label}>
              <h3>Systems</h3>
              <span>(big picture)</span>
            </div>
          </div>
          </>
        )}
      </div>

    <ResumeSection />
  </DefaultPage>

  )
}


export default InteractiveResume;
