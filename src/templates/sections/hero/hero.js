// import PropTypes from "prop-types"
import React from "react"

import './hero.scss';
import { Navbar } from "../../../components/navbar/navbar";

const Hero = () => (
  <section className="hero green-bg">

    <Navbar/>
  
    <header>
      <h2 className="big-letters">
        <b id="u">U</b><b id="x">X</b>
      </h2>
      <h2 className="tagline">
        Designer. Engineer.
      </h2>
      <h3 className="bio-text">
        Design great experiences. Build great products.
      </h3>
    </header>
  </section>

);

export default Hero