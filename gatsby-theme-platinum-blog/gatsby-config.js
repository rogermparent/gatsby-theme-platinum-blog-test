module.exports = {
  siteMetadata: {
    title: "My Platinum Blog",
    description: "A blog built with a Gatsby theme based on Platinum",
    author: "RMP",
    footerCopy: "© 2020 RMP",
    headerNav: [
      {
        label: "Posts",
        url: "/posts"
      },
      {
        label: "Tags",
        url: "/tags"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-theme-platinum",
      options: {
        transformerMdxContentPagesOptions: [
          {
            typeName: "MdxPage",
            relativeDirectory: ""
          },
          {
            typeName: "MdxBlogPost",
            relativeDirectory: "posts",
            defaultTemplate: "post"
          }
        ]
      }
    }
  ]
};
