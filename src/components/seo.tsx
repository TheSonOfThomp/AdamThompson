/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const fontPaths = [
  "https://use.typekit.net/af/f3ba4f/00000000000000003b9b12fa/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3",
  "https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3",
  "https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3",
  "https://use.typekit.net/af/e32ad9/00000000000000003b9b12fb/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3"
]

type SEOPropType = {
  description?: string,
  lang?: string,
  meta?: any,
  keywords?: string,
  title?: string
}
function SEO({ description, lang, meta, keywords, title }: SEOPropType) {
  const { site, image } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        image: file(relativePath: { eq: "monogram.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageWidth = image.childImageSharp.fluid.width
  const imageHeight = image.childImageSharp.fluid.height
  const imageUrl =`${site.siteMetadata.siteUrl}${image.childImageSharp.fluid.src}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          property: "og:image:width",
          content: imageWidth,
        },
        {
          property: "og:image:height",
          content: imageHeight,
        }
      ]
        .concat(
          site.siteMetadata.keywords.length > 0
            ? {
              name: `keywords`,
              content: site.siteMetadata.keywords.join(`, `),
              }
            : []
        )
        .concat(meta)
      }
      link={[
        {
          rel: "preconnect",
          href: "https://use.typekit.net"
        },
        {
          rel: "preconnect",
          href: "https://p.typekit.net"
        },
        {
          rel: "preload",
          as: "stylesheet",
          href: "https://use.typekit.net/onu2sfw.css"
        },
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/onu2sfw.css"
        },
        {
          rel: "preload",
          as: "stylesheet",
          href: "https://p.typekit.net/p.css?s=1&k=onu2sfw&ht=tk&f=15528.15529.15530.17252&a=8773469&app=typekit&e=css"
        },
        {
          rel: "stylesheet",
          href: "https://p.typekit.net/p.css?s=1&k=onu2sfw&ht=tk&f=15528.15529.15530.17252&a=8773469&app=typekit&e=css"
        },
        ...fontPaths.map(href => {
          return {
            rel: "preload",
            as: "font",
            type: "font/woff2",
            crossOrigin: "anonymous",
            href
          }
        }),
        ...fontPaths.map(href => {
          return {
            as: "font",
            type: "font/woff2",
            crossOrigin: "anonymous",
            href
          }
        }),
        ...fontPaths.map(href => {
          return {
            as: "font",
            type: "font/opentype",
            crossOrigin: "anonymous",
            href
          }
        })
      ]}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
