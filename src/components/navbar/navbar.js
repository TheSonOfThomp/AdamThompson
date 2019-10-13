import React from "react"
import SocialLink from "../social-link/social-link";
import monogram from '../../images/monogram-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

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
      <banner className="banner">
        <div id="banner-logo" role="heading">
          <img src={monogram} alt="A.T. monogram"></img>
          <h1>Adam Thompson</h1>
        </div>

        <nav id="banner-nav">
          <a className="nav-link hide-mobile" id="nav-portfolio" href="#portfolio">Portfolio</a>
          <a className="nav-link hide-mobile" id="nav-about" href="#about">About</a>
          <SocialLink name="Twitter" url="https://www.twitter.com/thesonofthomp/">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </SocialLink>
          <SocialLink name="GitHub" url="https://www.github.com/thesonofthomp">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </SocialLink>
          <SocialLink name="Linkedin" url="https://www.linkedin.com/in/adammthompson/">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </SocialLink>
          <SocialLink name="Codepen" url="https://codepen.io/TheSonOfThomp/">
            <FontAwesomeIcon icon={faCodepen} size="xl" />
          </SocialLink>
        </nav>
        
        {/* <a id="nav-hamburger" href="#" onClick={() => { this.showMenu = !this.showMenu}} >
          <FontAwesomeIcon icon={faBars} size="2xl" />  
        </a> */}
    
      </banner>
    )
  }
}

export default Navbar
