module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cache",
    "gatsby-theme-platinum-blog",
    "gatsby-plugin-preload-link-crossorigin",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme: Platinum Blog example`,
        short_name: `Platinum Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `assets/logo.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
