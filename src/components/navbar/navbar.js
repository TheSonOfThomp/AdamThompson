import React from "react"
import SocialLink from "../social-link/social-link";
import monogram from '../../images/monogram-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './navbar.scss';

class Navbar extends React.Component {

constructor(){
  super()
  this.showMenu = false;
}

toggleMenu(){
  this.showMenu = !this.showMenu;
}

menuClass(){
  return this.showMenu ? 'menu-open' : 'menu-closed';
}

  render() {
    return (
      <nav className="navbar">
        <div id="nav-logo">
          <img src={monogram} alt="monogram"></img>
          <h1>Adam Thompson</h1>
        </div>
        <div id="nav-links">
          <span className="nav-link" id="nav-portfolio"><a href="#portfolio">Portfolio</a></span>
          <span className="nav-link" id="nav-about"><a href="#about">About</a></span>
        </div>
        
        <a id="nav-hamburger" href="#" onClick={() => { this.showMenu = !this.showMenu}} >
          <FontAwesomeIcon icon={faBars} size="2xl" />  
        </a>
    
        <div id="nav-social-menu" className={this.menuClass()}>
          <SocialLink name="Instagram" url="https://www.instagram.com/thesonofthomp/">
            <FontAwesomeIcon icon={faInstagram} size="2xl"/>
          </SocialLink>
          <SocialLink name="Twitter" url="https://www.twitter.com/thesonofthomp/">
            <FontAwesomeIcon icon={faTwitter} size="2xl"/>
          </SocialLink>
          <SocialLink name="GitHub" url="https://www.github.com/thesonofthomp">
            <FontAwesomeIcon icon={faGithub} size="2xl"/>
          </SocialLink>
          <SocialLink name="Linkedin" url="https://www.linkedin.com/in/adammthompson/">
            <FontAwesomeIcon icon={faLinkedinIn} size="2xl"/>
          </SocialLink>
          <SocialLink name="Codepen" url="https://codepen.io/TheSonOfThomp/">
            <FontAwesomeIcon icon={faCodepen} size="2xl"/>
          </SocialLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
