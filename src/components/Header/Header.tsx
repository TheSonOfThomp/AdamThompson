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
import SocialLink from "./social-link/social-link"
import Monogram from "../../images/monogram.svg"
import styles from "./Header.module.scss"

const Header = ({ showNav, isHero }) => {
  const navRef = useRef(null)

  return (
    <header
      className={classnames(styles.page_header, isHero ? styles.hero : "")}
    >
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
            name="Twitter"
            url="https://www.twitter.com/thesonofthomp/"
          >
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </SocialLink>
          <SocialLink name="GitHub" url="https://www.github.com/thesonofthomp">
            <FontAwesomeIcon icon={faGithub} size="sm" />
          </SocialLink>
          <SocialLink
            name="Linkedin"
            url="https://www.linkedin.com/in/adammthompson/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
          </SocialLink>
          <SocialLink name="Codepen" url="https://codepen.io/TheSonOfThomp/">
            <FontAwesomeIcon icon={faCodepen} size="sm" />
          </SocialLink>
          <SocialLink name="Medium" url="https://medium.com/@TheSonOfThomp">
            <FontAwesomeIcon icon={faMedium} size="sm" />
          </SocialLink>
        </nav>
      )}
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
