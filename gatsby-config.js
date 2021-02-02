module.exports = {
  siteMetadata: {
    title: `Mighty Dame Fitness`,
    description: `Integrated fitness and nutrition for motivated women.`,
    author: `@angusryer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/layout.js`),
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["poppins", "lemon", "gagalin", "cardo"],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mighty Dame Fitness`,
        short_name: `Mighty Dame`,
        start_url: `/`,
        background_color: `#be2c8f`,
        theme_color: `#91256d`,
        display: `minimal-ui`,
        icon: `src/images/logot.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
