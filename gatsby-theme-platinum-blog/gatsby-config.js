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
      resolve: "@arrempee/gatsby-plugin-taxonomies",
      options: {
        taxonomies: {
          tags: {
            indexSlug: "tags",
            termSlug: "tag",
            label: "Tags"
          }
        },
        resolvers: {
          MdxBlogPost: ({ node, getNode, key }) => {
            const MdxNode = getNode(node.parent);
            return MdxNode.frontmatter[key];
          }
        }
      }
    },
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
