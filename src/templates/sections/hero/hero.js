// import PropTypes from "prop-types"
import React from "react"

import Navbar from "components/navbar/navbar";
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
          Design great experiences. Build great products.
        </p>
      </div>
      <div className="big-letters">
        <span id="u">U</span><span id="x">X</span>
      </div>
    </header>
  </section>

);

export default Hero