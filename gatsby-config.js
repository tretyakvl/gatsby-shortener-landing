module.exports = {
  siteMetadata: {
    title: 'Frontend Mentor | Shortly URL shortening API Challenge',
    description: 'FrontendMentor.io challenge. URL shortening landing page integrated with rel.ink API.',
    author: '@tretyakvl'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark'
  ]
}
