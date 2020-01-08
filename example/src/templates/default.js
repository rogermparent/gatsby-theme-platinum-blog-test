import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "gatsby-theme-platinum";
import { SEO } from "gatsby-theme-platinum-blog";

const DefaultPageLayout = ({
  data: {
    contentPage: { body, frontmatter }
  },
  pageContext
}) => {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default DefaultPageLayout;

export const pageQuery = graphql`
  query DefaultPageQuery($id: String!) {
    contentPage(id: { eq: $id }) {
      ... on IMdxContentPage {
        body
        frontmatter {
          title
        }
      }
    }
  }
`;
