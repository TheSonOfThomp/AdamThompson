import React from "react"
import './hero.scss';
import Monogram from '../../images/monogram-black.svg'; // using gatsby-plugin-react-svg
import Header from "../../components/Header";

const Hero = () => (
  <div className="hero">

    <div className="header-wrapper">
      <Header showNav={true} />
    </div>
  
    <div className="hero-contents">
      <h2 className="big-letters">
        {/* <b id="u">U</b><b id="x">X</b> */}
        <Monogram className="big-letters-monogram" />
      </h2>
      <h2 className="title">UI Engineer</h2>
      <h3 className="tagline">Developing experiences that make an impact</h3>
    </div>
  </div>

);

export default Hero