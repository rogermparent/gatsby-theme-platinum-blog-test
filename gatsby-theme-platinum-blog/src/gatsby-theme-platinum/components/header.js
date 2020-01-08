/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box } from "@theme-ui/components";
import { Link, useStaticQuery, graphql } from "gatsby";

const useHeaderMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          headerNav {
            label
            url
          }
        }
      }
    }
  `);

  return {
    title: data.site.siteMetadata.title,
    nav: data.site.siteMetadata.headerNav
  };
};

const Header = () => {
  const { title, nav } = useHeaderMetadata();

  return (
    <Box as="header" variant="layout.headerWrapper">
      <Container variant="layout.header">
        <Link
          to="/"
          sx={{
            variant: "styles.Logo"
          }}
        >
          {title}
        </Link>
        <Flex as="nav">
          {nav.map(({ label, url }) => (
            <Link to={url} sx={{ variant: "styles.NavLink" }}>
              {label}
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
