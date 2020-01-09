import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "gatsby-theme-platinum";
import { SEO } from "gatsby-theme-platinum-blog";
import { Heading, Container } from "@theme-ui/components";
import { PostList } from "gatsby-theme-platinum-blog";

const HomePageLayout = ({
  data: {
    contentPage: { body, frontmatter },
    latestPosts: { nodes }
  },
  pageContext
}) => {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <MDXRenderer>{body}</MDXRenderer>
      <Container sx={{ my: 4 }}>
        <Heading as="h2" sx={{ fontSize: [4, 5] }}>
          Latest Posts
        </Heading>
        <PostList
          posts={nodes}
          sx={{
            fontSize: [1, 2],
            flex: "0 0 320px"
          }}
        />
      </Container>
    </Layout>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    contentPage(id: { eq: $id }) {
      ... on IMdxContentPage {
        body
        frontmatter {
          title
        }
      }
    }
    latestPosts: allMdxBlogPost(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        ...BlogPostListing
      }
    }
  }
`;
