import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './navigation.module.css'

export default () => {
  const image = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "trex.png" }) {
        childImageSharp {
          gatsbyImageData(height: 100, placeholder: TRACED_SVG, layout: FIXED)
        }
      }
    }
  `)
  return (
    <nav role="navigation" className={styles.wrap}>
      <Link to={'/'} className={styles.logo}>
        <GatsbyImage image={image.file.childImageSharp.gatsbyImageData} />
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
  )
}
