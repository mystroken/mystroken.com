import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Seo from "../components/seo"
import PostList from "../components/post-list"

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.edges.map(({ post }) => post)

  return (
    <>
      <Seo title="Software developer & designer" />
      <Bio data-scroll-section />
      <PostList data-scroll-section posts={posts} />
    </>
  )
}
export default BlogPage

export const pageQuery = graphql`
   query BlogQuery {
    allWpPost {
      edges {
        post: node {
          title
          excerpt
          slug
          uri
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
