import React, { useRef } from "react"
import styles from './hero.module.scss';
import Monogram from '../../images/monogram.svg'; // using gatsby-plugin-react-svg
import Header from "../../components/Header";

const Hero = ({className}) => {

  const heroRef = useRef()

  const setMousePos = (e) => {
    heroRef.current.style.setProperty('--mouseX', (e.clientX / heroRef.current.clientWidth) * 2 - 1)
    heroRef.current.style.setProperty('--mouseY', (e.clientY / heroRef.current.clientWidth) * 2 - 1)
  }

  return (
    <div ref={heroRef} className={styles.hero} onMouseMove={setMousePos} role="region">
  
      <div className={styles.header_wrapper}>
        <Header showNav={true} />
      </div>
    
      <div className={styles.hero_contents}>
        <h2 className={styles.big_letters}>
          <Monogram className={styles.big_letters_monogram} />
        </h2>
        <h2 className={styles.title}>UX Engineer</h2>
        {/* <h3 className={styles.tagline}>.</h3> */}
        <h3 className={styles.tagline}>Developing experiences that make an impact</h3>
      </div>
    </div>
  );
}

export default Hero