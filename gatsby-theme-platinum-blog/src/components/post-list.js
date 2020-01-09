/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Heading, Box, Text } from "@theme-ui/components";

const useTagsMetadata = () =>
  useStaticQuery(graphql`
    {
      taxonomy(key: { eq: "tags" }) {
        termPagePath
      }
    }
  `).taxonomy;

const PostList = ({ posts, className, sx, itemSx }) => {
  const { termPagePath } = useTagsMetadata();
  return (
    <ul
      sx={{
        variant: "styles.unstyledList",
        maxWidth: "maxContentWidth",
        width: "100%",
        mx: "auto",
        fontSize: [2, 3],
        px: 3,
        ...sx
      }}
      className={className}
    >
      {posts.map(
        (
          {
            pagePath,
            frontmatter: { title, date },
            childTaxonomyValueTerms: {
              termsByTaxonomy: { tags }
            }
          },
          i
        ) => (
          <li key={i}>
            <PostListing
              pagePath={pagePath}
              title={title}
              date={date}
              tags={tags}
              sx={itemSx}
              termPagePath={termPagePath}
            />
          </li>
        )
      )}
    </ul>
  );
};

const PostListing = ({
  pagePath,
  title,
  date,
  tags,
  className,
  sx,
  termPagePath
}) => (
  <Box
    sx={{
      my: [3, 4],
      a: {
        color: "inherit",
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline"
        }
      },
      ...sx
    }}
    className={className}
  >
    <Link to={pagePath}>
      <Heading>{title}</Heading>
    </Link>
    <Text sx={{ color: "gray.7" }}>
      {date}
      {tags && tags.length > 0 && (
        <Fragment>
          {" - "}
          {tags.map(({ label, slug }, i) => (
            <Fragment key={i}>
              {i > 0 && ", "}
              <Link to={`${termPagePath}/${slug}`}>{label}</Link>
            </Fragment>
          ))}
        </Fragment>
      )}
    </Text>
  </Box>
);

export const fragment = graphql`
  fragment BlogPostListing on MdxBlogPost {
    pagePath
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
    }
    childTaxonomyValueTerms {
      termsByTaxonomy {
        tags {
          label
          slug
        }
      }
    }
  }
`;

export default PostList;
