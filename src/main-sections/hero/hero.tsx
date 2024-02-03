import React, { ComponentProps, useRef } from "react"
import styles from "./hero.module.scss"
import Monogram from "../../images/monogram.svg"
import Header from "../../components/Header"

interface HeroProps extends ComponentProps<"div"> {}

const Hero = ({ className }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)

  const setMousePos = (e) => {
    const x = (e.clientX / (heroRef.current?.clientWidth ?? 1)) * 2 - 1
    const y = (e.clientY / (heroRef.current?.clientWidth ?? 1)) * 2 - 1
    heroRef.current?.style.setProperty("--mouseX", x.toFixed(2))
    heroRef.current?.style.setProperty("--mouseY", y.toFixed(2))
  }

  return (
    <div
      ref={heroRef}
      className={styles.hero}
      onMouseMove={setMousePos}
      role="region"
    >
      <div className={styles.header_wrapper}>
        <Header showNav isHero />
      </div>

      <div className={styles.hero_contents}>
        <h2 className={styles.big_letters}>
          {/* @ts-expect-error - Monogram props not properly defined */}
          <Monogram className={styles.big_letters_monogram} />
        </h2>
        <h2 className={styles.title}>UI Engineer</h2>
        <h3 className={styles.tagline}>
          Building experiences that make an impact
        </h3>
      </div>
    </div>
  )
}

export default Hero
