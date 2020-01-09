/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { Heading, Box, Text } from "@theme-ui/components";

const PostList = ({ posts }) => (
  <ul
    sx={{
      variant: "styles.unstyledList",
      maxWidth: "maxContentWidth",
      width: "100%",
      mx: "auto"
    }}
  >
    {posts.map(({ pagePath, frontmatter: { title, date, tags } }, i) => (
      <li key={i}>
        <PostListing
          pagePath={pagePath}
          title={title}
          date={date}
          tags={tags}
        />
      </li>
    ))}
  </ul>
);

const PostListing = ({ pagePath, title, date, tags }) => (
  <Box
    sx={{
      my: [3, 4],
      mx: 3,
      fontSize: [2, 3],
      a: {
        color: "inherit",
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }}
  >
    <Link to={pagePath}>
      <Heading>{title}</Heading>
    </Link>
    <Text sx={{ color: "gray.6" }}>
      {date}
      {tags && tags.length > 0 && (
        <Fragment>
          {" - "}
          {tags.map((tag, i) => (
            <Fragment key={i}>
              {i > 0 && ", "}
              <span>{tag}</span>
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
      tags
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default PostList;
