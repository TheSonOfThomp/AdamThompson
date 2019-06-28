// import PropTypes from "prop-types"
import React from "react"

import Navbar from "components/navbar/navbar";
import monogram from 'images/monogram-white.svg';
import './hero.scss';

const Hero = () => (
  <section className="hero green-bg">

    <Navbar></Navbar>
  
    <header>
      <div className="tagline">
        Designer. Engineer.
      </div>
      <div className="bio-text">
        <p>
          Designing great experiences. Building great products.
        </p>
      </div>
      <div className="big-letters">
        <span id="u">U</span><span id="x">X</span>
      </div>
    </header>
  </section>

);

export default Hero