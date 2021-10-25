/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Forms+Surfaces",
    titleTemplate: "%s | Virtual Showroom",
    description: "The Forms+Surfaces Virtual Showroom",
    author: "Mike Wieczorkowski",
    image: "/sites/default/files/header-images/OP3C.jpg",
    siteUrl: "https://www.forms-surfaces.com",
    twitterUsername: "@forms_surfaces",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./static/fs-favicon-144.png",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
