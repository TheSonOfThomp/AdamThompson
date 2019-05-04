import React from "react"
// import { Link } from "gatsby"

import Hero from "../components/hero/hero";
import SEO from "../components/seo";
import '../style/global.sass';


const IndexPage = () => (
  <div>
  <SEO title="Main" keywords={[`adam`, `thompson`, `react`]} />
  <Hero></Hero>
  </div>
)

export default IndexPage
