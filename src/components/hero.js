import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <GatsbyImage
      image={data.heroImage.gatsbyImageData}
      className={styles.heroImage}
      alt={data.name}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p className={styles.heroBio}>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
