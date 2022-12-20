import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen, faMedium } from '@fortawesome/free-brands-svg-icons'
import SocialLink from "./social-link/social-link";
import Monogram from '../../images/monogram.svg';
import styles from './Header.module.scss';

const Header = ({ color, showNav }) => {

  const navRef = useRef(null)
  const setListeners = useRef(false)
  
  // Add listeners to all the links
  useEffect(() => {
    const links = navRef.current?.querySelectorAll('.header-link')
    links?.forEach(link => link.addEventListener('mouseenter', moveHighlight))
    setListeners.current = true

    return () => {
      links?.forEach(link => link.removeEventListener('mouseenter', moveHighlight))
    }
  })

  const moveHighlight = (e) => {
    navRef.current?.style.setProperty('--link-width', e.target.offsetWidth)
    navRef.current?.style.setProperty('--link-height', e.target.offsetHeight)
    navRef.current?.style.setProperty('--link-top', e.target.offsetTop)
    navRef.current?.style.setProperty('--link-left', e.target.offsetLeft)
  }

  return (
    <header className={classnames(styles.page_header, styles[`color_${color}`])}>
      <a className={styles.page_link} href="/">
        <Monogram className={styles.page_logo} />
        <h1 className={styles.page_title}>Adam Thompson</h1>
      </a>
      {
        showNav &&
        <nav ref={navRef} className={styles.page_nav}>
          <a className={classnames(styles.header_link, styles.nav_link)} href="#projects">Projects</a>
          <a className={classnames(styles.header_link, styles.nav_link)} href="/recipes">Recipes</a>
          <SocialLink color="white" name="Twitter" url="https://www.twitter.com/thesonofthomp/">
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </SocialLink>
          <SocialLink color="white" name="GitHub" url="https://www.github.com/thesonofthomp">
            <FontAwesomeIcon icon={faGithub} size="sm" />
          </SocialLink>
          <SocialLink color="white" name="Linkedin" url="https://www.linkedin.com/in/adammthompson/">
            <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
          </SocialLink>
          <SocialLink color="white" name="Codepen" url="https://codepen.io/TheSonOfThomp/">
            <FontAwesomeIcon icon={faCodepen} size="sm" />
          </SocialLink>
          <SocialLink color="white" name="Medium" url="https://medium.com/@TheSonOfThomp">
            <FontAwesomeIcon icon={faMedium} size="sm" />
          </SocialLink>
          <div className={styles.highlight}></div>
        </nav>
      }
    </header>
  )
}

Header.propTypes = {
  showNav: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'black'])
}

Header.defaultProps = {
  showNav: false,
  color: 'white'
}

export default Header