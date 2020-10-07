import React, { 
  useEffect, 
  useState,
  useRef 
} from 'react';
// import * as d3 from "d3";
import DefaultPage from '../templates/default-page/default-template';
import './interactive-resume.scss'
import resumeData from "../data/interactive-resume.json"
import { useCustomProps } from '../hooks/useCustomProperty';
import { Remarkable } from 'remarkable';
import ResumeSection from '../main-sections/resume/resume-section';
const md = new Remarkable()

const maxX = Math.max(...resumeData.map(d => d.x))
const maxY = Math.max(...resumeData.map(d => d.Granularity))

const InteractiveResume = (props) => {
  const chartRef = useCustomProps({
    '--maxX': maxX + 2,
    '--maxY': maxY + 1
  })
  
  return (
    <DefaultPage title="Interactive Resume">

      <h1>Interactive resume</h1>

      <p>I'm a designer/developer with a wide range of experiences. Thanks to my engineering education and co-op work terms, I have had the opportunity to work at all points of the product lifecycle.</p>

      <p>This range of experiences is hard to communicate in a single page, so I created this interactive chart. Below are tasks in the product lifecycle that I've had a hand in, emphasized based on depth of experience and interest. Hover over a task to read about the specifics of my experiences.</p>

      <div className="chart" ref={chartRef} width="100%" height="384px">
        {
          resumeData.map(d => {
            return (
                <div
                  key={d.Task}
                  className="task"
                  style={{
                    '--skill': d.Skill,
                    '--interest': d.Interest,
                    '--rating': (d.Skill + d.Interest),
                    '--column': d.x + 1,
                    '--row': maxY - d.Granularity + 1,
                  }}
                  >
                  <span>{d.Task}</span>
                <div className="experience" dangerouslySetInnerHTML={{ __html: md.render(d.Experience) }}></div>
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

      <ResumeSection />
    </DefaultPage>

  )
}


export default InteractiveResume;
