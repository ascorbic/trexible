import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

export const RootIndex = ({ data, location }) => {
  const siteTitle = data?.site?.siteMetadata?.title
  const posts = data?.allContentfulBlogPost?.edges
  const [author] = data?.allContentfulPerson?.edges

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
