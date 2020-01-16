import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.wrap}>
    <h1 className={styles.title}><Link to="/">TRexible</Link></h1>
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
