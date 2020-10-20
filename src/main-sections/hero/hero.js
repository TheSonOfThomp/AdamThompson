import React, { useRef } from "react"
import './hero.scss';
import Monogram from '../../images/monogram-black.svg'; // using gatsby-plugin-react-svg
import Header from "../../components/Header";

const Hero = () => {

  const heroRef = useRef()

  const setMousePos = (e) => {
    heroRef.current.style.setProperty('--mouseX', (e.clientX / heroRef.current.clientWidth) * 2 - 1)
    heroRef.current.style.setProperty('--mouseY', (e.clientY / heroRef.current.clientWidth) * 2 - 1)
  }

  return (
    <div ref={heroRef} className="hero" onMouseMove={setMousePos}>
  
      <div className="header-wrapper">
        <Header showNav={true} />
      </div>
    
      <div className="hero-contents">
        <h2 className="big-letters">
          {/* <b id="u">U</b><b id="x">X</b> */}
          <Monogram className="big-letters-monogram" />
        </h2>
        <h2 className="title">UX Engineer</h2>
        <h3 className="tagline">Developing experiences that make an impact</h3>
      </div>
    </div>
  );
}

export default Hero