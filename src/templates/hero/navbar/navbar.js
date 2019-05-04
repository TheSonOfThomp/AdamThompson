import React from "react"
import { Link } from "gatsby"
import SocialLink from "components/social-link/social-link";
import monogram from 'images/monogram-white.svg';
import './navbar.scss';



const Navbar = () => (
  <nav className="navbar">
    <Link to="/"><img src={monogram}></img></Link>
      <span className="nav-link" id="nav-portfolio"><Link to="/portfolio">Portfolio</Link></span>
      <span className="nav-link" id="nav-about"><Link to="/about">About</Link></span>
      <div className="navbar-social-menu">
        <SocialLink name="instagram" url="https://www.instagram.com/thesonofthomp/"></SocialLink>
        <SocialLink name="twitter" url="https://www.twitter.com/thesonofthomp/"></SocialLink>
        <SocialLink name="github" url="https://www.github.com/thesonofthomp"></SocialLink>
        <SocialLink name="linkedin" url="https://www.linkedin.com/in/adammthompson/"></SocialLink>
        {/* <SocialLink name="email" url="https://www.instagram.com/thesonofthomp/"></SocialLink> */}
      </div>
  </nav>
)

export default Navbar
