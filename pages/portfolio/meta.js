const nv = require('../../pages/portfolio/newvisions.mdx').meta
const chameleon = require('../../pages/portfolio/chameleon.mdx').meta
const noom = require('../../pages/portfolio/noom.mdx').meta

export const pages = [nv, chameleon, noom]

import PortfolioCard from '../../main-sections/portfolio/portfolio-card/portfolio-card'

const PortfolioMeta = () => {
  return (
    <div>
      {
        pages.map(page => {
          return (
            <PortfolioCard
              title={page.title}
              tagline={page.tagline}
              color={page.color}
              imgSrc={'/images/portfolio/cover/' + page.cover}
            />
          )
        })
      }
    </div>
  )
}

export default PortfolioMeta
