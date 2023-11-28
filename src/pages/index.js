import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const RootIndex = ({ data, location }) => {
  const siteTitle = data?.site?.siteMetadata?.title
  const posts = data?.allContentfulBlogPost?.edges
  const author = data?.contentfulPerson

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author} />
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 350
              height: 196
              resizingBehavior: FILL
            )
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
      name
      shortBio {
        shortBio
      }
      title
      heroImage: image {
        gatsbyImageData(layout: CONSTRAINED, width: 1180)
      }
    }
  }
`
