import React from "react";
import { Heading, Container } from "@theme-ui/components";
import { graphql } from "gatsby";
import { Layout } from "gatsby-theme-platinum";
import { SEO, PostList } from "gatsby-theme-platinum-blog";

const TaxonomyPageLayout = ({
  data: {
    taxonomyTerm: { label, slug },
    allTaxonomyValueTerm: { nodes }
  },
  pageContext
}) => {
  return (
    <Layout>
      <SEO title={label} />
      <Container>
        <Heading
          as="h1"
          sx={{
            textAlign: "center",
            fontSize: [5, 6, 7],
            my: [3, 4]
          }}
        >
          Posts tagged "{label}"
        </Heading>
        <PostList posts={nodes.map(x => x.parent)} />
      </Container>
    </Layout>
  );
};

export default TaxonomyPageLayout;

export const pageQuery = graphql`
  query TaxonomyTermQuery($id: String!) {
    taxonomyTerm(id: { eq: $id }) {
      label
      slug
    }
    allTaxonomyValueTerm(filter: { term: { id: { eq: $id } } }) {
      nodes {
        parent {
          ...BlogPostListing
        }
      }
    }
  }
`;
