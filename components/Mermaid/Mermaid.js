import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import mermaid from 'mermaid'
import './Mermaid.styles.scss'

mermaid.mermaidAPI.initialize({
  startOnLoad: false
});

const Mermaid = ({ input, caption }) => {

  const mermaidEl = useRef(null);
  const [graph, setGraph] = useState()

  useEffect(() => {
    if (input) {
      const insertSvg = function (svgCode, bindFunctions) {
        mermaidEl.current.innerHTML = svgCode;
      };

      setGraph(mermaid.mermaidAPI.render('mermaidDiv', input, insertSvg));
    }
  },[input])
  
  return (
    <figure>
      <div className="mermaid" ref={mermaidEl}></div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
)};

Mermaid.propTypes = {
  caption: PropTypes.string,
  input: PropTypes.string,
};

export default Mermaid;
