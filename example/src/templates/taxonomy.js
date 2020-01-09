/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading, Container } from "@theme-ui/components";
import { graphql, Link } from "gatsby";
import { Layout } from "gatsby-theme-platinum";
import { SEO } from "gatsby-theme-platinum-blog";

const TaxonomyPageLayout = ({
  data: {
    taxonomy: {
      termPagePath,
      label,
      terms: { totalCount, edges }
    }
  },
  pageContext
}) => {
  return (
    <Layout>
      <SEO title="Tags" />
      <Container>
        <Heading
          sx={{
            textAlign: "center",
            fontSize: [6, 7],
            my: [3, 4]
          }}
        >
          Tags
        </Heading>
        <ul
          sx={{
            variant: "styles.unstyledList",
            maxWidth: "maxContentWidth",
            fontSize: [4, 5],
            li: {
              display: "block",
              my: [2, 3]
            },
            a: {
              display: "block",
              variant: "text.inherit",
              ":hover": {
                textDecoration: "underline"
              },
              minHeight: "linkMinimum",
              p: 2
            }
          }}
        >
          {edges.map(({ count, term: { label, slug } }, i) => (
            <li key={i}>
              <Link to={`${termPagePath}/${slug}`}>
                <span sx={{ fontWeight: "semibold" }}>{label}</span>{" "}
                <span sx={{ color: "gray.6" }}>({count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default TaxonomyPageLayout;

export const query = graphql`
  query TaxonomyPageQuery($id: String!) {
    taxonomy(id: { eq: $id }) {
      termPagePath
      label
      terms {
        totalCount
        edges {
          count
          term {
            label
            slug
          }
        }
      }
    }
  }
`;
