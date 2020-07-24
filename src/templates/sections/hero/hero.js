// import PropTypes from "prop-types"
import React from "react"

import './hero.scss';
import monogram from '../../../images/monogram-black.svg';
import { Navbar } from "../../../components/navbar/navbar";

const Hero = () => (
  <section className="hero green-bg">

    <Navbar/>
  
    <header className="hero-contents">
      <h2 className="big-letters">
        {/* <b id="u">U</b><b id="x">X</b> */}
        <img className="big-letters-monogram" src={monogram} alt="Adam Thompson"/>
      </h2>
      <h2 className="title">
        UX Engineer
      </h2>
      <h3 className="tagline">
        Developing experiences that make an impact
      </h3>
    </header>
  </section>

);

export default Hero