// import PropTypes from "prop-types"
import React from "react"

import './hero.scss';
import monogram from '../../../images/monogram-white.svg';
import { Navbar } from "../../../components/navbar/navbar";

const Hero = () => (
  <section className="hero green-bg">

    <Navbar/>
  
    <header>
      <h2 className="big-letters">
        {/* <b id="u">U</b><b id="x">X</b> */}
        <img className="big-letters-monogram" src={monogram} alt="Adam Thompson"/>
      </h2>
      <h2 className="title">
        Front-end Engineer
      </h2>
      <h3 className="tagline">
        Designing and building meaningful product experiences
      </h3>
    </header>
  </section>

);

export default Hero