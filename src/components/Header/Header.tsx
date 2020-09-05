import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen, faMedium } from '@fortawesome/free-brands-svg-icons'
import SocialLink from "./social-link/social-link";
import MonogramBlack from '../../images/monogram-black.svg'; // React component using gatsby-plugin-react-svg
import MonogramWhite from '../../images/monogram-white.svg'; // React component using gatsby-plugin-react-svg
import './Header.styles.scss';

type HeaderProps = {
  showNav?: boolean,
  color?: 'white' | 'black'
}

const defaultProps:HeaderProps = {
  showNav: false,
  color: 'white'
}

const Header = (props : HeaderProps) => {
  const { color, showNav } = {...defaultProps, ...props}
  const Monogram = color === 'white' ? MonogramWhite : MonogramBlack

  const navRef = useRef<HTMLElement>(null)
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
    <header className={`page-header color-${color}`}>
      <a className="page-link" href="/">
        <Monogram className="page-logo" />
        <h1 className="page-title">Adam Thompson</h1>
      </a>
      {
        showNav &&
        <nav ref={navRef} className="page-nav">
          <a className="header-link nav-link" href="#projects">Projects</a>
          <a className="header-link nav-link" href="/recipes">Recipes</a>
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
          <div className="highlight"></div>
        </nav>
      }
    </header>
  )
}

export default Header