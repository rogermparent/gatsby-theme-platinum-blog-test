import React from "react";
import { Box, Container } from "@theme-ui/components";
import { useStaticQuery, graphql } from "gatsby";

const useFooterMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footerCopy
        }
      }
    }
  `);

  return {
    copy: data.site.siteMetadata.footerCopy
  };
};

const Footer = () => {
  const { copy } = useFooterMetadata();
  return (
    <Box variant="layout.footerWrapper">
      <Container variant="layout.footer">{copy}</Container>
    </Box>
  );
};

export default Footer;
