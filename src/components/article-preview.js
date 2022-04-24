import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article }) => {
  return (
    <div className={styles.preview}>
      <Link to={`/blog/${article.slug}`}>
        <GatsbyImage image={article.heroImage.gatsbyImageData} alt="" />
      </Link>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.tags &&
        article.tags.map((tag) => (
          <p className={styles.tag} key={tag}>
            {tag}
          </p>
        ))}
    </div>
  )
}
