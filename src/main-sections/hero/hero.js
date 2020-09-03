import React from "react"
import './hero.scss';
import Monogram from '../../images/monogram-black.svg'; // using gatsby-plugin-react-svg
import Header from "../../components/Header";

const Hero = () => (
  <section className="hero green-bg">

    <Header showNav={true} />
  
    <div className="hero-contents">
      <h2 className="big-letters">
        {/* <b id="u">U</b><b id="x">X</b> */}
        {/* <img className="big-letters-monogram" src={monogram} alt="Adam Thompson"/> */}
        <Monogram className="big-letters-monogram" />
      </h2>
      <h2 className="title">
        UX Engineer
      </h2>
      <h3 className="tagline">
        Developing experiences that make an impact
      </h3>
    </div>
  </section>

);

export default Hero