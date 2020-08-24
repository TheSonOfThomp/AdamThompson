/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, getPostBodyComponents, replacePreBodyComponents }) => {
  const headComponents = getHeadComponents()
  replaceHeadComponents(headComponents.map(comp => {
    if (comp.type === "link" && comp.props.as === "script") {
      comp.props.crossorigin = "anonymous"
      comp.props.rel = "prefetch"
      return comp
    } else return comp
  }))

  const postBodyComponents = getPostBodyComponents()
  replacePreBodyComponents(postBodyComponents.map(comp => {
    if (comp.type === "script") {
      comp.props.async = true
      comp.props.defer = true
      return comp
    } else return comp
  }))

}