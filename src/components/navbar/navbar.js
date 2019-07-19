import React from "react"
import SocialLink from "../social-link/social-link";
import monogram from '../../images/monogram-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <img id="nav-logo" src={monogram} alt="monogram"></img>
    <span className="nav-link" id="nav-portfolio"><a href="#portfolio">Portfolio</a></span>
    <span className="nav-link" id="nav-about"><a href="#about">About</a></span>
    <div id="nav-social-menu">
      <SocialLink name="instagram" url="https://www.instagram.com/thesonofthomp/">
        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
      </SocialLink>
      <SocialLink name="twitter" url="https://www.twitter.com/thesonofthomp/">
        <FontAwesomeIcon icon={faTwitter} size="2xl"/>
      </SocialLink>
      <SocialLink name="github" url="https://www.github.com/thesonofthomp">
        <FontAwesomeIcon icon={faGithub} size="2xl"/>
      </SocialLink>
      <SocialLink name="linkedin" url="https://www.linkedin.com/in/adammthompson/">
        <FontAwesomeIcon icon={faLinkedinIn} size="2xl"/>
      </SocialLink>
    </div>
  </nav>
)

export default Navbar
