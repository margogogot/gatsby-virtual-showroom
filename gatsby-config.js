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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/fs-favicon-144.png",

        // WebApp Manifest Configuration
        appName: 'Forms+Surfaces Virtual Showroom', // Inferred with your package.json
        appDescription: 'Forms+Surfaces Virtual Showroom',
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
