import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PostList } from "gatsby-theme-platinum-blog";

const LatestPosts = () => {
  const {
    allMdxBlogPost: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdxBlogPost(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          ...BlogPostListing
        }
      }
    }
  `);

  return <PostList posts={nodes} />;
};

export default LatestPosts;
