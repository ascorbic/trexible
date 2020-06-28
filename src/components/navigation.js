import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styles from './navigation.module.css'

export default () => {
  const image = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "trex.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <nav role="navigation" className={styles.wrap}>
      <Link to={'/'} className={styles.logo}>
        <Img fixed={image.file.childImageSharp.fixed} />
      </Link>
      <h1 className={styles.title}>
        <Link to="/">TRexible</Link>
      </h1>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        {/* <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li> */}
      </ul>
    </nav>
  )}
