// import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar/navbar";
import monogram from 'images/monogram-white.svg';
import './hero.scss';

const Hero = () => (
  <section className="hero green-bg">

    <Navbar></Navbar>
  
    <header>
      <div className="tagline">
        Designer. Developer.
      </div>
      <div className="bio-text">
        <p className="fix-this">
          I use research insights to identify the problem and requirements, generate user-centered design artifacts, and build a great experience.
        </p>
      </div>
      <div className="big-letters">
        <span id="u">U</span><span id="x">X</span>
      </div>
    </header>
  </section>

);

export default Hero