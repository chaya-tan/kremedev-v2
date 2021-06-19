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
            country's capital in 2013 to upgrade education profile.
          </p>
          <figure className="kg-card kg-image-card">
            <img src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80" />
            <figcaption>
              wow, cool, but I'm not the man in the image, thank you Unsplash
              for the image
            </figcaption>
          </figure>
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
          <figure className="kg-card kg-image-card">
            <img src="/about/2015-startup-idol.jpeg" />
            <figcaption>Me, as a designer in the startup idol event</figcaption>
          </figure>
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
            In 2016, Before being a senior student, I have to do some
            internship, I know that I don't want to work in factories so I use
            my UI design skill to work as a front-end developer in{" "}
            <a href="https://www.thomsonreuters.com/en.html">Thomson Reuters</a>
            . I got this opportunity from my second great boss,{" "}
            <a href="https://www.facebook.com/pasak">Mr.Pasak Senawongse</a>.
            That's where my software development journey begin.
          </p>
          <figure className="kg-card kg-image-card">
            <img src="/about/2016-thomson-rueters.jpeg" />
            <figcaption>Me, Mr.Pasak and the team</figcaption>
          </figure>
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
