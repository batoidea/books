module.exports = {
  siteMetadata: {
    title: 'Libros de emprendimiento',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src`
    }
  }
  ],
};
