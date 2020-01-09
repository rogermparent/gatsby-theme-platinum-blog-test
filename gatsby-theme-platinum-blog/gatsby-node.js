exports.createPages = ({actions: {createPage}}, {
  postIndexPath = "/posts"
}) => {
  if(postIndexPath) {
    createPage({
      path: postIndexPath,
      component: require.resolve("./src/blog-index-template.js")
    })
  }
}
