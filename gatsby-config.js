/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

 const cssnano = require('cssnano')
 const mqpacker = require('css-mqpacker')
 const autoprefixer = require('autoprefixer')
 const combineSelectors = require('postcss-combine-duplicated-selectors')

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://wp.mystroken.com/graphql`,
          // `https://wpgatsbydemo.wpengine.com/graphql`,
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mystro Ken personal website`,
        short_name: `Mystro Ken`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        // icon: `content/assets/gatsby-icon.png`,
        icon: `content/assets/mystroken-icon-2.svg`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    {
      /**
       * Compile Sass
       * See https://www.npmjs.com/package/gatsby-plugin-sass/
       */
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          combineSelectors({removeDuplicatedProperties: true}),
          mqpacker(), // A tool for packing same CSS media query rules into one
          autoprefixer(),
          cssnano()
        ],
      }
    },

    // Add Shiki for code highlighting.
    `gatsby-shiki-highlight-wordpress`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    `gatsby-plugin-offline`,

    /**
     * This plugin enables adding components which live
     * above the page components and persist across page changes.
     * See: https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
     */
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
  ],
}
