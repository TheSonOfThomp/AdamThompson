import React, { ComponentProps, useRef } from "react"
import classNames from "classnames"
import Monogram from "../../images/monogram.svg"
import Header from "../../components/Header"
import { useDarkMode } from "../../components/DarkModeContext"
import styles from "./hero.module.scss"

interface HeroProps extends ComponentProps<"div"> {}

const Hero = ({ className }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { theme } = useDarkMode()

  const setMousePos = (e) => {
    const x = (e.clientX / (heroRef.current?.clientWidth ?? 1)) * 2 - 1
    const y = (e.clientY / (heroRef.current?.clientWidth ?? 1)) * 2 - 1
    heroRef.current?.style.setProperty("--mouseX", x.toFixed(2))
    heroRef.current?.style.setProperty("--mouseY", y.toFixed(2))
  }

  return (
    <div
      ref={heroRef}
      className={classNames(styles.hero)}
      data-theme={theme}
      onMouseMove={setMousePos}
      role="region"
    >
      <Header showNav isHero />

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
