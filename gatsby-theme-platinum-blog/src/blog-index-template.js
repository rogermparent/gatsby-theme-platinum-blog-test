/** @jsx jsx */
import {jsx} from "theme-ui"
import {Fragment} from "react"
import { Layout } from "gatsby-theme-platinum"
import {graphql, Link} from "gatsby"
import {Heading, Box, Text, Container} from "@theme-ui/components"
import PostList from "./components/post-list"

const PostIndexPage = ({
  data: {
    allMdxBlogPost: {
      nodes
    }
  }
}) => {
  return(
    <Layout>
      <Heading as="h1" sx={{
        textAlign: "center",
        fontSize: [7,8],
        my: [3,4]
      }}>Posts</Heading>

      <PostList posts={nodes} />
    </Layout>
  )
}

export default PostIndexPage

export const query = graphql`
  query PostIndexQuery {
    allMdxBlogPost(sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        pagePath
        frontmatter {
          title
          tags
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
