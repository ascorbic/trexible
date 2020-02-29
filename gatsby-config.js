require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'TRexible',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                exclude: ['Twitter', 'Flickr', 'Instagram', 'Reddit'],
              },
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
