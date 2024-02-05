import Document, { Html, Head, Main, NextScript } from "next/document"
import path from "path"
import { readFileSync } from "fs"
import React, { useCallback, useContext, useEffect } from "react"
import {
  DarkModeContext,
  DarkModeProvider,
  useDarkMode,
} from "../components/DarkModeContext/DarkModeContext"

const fontPaths = [
  "https://use.typekit.net/af/f3ba4f/00000000000000003b9b12fa/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3",
  "https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3",
  "https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3",
  "https://use.typekit.net/af/e32ad9/00000000000000003b9b12fb/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3",
]

const meta = {
  title: `Adam Thompson`,
  description: `NYC based UX Engineer`,
  author: `@thesonofthomp`,
  siteUrl: "http://www.thesonofthomp.com",
  keywords: [
    `adam`,
    `thompson`,
    `ux`,
    `designer`,
    `developer`,
    `engineer`,
    `waterloo`,
  ],
}

// Custom head
export class EmbeddedStylesHead extends Head {
  // Overwrite the default method
  getCssLinks(files) {
    return this.__getEmbeddedStyles(files.allFiles)
  }

  __getEmbeddedStyles(files) {
    if (!files || files.length === 0) return

    // Filter for local CSS files and map them to style tags
    return files.filter((file) => /\.css$/.test(file)).map(mapFileToStyle)

    // Return the contents onf a file
    function getFileContents(file) {
      const contents = readFileSync(
        path.resolve(process.cwd(), ".next", file),
        "utf8"
      )
      return contents
    }

    // Maps a file to a <style> tag
    function mapFileToStyle(file) {
      return (
        <style
          key={file}
          data-href={`/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: getFileContents(file),
          }}
        />
      )
    }
  }
}

// Custom Document
export const MyDocument = () => {
  return (
    <Html lang="en">
      <EmbeddedStylesHead>
        <meta name="Description" content="NYC based UX engineer" />

        {/* Preload the fonts */}
        {/* <link rel="preconnect" href="https://use.typekit.net" /> */}
        <link rel="preconnect" href="https://p.typekit.net" />
        {/* <link rel="preload" as="stylesheet" href="https://use.typekit.net/onu2sfw.css" /> */}
        {/* <link rel="stylesheet" href="https://use.typekit.net/onu2sfw.css" /> */}
        <link
          rel="preload"
          as="stylesheet"
          href="https://p.typekit.net/p.css?s=1&k=onu2sfw&ht=tk&f=15528.15529.15530.17252&a=8773469&app=typekit&e=css"
        />
        {fontPaths.map((href) => (
          <link
            key={href}
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href={href}
          />
        ))}

        {/* Add meta tags */}

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={meta.author} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta property= "og:image" content={monogram} />
          <meta property= "og:image:width" content={192} />
          <meta property= "og:image:height" content={192} /> */}
        <meta name="keywords" content={meta.keywords.join(", ")} />

        {/* Add the favicon */}
        <link rel="icon" href="/favicon.png" />
      </EmbeddedStylesHead>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument
