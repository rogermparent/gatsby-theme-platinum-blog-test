import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "gatsby-theme-platinum";
import { SEO, PostHeader } from "gatsby-theme-platinum-blog";

const DefaultPostLayout = ({
  data: {
    mdxBlogPost: { body, frontmatter }
  },
  pageContext
}) => {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PostHeader
        title={frontmatter.title}
        date={frontmatter.date}
        tags={frontmatter.tags}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default DefaultPostLayout;

export const pageQuery = graphql`
  query DefaultPostQuery($id: String!) {
    mdxBlogPost(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`;
