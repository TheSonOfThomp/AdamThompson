import React, { 
  // useState
} from "react"
import SocialLink from "../social-link/social-link";
import monogram from '../../images/monogram-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen, faMedium } from '@fortawesome/free-brands-svg-icons'

import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="banner" role="banner">
      <div id="banner-logo" role="heading" aria-level="1">
        <img src={monogram} alt="A.T. monogram"></img>
        <h1>Adam Thompson</h1>
      </div>

      <nav id="banner-nav">
        <a className="nav-link hide-mobile" id="nav-portfolio" href="#portfolio">Case studies</a>
        <a className="nav-link hide-mobile" id="nav-about" href="#about">About</a>
        <a className="nav-link hide-mobile" id="nav-projects" href="#projects">Projects</a>
        <a className="nav-link hide-mobile" id="nav-blog" href="#blog">Blog</a>
        <SocialLink name="Twitter" url="https://www.twitter.com/thesonofthomp/">
          <FontAwesomeIcon icon={faTwitter} size="sm" />
        </SocialLink>
        <SocialLink name="GitHub" url="https://www.github.com/thesonofthomp">
          <FontAwesomeIcon icon={faGithub} size="sm" />
        </SocialLink>
        <SocialLink name="Linkedin" url="https://www.linkedin.com/in/adammthompson/">
          <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
        </SocialLink>
        <SocialLink name="Codepen" url="https://codepen.io/TheSonOfThomp/">
          <FontAwesomeIcon icon={faCodepen} size="sm" />
        </SocialLink>
        <SocialLink name="Medium" url="https://medium.com/@TheSonOfThomp">
          <FontAwesomeIcon icon={faMedium} size="sm" />
        </SocialLink>
      </nav>
      
      {/* <a id="nav-hamburger" href="#" onClick={() => { toggleMenu()}} >
        <FontAwesomeIcon icon={ f } size="2xl" />  
      </a> */}
  
    </div>
  )
}