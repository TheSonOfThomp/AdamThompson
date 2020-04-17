import React from "react"
import PortfolioTemplate from "./portfolio-page/portfolio-template"

export default ({ children, pageContext }) => {
  switch (pageContext.layout) {
    case "portfolio":
      return <PortfolioTemplate pageContext={pageContext}>{children}</PortfolioTemplate>
    default:
      return <>{children}</>
  }
}