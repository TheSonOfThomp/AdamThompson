import React, { ComponentProps, MouseEventHandler, useRef } from "react"
import classNames from "classnames"
import Monogram from "../../images/monogram.svg"
import Header from "../../components/Header"
import { useDarkMode } from "../../components/DarkModeContext"
import styles from "./hero.module.scss"

const normalizePct = (pct: number) => pct * 2 - 1

interface HeroProps extends ComponentProps<"div"> {}

const Hero = ({ className }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { theme } = useDarkMode()

  const setMousePos: MouseEventHandler = (e) => {
    const pctX = e.clientX / (heroRef.current?.clientWidth ?? 1)
    const pctY = e.clientY / (heroRef.current?.clientHeight ?? 1)
    const x = normalizePct(pctX)
    const y = normalizePct(pctY)
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
          <Monogram className={styles.big_letters_monogram} />
        </h2>
        <h2 className={styles.title}>UI Engineer</h2>
      </div>
    </div>
  )
}

export default Hero
