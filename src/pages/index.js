import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Posts"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {/* <Bio /> */}
      <div className="hero">
        <div className="email">HELLO@KREME.DEV</div>
        <img src="/hero/hero-mobile.svg" className="hero-mobile" />
        <img src="/hero/hero-desktop.svg" className="hero-desktop" />
        <p>{data.site.siteMetadata.description}</p>
        <div className="social">
          <a
            href="https://twitter.com/kreme_q"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/twitter.svg" />
          </a>
          <a
            href="https://github.com/chaya-tan"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/chayatan/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/linkedin.svg" />
          </a>
        </div>
      </div>

      {/* {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )} */}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
