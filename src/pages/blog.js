import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.edges

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Software developer & designer" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Software developer & designer" />
      <Bio data-scroll-section />
      <ol data-scroll-section style={{ listStyle: `none` }}>
        {posts.map(({post}) => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
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