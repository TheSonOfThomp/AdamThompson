import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faCodepen,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import SocialLink from "./social-link/social-link"
import Monogram from "../../images/monogram.svg"
import styles from "./Header.module.scss"
import { IconButton } from "../IconButton/IconButton"
import { useDarkMode } from "../DarkModeContext/DarkModeContext"

const Header = ({ showNav, isHero }) => {
  const navRef = useRef(null)

  const { darkMode, setDarkMode, theme } = useDarkMode()

  const handleDarkModeToggle = () => {
    setDarkMode((dm) => !dm)
  }

  const darkModeIcon = darkMode ? faSun : faMoon

  return (
    <header
      className={classnames(
        styles.page_header,
        styles[theme],
        isHero ? styles.hero : ""
      )}
      data-theme={theme}
    >
      <div className={styles.page_header_content}>
        <a className={styles.page_link} href="/">
          {/* @ts-expect-error SVGR props */}
          <Monogram className={styles.page_logo} />
          <h1 className={styles.page_title}>Adam Thompson</h1>
        </a>
        {showNav && (
          <nav ref={navRef} className={styles.page_nav}>
            <a
              className={classnames(styles.header_link, styles.nav_link)}
              href="#projects"
            >
              Projects
            </a>
            <a
              className={classnames(styles.header_link, styles.nav_link)}
              href="/recipes"
            >
              Recipes
            </a>
            <SocialLink
              title="Twitter"
              icon={faTwitter}
              href="https://www.twitter.com/thesonofthomp/"
            />
            <SocialLink
              title="GitHub"
              icon={faGithub}
              href="https://www.github.com/thesonofthomp"
            />
            <SocialLink
              title="Linkedin"
              icon={faLinkedinIn}
              href="https://www.linkedin.com/in/adammthompson/"
            />
            <SocialLink
              title="Codepen"
              icon={faCodepen}
              href="https://codepen.io/TheSonOfThomp/"
            />
            <SocialLink
              icon={faMedium}
              title="Medium"
              href="https://medium.com/@TheSonOfThomp"
            />
            <IconButton
              as="button"
              icon={darkModeIcon}
              onClick={handleDarkModeToggle}
            />
          </nav>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  showNav: PropTypes.bool,
  color: PropTypes.oneOf(["white", "black"]),
}

Header.defaultProps = {
  showNav: false,
  color: "white",
}

export default Header
