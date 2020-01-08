import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "gatsby-theme-platinum";

export default ({
  data: {
    contentPage: { body }
  },
  pageContext
}) => {
  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query DefaultPageQuery($id: String!) {
    contentPage(id: { eq: $id }) {
      ... on IMdxContentPage {
        body
      }
    }
  }
`;
