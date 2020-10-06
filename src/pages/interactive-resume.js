import React, { useEffect, useMemo, useRef } from 'react';
import * as d3 from "d3";
import DefaultPage from '../templates/default-page/default-template';
import './interactive-resume.scss'
import resumeData from "../data/interactive-resume.json"

const maxX = d3.max(resumeData.map(d => d.x))
const maxY = d3.max(resumeData.map(d => d.Granularity))


const InteractiveResume = (props) => {
  
  const svgRef = useRef();
  const d3Element = useMemo(() => {
    return d3.select(svgRef.current)
  }, [])

  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, maxX])
    const xAxis = d3.axisBottom(xScale)
    console.log(xAxis)
    d3Element.append('g').call(xAxis)
  }, [])

  
  return (
    <DefaultPage title="Interactive Resume">
      <svg ref={svgRef}>

        <g></g>
      </svg>
    </DefaultPage>

  )
}


export default InteractiveResume;
