/** @jsx jsx */
import { jsx } from "theme-ui";
import { Layout } from "gatsby-theme-platinum";
import { graphql } from "gatsby";
import { Heading } from "@theme-ui/components";
import PostList from "./components/post-list";
import { SEO } from "gatsby-theme-platinum-blog";

const PostIndexPage = ({
  data: {
    allMdxBlogPost: { nodes }
  }
}) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Heading
        as="h1"
        sx={{
          textAlign: "center",
          fontSize: [7, 8],
          my: [3, 4]
        }}
      >
        Posts
      </Heading>
      <PostList posts={nodes} />
    </Layout>
  );
};

export default PostIndexPage;

export const query = graphql`
  query PostIndexQuery {
    allMdxBlogPost(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        ...BlogPostListing
      }
    }
  }
`;
