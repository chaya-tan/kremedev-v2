import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            A part-time full-stack web developer, a full-time online & offline
            business owner and a forever CAT lover
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3>TL; DR</h3>
          skip to
          <ol>
            <li>My Story</li>
            <li>Technical Skills</li>
          </ol>
          <h3>My story</h3>
          <p>
            I'm an <i>ex-motorpunk</i> from country side that came to my
            country's capital 10 years ago to upgrade education profile.
          </p>
          <p>
            I got more than education profile from here. I just dicovered that I
            know nothing compared to most friend here. I chase all
            business-related experience I can do. I sold LINE stickers, be an
            illustrator freelance, VDO editor. Went to all business free-seminar
            I heard of.
          </p>
          <p>
            The most valuable thing from tons of seminar is not only the
            content, I got new community that have common interests with me
            (They go to all events as I do)
          </p>
          <p>
            From the new community, I got opportinity to have startup marketing
            experience from
            <a href="https://www.clearnotebooks.com/"> Clear</a>, a Japanese
            startup and start from 0 users in Thailand. Thanks to{" "}
            <a href="https://www.facebook.com/goichiro.arai">Goishiro Arai</a>,
            my first boss that gave the opportinity for me. I work with my team,
            especially{" "}
            <a href="https://www.facebook.com/yuhei.saito.5">Yuhei Saito</a>,
            grow users from 0 to over 100,000 users in 6 months
          </p>
          <p>
            4 years later, I graduated from{" "}
            <a href="https://www.chula.ac.th/en/">Chulalongkorn University</a>{" "}
            in Industrial engineering department
          </p>
          <hr />
          <h3>Technical Skills</h3>
          <h4>Languages</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>
              <a href="https://www.typescriptlang.org/">Typescript</a>
            </li>
            <li>
              <a href="https://www.scala-lang.org/">Scala</a>
            </li>
          </ul>
          <h4>Frameworks/Libraries</h4>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Next.js</li>
            <li>Nuxt.js</li>
            <li>
              <a href="https://www.gatsbyjs.com/">Gatsby.js</a> (this site!)
            </li>
          </ul>
          <h4>Tools</h4>
          <ul>
            <li>
              <a href="https://www.prisma.io/">Prisma.io</a>
            </li>
            <li>
              <a href="https://vercel.com/">Vercel</a>
            </li>
            <li>
              <a href="https://www.netlify.com/">Netlify</a>
            </li>
            <li>
              <a href="https://developers.line.biz/en/services/messaging-api/">
                LINE LIFF/API
              </a>
            </li>
            <li>Github</li>
          </ul>
          <hr />
          <h3>Another Skill</h3>
          <h4>Art</h4>
          <ul>
            <li>Figma</li>
            <li>Adobe illustrator</li>
            <li>Adobe photoshop</li>
          </ul>
          <hr />
          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
